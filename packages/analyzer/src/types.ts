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
  };
  recommendation?: string;
}

export interface SymbolTable {
  inputs: Set<string>;
  outputs: Set<string>;
  rules: Set<string>;
  used: Set<string>;
}