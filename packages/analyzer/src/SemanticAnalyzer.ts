import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree';
import { Diagnostic, SymbolTable } from './types';

// Import generated files (sesuaikan path dengan struktur folder Anda)
import { SpecVisitor } from './parser/SpecVisitor'; 
import * as P from './parser/SpecParser'; 

export class SemanticAnalyzer extends AbstractParseTreeVisitor<void> implements SpecVisitor<void> {
  public diagnostics: Diagnostic[] = [];
  private tables = new Map<string, SymbolTable>(); // Key: "System::Feature"

  private currentSystem: string = '';
  private currentFeature: string = '';

  /**
   * Entry Point utama analisis
   */
  public analyze(tree: P.SpecificationContext): Diagnostic[] {
    this.reset();
    this.visit(tree); // Memulai traversal otomatis dari root
    this.checkUnusedInputs();
    return this.diagnostics;
  }

  protected defaultResult(): void {}

  private reset() {
    this.diagnostics = [];
    this.tables.clear();
    this.currentSystem = '';
    this.currentFeature = '';
  }

  // ==========================================================
  // VISITOR METHODS (Override method bawaan ANTLR)
  // ==========================================================

  // 1. Masuk ke System Declaration
  visitSystemDecl(ctx: P.SystemDeclContext) {
    this.currentSystem = ctx.ID().text;
    this.visitChildren(ctx); // Lanjut kunjungi anak-anaknya (Feature, dll)
    this.currentSystem = '';
  }

  // 2. Masuk ke Feature Declaration
  visitFeatureDecl(ctx: P.FeatureDeclContext) {
    this.currentFeature = ctx.ID().text;
    
    // Inisialisasi Symbol Table untuk scope ini
    const key = this.getScopeKey();
    this.tables.set(key, {
      inputs: new Set(),
      outputs: new Set(),
      rules: new Set(),
      used: new Set()
    });

    this.visitChildren(ctx); // Lanjut kunjungi input, output, rules
    this.currentFeature = '';
  }

  // 3. Masuk ke Input Declaration
  visitInputDecl(ctx: P.InputDeclContext) {
    const table = this.getCurrentTable();
    if (!table) return;

    // ctx.idList().ID() mengembalikan array node ID
    for (const node of ctx.idList().ID()) {
      const name = node.text;
      if (table.inputs.has(name)) {
        this.report('error', 'DUPLICATE_INPUT', `Input '${name}' declared multiple times`, node.symbol);
      }
      table.inputs.add(name);
    }
  }

  // 4. Masuk ke Output Declaration
  visitOutputDecl(ctx: P.OutputDeclContext) {
    const table = this.getCurrentTable();
    if (!table) return;

    for (const node of ctx.idList().ID()) {
      const name = node.text;
      if (table.outputs.has(name)) {
        this.report('error', 'DUPLICATE_OUTPUT', `Output '${name}' declared multiple times`, node.symbol);
      }
      table.outputs.add(name);
    }
  }

  // 5. Masuk ke Rule Declaration
  visitRuleDecl(ctx: P.RuleDeclContext) {
    const table = this.getCurrentTable();
    if (!table) return;

    const ruleName = ctx.ID().text;
    if (table.rules.has(ruleName)) {
      this.report('warning', 'DUPLICATE_RULE', `Rule name '${ruleName}' is duplicated`, ctx.start);
    }
    table.rules.add(ruleName);

    this.visitChildren(ctx); // Lanjut cek expression di dalam rule
  }

  // 6. Masuk ke Path (Penggunaan Variabel)
  visitPath(ctx: P.PathContext) {
    const table = this.getCurrentTable();
    if (!table) return;

    // Path bentuknya "user.id". Kita ambil root variablenya ("user")
    const rootVarNode = ctx.ID()[0]; 
    const rootVarName = rootVarNode.text;

    // Cek 1: Apakah variabel didefinisikan?
    if (!table.inputs.has(rootVarName) && !table.outputs.has(rootVarName)) {
      this.report('error', 'UNDEFINED_VAR', `Variable '${rootVarName}' is not defined in input/output`, rootVarNode.symbol, `Add '${rootVarName}' to declarations`);
    } else {
      table.used.add(rootVarName);
    }

    // Cek 2: Apakah kita sedang mencoba mengubah (assign) nilai Input?
    // Logika: Jika parent adalah AssignmentEffect, dan path ini ada di posisi kiri (assignment target)
    if (ctx.parent instanceof P.AssignmentEffectContext) {
      // AssignmentEffect strukturnya: path EQ expr
      // Kita cek apakah 'ctx' ini adalah path yang dimaksud di parent
      if (ctx.parent.path() === ctx) {
        if (table.inputs.has(rootVarName) && !table.outputs.has(rootVarName)) {
          this.report('error', 'READONLY_ASSIGN', `Cannot assign to input variable '${rootVarName}'`, rootVarNode.symbol, `Move '${rootVarName}' to output`);
        }
      }
    }

    this.visitChildren(ctx); // Cek jikalau ada array index berupa expression
  }

  // ==========================================================
  // HELPERS
  // ==========================================================

  private getScopeKey() {
    return `${this.currentSystem}::${this.currentFeature}`;
  }

  private getCurrentTable(): SymbolTable | undefined {
    return this.tables.get(this.getScopeKey());
  }

  private checkUnusedInputs() {
    this.tables.forEach((table, key) => {
      const [sys, feat] = key.split('::');
      table.inputs.forEach(input => {
        if (!table.used.has(input)) {
          this.diagnostics.push({
            severity: 'info',
            code: 'UNUSED_INPUT',
            message: `Input '${input}' is declared but never used`,
            location: { line: 0, column: 0, system: sys, feature: feat }, // Lokasi umum
            recommendation: `Consider removing '${input}'`
          });
        }
      });
    });
  }

  private report(severity: 'error'|'warning'|'info', code: string, msg: string, token: any, rec?: string) {
    this.diagnostics.push({
      severity,
      code,
      message: msg,
      location: {
        line: token.line,
        column: token.charPositionInLine,
        system: this.currentSystem,
        feature: this.currentFeature
      },
      recommendation: rec
    });
  }
}