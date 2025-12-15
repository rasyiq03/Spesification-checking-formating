import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { SpecLexer } from './parser/SpecLexer';
import { SpecParser } from './parser/SpecParser';
import { SyntaxErrorListener } from './SyntaksErrorListener';
import { SemanticAnalyzer } from './SemanticAnalyzer';
import { Diagnostic } from './types';

// Export Parser & Lexer agar bisa dipakai di tempat lain jika perlu
export * from './parser/SpecLexer';
export * from './parser/SpecParser';
export * from './SyntaksErrorListener';
export * from './SemanticAnalyzer';
export * from './types';

// Tipe return baru agar kita bisa akses Tree untuk Unit Test Generator
export interface ValidationResult {
    diagnostics: Diagnostic[];
    tree?: any; // Sebenarnya tipe: SpecParser.SpecificationContext
}

export function validate(input: string): ValidationResult {
    // 1. Setup Lexer & Parser
    const chars = CharStreams.fromString(input);
    const lexer = new SpecLexer(chars);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SpecParser(tokenStream);

    // 2. Pasang Syntax Error Listener
    const syntaxListener = new SyntaxErrorListener();
    parser.removeErrorListeners(); 
    parser.addErrorListener(syntaxListener);

    // 3. Parse Tree
    const tree = parser.specification();

    // 4. Cek Error Sintaks
    if (syntaxListener.diagnostics.length > 0) {
        return {
            diagnostics: syntaxListener.diagnostics,
            tree: undefined // Tree dianggap cacat jika sintaks salah
        };
    }

    // 5. Cek Error Semantik
    const analyzer = new SemanticAnalyzer(); // Constructor kosong (sesuai perbaikan sebelumnya)
    const semanticDiagnostics = analyzer.analyze(tree);

    // 6. Return gabungan
    return {
        diagnostics: semanticDiagnostics,
        tree: tree
    };
}