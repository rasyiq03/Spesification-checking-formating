// Generated from E:\Semester 3\Programing Language Pragmatics\DSL - Requirement\018_023_Requirement Spesification and Testing project\spec-checker\grammar\Spec.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SpecListener } from "./SpecListener";
import { SpecVisitor } from "./SpecVisitor";


export class SpecParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly SYSTEM = 13;
	public static readonly FEATURE = 14;
	public static readonly INPUT = 15;
	public static readonly OUTPUT = 16;
	public static readonly PRECONDITION = 17;
	public static readonly POSTCONDITION = 18;
	public static readonly TEST_OBLIGATION = 19;
	public static readonly RULE = 20;
	public static readonly IF = 21;
	public static readonly THEN = 22;
	public static readonly DO = 23;
	public static readonly AND = 24;
	public static readonly OR = 25;
	public static readonly NOT = 26;
	public static readonly NUMBER = 27;
	public static readonly FLOAT = 28;
	public static readonly BooleanLiteral = 29;
	public static readonly STRING = 30;
	public static readonly ID = 31;
	public static readonly LPAREN = 32;
	public static readonly RPAREN = 33;
	public static readonly LBRACE = 34;
	public static readonly RBRACE = 35;
	public static readonly LBRACK = 36;
	public static readonly RBRACK = 37;
	public static readonly COMMA = 38;
	public static readonly COLON = 39;
	public static readonly SEMI = 40;
	public static readonly DOT = 41;
	public static readonly QMARK = 42;
	public static readonly EQ = 43;
	public static readonly WS = 44;
	public static readonly LINE_COMMENT = 45;
	public static readonly BLOCK_COMMENT = 46;
	public static readonly ERROR_CHAR = 47;
	public static readonly RULE_specification = 0;
	public static readonly RULE_systemDecl = 1;
	public static readonly RULE_featureDecl = 2;
	public static readonly RULE_inputDecl = 3;
	public static readonly RULE_outputDecl = 4;
	public static readonly RULE_valueDecl = 5;
	public static readonly RULE_freeExprDecl = 6;
	public static readonly RULE_preconditionDecl = 7;
	public static readonly RULE_postconditionDecl = 8;
	public static readonly RULE_testObligationDecl = 9;
	public static readonly RULE_ruleDecl = 10;
	public static readonly RULE_ifThenEffect = 11;
	public static readonly RULE_effectList = 12;
	public static readonly RULE_effect = 13;
	public static readonly RULE_assignmentEffect = 14;
	public static readonly RULE_actionEffect = 15;
	public static readonly RULE_functionCall = 16;
	public static readonly RULE_expr = 17;
	public static readonly RULE_orExpr = 18;
	public static readonly RULE_andExpr = 19;
	public static readonly RULE_notExpr = 20;
	public static readonly RULE_relationalExpr = 21;
	public static readonly RULE_additiveExpr = 22;
	public static readonly RULE_multiplicativeExpr = 23;
	public static readonly RULE_unaryExpr = 24;
	public static readonly RULE_primaryExpr = 25;
	public static readonly RULE_idList = 26;
	public static readonly RULE_argList = 27;
	public static readonly RULE_path = 28;
	public static readonly RULE_annotation = 29;
	public static readonly RULE_annotationArgs = 30;
	public static readonly RULE_annotationArg = 31;
	public static readonly RULE_literal = 32;
	public static readonly RULE_arrayLiteral = 33;
	public static readonly RULE_objectLiteral = 34;
	public static readonly RULE_objectPair = 35;
	public static readonly RULE_compOp = 36;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"specification", "systemDecl", "featureDecl", "inputDecl", "outputDecl", 
		"valueDecl", "freeExprDecl", "preconditionDecl", "postconditionDecl", 
		"testObligationDecl", "ruleDecl", "ifThenEffect", "effectList", "effect", 
		"assignmentEffect", "actionEffect", "functionCall", "expr", "orExpr", 
		"andExpr", "notExpr", "relationalExpr", "additiveExpr", "multiplicativeExpr", 
		"unaryExpr", "primaryExpr", "idList", "argList", "path", "annotation", 
		"annotationArgs", "annotationArg", "literal", "arrayLiteral", "objectLiteral", 
		"objectPair", "compOp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'", "'*'", "'/'", "'?.'", "'@'", "'=='", "'!='", 
		"'>='", "'<='", "'>'", "'<'", "'system'", "'feature'", "'input'", "'output'", 
		"'precondition'", "'postcondition'", "'test_obligation'", "'rule'", "'if'", 
		"'then'", "'do'", "'and'", "'or'", "'not'", undefined, undefined, undefined, 
		undefined, undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "','", 
		"':'", "';'", "'.'", "'?'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "SYSTEM", 
		"FEATURE", "INPUT", "OUTPUT", "PRECONDITION", "POSTCONDITION", "TEST_OBLIGATION", 
		"RULE", "IF", "THEN", "DO", "AND", "OR", "NOT", "NUMBER", "FLOAT", "BooleanLiteral", 
		"STRING", "ID", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", 
		"COMMA", "COLON", "SEMI", "DOT", "QMARK", "EQ", "WS", "LINE_COMMENT", 
		"BLOCK_COMMENT", "ERROR_CHAR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SpecParser._LITERAL_NAMES, SpecParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SpecParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Spec.g4"; }

	// @Override
	public get ruleNames(): string[] { return SpecParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SpecParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}


	    /**
	     * Meng-override fungsi notifikasi error bawaan ANTLR.
	     * Tujuannya: Memberikan pesan error yang lebih presisi dengan baris dan kolom.
	     */
	    public override notifyErrorListeners(msg: any, offendingToken: any, e: any): void {
	        // [PERBAIKAN DARI VERSI 1]
	        // Kita menggunakan 'charPositionInLine', bukan 'column'.
	        // Properti 'column' tidak ada di standar Token TypeScript ANTLR,
	        // jadi perbaikan ini mencegah error saat kompilasi (TS2339).
	        const location = offendingToken && offendingToken.line !== undefined
	            ? ` at line ${offendingToken.line}, column ${offendingToken.charPositionInLine}`
	            : "";
	        
	        super.notifyErrorListeners("Syntax Error" + location + ": " + msg, offendingToken, e);
	    }

	    /**
	     * Strategi pemulihan (Recovery) saat terjadi syntax error.
	     * Jika parser bingung, ia akan mencoba melewati token sampah sampai
	     * menemukan karakter 'aman' (seperti kurung kurawal atau titik koma)
	     * agar tidak langsung crash total.
	     */
	    public override recover(recognizer: any, e: any): void {
	        const follow = new Set([
	            SpecParser.RBRACE, // }
	            SpecParser.LBRACE, // {
	            SpecParser.SEMI,   // ;
	            SpecParser.COMMA,  // ,
	        ]);

	        let tok = recognizer.getInputStream().LT(1);
	        while (tok && !follow.has(tok.type) && tok.type !== -1) { // -1 adalah EOF
	            recognizer.consume(); // Makan token sampah
	            tok = recognizer.getInputStream().LT(1);
	        }
	    }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SpecParser._ATN, this);
	}
	// @RuleVersion(0)
	public specification(): SpecificationContext {
		let _localctx: SpecificationContext = new SpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SpecParser.RULE_specification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 74;
				this.systemDecl();
				}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SpecParser.SYSTEM);
			this.state = 79;
			this.match(SpecParser.EOF);
			}
			this._ctx._stop = this._input.tryLT(-1);

			        // Slot kosong untuk menyisipkan kode semantic analysis nantinya (Versi 2)
			    
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public systemDecl(): SystemDeclContext {
		let _localctx: SystemDeclContext = new SystemDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SpecParser.RULE_systemDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.match(SpecParser.SYSTEM);
			this.state = 82;
			_localctx._name = this.match(SpecParser.ID);
			this.state = 83;
			this.match(SpecParser.LBRACE);
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 84;
				_localctx._featureDecl = this.featureDecl();
				_localctx._features.push(_localctx._featureDecl);
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SpecParser.FEATURE);
			this.state = 89;
			this.match(SpecParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public featureDecl(): FeatureDeclContext {
		let _localctx: FeatureDeclContext = new FeatureDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SpecParser.RULE_featureDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(SpecParser.FEATURE);
			this.state = 92;
			_localctx._name = this.match(SpecParser.ID);
			this.state = 93;
			this.match(SpecParser.LBRACE);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SpecParser.T__0) | (1 << SpecParser.T__1) | (1 << SpecParser.INPUT) | (1 << SpecParser.OUTPUT) | (1 << SpecParser.PRECONDITION) | (1 << SpecParser.POSTCONDITION) | (1 << SpecParser.TEST_OBLIGATION) | (1 << SpecParser.RULE) | (1 << SpecParser.NOT) | (1 << SpecParser.NUMBER) | (1 << SpecParser.FLOAT) | (1 << SpecParser.BooleanLiteral) | (1 << SpecParser.STRING) | (1 << SpecParser.ID))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SpecParser.LPAREN - 32)) | (1 << (SpecParser.LBRACE - 32)) | (1 << (SpecParser.LBRACK - 32)))) !== 0)) {
				{
				this.state = 102;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 94;
					this.inputDecl();
					}
					break;

				case 2:
					{
					this.state = 95;
					this.outputDecl();
					}
					break;

				case 3:
					{
					this.state = 96;
					this.valueDecl();
					}
					break;

				case 4:
					{
					this.state = 97;
					this.freeExprDecl();
					}
					break;

				case 5:
					{
					this.state = 98;
					this.preconditionDecl();
					}
					break;

				case 6:
					{
					this.state = 99;
					this.postconditionDecl();
					}
					break;

				case 7:
					{
					this.state = 100;
					this.ruleDecl();
					}
					break;

				case 8:
					{
					this.state = 101;
					this.testObligationDecl();
					}
					break;
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 107;
			this.match(SpecParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputDecl(): InputDeclContext {
		let _localctx: InputDeclContext = new InputDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SpecParser.RULE_inputDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(SpecParser.INPUT);
			this.state = 110;
			this.match(SpecParser.COLON);
			this.state = 111;
			_localctx._ids = this.idList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outputDecl(): OutputDeclContext {
		let _localctx: OutputDeclContext = new OutputDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SpecParser.RULE_outputDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(SpecParser.OUTPUT);
			this.state = 114;
			this.match(SpecParser.COLON);
			this.state = 115;
			_localctx._ids = this.idList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueDecl(): ValueDeclContext {
		let _localctx: ValueDeclContext = new ValueDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SpecParser.RULE_valueDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(SpecParser.ID);
			this.state = 118;
			this.match(SpecParser.COLON);
			this.state = 119;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public freeExprDecl(): FreeExprDeclContext {
		let _localctx: FreeExprDeclContext = new FreeExprDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SpecParser.RULE_freeExprDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public preconditionDecl(): PreconditionDeclContext {
		let _localctx: PreconditionDeclContext = new PreconditionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SpecParser.RULE_preconditionDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.match(SpecParser.PRECONDITION);
			this.state = 124;
			this.match(SpecParser.COLON);
			this.state = 125;
			_localctx._condition = this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postconditionDecl(): PostconditionDeclContext {
		let _localctx: PostconditionDeclContext = new PostconditionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SpecParser.RULE_postconditionDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(SpecParser.POSTCONDITION);
			this.state = 128;
			this.match(SpecParser.COLON);
			this.state = 129;
			_localctx._condition = this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testObligationDecl(): TestObligationDeclContext {
		let _localctx: TestObligationDeclContext = new TestObligationDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SpecParser.RULE_testObligationDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.match(SpecParser.TEST_OBLIGATION);
			this.state = 132;
			this.match(SpecParser.COLON);
			this.state = 135;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 133;
				this.match(SpecParser.STRING);
				}
				break;

			case 2:
				{
				this.state = 134;
				this.expr();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleDecl(): RuleDeclContext {
		let _localctx: RuleDeclContext = new RuleDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SpecParser.RULE_ruleDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(SpecParser.RULE);
			this.state = 138;
			_localctx._name = this.match(SpecParser.ID);
			this.state = 139;
			this.match(SpecParser.COLON);
			this.state = 140;
			this.ifThenEffect();
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.T__5) {
				{
				{
				this.state = 141;
				_localctx._annotations = this.annotation();
				}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifThenEffect(): IfThenEffectContext {
		let _localctx: IfThenEffectContext = new IfThenEffectContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SpecParser.RULE_ifThenEffect);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(SpecParser.IF);
			this.state = 148;
			_localctx._condition = this.expr();
			this.state = 149;
			this.match(SpecParser.THEN);
			this.state = 150;
			_localctx._effects = this.effectList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public effectList(): EffectListContext {
		let _localctx: EffectListContext = new EffectListContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SpecParser.RULE_effectList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.effect();
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.COMMA || _la === SpecParser.SEMI) {
				{
				{
				this.state = 153;
				_la = this._input.LA(1);
				if (!(_la === SpecParser.COMMA || _la === SpecParser.SEMI)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 154;
				this.effect();
				}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public effect(): EffectContext {
		let _localctx: EffectContext = new EffectContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SpecParser.RULE_effect);
		try {
			this.state = 162;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 160;
				this.assignmentEffect();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 161;
				this.actionEffect();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentEffect(): AssignmentEffectContext {
		let _localctx: AssignmentEffectContext = new AssignmentEffectContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SpecParser.RULE_assignmentEffect);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			_localctx._left = this.path();
			this.state = 165;
			this.match(SpecParser.EQ);
			this.state = 166;
			_localctx._right = this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actionEffect(): ActionEffectContext {
		let _localctx: ActionEffectContext = new ActionEffectContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SpecParser.RULE_actionEffect);
		try {
			this.state = 171;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SpecParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 168;
				this.functionCall();
				}
				break;
			case SpecParser.DO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 169;
				this.match(SpecParser.DO);
				this.state = 170;
				_localctx._actionName = this.match(SpecParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SpecParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.match(SpecParser.ID);
			this.state = 174;
			this.match(SpecParser.LPAREN);
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SpecParser.T__0) | (1 << SpecParser.T__1) | (1 << SpecParser.NOT) | (1 << SpecParser.NUMBER) | (1 << SpecParser.FLOAT) | (1 << SpecParser.BooleanLiteral) | (1 << SpecParser.STRING) | (1 << SpecParser.ID))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SpecParser.LPAREN - 32)) | (1 << (SpecParser.LBRACE - 32)) | (1 << (SpecParser.LBRACK - 32)))) !== 0)) {
				{
				this.state = 175;
				this.argList();
				}
			}

			this.state = 178;
			this.match(SpecParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SpecParser.RULE_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.orExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orExpr(): OrExprContext {
		let _localctx: OrExprContext = new OrExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SpecParser.RULE_orExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.andExpr();
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.OR) {
				{
				{
				this.state = 183;
				this.match(SpecParser.OR);
				this.state = 184;
				this.andExpr();
				}
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andExpr(): AndExprContext {
		let _localctx: AndExprContext = new AndExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SpecParser.RULE_andExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.notExpr();
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.AND) {
				{
				{
				this.state = 191;
				this.match(SpecParser.AND);
				this.state = 192;
				this.notExpr();
				}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public notExpr(): NotExprContext {
		let _localctx: NotExprContext = new NotExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SpecParser.RULE_notExpr);
		try {
			this.state = 201;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SpecParser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 198;
				this.match(SpecParser.NOT);
				this.state = 199;
				this.notExpr();
				}
				break;
			case SpecParser.T__0:
			case SpecParser.T__1:
			case SpecParser.NUMBER:
			case SpecParser.FLOAT:
			case SpecParser.BooleanLiteral:
			case SpecParser.STRING:
			case SpecParser.ID:
			case SpecParser.LPAREN:
			case SpecParser.LBRACE:
			case SpecParser.LBRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
				this.relationalExpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalExpr(): RelationalExprContext {
		let _localctx: RelationalExprContext = new RelationalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SpecParser.RULE_relationalExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.additiveExpr();
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SpecParser.T__6) | (1 << SpecParser.T__7) | (1 << SpecParser.T__8) | (1 << SpecParser.T__9) | (1 << SpecParser.T__10) | (1 << SpecParser.T__11))) !== 0)) {
				{
				this.state = 204;
				this.compOp();
				this.state = 205;
				this.additiveExpr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveExpr(): AdditiveExprContext {
		let _localctx: AdditiveExprContext = new AdditiveExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SpecParser.RULE_additiveExpr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.multiplicativeExpr();
			this.state = 214;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 210;
					_la = this._input.LA(1);
					if (!(_la === SpecParser.T__0 || _la === SpecParser.T__1)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 211;
					this.multiplicativeExpr();
					}
					}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpr(): MultiplicativeExprContext {
		let _localctx: MultiplicativeExprContext = new MultiplicativeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SpecParser.RULE_multiplicativeExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.unaryExpr();
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.T__2 || _la === SpecParser.T__3) {
				{
				{
				this.state = 218;
				_la = this._input.LA(1);
				if (!(_la === SpecParser.T__2 || _la === SpecParser.T__3)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 219;
				this.unaryExpr();
				}
				}
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpr(): UnaryExprContext {
		let _localctx: UnaryExprContext = new UnaryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SpecParser.RULE_unaryExpr);
		let _la: number;
		try {
			this.state = 228;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SpecParser.T__0:
			case SpecParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 225;
				_la = this._input.LA(1);
				if (!(_la === SpecParser.T__0 || _la === SpecParser.T__1)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 226;
				this.unaryExpr();
				}
				break;
			case SpecParser.NUMBER:
			case SpecParser.FLOAT:
			case SpecParser.BooleanLiteral:
			case SpecParser.STRING:
			case SpecParser.ID:
			case SpecParser.LPAREN:
			case SpecParser.LBRACE:
			case SpecParser.LBRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 227;
				this.primaryExpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpr(): PrimaryExprContext {
		let _localctx: PrimaryExprContext = new PrimaryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SpecParser.RULE_primaryExpr);
		try {
			this.state = 236;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SpecParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 230;
				this.match(SpecParser.LPAREN);
				this.state = 231;
				this.expr();
				this.state = 232;
				this.match(SpecParser.RPAREN);
				}
				break;
			case SpecParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 234;
				this.path();
				}
				break;
			case SpecParser.NUMBER:
			case SpecParser.FLOAT:
			case SpecParser.BooleanLiteral:
			case SpecParser.STRING:
			case SpecParser.LBRACE:
			case SpecParser.LBRACK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 235;
				this.literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idList(): IdListContext {
		let _localctx: IdListContext = new IdListContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SpecParser.RULE_idList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(SpecParser.ID);
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.COMMA) {
				{
				{
				this.state = 239;
				this.match(SpecParser.COMMA);
				this.state = 240;
				this.match(SpecParser.ID);
				}
				}
				this.state = 245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argList(): ArgListContext {
		let _localctx: ArgListContext = new ArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SpecParser.RULE_argList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.expr();
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.COMMA) {
				{
				{
				this.state = 247;
				this.match(SpecParser.COMMA);
				this.state = 248;
				this.expr();
				}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SpecParser.RULE_path);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.match(SpecParser.ID);
			this.state = 265;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 263;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SpecParser.DOT:
						{
						{
						this.state = 255;
						this.match(SpecParser.DOT);
						this.state = 256;
						this.match(SpecParser.ID);
						}
						}
						break;
					case SpecParser.LBRACK:
						{
						{
						this.state = 257;
						this.match(SpecParser.LBRACK);
						this.state = 258;
						this.expr();
						this.state = 259;
						this.match(SpecParser.RBRACK);
						}
						}
						break;
					case SpecParser.T__4:
						{
						{
						this.state = 261;
						this.match(SpecParser.T__4);
						this.state = 262;
						this.match(SpecParser.ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 267;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SpecParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(SpecParser.T__5);
			this.state = 269;
			this.match(SpecParser.ID);
			this.state = 275;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 270;
				this.match(SpecParser.LPAREN);
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SpecParser.T__0) | (1 << SpecParser.T__1) | (1 << SpecParser.NOT) | (1 << SpecParser.NUMBER) | (1 << SpecParser.FLOAT) | (1 << SpecParser.BooleanLiteral) | (1 << SpecParser.STRING) | (1 << SpecParser.ID))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SpecParser.LPAREN - 32)) | (1 << (SpecParser.LBRACE - 32)) | (1 << (SpecParser.LBRACK - 32)))) !== 0)) {
					{
					this.state = 271;
					this.annotationArgs();
					}
				}

				this.state = 274;
				this.match(SpecParser.RPAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationArgs(): AnnotationArgsContext {
		let _localctx: AnnotationArgsContext = new AnnotationArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SpecParser.RULE_annotationArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.annotationArg();
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.COMMA) {
				{
				{
				this.state = 278;
				this.match(SpecParser.COMMA);
				this.state = 279;
				this.annotationArg();
				}
				}
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationArg(): AnnotationArgContext {
		let _localctx: AnnotationArgContext = new AnnotationArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SpecParser.RULE_annotationArg);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 285;
				this.match(SpecParser.ID);
				this.state = 286;
				this.match(SpecParser.EQ);
				this.state = 287;
				this.expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 288;
				this.expr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SpecParser.RULE_literal);
		try {
			this.state = 297;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SpecParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 291;
				this.match(SpecParser.NUMBER);
				}
				break;
			case SpecParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 292;
				this.match(SpecParser.FLOAT);
				}
				break;
			case SpecParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 293;
				this.match(SpecParser.STRING);
				}
				break;
			case SpecParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 294;
				this.match(SpecParser.BooleanLiteral);
				}
				break;
			case SpecParser.LBRACK:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 295;
				this.arrayLiteral();
				}
				break;
			case SpecParser.LBRACE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 296;
				this.objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SpecParser.RULE_arrayLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(SpecParser.LBRACK);
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SpecParser.T__0) | (1 << SpecParser.T__1) | (1 << SpecParser.NOT) | (1 << SpecParser.NUMBER) | (1 << SpecParser.FLOAT) | (1 << SpecParser.BooleanLiteral) | (1 << SpecParser.STRING) | (1 << SpecParser.ID))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SpecParser.LPAREN - 32)) | (1 << (SpecParser.LBRACE - 32)) | (1 << (SpecParser.LBRACK - 32)))) !== 0)) {
				{
				this.state = 300;
				this.expr();
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SpecParser.COMMA) {
					{
					{
					this.state = 301;
					this.match(SpecParser.COMMA);
					this.state = 302;
					this.expr();
					}
					}
					this.state = 307;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 310;
			this.match(SpecParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectLiteral(): ObjectLiteralContext {
		let _localctx: ObjectLiteralContext = new ObjectLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SpecParser.RULE_objectLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.match(SpecParser.LBRACE);
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SpecParser.STRING || _la === SpecParser.ID) {
				{
				this.state = 313;
				this.objectPair();
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SpecParser.COMMA) {
					{
					{
					this.state = 314;
					this.match(SpecParser.COMMA);
					this.state = 315;
					this.objectPair();
					}
					}
					this.state = 320;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 323;
			this.match(SpecParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectPair(): ObjectPairContext {
		let _localctx: ObjectPairContext = new ObjectPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SpecParser.RULE_objectPair);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			_la = this._input.LA(1);
			if (!(_la === SpecParser.STRING || _la === SpecParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 326;
			this.match(SpecParser.COLON);
			this.state = 327;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compOp(): CompOpContext {
		let _localctx: CompOpContext = new CompOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SpecParser.RULE_compOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SpecParser.T__6) | (1 << SpecParser.T__7) | (1 << SpecParser.T__8) | (1 << SpecParser.T__9) | (1 << SpecParser.T__10) | (1 << SpecParser.T__11))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\u014E\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x06\x02N\n\x02\r\x02\x0E\x02O\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03X\n\x03\r\x03\x0E" +
		"\x03Y\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04i\n\x04\f\x04\x0E\x04" +
		"l\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\v\x8A" +
		"\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\x91\n\f\f\f\x0E\f\x94\v\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\x9E\n\x0E\f" +
		"\x0E\x0E\x0E\xA1\v\x0E\x03\x0F\x03\x0F\x05\x0F\xA5\n\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11\xAE\n\x11\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\xB3\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x07\x14\xBC\n\x14\f\x14\x0E\x14\xBF\v\x14\x03\x15\x03" +
		"\x15\x03\x15\x07\x15\xC4\n\x15\f\x15\x0E\x15\xC7\v\x15\x03\x16\x03\x16" +
		"\x03\x16\x05\x16\xCC\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\xD2" +
		"\n\x17\x03\x18\x03\x18\x03\x18\x07\x18\xD7\n\x18\f\x18\x0E\x18\xDA\v\x18" +
		"\x03\x19\x03\x19\x03\x19\x07\x19\xDF\n\x19\f\x19\x0E\x19\xE2\v\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\xE7\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\xEF\n\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C\xF4" +
		"\n\x1C\f\x1C\x0E\x1C\xF7\v\x1C\x03\x1D\x03\x1D\x03\x1D\x07\x1D\xFC\n\x1D" +
		"\f\x1D\x0E\x1D\xFF\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u010A\n\x1E\f\x1E\x0E\x1E\u010D\v\x1E" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0113\n\x1F\x03\x1F\x05\x1F\u0116" +
		"\n\x1F\x03 \x03 \x03 \x07 \u011B\n \f \x0E \u011E\v \x03!\x03!\x03!\x03" +
		"!\x05!\u0124\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u012C\n\"\x03" +
		"#\x03#\x03#\x03#\x07#\u0132\n#\f#\x0E#\u0135\v#\x05#\u0137\n#\x03#\x03" +
		"#\x03$\x03$\x03$\x03$\x07$\u013F\n$\f$\x0E$\u0142\v$\x05$\u0144\n$\x03" +
		"$\x03$\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x02\x02\x02\'\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
		"\x02\x07\x04\x02((**\x03\x02\x03\x04\x03\x02\x05\x06\x03\x02 !\x03\x02" +
		"\t\x0E\x02\u0153\x02M\x03\x02\x02\x02\x04S\x03\x02\x02\x02\x06]\x03\x02" +
		"\x02\x02\bo\x03\x02\x02\x02\ns\x03\x02\x02\x02\fw\x03\x02\x02\x02\x0E" +
		"{\x03\x02\x02\x02\x10}\x03\x02\x02\x02\x12\x81\x03\x02\x02\x02\x14\x85" +
		"\x03\x02\x02\x02\x16\x8B\x03\x02\x02\x02\x18\x95\x03\x02\x02\x02\x1A\x9A" +
		"\x03\x02\x02\x02\x1C\xA4\x03\x02\x02\x02\x1E\xA6\x03\x02\x02\x02 \xAD" +
		"\x03\x02\x02\x02\"\xAF\x03\x02\x02\x02$\xB6\x03\x02\x02\x02&\xB8\x03\x02" +
		"\x02\x02(\xC0\x03\x02\x02\x02*\xCB\x03\x02\x02\x02,\xCD\x03\x02\x02\x02" +
		".\xD3\x03\x02\x02\x020\xDB\x03\x02\x02\x022\xE6\x03\x02\x02\x024\xEE\x03" +
		"\x02\x02\x026\xF0\x03\x02\x02\x028\xF8\x03\x02\x02\x02:\u0100\x03\x02" +
		"\x02\x02<\u010E\x03\x02\x02\x02>\u0117\x03\x02\x02\x02@\u0123\x03\x02" +
		"\x02\x02B\u012B\x03\x02\x02\x02D\u012D\x03\x02\x02\x02F\u013A\x03\x02" +
		"\x02\x02H\u0147\x03\x02\x02\x02J\u014B\x03\x02\x02\x02LN\x05\x04\x03\x02" +
		"ML\x03\x02\x02\x02NO\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02" +
		"PQ\x03\x02\x02\x02QR\x07\x02\x02\x03R\x03\x03\x02\x02\x02ST\x07\x0F\x02" +
		"\x02TU\x07!\x02\x02UW\x07$\x02\x02VX\x05\x06\x04\x02WV\x03\x02\x02\x02" +
		"XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[\x03\x02\x02\x02" +
		"[\\\x07%\x02\x02\\\x05\x03\x02\x02\x02]^\x07\x10\x02\x02^_\x07!\x02\x02" +
		"_j\x07$\x02\x02`i\x05\b\x05\x02ai\x05\n\x06\x02bi\x05\f\x07\x02ci\x05" +
		"\x0E\b\x02di\x05\x10\t\x02ei\x05\x12\n\x02fi\x05\x16\f\x02gi\x05\x14\v" +
		"\x02h`\x03\x02\x02\x02ha\x03\x02\x02\x02hb\x03\x02\x02\x02hc\x03\x02\x02" +
		"\x02hd\x03\x02\x02\x02he\x03\x02\x02\x02hf\x03\x02\x02\x02hg\x03\x02\x02" +
		"\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02km\x03\x02\x02" +
		"\x02lj\x03\x02\x02\x02mn\x07%\x02\x02n\x07\x03\x02\x02\x02op\x07\x11\x02" +
		"\x02pq\x07)\x02\x02qr\x056\x1C\x02r\t\x03\x02\x02\x02st\x07\x12\x02\x02" +
		"tu\x07)\x02\x02uv\x056\x1C\x02v\v\x03\x02\x02\x02wx\x07!\x02\x02xy\x07" +
		")\x02\x02yz\x05$\x13\x02z\r\x03\x02\x02\x02{|\x05$\x13\x02|\x0F\x03\x02" +
		"\x02\x02}~\x07\x13\x02\x02~\x7F\x07)\x02\x02\x7F\x80\x05$\x13\x02\x80" +
		"\x11\x03\x02\x02\x02\x81\x82\x07\x14\x02\x02\x82\x83\x07)\x02\x02\x83" +
		"\x84\x05$\x13\x02\x84\x13\x03\x02\x02\x02\x85\x86\x07\x15\x02\x02\x86" +
		"\x89\x07)\x02\x02\x87\x8A\x07 \x02\x02\x88\x8A\x05$\x13\x02\x89\x87\x03" +
		"\x02\x02\x02\x89\x88\x03\x02\x02\x02\x8A\x15\x03\x02\x02\x02\x8B\x8C\x07" +
		"\x16\x02\x02\x8C\x8D\x07!\x02\x02\x8D\x8E\x07)\x02\x02\x8E\x92\x05\x18" +
		"\r\x02\x8F\x91\x05<\x1F\x02\x90\x8F\x03\x02\x02\x02\x91\x94\x03\x02\x02" +
		"\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x17\x03\x02\x02" +
		"\x02\x94\x92\x03\x02\x02\x02\x95\x96\x07\x17\x02\x02\x96\x97\x05$\x13" +
		"\x02\x97\x98\x07\x18\x02\x02\x98\x99\x05\x1A\x0E\x02\x99\x19\x03\x02\x02" +
		"\x02\x9A\x9F\x05\x1C\x0F\x02\x9B\x9C\t\x02\x02\x02\x9C\x9E\x05\x1C\x0F" +
		"\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02" +
		"\x02\x9F\xA0\x03\x02\x02\x02\xA0\x1B\x03\x02\x02\x02\xA1\x9F\x03\x02\x02" +
		"\x02\xA2\xA5\x05\x1E\x10\x02\xA3\xA5\x05 \x11\x02\xA4\xA2\x03\x02\x02" +
		"\x02\xA4\xA3\x03\x02\x02\x02\xA5\x1D\x03\x02\x02\x02\xA6\xA7\x05:\x1E" +
		"\x02\xA7\xA8\x07-\x02\x02\xA8\xA9\x05$\x13\x02\xA9\x1F\x03\x02\x02\x02" +
		"\xAA\xAE\x05\"\x12\x02\xAB\xAC\x07\x19\x02\x02\xAC\xAE\x07!\x02\x02\xAD" +
		"\xAA\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE!\x03\x02\x02\x02\xAF" +
		"\xB0\x07!\x02\x02\xB0\xB2\x07\"\x02\x02\xB1\xB3\x058\x1D\x02\xB2\xB1\x03" +
		"\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x07" +
		"#\x02\x02\xB5#\x03\x02\x02\x02\xB6\xB7\x05&\x14\x02\xB7%\x03\x02\x02\x02" +
		"\xB8\xBD\x05(\x15\x02\xB9\xBA\x07\x1B\x02\x02\xBA\xBC\x05(\x15\x02\xBB" +
		"\xB9\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD" +
		"\xBE\x03\x02\x02\x02\xBE\'\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xC0" +
		"\xC5\x05*\x16\x02\xC1\xC2\x07\x1A\x02\x02\xC2\xC4\x05*\x16\x02\xC3\xC1" +
		"\x03\x02\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6" +
		"\x03\x02\x02\x02\xC6)\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xC9" +
		"\x07\x1C\x02\x02\xC9\xCC\x05*\x16\x02\xCA\xCC\x05,\x17\x02\xCB\xC8\x03" +
		"\x02\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC+\x03\x02\x02\x02\xCD\xD1\x05" +
		".\x18\x02\xCE\xCF\x05J&\x02\xCF\xD0\x05.\x18\x02\xD0\xD2\x03\x02\x02\x02" +
		"\xD1\xCE\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2-\x03\x02\x02\x02" +
		"\xD3\xD8\x050\x19\x02\xD4\xD5\t\x03\x02\x02\xD5\xD7\x050\x19\x02\xD6\xD4" +
		"\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9" +
		"\x03\x02\x02\x02\xD9/\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xE0" +
		"\x052\x1A\x02\xDC\xDD\t\x04\x02\x02\xDD\xDF\x052\x1A\x02\xDE\xDC\x03\x02" +
		"\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02" +
		"\x02\x02\xE11\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE4\t\x03\x02" +
		"\x02\xE4\xE7\x052\x1A\x02\xE5\xE7\x054\x1B\x02\xE6\xE3\x03\x02\x02\x02" +
		"\xE6\xE5\x03\x02\x02\x02\xE73\x03\x02\x02\x02\xE8\xE9\x07\"\x02\x02\xE9" +
		"\xEA\x05$\x13\x02\xEA\xEB\x07#\x02\x02\xEB\xEF\x03\x02\x02\x02\xEC\xEF" +
		"\x05:\x1E\x02\xED\xEF\x05B\"\x02\xEE\xE8\x03\x02\x02\x02\xEE\xEC\x03\x02" +
		"\x02\x02\xEE\xED\x03\x02\x02\x02\xEF5\x03\x02\x02\x02\xF0\xF5\x07!\x02" +
		"\x02\xF1\xF2\x07(\x02\x02\xF2\xF4\x07!\x02\x02\xF3\xF1\x03\x02\x02\x02" +
		"\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02" +
		"\xF67\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xFD\x05$\x13\x02\xF9" +
		"\xFA\x07(\x02\x02\xFA\xFC\x05$\x13\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFF" +
		"\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE9" +
		"\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u010B\x07!\x02\x02\u0101" +
		"\u0102\x07+\x02\x02\u0102\u010A\x07!\x02\x02\u0103\u0104\x07&\x02\x02" +
		"\u0104\u0105\x05$\x13\x02\u0105\u0106\x07\'\x02\x02\u0106\u010A\x03\x02" +
		"\x02\x02\u0107\u0108\x07\x07\x02\x02\u0108\u010A\x07!\x02\x02\u0109\u0101" +
		"\x03\x02\x02\x02\u0109\u0103\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02" +
		"\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03" +
		"\x02\x02\x02\u010C;\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010E" +
		"\u010F\x07\b\x02\x02\u010F\u0115\x07!\x02\x02\u0110\u0112\x07\"\x02\x02" +
		"\u0111\u0113\x05> \x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03\x02" +
		"\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0116\x07#\x02\x02\u0115\u0110" +
		"\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116=\x03\x02\x02\x02\u0117" +
		"\u011C\x05@!\x02\u0118\u0119\x07(\x02\x02\u0119\u011B\x05@!\x02\u011A" +
		"\u0118\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C\u011A\x03\x02" +
		"\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D?\x03\x02\x02\x02\u011E\u011C" +
		"\x03\x02\x02\x02\u011F\u0120\x07!\x02\x02\u0120\u0121\x07-\x02\x02\u0121" +
		"\u0124\x05$\x13\x02\u0122\u0124\x05$\x13\x02\u0123\u011F\x03\x02\x02\x02" +
		"\u0123\u0122\x03\x02\x02\x02\u0124A\x03\x02\x02\x02\u0125\u012C\x07\x1D" +
		"\x02\x02\u0126\u012C\x07\x1E\x02\x02\u0127\u012C\x07 \x02\x02\u0128\u012C" +
		"\x07\x1F\x02\x02\u0129\u012C\x05D#\x02\u012A\u012C\x05F$\x02\u012B\u0125" +
		"\x03\x02\x02\x02\u012B\u0126\x03\x02\x02\x02\u012B\u0127\x03\x02\x02\x02" +
		"\u012B\u0128\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012A\x03" +
		"\x02\x02\x02\u012CC\x03\x02\x02\x02\u012D\u0136\x07&\x02\x02\u012E\u0133" +
		"\x05$\x13\x02\u012F\u0130\x07(\x02\x02\u0130\u0132\x05$\x13\x02\u0131" +
		"\u012F\x03\x02\x02\x02\u0132\u0135\x03\x02\x02\x02\u0133\u0131\x03\x02" +
		"\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0137\x03\x02\x02\x02\u0135" +
		"\u0133\x03\x02\x02\x02\u0136\u012E\x03\x02\x02\x02\u0136\u0137\x03\x02" +
		"\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x07\'\x02\x02\u0139E" +
		"\x03\x02\x02\x02\u013A\u0143\x07$\x02\x02\u013B\u0140\x05H%\x02\u013C" +
		"\u013D\x07(\x02\x02\u013D\u013F\x05H%\x02\u013E\u013C\x03\x02\x02\x02" +
		"\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03" +
		"\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143" +
		"\u013B\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0145\x03\x02" +
		"\x02\x02\u0145\u0146\x07%\x02\x02\u0146G\x03\x02\x02\x02\u0147\u0148\t" +
		"\x05\x02\x02\u0148\u0149\x07)\x02\x02\u0149\u014A\x05$\x13\x02\u014AI" +
		"\x03\x02\x02\x02\u014B\u014C\t\x06\x02\x02\u014CK\x03\x02\x02\x02!OYh" +
		"j\x89\x92\x9F\xA4\xAD\xB2\xBD\xC5\xCB\xD1\xD8\xE0\xE6\xEE\xF5\xFD\u0109" +
		"\u010B\u0112\u0115\u011C\u0123\u012B\u0133\u0136\u0140\u0143";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SpecParser.__ATN) {
			SpecParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SpecParser._serializedATN));
		}

		return SpecParser.__ATN;
	}

}

export class SpecificationContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(SpecParser.EOF, 0); }
	public systemDecl(): SystemDeclContext[];
	public systemDecl(i: number): SystemDeclContext;
	public systemDecl(i?: number): SystemDeclContext | SystemDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SystemDeclContext);
		} else {
			return this.getRuleContext(i, SystemDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_specification; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterSpecification) {
			listener.enterSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitSpecification) {
			listener.exitSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitSpecification) {
			return visitor.visitSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SystemDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _featureDecl!: FeatureDeclContext;
	public _features: FeatureDeclContext[] = [];
	public SYSTEM(): TerminalNode { return this.getToken(SpecParser.SYSTEM, 0); }
	public LBRACE(): TerminalNode { return this.getToken(SpecParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SpecParser.RBRACE, 0); }
	public ID(): TerminalNode { return this.getToken(SpecParser.ID, 0); }
	public featureDecl(): FeatureDeclContext[];
	public featureDecl(i: number): FeatureDeclContext;
	public featureDecl(i?: number): FeatureDeclContext | FeatureDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FeatureDeclContext);
		} else {
			return this.getRuleContext(i, FeatureDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_systemDecl; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterSystemDecl) {
			listener.enterSystemDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitSystemDecl) {
			listener.exitSystemDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitSystemDecl) {
			return visitor.visitSystemDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FeatureDeclContext extends ParserRuleContext {
	public _name!: Token;
	public FEATURE(): TerminalNode { return this.getToken(SpecParser.FEATURE, 0); }
	public LBRACE(): TerminalNode { return this.getToken(SpecParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SpecParser.RBRACE, 0); }
	public ID(): TerminalNode { return this.getToken(SpecParser.ID, 0); }
	public inputDecl(): InputDeclContext[];
	public inputDecl(i: number): InputDeclContext;
	public inputDecl(i?: number): InputDeclContext | InputDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputDeclContext);
		} else {
			return this.getRuleContext(i, InputDeclContext);
		}
	}
	public outputDecl(): OutputDeclContext[];
	public outputDecl(i: number): OutputDeclContext;
	public outputDecl(i?: number): OutputDeclContext | OutputDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OutputDeclContext);
		} else {
			return this.getRuleContext(i, OutputDeclContext);
		}
	}
	public valueDecl(): ValueDeclContext[];
	public valueDecl(i: number): ValueDeclContext;
	public valueDecl(i?: number): ValueDeclContext | ValueDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueDeclContext);
		} else {
			return this.getRuleContext(i, ValueDeclContext);
		}
	}
	public freeExprDecl(): FreeExprDeclContext[];
	public freeExprDecl(i: number): FreeExprDeclContext;
	public freeExprDecl(i?: number): FreeExprDeclContext | FreeExprDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FreeExprDeclContext);
		} else {
			return this.getRuleContext(i, FreeExprDeclContext);
		}
	}
	public preconditionDecl(): PreconditionDeclContext[];
	public preconditionDecl(i: number): PreconditionDeclContext;
	public preconditionDecl(i?: number): PreconditionDeclContext | PreconditionDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PreconditionDeclContext);
		} else {
			return this.getRuleContext(i, PreconditionDeclContext);
		}
	}
	public postconditionDecl(): PostconditionDeclContext[];
	public postconditionDecl(i: number): PostconditionDeclContext;
	public postconditionDecl(i?: number): PostconditionDeclContext | PostconditionDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostconditionDeclContext);
		} else {
			return this.getRuleContext(i, PostconditionDeclContext);
		}
	}
	public ruleDecl(): RuleDeclContext[];
	public ruleDecl(i: number): RuleDeclContext;
	public ruleDecl(i?: number): RuleDeclContext | RuleDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleDeclContext);
		} else {
			return this.getRuleContext(i, RuleDeclContext);
		}
	}
	public testObligationDecl(): TestObligationDeclContext[];
	public testObligationDecl(i: number): TestObligationDeclContext;
	public testObligationDecl(i?: number): TestObligationDeclContext | TestObligationDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestObligationDeclContext);
		} else {
			return this.getRuleContext(i, TestObligationDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_featureDecl; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterFeatureDecl) {
			listener.enterFeatureDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitFeatureDecl) {
			listener.exitFeatureDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitFeatureDecl) {
			return visitor.visitFeatureDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputDeclContext extends ParserRuleContext {
	public _ids!: IdListContext;
	public INPUT(): TerminalNode { return this.getToken(SpecParser.INPUT, 0); }
	public COLON(): TerminalNode { return this.getToken(SpecParser.COLON, 0); }
	public idList(): IdListContext {
		return this.getRuleContext(0, IdListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_inputDecl; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterInputDecl) {
			listener.enterInputDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitInputDecl) {
			listener.exitInputDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitInputDecl) {
			return visitor.visitInputDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputDeclContext extends ParserRuleContext {
	public _ids!: IdListContext;
	public OUTPUT(): TerminalNode { return this.getToken(SpecParser.OUTPUT, 0); }
	public COLON(): TerminalNode { return this.getToken(SpecParser.COLON, 0); }
	public idList(): IdListContext {
		return this.getRuleContext(0, IdListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_outputDecl; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterOutputDecl) {
			listener.enterOutputDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitOutputDecl) {
			listener.exitOutputDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitOutputDecl) {
			return visitor.visitOutputDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueDeclContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SpecParser.ID, 0); }
	public COLON(): TerminalNode { return this.getToken(SpecParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_valueDecl; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterValueDecl) {
			listener.enterValueDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitValueDecl) {
			listener.exitValueDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitValueDecl) {
			return visitor.visitValueDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FreeExprDeclContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_freeExprDecl; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterFreeExprDecl) {
			listener.enterFreeExprDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitFreeExprDecl) {
			listener.exitFreeExprDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitFreeExprDecl) {
			return visitor.visitFreeExprDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreconditionDeclContext extends ParserRuleContext {
	public _condition!: ExprContext;
	public PRECONDITION(): TerminalNode { return this.getToken(SpecParser.PRECONDITION, 0); }
	public COLON(): TerminalNode { return this.getToken(SpecParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_preconditionDecl; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterPreconditionDecl) {
			listener.enterPreconditionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitPreconditionDecl) {
			listener.exitPreconditionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitPreconditionDecl) {
			return visitor.visitPreconditionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostconditionDeclContext extends ParserRuleContext {
	public _condition!: ExprContext;
	public POSTCONDITION(): TerminalNode { return this.getToken(SpecParser.POSTCONDITION, 0); }
	public COLON(): TerminalNode { return this.getToken(SpecParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_postconditionDecl; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterPostconditionDecl) {
			listener.enterPostconditionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitPostconditionDecl) {
			listener.exitPostconditionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitPostconditionDecl) {
			return visitor.visitPostconditionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestObligationDeclContext extends ParserRuleContext {
	public TEST_OBLIGATION(): TerminalNode { return this.getToken(SpecParser.TEST_OBLIGATION, 0); }
	public COLON(): TerminalNode { return this.getToken(SpecParser.COLON, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SpecParser.STRING, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_testObligationDecl; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterTestObligationDecl) {
			listener.enterTestObligationDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitTestObligationDecl) {
			listener.exitTestObligationDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitTestObligationDecl) {
			return visitor.visitTestObligationDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _annotations!: AnnotationContext;
	public RULE(): TerminalNode { return this.getToken(SpecParser.RULE, 0); }
	public COLON(): TerminalNode { return this.getToken(SpecParser.COLON, 0); }
	public ifThenEffect(): IfThenEffectContext {
		return this.getRuleContext(0, IfThenEffectContext);
	}
	public ID(): TerminalNode { return this.getToken(SpecParser.ID, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_ruleDecl; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterRuleDecl) {
			listener.enterRuleDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitRuleDecl) {
			listener.exitRuleDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitRuleDecl) {
			return visitor.visitRuleDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenEffectContext extends ParserRuleContext {
	public _condition!: ExprContext;
	public _effects!: EffectListContext;
	public IF(): TerminalNode { return this.getToken(SpecParser.IF, 0); }
	public THEN(): TerminalNode { return this.getToken(SpecParser.THEN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public effectList(): EffectListContext {
		return this.getRuleContext(0, EffectListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_ifThenEffect; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterIfThenEffect) {
			listener.enterIfThenEffect(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitIfThenEffect) {
			listener.exitIfThenEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitIfThenEffect) {
			return visitor.visitIfThenEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EffectListContext extends ParserRuleContext {
	public effect(): EffectContext[];
	public effect(i: number): EffectContext;
	public effect(i?: number): EffectContext | EffectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EffectContext);
		} else {
			return this.getRuleContext(i, EffectContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.COMMA);
		} else {
			return this.getToken(SpecParser.COMMA, i);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.SEMI);
		} else {
			return this.getToken(SpecParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_effectList; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterEffectList) {
			listener.enterEffectList(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitEffectList) {
			listener.exitEffectList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitEffectList) {
			return visitor.visitEffectList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EffectContext extends ParserRuleContext {
	public assignmentEffect(): AssignmentEffectContext | undefined {
		return this.tryGetRuleContext(0, AssignmentEffectContext);
	}
	public actionEffect(): ActionEffectContext | undefined {
		return this.tryGetRuleContext(0, ActionEffectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_effect; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterEffect) {
			listener.enterEffect(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitEffect) {
			listener.exitEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitEffect) {
			return visitor.visitEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentEffectContext extends ParserRuleContext {
	public _left!: PathContext;
	public _right!: ExprContext;
	public EQ(): TerminalNode { return this.getToken(SpecParser.EQ, 0); }
	public path(): PathContext {
		return this.getRuleContext(0, PathContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_assignmentEffect; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterAssignmentEffect) {
			listener.enterAssignmentEffect(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitAssignmentEffect) {
			listener.exitAssignmentEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitAssignmentEffect) {
			return visitor.visitAssignmentEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionEffectContext extends ParserRuleContext {
	public _actionName!: Token;
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public DO(): TerminalNode | undefined { return this.tryGetToken(SpecParser.DO, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(SpecParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_actionEffect; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterActionEffect) {
			listener.enterActionEffect(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitActionEffect) {
			listener.exitActionEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitActionEffect) {
			return visitor.visitActionEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SpecParser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SpecParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SpecParser.RPAREN, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public orExpr(): OrExprContext {
		return this.getRuleContext(0, OrExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_expr; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrExprContext extends ParserRuleContext {
	public andExpr(): AndExprContext[];
	public andExpr(i: number): AndExprContext;
	public andExpr(i?: number): AndExprContext | AndExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndExprContext);
		} else {
			return this.getRuleContext(i, AndExprContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.OR);
		} else {
			return this.getToken(SpecParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_orExpr; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterOrExpr) {
			listener.enterOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitOrExpr) {
			listener.exitOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitOrExpr) {
			return visitor.visitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExprContext extends ParserRuleContext {
	public notExpr(): NotExprContext[];
	public notExpr(i: number): NotExprContext;
	public notExpr(i?: number): NotExprContext | NotExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NotExprContext);
		} else {
			return this.getRuleContext(i, NotExprContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.AND);
		} else {
			return this.getToken(SpecParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_andExpr; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterAndExpr) {
			listener.enterAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitAndExpr) {
			listener.exitAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitAndExpr) {
			return visitor.visitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotExprContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SpecParser.NOT, 0); }
	public notExpr(): NotExprContext | undefined {
		return this.tryGetRuleContext(0, NotExprContext);
	}
	public relationalExpr(): RelationalExprContext | undefined {
		return this.tryGetRuleContext(0, RelationalExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_notExpr; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterNotExpr) {
			listener.enterNotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitNotExpr) {
			listener.exitNotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitNotExpr) {
			return visitor.visitNotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExprContext extends ParserRuleContext {
	public additiveExpr(): AdditiveExprContext[];
	public additiveExpr(i: number): AdditiveExprContext;
	public additiveExpr(i?: number): AdditiveExprContext | AdditiveExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExprContext);
		} else {
			return this.getRuleContext(i, AdditiveExprContext);
		}
	}
	public compOp(): CompOpContext | undefined {
		return this.tryGetRuleContext(0, CompOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_relationalExpr; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterRelationalExpr) {
			listener.enterRelationalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitRelationalExpr) {
			listener.exitRelationalExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitRelationalExpr) {
			return visitor.visitRelationalExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExprContext extends ParserRuleContext {
	public multiplicativeExpr(): MultiplicativeExprContext[];
	public multiplicativeExpr(i: number): MultiplicativeExprContext;
	public multiplicativeExpr(i?: number): MultiplicativeExprContext | MultiplicativeExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExprContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_additiveExpr; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterAdditiveExpr) {
			listener.enterAdditiveExpr(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitAdditiveExpr) {
			listener.exitAdditiveExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitAdditiveExpr) {
			return visitor.visitAdditiveExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExprContext extends ParserRuleContext {
	public unaryExpr(): UnaryExprContext[];
	public unaryExpr(i: number): UnaryExprContext;
	public unaryExpr(i?: number): UnaryExprContext | UnaryExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryExprContext);
		} else {
			return this.getRuleContext(i, UnaryExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_multiplicativeExpr; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterMultiplicativeExpr) {
			listener.enterMultiplicativeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitMultiplicativeExpr) {
			listener.exitMultiplicativeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpr) {
			return visitor.visitMultiplicativeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExprContext extends ParserRuleContext {
	public unaryExpr(): UnaryExprContext | undefined {
		return this.tryGetRuleContext(0, UnaryExprContext);
	}
	public primaryExpr(): PrimaryExprContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_unaryExpr; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterUnaryExpr) {
			listener.enterUnaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitUnaryExpr) {
			listener.exitUnaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitUnaryExpr) {
			return visitor.visitUnaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExprContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SpecParser.LPAREN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SpecParser.RPAREN, 0); }
	public path(): PathContext | undefined {
		return this.tryGetRuleContext(0, PathContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_primaryExpr; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterPrimaryExpr) {
			listener.enterPrimaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitPrimaryExpr) {
			listener.exitPrimaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitPrimaryExpr) {
			return visitor.visitPrimaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdListContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.ID);
		} else {
			return this.getToken(SpecParser.ID, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.COMMA);
		} else {
			return this.getToken(SpecParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_idList; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterIdList) {
			listener.enterIdList(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitIdList) {
			listener.exitIdList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitIdList) {
			return visitor.visitIdList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgListContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.COMMA);
		} else {
			return this.getToken(SpecParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_argList; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterArgList) {
			listener.enterArgList(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitArgList) {
			listener.exitArgList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitArgList) {
			return visitor.visitArgList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.ID);
		} else {
			return this.getToken(SpecParser.ID, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.DOT);
		} else {
			return this.getToken(SpecParser.DOT, i);
		}
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.LBRACK);
		} else {
			return this.getToken(SpecParser.LBRACK, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.RBRACK);
		} else {
			return this.getToken(SpecParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_path; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitPath) {
			return visitor.visitPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SpecParser.ID, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SpecParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SpecParser.RPAREN, 0); }
	public annotationArgs(): AnnotationArgsContext | undefined {
		return this.tryGetRuleContext(0, AnnotationArgsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_annotation; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationArgsContext extends ParserRuleContext {
	public annotationArg(): AnnotationArgContext[];
	public annotationArg(i: number): AnnotationArgContext;
	public annotationArg(i?: number): AnnotationArgContext | AnnotationArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationArgContext);
		} else {
			return this.getRuleContext(i, AnnotationArgContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.COMMA);
		} else {
			return this.getToken(SpecParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_annotationArgs; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterAnnotationArgs) {
			listener.enterAnnotationArgs(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitAnnotationArgs) {
			listener.exitAnnotationArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitAnnotationArgs) {
			return visitor.visitAnnotationArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationArgContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(SpecParser.ID, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(SpecParser.EQ, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_annotationArg; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterAnnotationArg) {
			listener.enterAnnotationArg(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitAnnotationArg) {
			listener.exitAnnotationArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitAnnotationArg) {
			return visitor.visitAnnotationArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(SpecParser.NUMBER, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(SpecParser.FLOAT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SpecParser.STRING, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(SpecParser.BooleanLiteral, 0); }
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_literal; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(SpecParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(SpecParser.RBRACK, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.COMMA);
		} else {
			return this.getToken(SpecParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_arrayLiteral; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterArrayLiteral) {
			listener.enterArrayLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitArrayLiteral) {
			listener.exitArrayLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(SpecParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(SpecParser.RBRACE, 0); }
	public objectPair(): ObjectPairContext[];
	public objectPair(i: number): ObjectPairContext;
	public objectPair(i?: number): ObjectPairContext | ObjectPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectPairContext);
		} else {
			return this.getRuleContext(i, ObjectPairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.COMMA);
		} else {
			return this.getToken(SpecParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_objectLiteral; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterObjectLiteral) {
			listener.enterObjectLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitObjectLiteral) {
			listener.exitObjectLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitObjectLiteral) {
			return visitor.visitObjectLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectPairContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(SpecParser.COLON, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SpecParser.STRING, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(SpecParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_objectPair; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterObjectPair) {
			listener.enterObjectPair(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitObjectPair) {
			listener.exitObjectPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitObjectPair) {
			return visitor.visitObjectPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_compOp; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterCompOp) {
			listener.enterCompOp(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitCompOp) {
			listener.exitCompOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitCompOp) {
			return visitor.visitCompOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


