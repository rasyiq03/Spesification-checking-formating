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
	public static readonly SYSTEM = 10;
	public static readonly FEATURE = 11;
	public static readonly INPUT = 12;
	public static readonly OUTPUT = 13;
	public static readonly PRECONDITION = 14;
	public static readonly POSTCONDITION = 15;
	public static readonly RULE = 16;
	public static readonly IF = 17;
	public static readonly THEN = 18;
	public static readonly DO = 19;
	public static readonly AND = 20;
	public static readonly OR = 21;
	public static readonly NOT = 22;
	public static readonly BOOLEAN = 23;
	public static readonly PLUS = 24;
	public static readonly MINUS = 25;
	public static readonly STAR = 26;
	public static readonly SLASH = 27;
	public static readonly EQ = 28;
	public static readonly EQEQ = 29;
	public static readonly NEQ = 30;
	public static readonly GTE = 31;
	public static readonly LTE = 32;
	public static readonly GT = 33;
	public static readonly LT = 34;
	public static readonly NUMBER = 35;
	public static readonly FLOAT = 36;
	public static readonly STRING = 37;
	public static readonly ID = 38;
	public static readonly WS = 39;
	public static readonly LINE_COMMENT = 40;
	public static readonly BLOCK_COMMENT = 41;
	public static readonly ERROR_CHAR = 42;
	public static readonly RULE_specification = 0;
	public static readonly RULE_systemDecl = 1;
	public static readonly RULE_featureDecl = 2;
	public static readonly RULE_inputDecl = 3;
	public static readonly RULE_outputDecl = 4;
	public static readonly RULE_preconditionDecl = 5;
	public static readonly RULE_postconditionDecl = 6;
	public static readonly RULE_ruleDecl = 7;
	public static readonly RULE_ifThenEffect = 8;
	public static readonly RULE_effectBlock = 9;
	public static readonly RULE_assignmentEffect = 10;
	public static readonly RULE_expr = 11;
	public static readonly RULE_orExpr = 12;
	public static readonly RULE_andExpr = 13;
	public static readonly RULE_notExpr = 14;
	public static readonly RULE_relationalExpr = 15;
	public static readonly RULE_additiveExpr = 16;
	public static readonly RULE_multiplicativeExpr = 17;
	public static readonly RULE_unaryExpr = 18;
	public static readonly RULE_primaryExpr = 19;
	public static readonly RULE_idList = 20;
	public static readonly RULE_path = 21;
	public static readonly RULE_literal = 22;
	public static readonly RULE_compOp = 23;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"specification", "systemDecl", "featureDecl", "inputDecl", "outputDecl", 
		"preconditionDecl", "postconditionDecl", "ruleDecl", "ifThenEffect", "effectBlock", 
		"assignmentEffect", "expr", "orExpr", "andExpr", "notExpr", "relationalExpr", 
		"additiveExpr", "multiplicativeExpr", "unaryExpr", "primaryExpr", "idList", 
		"path", "literal", "compOp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "'}'", "':'", "'('", "')'", "','", "'.'", "'['", "']'", 
		"'system'", "'feature'", "'input'", "'output'", "'precondition'", "'postcondition'", 
		"'rule'", "'if'", "'then'", "'do'", "'and'", "'or'", "'not'", undefined, 
		"'+'", "'-'", "'*'", "'/'", "'='", "'=='", "'!='", "'>='", "'<='", "'>'", 
		"'<'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "SYSTEM", "FEATURE", "INPUT", "OUTPUT", 
		"PRECONDITION", "POSTCONDITION", "RULE", "IF", "THEN", "DO", "AND", "OR", 
		"NOT", "BOOLEAN", "PLUS", "MINUS", "STAR", "SLASH", "EQ", "EQEQ", "NEQ", 
		"GTE", "LTE", "GT", "LT", "NUMBER", "FLOAT", "STRING", "ID", "WS", "LINE_COMMENT", 
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


	  public override notifyErrorListeners(msg: any, offendingToken?: any, e?: any): void {
	    const location = offendingToken && offendingToken.line !== undefined
	      ? ` at line ${offendingToken.line}, column ${offendingToken.charPositionInLine}`
	      : "";
	    super.notifyErrorListeners("Syntax Error" + location + ": " + msg, offendingToken, e);
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
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 48;
				this.systemDecl();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SpecParser.SYSTEM);
			this.state = 53;
			this.match(SpecParser.EOF);
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
	public systemDecl(): SystemDeclContext {
		let _localctx: SystemDeclContext = new SystemDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SpecParser.RULE_systemDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.match(SpecParser.SYSTEM);
			this.state = 56;
			this.match(SpecParser.ID);
			this.state = 57;
			this.match(SpecParser.T__0);
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 58;
				this.featureDecl();
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SpecParser.FEATURE);
			this.state = 63;
			this.match(SpecParser.T__1);
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
			this.state = 65;
			this.match(SpecParser.FEATURE);
			this.state = 66;
			this.match(SpecParser.ID);
			this.state = 67;
			this.match(SpecParser.T__0);
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SpecParser.INPUT) | (1 << SpecParser.OUTPUT) | (1 << SpecParser.PRECONDITION) | (1 << SpecParser.POSTCONDITION) | (1 << SpecParser.RULE))) !== 0)) {
				{
				this.state = 73;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SpecParser.INPUT:
					{
					this.state = 68;
					this.inputDecl();
					}
					break;
				case SpecParser.OUTPUT:
					{
					this.state = 69;
					this.outputDecl();
					}
					break;
				case SpecParser.PRECONDITION:
					{
					this.state = 70;
					this.preconditionDecl();
					}
					break;
				case SpecParser.POSTCONDITION:
					{
					this.state = 71;
					this.postconditionDecl();
					}
					break;
				case SpecParser.RULE:
					{
					this.state = 72;
					this.ruleDecl();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 78;
			this.match(SpecParser.T__1);
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
			this.state = 80;
			this.match(SpecParser.INPUT);
			this.state = 81;
			this.match(SpecParser.T__2);
			this.state = 82;
			this.idList();
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
			this.state = 84;
			this.match(SpecParser.OUTPUT);
			this.state = 85;
			this.match(SpecParser.T__2);
			this.state = 86;
			this.idList();
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
		this.enterRule(_localctx, 10, SpecParser.RULE_preconditionDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(SpecParser.PRECONDITION);
			this.state = 89;
			this.match(SpecParser.T__2);
			this.state = 90;
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
	public postconditionDecl(): PostconditionDeclContext {
		let _localctx: PostconditionDeclContext = new PostconditionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SpecParser.RULE_postconditionDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(SpecParser.POSTCONDITION);
			this.state = 93;
			this.match(SpecParser.T__2);
			this.state = 94;
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
	public ruleDecl(): RuleDeclContext {
		let _localctx: RuleDeclContext = new RuleDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SpecParser.RULE_ruleDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(SpecParser.RULE);
			this.state = 97;
			this.match(SpecParser.ID);
			this.state = 98;
			this.match(SpecParser.T__2);
			this.state = 99;
			this.ifThenEffect();
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
		this.enterRule(_localctx, 16, SpecParser.RULE_ifThenEffect);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(SpecParser.IF);
			this.state = 102;
			this.expr();
			this.state = 103;
			this.match(SpecParser.THEN);
			this.state = 104;
			this.match(SpecParser.DO);
			this.state = 105;
			this.effectBlock();
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
	public effectBlock(): EffectBlockContext {
		let _localctx: EffectBlockContext = new EffectBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SpecParser.RULE_effectBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 107;
				this.assignmentEffect();
				}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SpecParser.ID);
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
		this.enterRule(_localctx, 20, SpecParser.RULE_assignmentEffect);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.path();
			this.state = 113;
			this.match(SpecParser.EQ);
			this.state = 114;
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
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SpecParser.RULE_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
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
		this.enterRule(_localctx, 24, SpecParser.RULE_orExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.andExpr();
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.OR) {
				{
				{
				this.state = 119;
				this.match(SpecParser.OR);
				this.state = 120;
				this.andExpr();
				}
				}
				this.state = 125;
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
		this.enterRule(_localctx, 26, SpecParser.RULE_andExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.notExpr();
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.AND) {
				{
				{
				this.state = 127;
				this.match(SpecParser.AND);
				this.state = 128;
				this.notExpr();
				}
				}
				this.state = 133;
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
		this.enterRule(_localctx, 28, SpecParser.RULE_notExpr);
		try {
			this.state = 137;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SpecParser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 134;
				this.match(SpecParser.NOT);
				this.state = 135;
				this.notExpr();
				}
				break;
			case SpecParser.T__3:
			case SpecParser.BOOLEAN:
			case SpecParser.PLUS:
			case SpecParser.MINUS:
			case SpecParser.NUMBER:
			case SpecParser.FLOAT:
			case SpecParser.STRING:
			case SpecParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 136;
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
		this.enterRule(_localctx, 30, SpecParser.RULE_relationalExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this.additiveExpr();
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (SpecParser.EQEQ - 29)) | (1 << (SpecParser.NEQ - 29)) | (1 << (SpecParser.GTE - 29)) | (1 << (SpecParser.LTE - 29)) | (1 << (SpecParser.GT - 29)) | (1 << (SpecParser.LT - 29)))) !== 0)) {
				{
				this.state = 140;
				this.compOp();
				this.state = 141;
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
		this.enterRule(_localctx, 32, SpecParser.RULE_additiveExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.multiplicativeExpr();
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.PLUS || _la === SpecParser.MINUS) {
				{
				{
				this.state = 146;
				_la = this._input.LA(1);
				if (!(_la === SpecParser.PLUS || _la === SpecParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 147;
				this.multiplicativeExpr();
				}
				}
				this.state = 152;
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
	public multiplicativeExpr(): MultiplicativeExprContext {
		let _localctx: MultiplicativeExprContext = new MultiplicativeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SpecParser.RULE_multiplicativeExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.unaryExpr();
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.STAR || _la === SpecParser.SLASH) {
				{
				{
				this.state = 154;
				_la = this._input.LA(1);
				if (!(_la === SpecParser.STAR || _la === SpecParser.SLASH)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 155;
				this.unaryExpr();
				}
				}
				this.state = 160;
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
		this.enterRule(_localctx, 36, SpecParser.RULE_unaryExpr);
		let _la: number;
		try {
			this.state = 164;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SpecParser.PLUS:
			case SpecParser.MINUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 161;
				_la = this._input.LA(1);
				if (!(_la === SpecParser.PLUS || _la === SpecParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 162;
				this.unaryExpr();
				}
				break;
			case SpecParser.T__3:
			case SpecParser.BOOLEAN:
			case SpecParser.NUMBER:
			case SpecParser.FLOAT:
			case SpecParser.STRING:
			case SpecParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 163;
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
		this.enterRule(_localctx, 38, SpecParser.RULE_primaryExpr);
		try {
			this.state = 172;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SpecParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 166;
				this.match(SpecParser.T__3);
				this.state = 167;
				this.expr();
				this.state = 168;
				this.match(SpecParser.T__4);
				}
				break;
			case SpecParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.path();
				}
				break;
			case SpecParser.BOOLEAN:
			case SpecParser.NUMBER:
			case SpecParser.FLOAT:
			case SpecParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 171;
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
		this.enterRule(_localctx, 40, SpecParser.RULE_idList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(SpecParser.ID);
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.T__5) {
				{
				{
				this.state = 175;
				this.match(SpecParser.T__5);
				this.state = 176;
				this.match(SpecParser.ID);
				}
				}
				this.state = 181;
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
		this.enterRule(_localctx, 42, SpecParser.RULE_path);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(SpecParser.ID);
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SpecParser.T__6 || _la === SpecParser.T__7) {
				{
				this.state = 189;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SpecParser.T__6:
					{
					this.state = 183;
					this.match(SpecParser.T__6);
					this.state = 184;
					this.match(SpecParser.ID);
					}
					break;
				case SpecParser.T__7:
					{
					this.state = 185;
					this.match(SpecParser.T__7);
					this.state = 186;
					this.expr();
					this.state = 187;
					this.match(SpecParser.T__8);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 193;
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SpecParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			_la = this._input.LA(1);
			if (!(((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (SpecParser.BOOLEAN - 23)) | (1 << (SpecParser.NUMBER - 23)) | (1 << (SpecParser.FLOAT - 23)) | (1 << (SpecParser.STRING - 23)))) !== 0))) {
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
	// @RuleVersion(0)
	public compOp(): CompOpContext {
		let _localctx: CompOpContext = new CompOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SpecParser.RULE_compOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (SpecParser.EQEQ - 29)) | (1 << (SpecParser.NEQ - 29)) | (1 << (SpecParser.GTE - 29)) | (1 << (SpecParser.LTE - 29)) | (1 << (SpecParser.GT - 29)) | (1 << (SpecParser.LT - 29)))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03,\xC9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x03\x02\x06\x024\n\x02\r\x02\x0E\x025\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03>\n\x03\r\x03\x0E\x03" +
		"?\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04L\n\x04\f\x04\x0E\x04O\v\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x06\vo\n\v\r\v\x0E\vp\x03\f" +
		"\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E|\n\x0E" +
		"\f\x0E\x0E\x0E\x7F\v\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\x84\n\x0F\f\x0F" +
		"\x0E\x0F\x87\v\x0F\x03\x10\x03\x10\x03\x10\x05\x10\x8C\n\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x05\x11\x92\n\x11\x03\x12\x03\x12\x03\x12\x07\x12" +
		"\x97\n\x12\f\x12\x0E\x12\x9A\v\x12\x03\x13\x03\x13\x03\x13\x07\x13\x9F" +
		"\n\x13\f\x13\x0E\x13\xA2\v\x13\x03\x14\x03\x14\x03\x14\x05\x14\xA7\n\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xAF\n\x15\x03" +
		"\x16\x03\x16\x03\x16\x07\x16\xB4\n\x16\f\x16\x0E\x16\xB7\v\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\xC0\n\x17\f\x17" +
		"\x0E\x17\xC3\v\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x02\x02\x02" +
		"\x1A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x02\x02\x06\x03\x02\x1A\x1B\x03\x02\x1C\x1D\x04" +
		"\x02\x19\x19%\'\x03\x02\x1F$\x02\xC4\x023\x03\x02\x02\x02\x049\x03\x02" +
		"\x02\x02\x06C\x03\x02\x02\x02\bR\x03\x02\x02\x02\nV\x03\x02\x02\x02\f" +
		"Z\x03\x02\x02\x02\x0E^\x03\x02\x02\x02\x10b\x03\x02\x02\x02\x12g\x03\x02" +
		"\x02\x02\x14n\x03\x02\x02\x02\x16r\x03\x02\x02\x02\x18v\x03\x02\x02\x02" +
		"\x1Ax\x03\x02\x02\x02\x1C\x80\x03\x02\x02\x02\x1E\x8B\x03\x02\x02\x02" +
		" \x8D\x03\x02\x02\x02\"\x93\x03\x02\x02\x02$\x9B\x03\x02\x02\x02&\xA6" +
		"\x03\x02\x02\x02(\xAE\x03\x02\x02\x02*\xB0\x03\x02\x02\x02,\xB8\x03\x02" +
		"\x02\x02.\xC4\x03\x02\x02\x020\xC6\x03\x02\x02\x0224\x05\x04\x03\x023" +
		"2\x03\x02\x02\x0245\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x02" +
		"67\x03\x02\x02\x0278\x07\x02\x02\x038\x03\x03\x02\x02\x029:\x07\f\x02" +
		"\x02:;\x07(\x02\x02;=\x07\x03\x02\x02<>\x05\x06\x04\x02=<\x03\x02\x02" +
		"\x02>?\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@A\x03\x02\x02" +
		"\x02AB\x07\x04\x02\x02B\x05\x03\x02\x02\x02CD\x07\r\x02\x02DE\x07(\x02" +
		"\x02EM\x07\x03\x02\x02FL\x05\b\x05\x02GL\x05\n\x06\x02HL\x05\f\x07\x02" +
		"IL\x05\x0E\b\x02JL\x05\x10\t\x02KF\x03\x02\x02\x02KG\x03\x02\x02\x02K" +
		"H\x03\x02\x02\x02KI\x03\x02\x02\x02KJ\x03\x02\x02\x02LO\x03\x02\x02\x02" +
		"MK\x03\x02\x02\x02MN\x03\x02\x02\x02NP\x03\x02\x02\x02OM\x03\x02\x02\x02" +
		"PQ\x07\x04\x02\x02Q\x07\x03\x02\x02\x02RS\x07\x0E\x02\x02ST\x07\x05\x02" +
		"\x02TU\x05*\x16\x02U\t\x03\x02\x02\x02VW\x07\x0F\x02\x02WX\x07\x05\x02" +
		"\x02XY\x05*\x16\x02Y\v\x03\x02\x02\x02Z[\x07\x10\x02\x02[\\\x07\x05\x02" +
		"\x02\\]\x05\x18\r\x02]\r\x03\x02\x02\x02^_\x07\x11\x02\x02_`\x07\x05\x02" +
		"\x02`a\x05\x18\r\x02a\x0F\x03\x02\x02\x02bc\x07\x12\x02\x02cd\x07(\x02" +
		"\x02de\x07\x05\x02\x02ef\x05\x12\n\x02f\x11\x03\x02\x02\x02gh\x07\x13" +
		"\x02\x02hi\x05\x18\r\x02ij\x07\x14\x02\x02jk\x07\x15\x02\x02kl\x05\x14" +
		"\v\x02l\x13\x03\x02\x02\x02mo\x05\x16\f\x02nm\x03\x02\x02\x02op\x03\x02" +
		"\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02q\x15\x03\x02\x02\x02rs\x05" +
		",\x17\x02st\x07\x1E\x02\x02tu\x05\x18\r\x02u\x17\x03\x02\x02\x02vw\x05" +
		"\x1A\x0E\x02w\x19\x03\x02\x02\x02x}\x05\x1C\x0F\x02yz\x07\x17\x02\x02" +
		"z|\x05\x1C\x0F\x02{y\x03\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02" +
		"\x02}~\x03\x02\x02\x02~\x1B\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x85" +
		"\x05\x1E\x10\x02\x81\x82\x07\x16\x02\x02\x82\x84\x05\x1E\x10\x02\x83\x81" +
		"\x03\x02\x02\x02\x84\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86" +
		"\x03\x02\x02\x02\x86\x1D\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x89" +
		"\x07\x18\x02\x02\x89\x8C\x05\x1E\x10\x02\x8A\x8C\x05 \x11\x02\x8B\x88" +
		"\x03\x02\x02\x02\x8B\x8A\x03\x02\x02\x02\x8C\x1F\x03\x02\x02\x02\x8D\x91" +
		"\x05\"\x12\x02\x8E\x8F\x050\x19\x02\x8F\x90\x05\"\x12\x02\x90\x92\x03" +
		"\x02\x02\x02\x91\x8E\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92!\x03" +
		"\x02\x02\x02\x93\x98\x05$\x13\x02\x94\x95\t\x02\x02\x02\x95\x97\x05$\x13" +
		"\x02\x96\x94\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02" +
		"\x02\x98\x99\x03\x02\x02\x02\x99#\x03\x02\x02\x02\x9A\x98\x03\x02\x02" +
		"\x02\x9B\xA0\x05&\x14\x02\x9C\x9D\t\x03\x02\x02\x9D\x9F\x05&\x14\x02\x9E" +
		"\x9C\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0" +
		"\xA1\x03\x02\x02\x02\xA1%\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3" +
		"\xA4\t\x02\x02\x02\xA4\xA7\x05&\x14\x02\xA5\xA7\x05(\x15\x02\xA6\xA3\x03" +
		"\x02\x02\x02\xA6\xA5\x03\x02\x02\x02\xA7\'\x03\x02\x02\x02\xA8\xA9\x07" +
		"\x06\x02\x02\xA9\xAA\x05\x18\r\x02\xAA\xAB\x07\x07\x02\x02\xAB\xAF\x03" +
		"\x02\x02\x02\xAC\xAF\x05,\x17\x02\xAD\xAF\x05.\x18\x02\xAE\xA8\x03\x02" +
		"\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAD\x03\x02\x02\x02\xAF)\x03\x02" +
		"\x02\x02\xB0\xB5\x07(\x02\x02\xB1\xB2\x07\b\x02\x02\xB2\xB4\x07(\x02\x02" +
		"\xB3\xB1\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02" +
		"\xB5\xB6\x03\x02\x02\x02\xB6+\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02" +
		"\xB8\xC1\x07(\x02\x02\xB9\xBA\x07\t\x02\x02\xBA\xC0\x07(\x02\x02\xBB\xBC" +
		"\x07\n\x02\x02\xBC\xBD\x05\x18\r\x02\xBD\xBE\x07\v\x02\x02\xBE\xC0\x03" +
		"\x02\x02\x02\xBF\xB9\x03\x02\x02\x02\xBF\xBB\x03\x02\x02\x02\xC0\xC3\x03" +
		"\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2-\x03" +
		"\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC5\t\x04\x02\x02\xC5/\x03\x02" +
		"\x02\x02\xC6\xC7\t\x05\x02\x02\xC71\x03\x02\x02\x02\x125?KMp}\x85\x8B" +
		"\x91\x98\xA0\xA6\xAE\xB5\xBF\xC1";
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
	public SYSTEM(): TerminalNode { return this.getToken(SpecParser.SYSTEM, 0); }
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
	public FEATURE(): TerminalNode { return this.getToken(SpecParser.FEATURE, 0); }
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
	public INPUT(): TerminalNode { return this.getToken(SpecParser.INPUT, 0); }
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
	public OUTPUT(): TerminalNode { return this.getToken(SpecParser.OUTPUT, 0); }
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


export class PreconditionDeclContext extends ParserRuleContext {
	public PRECONDITION(): TerminalNode { return this.getToken(SpecParser.PRECONDITION, 0); }
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
	public POSTCONDITION(): TerminalNode { return this.getToken(SpecParser.POSTCONDITION, 0); }
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


export class RuleDeclContext extends ParserRuleContext {
	public RULE(): TerminalNode { return this.getToken(SpecParser.RULE, 0); }
	public ID(): TerminalNode { return this.getToken(SpecParser.ID, 0); }
	public ifThenEffect(): IfThenEffectContext {
		return this.getRuleContext(0, IfThenEffectContext);
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
	public IF(): TerminalNode { return this.getToken(SpecParser.IF, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public THEN(): TerminalNode { return this.getToken(SpecParser.THEN, 0); }
	public DO(): TerminalNode { return this.getToken(SpecParser.DO, 0); }
	public effectBlock(): EffectBlockContext {
		return this.getRuleContext(0, EffectBlockContext);
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


export class EffectBlockContext extends ParserRuleContext {
	public assignmentEffect(): AssignmentEffectContext[];
	public assignmentEffect(i: number): AssignmentEffectContext;
	public assignmentEffect(i?: number): AssignmentEffectContext | AssignmentEffectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentEffectContext);
		} else {
			return this.getRuleContext(i, AssignmentEffectContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SpecParser.RULE_effectBlock; }
	// @Override
	public enterRule(listener: SpecListener): void {
		if (listener.enterEffectBlock) {
			listener.enterEffectBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SpecListener): void {
		if (listener.exitEffectBlock) {
			listener.exitEffectBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SpecVisitor<Result>): Result {
		if (visitor.visitEffectBlock) {
			return visitor.visitEffectBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentEffectContext extends ParserRuleContext {
	public path(): PathContext {
		return this.getRuleContext(0, PathContext);
	}
	public EQ(): TerminalNode { return this.getToken(SpecParser.EQ, 0); }
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
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.PLUS);
		} else {
			return this.getToken(SpecParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.MINUS);
		} else {
			return this.getToken(SpecParser.MINUS, i);
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
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.STAR);
		} else {
			return this.getToken(SpecParser.STAR, i);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SpecParser.SLASH);
		} else {
			return this.getToken(SpecParser.SLASH, i);
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
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SpecParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SpecParser.MINUS, 0); }
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
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
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
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
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


export class LiteralContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(SpecParser.NUMBER, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(SpecParser.FLOAT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SpecParser.STRING, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(SpecParser.BOOLEAN, 0); }
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


export class CompOpContext extends ParserRuleContext {
	public EQEQ(): TerminalNode | undefined { return this.tryGetToken(SpecParser.EQEQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(SpecParser.NEQ, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(SpecParser.GTE, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(SpecParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SpecParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(SpecParser.LT, 0); }
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


