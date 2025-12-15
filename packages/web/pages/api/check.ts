import type { NextApiRequest, NextApiResponse } from 'next';
import { CommonTokenStream, CharStreams } from 'antlr4ts';
import { SpecLexer, SpecParser } from '@spec/analyzer'; // Sesuaikan path import ini
import { SemanticAnalyzer, Diagnostic } from '@spec/analyzer'; // Sesuaikan path import ini
import { generateUnitTestsFromAST } from '../../lib/testGenerator';

type ErrorResponse = { error: string };

type CheckResponse = {
  syntaxErrors: { line: number; column: number; message: string }[];
  diagnostics: Diagnostic[];
  unitTests: { title: string; code: string }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CheckResponse | ErrorResponse>
) {
  try {
    const { spec } = req.method === 'GET' ? req.query : req.body;

    if (!spec || typeof spec !== 'string') {
      return res.status(400).json({ error: 'spec (string) is required' });
    }

    // 1. Lexing & Parsing
    const inputStream = CharStreams.fromString(spec);
    const lexer = new SpecLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SpecParser(tokenStream);

    // Collect syntax errors
    const syntaxErrors: { line: number; column: number; message: string }[] = [];
    parser.removeErrorListeners();
    parser.addErrorListener({
      syntaxError: (_rec, _off, line, charPositionInLine, msg) => {
        syntaxErrors.push({ line, column: charPositionInLine, message: msg });
      }
    });

    const tree = parser.specification();

    if (syntaxErrors.length > 0) {
      return res.status(200).json({
        syntaxErrors,
        diagnostics: [],
        unitTests: []
      });
    }

    // 2. Semantic Analysis
    // PERBAIKAN DI SINI: Jangan pass tokenStream ke constructor jika tidak diminta
    const analyzer = new SemanticAnalyzer(); 
    const diagnostics = analyzer.analyze(tree);

    // 3. Unit Test Generation
    const unitTests = generateUnitTestsFromAST(tree);

    return res.status(200).json({
      syntaxErrors: [],
      diagnostics,
      unitTests
    });
  } catch (err) {
    console.error(err);
    const message = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ error: message });
  }
}