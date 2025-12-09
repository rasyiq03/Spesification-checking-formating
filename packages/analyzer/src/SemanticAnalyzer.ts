// packages/analyzer/src/SemanticAnalyzer.ts
// Final SemanticAnalyzer (production-ready)
// - Preserves duplicate occurrences when collecting id lists (important!)
// - Reports DUPLICATE_INPUT / DUPLICATE_OUTPUT / DUPLICATE_RULE_NAME / UNDEFINED_VARIABLE / ASSIGN_TO_READONLY / UNUSED_INPUT
// - Robust AST introspection (doesn't rely on generated type names)

import { CommonTokenStream } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree';

export type Severity = 'error' | 'warning' | 'info';

export type Diagnostic = {
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
  meta?: Record<string, any>;
};

type SymbolTable = {
  inputs: Set<string>;
  outputs: Set<string>;
  locals: Set<string>;
  rules: Set<string>;
  used: Set<string>;
};

export class SemanticAnalyzer {
  tokenStream: CommonTokenStream;
  diagnostics: Diagnostic[] = [];

  currentSystem?: string;
  currentFeature?: string;

  private tables: Map<string, SymbolTable> = new Map();
  private reservedKeywords = new Set([
    'system','feature','input','output','precondition','postcondition',
    'test_obligation','rule','if','then','do','and','or','not','true','false'
  ]);
  private reportedSignatures: Set<string> = new Set();

  constructor(tokenStream: CommonTokenStream) {
    this.tokenStream = tokenStream;
  }

  /**
   * Synchronous analysis entry point.
   * Returns array of Diagnostic.
   */
  analyze(root: any): Diagnostic[] {
    // reset state
    this.diagnostics = [];
    this.currentSystem = undefined;
    this.currentFeature = undefined;
    this.tables.clear();
    this.reportedSignatures.clear();

    const systems = this.getChildrenByRuleName(root, 'systemDecl');
    for (const sys of systems) {
      this.processSystemDecl(sys);
    }

    // post-check: unused inputs
    for (const [key, table] of this.tables.entries()) {
      const [sys, feat] = key.split('::');
      this.currentSystem = sys;
      this.currentFeature = feat;
      for (const inp of Array.from(table.inputs)) {
        if (!table.used.has(inp)) {
          this.safeReport({
            severity: 'info',
            code: 'UNUSED_INPUT',
            message: `Input '${inp}' in feature '${this.currentFeature}' appears unused.`,
            location: { line: 0, column: 0, system: this.currentSystem, feature: this.currentFeature },
            recommendation: `Remove or use '${inp}' in rules/conditions.`,
            meta: { variable: inp },
          });
        }
      }
    }

    this.currentSystem = undefined;
    this.currentFeature = undefined;

    return this.diagnostics;
  }

  // -------------------------
  // System / Feature processors
  // -------------------------
  private processSystemDecl(sysCtx: any) {
    const sysName = this.getIdFromContext(sysCtx) || this.getText(sysCtx.name) || '<unknown-system>';
    this.currentSystem = sysName;

    const features = this.getChildrenByRuleName(sysCtx, 'featureDecl');
    for (const f of features) {
      this.processFeatureDecl(f);
    }

    this.currentSystem = undefined;
  }

  private processFeatureDecl(featureCtx: any) {
    const featName = this.getIdFromContext(featureCtx) || this.getText(featureCtx.name) || '<unknown-feature>';
    this.currentFeature = featName;

    const key = `${this.currentSystem ?? '<unknown-system>'}::${featName}`;
    const table: SymbolTable = { inputs: new Set(), outputs: new Set(), locals: new Set(), rules: new Set(), used: new Set() };
    this.tables.set(key, table);

    // collect inputs & outputs (preserve duplicates)
    this.collectInputOutputFromFeature(featureCtx, table);

    // rules
    const ruleDecls = this.getChildrenByRuleName(featureCtx, 'ruleDecl');
    for (const r of ruleDecls) {
      const ruleName = this.getIdFromContext(r) || this.getText(r.name) || '<unknown-rule>';

      // duplicate rule name
      if (table.rules.has(ruleName)) {
        this.safeReport({
          severity: 'warning',
          code: 'DUPLICATE_RULE_NAME',
          message: `Rule '${ruleName}' declared multiple times in feature '${this.currentFeature}'.`,
          location: this.locationOfNode(r),
          recommendation: `Ensure rule names are unique.`,
          meta: { rule: ruleName },
        });
      }
      table.rules.add(ruleName);

      // if-then condition
      const ifThen = this.getChildByRuleName(r, 'ifThenEffect');
      if (ifThen) {
        const cond = this.getChildByRuleName(ifThen, 'condition');
        if (cond) {
          this.runUndefinedVarCheck(cond, table, `Variable referenced in rule condition is not defined in feature '${this.currentFeature}'`);
        }

        // effects
        const effectList = this.getChildByRuleName(ifThen, 'effectList') || this.getChildByRuleName(ifThen, 'effects') || this.getChildByRuleName(ifThen, 'effectsList');
        if (effectList) {
          const effects = this.getChildrenByRuleName(effectList, 'effect');
          for (const e of effects) {
            this.runAssignChecks(e, table, ruleName);
            const exprs = this.getChildrenByRuleName(e, 'expr');
            for (const ex of exprs) {
              this.runUndefinedVarCheck(ex, table, `Variable referenced in effect expression is not defined in feature '${this.currentFeature}'`);
            }
          }
        } else {
          const assigns = this.getChildrenByRuleName(ifThen, 'assignmentEffect');
          for (const a of assigns) {
            this.runAssignChecks(a, table, ruleName);
            const right = this.getChildByRuleName(a, 'right') || this.getChildByRuleName(a, 'expr');
            if (right) this.runUndefinedVarCheck(right, table, `Variable referenced in right-hand expression is not defined in feature '${this.currentFeature}'`);
          }
        }
      }
    }

    // pre/post condition checks
    const preconds = this.getChildrenByRuleName(featureCtx, 'preconditionDecl');
    for (const p of preconds) {
      this.runUndefinedVarCheck(p.condition, table, `Variable referenced in precondition is not defined in feature '${this.currentFeature}'`);
    }
    const postconds = this.getChildrenByRuleName(featureCtx, 'postconditionDecl');
    for (const p of postconds) {
      this.runUndefinedVarCheck(p.condition, table, `Variable referenced in postcondition is not defined in feature '${this.currentFeature}'`);
    }

    this.currentFeature = undefined;
  }

  // -------------------------
  // Checks helpers
  // -------------------------
  private runUndefinedVarCheck(ctx: any, symbols: SymbolTable, messagePrefix: string) {
    if (!ctx) return;
    const used = this.collectUsedBaseIds(ctx);
    for (const u of used) {
      if (!symbols.inputs.has(u) && !symbols.outputs.has(u) && !symbols.locals.has(u)) {
        this.safeReport({
          severity: 'error',
          code: 'UNDEFINED_VARIABLE',
          message: `${messagePrefix} '${u}'.`,
          location: this.locationOfNode(ctx),
          recommendation: `Declare '${u}' in input or output of feature '${this.currentFeature}'.`,
          meta: { variable: u },
        });
      } else {
        symbols.used.add(u);
      }
    }
  }

  private runAssignChecks(assignCtx: any, symbols: SymbolTable, ruleName: string) {
    const assign = this.getChildByRuleName(assignCtx, 'assignmentEffect') || assignCtx;
    if (!assign) return;

    const left = this.getChildByRuleName(assign, 'left') || this.getChildByRuleName(assign, 'path');
    const right = this.getChildByRuleName(assign, 'right') || this.getChildByRuleName(assign, 'expr');

    const leftBases = left ? this.collectBaseIdsFromPath(left) : [];
    for (const lb of leftBases) {
      if (symbols.inputs.has(lb) && !symbols.outputs.has(lb)) {
        this.safeReport({
          severity: 'error',
          code: 'ASSIGN_TO_READONLY',
          message: `Attempt to assign to '${lb}' in rule '${ruleName}', but '${lb}' is declared as input (read-only).`,
          location: this.locationOfNode(left),
          recommendation: `If '${lb}' should be writable, move it to outputs or declare it as both input/output.`,
          meta: { variable: lb },
        });
      }

      if (!symbols.inputs.has(lb) && !symbols.outputs.has(lb)) {
        this.safeReport({
          severity: 'error',
          code: 'UNDEFINED_VARIABLE',
          message: `Variable '${lb}' assigned in rule '${ruleName}' is not declared in feature '${this.currentFeature}'.`,
          location: this.locationOfNode(left),
          recommendation: `Declare '${lb}' in output of feature '${this.currentFeature}'.`,
          meta: { variable: lb },
        });
      }
    }

    if (right) {
      this.runUndefinedVarCheck(right, symbols, `Variable referenced in right-hand expression of rule '${ruleName}' is not defined`);
    }
  }

  // -------------------------
  // Robust AST helpers
  // -------------------------
  getText(node: any): string {
    if (!node) return '';
    try {
      if (typeof node === 'string') return node;
      if (node.text !== undefined) return node.text;
      if (typeof node.getText === 'function') return node.getText();
      if (node.symbol && node.symbol.text) return node.symbol.text;
      if (node.getPayload && node.getPayload().getText) return node.getPayload().getText();
      return String(node);
    } catch {
      return String(node);
    }
  }

  getIdFromContext(ctx: any): string | undefined {
    if (!ctx) return undefined;
    const terms = this.flattenTerminals(ctx);
    for (const t of terms) {
      if (!t || !t.symbol || !t.symbol.text) continue;
      const txt = t.symbol.text;
      if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(txt) && !this.reservedKeywords.has(txt)) {
        return txt;
      }
    }
    return undefined;
  }

  flattenTerminals(ctx: any): TerminalNode[] {
    const out: TerminalNode[] = [];
    (function walk(node: any) {
      if (!node) return;
      if (!node.children || node.children.length === 0) {
        if (node.symbol) out.push(node);
        return;
      }
      for (const ch of node.children) walk(ch);
    })(ctx);
    return out;
  }

  flattenNodes(ctx: any): any[] {
    const out: any[] = [];
    (function walk(node: any) {
      if (!node) return;
      out.push(node);
      if (!node.children) return;
      for (const ch of node.children) walk(ch);
    })(ctx);
    return out;
  }

  getChildrenByRuleName(ctx: any, ruleName: string): any[] {
    if (!ctx) return [];
    const out: any[] = [];
    for (const key of Object.keys(ctx)) {
      const val = (ctx as any)[key];
      if (!val) continue;
      if (Array.isArray(val)) {
        for (const e of val) {
          if (e && e.constructor && e.constructor.name && e.constructor.name.toLowerCase().includes(ruleName.toLowerCase())) out.push(e);
        }
      } else {
        if (val && val.constructor && val.constructor.name && val.constructor.name.toLowerCase().includes(ruleName.toLowerCase())) out.push(val);
      }
    }
    return out;
  }

  getChildByRuleName(ctx: any, ruleName: string): any | undefined {
    const arr = this.getChildrenByRuleName(ctx, ruleName);
    return arr.length ? arr[0] : undefined;
  }

  /**
   * Collect IDs from an idList-like context.
   * PRESERVES duplicates and returns an array of {name, terminalNode}.
   */
  collectIdListPreserve(idListCtx: any): { name: string; terminal: any }[] {
    const result: { name: string; terminal: any }[] = [];
    if (!idListCtx) return result;
    const terms = this.flattenTerminals(idListCtx);
    for (const t of terms) {
      if (!t || !t.symbol || !t.symbol.text) continue;
      const txt = t.symbol.text;
      if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(txt) && !this.reservedKeywords.has(txt)) {
        result.push({ name: txt, terminal: t });
      }
    }
    return result;
  }

  collectIdList(idListCtx: any): string[] {
    // legacy helper that returns unique list — kept for other uses, but NOT used for duplicate detection
    const ids = new Set<string>();
    if (!idListCtx) return [];
    const terms = this.flattenTerminals(idListCtx);
    for (const t of terms) {
      if (!t || !t.symbol || !t.symbol.text) continue;
      const txt = t.symbol.text;
      if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(txt) && !this.reservedKeywords.has(txt)) ids.add(txt);
    }
    return Array.from(ids);
  }

  collectUsedBaseIds(exprCtx: any): string[] {
    const ids = new Set<string>();
    if (!exprCtx) return [];
    const nodes = this.flattenNodes(exprCtx);
    for (const n of nodes) {
      if (!n) continue;
      if (n.constructor && n.constructor.name && n.constructor.name.toLowerCase().includes('path')) {
        const base = this.collectBaseIdsFromPath(n);
        for (const b of base) ids.add(b);
      }
      if (n.symbol && n.symbol.text && /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(n.symbol.text) && !this.reservedKeywords.has(n.symbol.text)) {
        ids.add(n.symbol.text);
      }
    }
    return Array.from(ids);
  }

  collectBaseIdsFromPath(pathCtx: any): string[] {
    const out: string[] = [];
    if (!pathCtx) return out;
    const terms = this.flattenTerminals(pathCtx);
    for (const t of terms) {
      if (!t || !t.symbol || !t.symbol.text) continue;
      const txt = t.symbol.text;
      if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(txt) && !this.reservedKeywords.has(txt)) {
        out.push(txt);
        break;
      }
    }
    return out;
  }

  locationOfNode(ctx: any): { line: number; column: number; system?: string; feature?: string } {
    try {
      const terms = this.flattenTerminals(ctx);
      if (terms.length) {
        const t = terms[0] as any;
        return { line: t.symbol.line, column: t.symbol.charPositionInLine, system: this.currentSystem, feature: this.currentFeature };
      }
    } catch {}
    return { line: 0, column: 0, system: this.currentSystem, feature: this.currentFeature };
  }

  /**
   * Robust scan of feature children to collect input/output identifiers.
   * Uses collectIdListPreserve to detect duplicates within the same declaration.
   */
  private collectInputOutputFromFeature(ctx: any, symbols: SymbolTable) {
    if (!ctx) return;

    // 1) preferred direct children approach (inputDecl / outputDecl contexts)
    const inputDecls = this.getChildrenByRuleName(ctx, 'inputDecl');
    for (const idc of inputDecls) {
      // preserve duplicates
      const pairs = this.collectIdListPreserve(idc);
      const seenLocal = new Set<string>();
      for (const p of pairs) {
        const id = p.name;
        // if previously seen in this same declaration or earlier in this feature -> duplicate
        if (seenLocal.has(id) || symbols.inputs.has(id)) {
          // use terminal to get precise location
          const loc = p.terminal && p.terminal.symbol ? { line: p.terminal.symbol.line, column: p.terminal.symbol.charPositionInLine } : this.locationOfNode(idc);
          this.safeReport({
            severity: 'error',
            code: 'DUPLICATE_INPUT',
            message: `Input '${id}' declared multiple times in feature '${this.currentFeature}'.`,
            location: { line: loc.line, column: loc.column, system: this.currentSystem, feature: this.currentFeature },
            recommendation: `Remove duplicate declaration of '${id}'.`,
            meta: { variable: id },
          });
        }
        seenLocal.add(id);
        symbols.inputs.add(id);
      }
    }

    const outputDecls = this.getChildrenByRuleName(ctx, 'outputDecl');
    for (const odc of outputDecls) {
      const pairs = this.collectIdListPreserve(odc);
      const seenLocal = new Set<string>();
      for (const p of pairs) {
        const id = p.name;
        if (seenLocal.has(id) || symbols.outputs.has(id)) {
          const loc = p.terminal && p.terminal.symbol ? { line: p.terminal.symbol.line, column: p.terminal.symbol.charPositionInLine } : this.locationOfNode(odc);
          this.safeReport({
            severity: 'error',
            code: 'DUPLICATE_OUTPUT',
            message: `Output '${id}' declared multiple times in feature '${this.currentFeature}'.`,
            location: { line: loc.line, column: loc.column, system: this.currentSystem, feature: this.currentFeature },
            recommendation: `Remove duplicate declaration of '${id}'.`,
            meta: { variable: id },
          });
        }
        seenLocal.add(id);
        symbols.outputs.add(id);
      }
    }

    // 2) fallback: scan children tokens sequence (handles alternate AST shapes)
    if (!Array.isArray(ctx.children)) return;
    const children = ctx.children;
    for (let i = 0; i < children.length; i++) {
      const ch = children[i];
      if (!ch) continue;
      if (ch.symbol && typeof ch.symbol.text === 'string') {
        const txt = ch.symbol.text;
        if (txt === 'input' || txt === 'output') {
          const isInput = txt === 'input';
          let found: any = null;
          for (let j = i + 1; j < Math.min(children.length, i + 8); j++) {
            const nxt = children[j];
            if (!nxt) continue;
            if (nxt.constructor && nxt.constructor.name && nxt.constructor.name.toLowerCase().includes('idlist')) {
              found = nxt; break;
            }
            if (nxt.symbol && /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(nxt.symbol.text) && !this.reservedKeywords.has(nxt.symbol.text)) {
              found = { children: [nxt] }; break;
            }
          }
          if (found) {
            const pairs = this.collectIdListPreserve(found);
            const seenLocal = new Set<string>();
            for (const p of pairs) {
              const id = p.name;
              if (seenLocal.has(id) || (isInput ? symbols.inputs.has(id) : symbols.outputs.has(id))) {
                const loc = p.terminal && p.terminal.symbol ? { line: p.terminal.symbol.line, column: p.terminal.symbol.charPositionInLine } : this.locationOfNode(found);
                this.safeReport({
                  severity: 'error',
                  code: isInput ? 'DUPLICATE_INPUT' : 'DUPLICATE_OUTPUT',
                  message: `${isInput ? 'Input' : 'Output'} '${id}' declared multiple times in feature '${this.currentFeature}'.`,
                  location: { line: loc.line, column: loc.column, system: this.currentSystem, feature: this.currentFeature },
                  recommendation: `Remove duplicate declaration of '${id}'.`,
                  meta: { variable: id },
                });
              }
              seenLocal.add(id);
              if (isInput) symbols.inputs.add(id); else symbols.outputs.add(id);
            }
          }
        }
      }
    }
  }

  // dedupe and push
  private safeReport(d: Diagnostic) {
    const sig = [
      d.code,
      d.message,
      d.location ? `${d.location.line}:${d.location.column}` : '',
      d.location?.system || this.currentSystem || '',
      d.location?.feature || this.currentFeature || ''
    ].join('|');
    if (this.reportedSignatures.has(sig)) return;
    this.reportedSignatures.add(sig);
    this.diagnostics.push(d);
  }
}
