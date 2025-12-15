// web/types.ts

export interface SyntaxError {
  line: number;
  column: number;
  message: string;
}

export interface Diagnostic {
  code: string;
  severity: 'error' | 'warning' | 'info';
  message: string;
  recommendation: string;
}

export interface UnitTest {
  title: string;
  code: string;
}

export interface CheckResult {
  syntaxErrors: SyntaxError[];
  diagnostics: Diagnostic[];
  unitTests: UnitTest[];
}