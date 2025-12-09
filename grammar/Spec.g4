grammar Spec;

options { language = TypeScript; }

// ======================================================
// 1. GLOBAL ERROR HANDLING & MEMBERS
// ======================================================

@parser::members {
    public override notifyErrorListeners(msg: any, offendingToken: any, e: any): void {
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


// ======================================================
// 2. TOP LEVEL STRUCTURE (Struktur Utama)
// ======================================================

// Root dari grammar. File harus berisi minimal satu systemDecl.
// EOF menandakan parser harus berhenti tepat di akhir file.
specification
    @after {
        // Slot kosong untuk menyisipkan kode semantic analysis nantinya (Versi 2)
    }
    : systemDecl+ EOF
    ;

// Definisi Sistem. Pembungkus utama fitur-fitur.
// Contoh: system MySystem { ... }
systemDecl
    : SYSTEM name=ID '{' features+=featureDecl+ '}' 
    ;

// Definisi Fitur.
// Ini adalah versi HYBRID: Mengizinkan deklarasi variabel (V1) di dalam struktur V2.
featureDecl
    : FEATURE name=ID '{'
        ( inputDecl         // Deklarasi Input
        | outputDecl        // Deklarasi Output
        | valueDecl         // [Fitur V1] Properti/Konstanta (misal: threshold: 10)
        | freeExprDecl      // [Fitur V1] Invariant bebas (misal: suhu > 0)
        | preconditionDecl  // Syarat awal
        | postconditionDecl // Syarat akhir
        | ruleDecl          // Logika bisnis utama
        | testObligationDecl // Syarat testing
        )*
      '}'
    ;

// ======================================================
// 3. DECLARATIONS (Deklarasi Data)
// ======================================================

// Contoh: input: user, cart
inputDecl   : INPUT ':' ids=idList ;

// Contoh: output: total, status
outputDecl  : OUTPUT ':' ids=idList ;

// [Fitur V1] Deklarasi pasangan Key-Value bebas di dalam feature.
// Berguna untuk konfigurasi lokal. Contoh: max_retry: 3
valueDecl
    : ID ':' expr           
    ;

// [Fitur V1] Deklarasi ekspresi bebas yang bertindak sebagai assertion/invariant.
// Contoh: saldo >= 0
freeExprDecl
    : expr                  
    ;

// Kontrak logika: Apa yang harus benar SEBELUM fitur jalan
preconditionDecl    : PRECONDITION ':' condition=expr ;

// Kontrak logika: Apa yang harus benar SETELAH fitur jalan
postconditionDecl   : POSTCONDITION ':' condition=expr ;

// Metadata untuk kebutuhan testing
testObligationDecl  : TEST_OBLIGATION ':' (STRING | expr) ;

// ======================================================
// 4. RULES & LOGIC (Logika Bisnis)
// ======================================================

// Definisi Rule dengan nama dan anotasi opsional.
// Contoh: rule HitungPajak: if ... then ... @priority(1)
ruleDecl
    : RULE name=ID ':' ifThenEffect annotations=annotation*
    ;

// Struktur logika IF-THEN standar
ifThenEffect
    : IF condition=expr THEN effects=effectList
    ;

// Daftar efek/aksi yang dijalankan, dipisah koma atau titik koma
effectList
    : effect ( (',' | ';') effect )*
    ;

// Efek bisa berupa pengubahan nilai (assignment) atau aksi (action)
effect
    : assignmentEffect
    | actionEffect
    ;

// Contoh: saldo = saldo - 100
assignmentEffect
    : left=path '=' right=expr
    ;

// Contoh: do KirimEmail atau verifikasi()
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

/*
 * Hierarki Operator (Precedence).
 * ANTLR memproses dari bawah ke atas. Rule yang paling bawah (primaryExpr)
 * memiliki prioritas eksekusi paling tinggi (dihitung duluan).
 */

// Level terendah: OR (a OR b)
expr : orExpr ;

orExpr : andExpr ( OR andExpr )* ;

// Level: AND (a AND b)
andExpr : notExpr ( AND notExpr )* ;

// Level: NOT dan Relasional
notExpr
    : NOT notExpr       // Rekursif untuk not (not not a)
    | relationalExpr
    ;

// Level: Perbandingan (==, !=, >, <)
relationalExpr
    : additiveExpr ( compOp additiveExpr )?
    ;

// Level: Penjumlahan/Pengurangan (+, -)
additiveExpr
    : multiplicativeExpr ( ('+'|'-') multiplicativeExpr )*
    ;

// Level: Perkalian/Pembagian (*, /)
multiplicativeExpr
    : unaryExpr ( ('*'|'/') unaryExpr )*
    ;

// Level: Unary (+5, -10)
unaryExpr
    : ('+'|'-') unaryExpr
    | primaryExpr
    ;

// Level TERTINGGI: Kurung, Variabel, atau Literal
primaryExpr
    : '(' expr ')'      // Ekspresi dalam kurung selalu dihitung duluan
    | path              // Variabel (user.name)
    | literal           // Angka/String (10, "teks")
    ;

// ======================================================
// 6. HELPERS (Komponen Pendukung)
// ======================================================

// List ID dipisah koma (a, b, c)
idList : ID (',' ID)* ;

// List Argumen fungsi (10, "a", true)
argList : expr (',' expr)* ;

// Path untuk akses variabel kompleks.
// Mendukung: Dot (a.b), Index Array (a[0]), Safe Nav (a?.b)
path
    : ID ( ('.' ID) | ('[' expr ']') | ('?.' ID) )*
    ;

// Anotasi mirip Java/TS decorators. Contoh: @meta(id=1)
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

// Definisi tipe data dasar
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

// Operator perbandingan
compOp : '==' | '!=' | '>=' | '<=' | '>' | '<' ;

// ======================================================
// 7. LEXER TOKENS (Kosakata Bahasa)
// ======================================================

// Keywords (Kata Kunci)
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

// Tipe Data Angka
NUMBER : [0-9]+ ;
FLOAT  : [0-9]+ '.' [0-9]+ ;

// Boolean
BooleanLiteral : 'true' | 'false' ;

// String dengan escape character handling
STRING
    : '"' ( ~["\\] | '\\' . )* '"'
    ;

// Identifier (Nama Variabel/Fungsi)
ID : [a-zA-Z_][a-zA-Z_0-9]* ;

// Simbol-simbol Pungtuasi
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

// Mengabaikan (Skip) Spasi, Tab, dan Enter
WS : [ \t\r\n]+ -> skip ;

// Mengabaikan Komentar satu baris (//)
LINE_COMMENT : '//' ~[\r\n]* -> skip ;

// Mengabaikan Komentar blok (/* ... */)
BLOCK_COMMENT : '/*' .*? '*/' -> skip ;

// Error Handling Terakhir:
// Jika ada karakter yang tidak cocok dengan aturan di atas, lempar error.
ERROR_CHAR
    : . { throw new Error("Invalid character: '" + this.text + "'"); }
    ;