/**
 * SemanticAnalyzer for Requirement Specification DSL
 *
 * Purpose:
 * - Detect requirement defects early (ambiguity, inconsistency, incompleteness)
 *
 * Academic basis:
 * - Sommerville (2016): Software Engineering
 * - ISO/IEC/IEEE 29148:2018
 * - Fowler (2011): Domain-Specific Languages
 */

import { CommonTokenStream } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree';

export type Severity = 'error' | 'warning' | 'info';

export interface Diagnostic {
  severity: Severity;
  code: string;
  message: string;
  location?: {
    line: number;
    column: number;
    system?: string;
    feature?: string;
    rule?: string;
  };
  recommendation?: string;
}

interface SymbolTable {
  inputs: Set<string>;     // read-only
  outputs: Set<string>;    // writable
  rules: Set<string>;
  used: Set<string>;
}

/**
 * NOTE:
 * Analyzer intentionally avoids type inference or execution semantics.
 * This DSL validates requirement quality, not behavior.
 */
export class SemanticAnalyzer {

  private diagnostics: Diagnostic[] = [];
  private tables = new Map<string, SymbolTable>();

  private currentSystem?: string;
  private currentFeature?: string;

  private readonly keywords = new Set([
    'system','feature','input','output','rule',
    'if','then','do','and','or','not','true','false'
  ]);

  constructor(private tokens: CommonTokenStream) {}

  // =============================
  // ENTRY POINT
  // =============================

  analyze(ast: any): Diagnostic[] {
    this.reset();

    const systems = this.find(ast, 'systemDecl');
    systems.forEach(s => this.visitSystem(s));

    this.checkUnusedInputs();
    return this.diagnostics;
  }

  private reset() {
    this.diagnostics = [];
    this.tables.clear();
    this.currentSystem = undefined;
    this.currentFeature = undefined;
  }

  // =============================
  // SYSTEM / FEATURE
  // =============================

  private visitSystem(ctx: any) {
    this.currentSystem = this.extractId(ctx) ?? '<system>';

    this.find(ctx, 'featureDecl')
      .forEach(f => this.visitFeature(f));

    this.currentSystem = undefined;
  }

  private visitFeature(ctx: any) {
    const feature = this.extractId(ctx) ?? '<feature>';
    this.currentFeature = feature;

    const key = `${this.currentSystem}::${feature}`;
    const table: SymbolTable = {
      inputs: new Set(),
      outputs: new Set(),
      rules: new Set(),
      used: new Set()
    };
    this.tables.set(key, table);

    this.collectIO(ctx, table);
    this.find(ctx, 'ruleDecl').forEach(r => this.visitRule(r, table));

    this.currentFeature = undefined;
  }

  // =============================
  // INPUT / OUTPUT
  // =============================

  /**
   * Academic justification:
   * - Duplicate declaration causes ambiguity (ISO 29148)
   */
  private collectIO(ctx: any, table: SymbolTable) {
    this.collectDecl(ctx, 'inputDecl', table.inputs, 'DUPLICATE_INPUT');
    this.collectDecl(ctx, 'outputDecl', table.outputs, 'DUPLICATE_OUTPUT');
  }

  private collectDecl(ctx: any, rule: string, target: Set<string>, code: string) {
    this.find(ctx, rule).forEach(d => {
      this.ids(d).forEach(id => {
        if (target.has(id)) {
          this.report('error', code,
            `'${id}' declared multiple times`,
            d,
            `Remove duplicate declaration of '${id}'`
          );
        }
        target.add(id);
      });
    });
  }

  // =============================
  // RULE
  // =============================

  /**
   * Rules define system behavior declaratively.
   * Names must be unique for traceability.
   */
  private visitRule(ctx: any, table: SymbolTable) {
    const name = this.extractId(ctx) ?? '<rule>';

    if (table.rules.has(name)) {
      this.report('warning','DUPLICATE_RULE_NAME',
        `Rule '${name}' duplicated`,
        ctx,
        'Ensure rule names are unique'
      );
    }
    table.rules.add(name);

    // Condition
    this.find(ctx,'condition')
      .forEach(c => this.checkUsage(c, table));

    // Effect
    this.find(ctx,'assignmentEffect')
      .forEach(e => this.checkAssignment(e, table, name));
  }

  // =============================
  // SEMANTIC CHECKS
  // =============================

  /**
   * Undefined variable → incomplete requirement
   */
  private checkUsage(ctx: any, table: SymbolTable) {
    this.ids(ctx).forEach(id => {
      if (!table.inputs.has(id) && !table.outputs.has(id)) {
        this.report('error','UNDEFINED_VARIABLE',
          `Variable '${id}' not declared`,
          ctx,
          `Declare '${id}' as input or output`
        );
      } else {
        table.used.add(id);
      }
    });
  }

  /**
   * Assigning to input violates requirement responsibility
   */
  private checkAssignment(ctx: any, table: SymbolTable, rule: string) {
    const left = this.find(ctx,'path')[0];
    if (!left) return;

    const id = this.ids(left)[0];
    if (!id) return;

    if (table.inputs.has(id) && !table.outputs.has(id)) {
      this.report('error','ASSIGN_TO_READONLY',
        `Input '${id}' assigned in rule '${rule}'`,
        left,
        `Move '${id}' to output`
      );
    }
  }

  // =============================
  // UNUSED INPUT
  // =============================

  /**
   * Over-specification → informational warning
   */
  private checkUnusedInputs() {
    this.tables.forEach((t, key) => {
      const [sys, feat] = key.split('::');
      this.currentSystem = sys;
      this.currentFeature = feat;

      t.inputs.forEach(i => {
        if (!t.used.has(i)) {
          this.report('info','UNUSED_INPUT',
            `Input '${i}' never used`,
            undefined,
            `Consider removing '${i}'`
          );
        }
      });
    });
  }

  // =============================
  // UTILITIES
  // =============================

  private extractId(ctx: any): string | undefined {
    return this.ids(ctx)[0];
  }

  private ids(ctx: any): string[] {
    const out = new Set<string>();
    this.terminals(ctx).forEach(t => {
      const s = t.symbol.text;
      if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(s) && !this.keywords.has(s)) {
        out.add(s);
      }
    });
    return [...out];
  }

  private terminals(ctx: any): TerminalNode[] {
    const out: TerminalNode[] = [];
    (function walk(n: any) {
      if (!n) return;
      if (n.symbol) out.push(n);
      if (n.children) n.children.forEach(walk);
    })(ctx);
    return out;
  }

  private find(ctx: any, name: string): any[] {
    const out: any[] = [];
    for (const k in ctx) {
      const v = ctx[k];
      if (!v) continue;
      if (Array.isArray(v)) v.forEach(x => this.match(x,name,out));
      else this.match(v,name,out);
    }
    return out;
  }

  private match(node: any, name: string, out: any[]) {
    if (node?.constructor?.name?.toLowerCase().includes(name.toLowerCase())) {
      out.push(node);
    }
  }

  private report(
    severity: Severity,
    code: string,
    message: string,
    ctx?: any,
    recommendation?: string
  ) {
    const loc = ctx ? this.terminals(ctx)[0]?.symbol : undefined;
    this.diagnostics.push({
      severity,
      code,
      message,
      location: loc ? {
        line: loc.line,
        column: loc.charPositionInLine,
        system: this.currentSystem,
        feature: this.currentFeature
      } : undefined,
      recommendation
    });
  }
}
