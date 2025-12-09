// packages/web/pages/api/check.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { CommonTokenStream, CharStreams } from 'antlr4ts';
import { SpecLexer, SpecParser } from '@spec/analyzer';
import { SemanticAnalyzer, Diagnostic } from '@spec/analyzer';
import { generateUnitTestsFromDiagnostics } from '../../lib/testGenerator';

type ErrorResponse = { error: string };
type CheckResponse = { syntaxErrors: { line: number; column: number; message: string }[]; diagnostics: Diagnostic[]; unitTests: any[] };

export default function handler(req: NextApiRequest, res: NextApiResponse<CheckResponse | ErrorResponse>) {
  try {
    const { spec } = req.method === 'GET' ? req.query : req.body;
    if (!spec || typeof spec !== 'string') {
      return res.status(400).json({ error: 'spec (string) is required' });
    }

    // Lex + Parse
    const inputStream = CharStreams.fromString(spec);
    const lexer = new SpecLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SpecParser(tokenStream);

    // collect syntax errors
    const syntaxErrors: { line: number; column: number; message: string }[] = [];
    parser.removeErrorListeners();
    parser.addErrorListener({
      syntaxError: (_rec: any, _off: any, line: number, charPositionInLine: number, msg: string) => {
        syntaxErrors.push({ line, column: charPositionInLine, message: msg });
      }
    });

    const tree = parser.specification();

    if (syntaxErrors.length > 0) {
      return res.status(200).json({ syntaxErrors, diagnostics: [], unitTests: [] });
    }

    // Semantic analysis (synchronous)
    const analyzer = new SemanticAnalyzer(tokenStream);
    const diagnostics = analyzer.analyze(tree); // Diagnostic[]

    const unitTests = generateUnitTestsFromDiagnostics(tree, diagnostics);

    return res.status(200).json({ syntaxErrors: [], diagnostics, unitTests });
  } catch (err) {
    console.error(err);
    const message = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ error: message });
  }
}
