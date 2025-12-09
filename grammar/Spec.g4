grammar Spec;

options { language = TypeScript; }

// ======================================================
// 1. GLOBAL ERROR HANDLING & MEMBERS
// ======================================================

@parser::members {
    // FIX: Menambahkan '?' pada parameter agar opsional (mencegah error TypeScript build)
    public override notifyErrorListeners(msg: any, offendingToken?: any, e?: any): void {
        const location = offendingToken && offendingToken.line !== undefined
            ? ` at line ${offendingToken.line}, column ${offendingToken.charPositionInLine}`
            : "";
        
        super.notifyErrorListeners("Syntax Error" + location + ": " + msg, offendingToken, e);
    }

    public override recover(recognizer: any, e: any): void {
        const follow = new Set([
            SpecParser.RBRACE,
            SpecParser.LBRACE,
            SpecParser.SEMI,
            SpecParser.COMMA,
        ]);

        let tok = recognizer.getInputStream().LT(1);
        while (tok && !follow.has(tok.type) && tok.type !== -1) {
            recognizer.consume();
            tok = recognizer.getInputStream().LT(1);
        }
    }
}

// @lexer::members TELAH DIHAPUS UNTUK MEMPERBAIKI BUILD ERROR

// ======================================================
// 2. TOP LEVEL STRUCTURE (Struktur Utama)
// ======================================================

specification
    @after {
        // Slot kosong untuk semantic analysis
    }
    : systemDecl+ EOF
    ;

systemDecl
    : SYSTEM name=ID '{' features+=featureDecl+ '}' 
    ;

featureDecl
    : FEATURE name=ID '{'
        ( inputDecl         
        | outputDecl        
        | valueDecl         
        | freeExprDecl      
        | preconditionDecl  
        | postconditionDecl 
        | ruleDecl          
        | testObligationDecl 
        )*
      '}'
    ;

// ======================================================
// 3. DECLARATIONS (Deklarasi Data)
// ======================================================

inputDecl   : INPUT ':' ids=idList ;
outputDecl  : OUTPUT ':' ids=idList ;

valueDecl
    : ID ':' expr           
    ;

freeExprDecl
    : expr                  
    ;

preconditionDecl    : PRECONDITION ':' condition=expr ;
postconditionDecl   : POSTCONDITION ':' condition=expr ;
testObligationDecl  : TEST_OBLIGATION ':' (STRING | expr) ;

// ======================================================
// 4. RULES & LOGIC (Logika Bisnis)
// ======================================================

ruleDecl
    : RULE name=ID ':' ifThenEffect annotations=annotation*
    ;

ifThenEffect
    : IF condition=expr THEN effects=effectList
    ;

effectList
    : effect ( (',' | ';') effect )*
    ;

effect
    : assignmentEffect
    | actionEffect
    ;

assignmentEffect
    : left=path '=' right=expr
    ;

actionEffect
    : functionCall
    | DO actionName=ID
    ;

functionCall
    : ID '(' (argList)? ')'
    ;

// ======================================================
// 5. EXPRESSIONS (Matematika & Logika)
// ======================================================

expr : orExpr ;

orExpr : andExpr ( OR andExpr )* ;
andExpr : notExpr ( AND notExpr )* ;

notExpr
    : NOT notExpr       
    | relationalExpr
    ;

relationalExpr
    : additiveExpr ( compOp additiveExpr )?
    ;

additiveExpr
    : multiplicativeExpr ( ('+'|'-') multiplicativeExpr )*
    ;

multiplicativeExpr
    : unaryExpr ( ('*'|'/') unaryExpr )*
    ;

unaryExpr
    : ('+'|'-') unaryExpr
    | primaryExpr
    ;

primaryExpr
    : '(' expr ')'      
    | path              
    | literal           
    ;

// ======================================================
// 6. HELPERS (Komponen Pendukung)
// ======================================================

idList : ID (',' ID)* ;
argList : expr (',' expr)* ;

path
    : ID ( ('.' ID) | ('[' expr ']') | ('?.' ID) )*
    ;

annotation
    : '@' ID ('(' annotationArgs? ')')?
    ;

annotationArgs
    : annotationArg (',' annotationArg)*
    ;

annotationArg
    : ID '=' expr
    | expr
    ;

literal
    : NUMBER
    | FLOAT
    | STRING
    | BooleanLiteral
    | arrayLiteral
    | objectLiteral
    ;

arrayLiteral : '[' (expr (',' expr)*)? ']' ;
objectLiteral : '{' (objectPair (',' objectPair)*)? '}' ;
objectPair : (STRING | ID) ':' expr ;

compOp : '==' | '!=' | '>=' | '<=' | '>' | '<' ;

// ======================================================
// 7. LEXER TOKENS (Kosakata Bahasa)
// ======================================================

SYSTEM          : 'system';
FEATURE         : 'feature';
INPUT           : 'input';
OUTPUT          : 'output';
PRECONDITION    : 'precondition';
POSTCONDITION   : 'postcondition';
TEST_OBLIGATION : 'test_obligation';
RULE            : 'rule';
IF              : 'if';
THEN            : 'then';
DO              : 'do';
AND             : 'and';
OR              : 'or';
NOT             : 'not';

NUMBER : [0-9]+ ;
FLOAT  : [0-9]+ '.' [0-9]+ ;

BooleanLiteral : 'true' | 'false' ;

STRING
    : '"' ( ~["\\] | '\\' . )* '"'
    ;

ID : [a-zA-Z_][a-zA-Z_0-9]* ;

LPAREN  : '(' ;
RPAREN  : ')' ;
LBRACE  : '{' ;
RBRACE  : '}' ;
LBRACK  : '[' ;
RBRACK  : ']' ;
COMMA   : ',' ;
COLON   : ':' ;
SEMI    : ';' ;
DOT     : '.' ;
QMARK   : '?' ;
EQ      : '=' ;

WS : [ \t\r\n]+ -> skip ;
LINE_COMMENT : '//' ~[\r\n]* -> skip ;
BLOCK_COMMENT : '/*' .*? '*/' -> skip ;

ERROR_CHAR
    : . { throw new Error("Invalid character: '" + this.text + "'"); }
    ;