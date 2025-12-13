grammar Spec;

options { language = TypeScript; }

// ======================================================
// 1. PARSER MEMBERS (Error handling)
// ======================================================

@parser::members {
  public override notifyErrorListeners(msg: any, offendingToken?: any, e?: any): void {
    const location = offendingToken && offendingToken.line !== undefined
      ? ` at line ${offendingToken.line}, column ${offendingToken.charPositionInLine}`
      : "";
    super.notifyErrorListeners("Syntax Error" + location + ": " + msg, offendingToken, e);
  }
}

// ======================================================
// 2. TOP-LEVEL STRUCTURE
// ======================================================

specification
  : systemDecl+ EOF
  ;

systemDecl
  : SYSTEM ID '{' featureDecl+ '}'
  ;

featureDecl
  : FEATURE ID '{'
      ( inputDecl
      | outputDecl
      | preconditionDecl
      | postconditionDecl
      | ruleDecl
      )*
    '}'
  ;

// ======================================================
// 3. DECLARATIONS
// ======================================================

inputDecl
  : INPUT ':' idList
  ;

outputDecl
  : OUTPUT ':' idList
  ;

preconditionDecl
  : PRECONDITION ':' expr
  ;

postconditionDecl
  : POSTCONDITION ':' expr
  ;

// ======================================================
// 4. RULES
// ======================================================

ruleDecl
  : RULE ID ':' ifThenEffect
  ;

ifThenEffect
  : IF expr THEN DO effectBlock
  ;

effectBlock
  : assignmentEffect+
  ;

assignmentEffect
  : path EQ expr
  ;

// ======================================================
// 5. EXPRESSIONS (LOGIC + ARITHMETIC)
// ======================================================

expr
  : orExpr
  ;

orExpr
  : andExpr (OR andExpr)*
  ;

andExpr
  : notExpr (AND notExpr)*
  ;

notExpr
  : NOT notExpr
  | relationalExpr
  ;

relationalExpr
  : additiveExpr (compOp additiveExpr)?
  ;

additiveExpr
  : multiplicativeExpr ((PLUS | MINUS) multiplicativeExpr)*
  ;

multiplicativeExpr
  : unaryExpr ((STAR | SLASH) unaryExpr)*
  ;

unaryExpr
  : (PLUS | MINUS) unaryExpr
  | primaryExpr
  ;

primaryExpr
  : '(' expr ')'
  | path
  | literal
  ;

// ======================================================
// 6. HELPERS
// ======================================================

idList
  : ID (',' ID)*
  ;

path
  : ID ('.' ID | '[' expr ']')*
  ;

literal
  : NUMBER
  | FLOAT
  | STRING
  | BOOLEAN
  ;

compOp
  : EQEQ | NEQ | GTE | LTE | GT | LT
  ;

// ======================================================
// 7. LEXER TOKENS
// ======================================================

// --- Keywords
SYSTEM        : 'system';
FEATURE       : 'feature';
INPUT         : 'input';
OUTPUT        : 'output';
PRECONDITION  : 'precondition';
POSTCONDITION : 'postcondition';
RULE          : 'rule';
IF            : 'if';
THEN          : 'then';
DO            : 'do';
AND           : 'and';
OR            : 'or';
NOT           : 'not';
BOOLEAN       : 'true' | 'false';

// --- Operators
PLUS   : '+';
MINUS  : '-';
STAR   : '*';
SLASH  : '/';

EQ     : '=';
EQEQ   : '==';
NEQ    : '!=';
GTE    : '>=';
LTE    : '<=';
GT     : '>';
LT     : '<';

// --- Literals
NUMBER : [0-9]+;
FLOAT  : [0-9]+ '.' [0-9]+;

STRING
  : '"' ( ~["\\] | '\\' . )* '"'
  ;

// --- Identifiers
ID : [a-zA-Z_][a-zA-Z_0-9]*;

// --- Whitespace & Comments
WS            : [ \t\r\n]+ -> skip;
LINE_COMMENT  : '//' ~[\r\n]* -> skip;
BLOCK_COMMENT : '/*' .*? '*/' -> skip;

// --- Error
ERROR_CHAR
  : . { throw new Error("Invalid character: '" + this.text + "'"); }
  ;
