import { ANTLRErrorListener, RecognitionException, Recognizer } from "antlr4ts";

export class SyntaxErrorListener implements ANTLRErrorListener<any> {

    syntaxError(
        recognizer: Recognizer<any, any>,
        offendingSymbol: any,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined
    ): void {
        throw new Error(
            `❌ Syntax Error at line ${line}, column ${charPositionInLine}: ${msg}`
        );
    }
}
