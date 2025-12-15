import { ANTLRErrorListener, RecognitionException, Recognizer, Token } from "antlr4ts";
import { Diagnostic } from "./types";

export class SyntaxErrorListener implements ANTLRErrorListener<Token> {
  public diagnostics: Diagnostic[] = [];

  syntaxError(
    recognizer: Recognizer<Token, any>,
    offendingSymbol: Token | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    console.error(`[LISTENER CAUGHT]: Line ${line}:${charPositionInLine} - ${msg}`);
    this.diagnostics.push({
      severity: 'error',
      code: 'SYNTAX_ERROR',
      message: msg,
      location: {
        line,
        column: charPositionInLine
      }
    });
  }
}