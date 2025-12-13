// Generated from E:\Semester 3\Programing Language Pragmatics\DSL - Requirement\018_023_Requirement Spesification and Testing project\spec-checker\grammar\Spec.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SpecificationContext } from "./SpecParser";
import { SystemDeclContext } from "./SpecParser";
import { FeatureDeclContext } from "./SpecParser";
import { InputDeclContext } from "./SpecParser";
import { OutputDeclContext } from "./SpecParser";
import { PreconditionDeclContext } from "./SpecParser";
import { PostconditionDeclContext } from "./SpecParser";
import { RuleDeclContext } from "./SpecParser";
import { IfThenEffectContext } from "./SpecParser";
import { EffectBlockContext } from "./SpecParser";
import { AssignmentEffectContext } from "./SpecParser";
import { ExprContext } from "./SpecParser";
import { OrExprContext } from "./SpecParser";
import { AndExprContext } from "./SpecParser";
import { NotExprContext } from "./SpecParser";
import { RelationalExprContext } from "./SpecParser";
import { AdditiveExprContext } from "./SpecParser";
import { MultiplicativeExprContext } from "./SpecParser";
import { UnaryExprContext } from "./SpecParser";
import { PrimaryExprContext } from "./SpecParser";
import { IdListContext } from "./SpecParser";
import { PathContext } from "./SpecParser";
import { LiteralContext } from "./SpecParser";
import { CompOpContext } from "./SpecParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SpecParser`.
 */
export interface SpecListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SpecParser.specification`.
	 * @param ctx the parse tree
	 */
	enterSpecification?: (ctx: SpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.specification`.
	 * @param ctx the parse tree
	 */
	exitSpecification?: (ctx: SpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.systemDecl`.
	 * @param ctx the parse tree
	 */
	enterSystemDecl?: (ctx: SystemDeclContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.systemDecl`.
	 * @param ctx the parse tree
	 */
	exitSystemDecl?: (ctx: SystemDeclContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.featureDecl`.
	 * @param ctx the parse tree
	 */
	enterFeatureDecl?: (ctx: FeatureDeclContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.featureDecl`.
	 * @param ctx the parse tree
	 */
	exitFeatureDecl?: (ctx: FeatureDeclContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.inputDecl`.
	 * @param ctx the parse tree
	 */
	enterInputDecl?: (ctx: InputDeclContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.inputDecl`.
	 * @param ctx the parse tree
	 */
	exitInputDecl?: (ctx: InputDeclContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.outputDecl`.
	 * @param ctx the parse tree
	 */
	enterOutputDecl?: (ctx: OutputDeclContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.outputDecl`.
	 * @param ctx the parse tree
	 */
	exitOutputDecl?: (ctx: OutputDeclContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.preconditionDecl`.
	 * @param ctx the parse tree
	 */
	enterPreconditionDecl?: (ctx: PreconditionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.preconditionDecl`.
	 * @param ctx the parse tree
	 */
	exitPreconditionDecl?: (ctx: PreconditionDeclContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.postconditionDecl`.
	 * @param ctx the parse tree
	 */
	enterPostconditionDecl?: (ctx: PostconditionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.postconditionDecl`.
	 * @param ctx the parse tree
	 */
	exitPostconditionDecl?: (ctx: PostconditionDeclContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.ruleDecl`.
	 * @param ctx the parse tree
	 */
	enterRuleDecl?: (ctx: RuleDeclContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.ruleDecl`.
	 * @param ctx the parse tree
	 */
	exitRuleDecl?: (ctx: RuleDeclContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.ifThenEffect`.
	 * @param ctx the parse tree
	 */
	enterIfThenEffect?: (ctx: IfThenEffectContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.ifThenEffect`.
	 * @param ctx the parse tree
	 */
	exitIfThenEffect?: (ctx: IfThenEffectContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.effectBlock`.
	 * @param ctx the parse tree
	 */
	enterEffectBlock?: (ctx: EffectBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.effectBlock`.
	 * @param ctx the parse tree
	 */
	exitEffectBlock?: (ctx: EffectBlockContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.assignmentEffect`.
	 * @param ctx the parse tree
	 */
	enterAssignmentEffect?: (ctx: AssignmentEffectContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.assignmentEffect`.
	 * @param ctx the parse tree
	 */
	exitAssignmentEffect?: (ctx: AssignmentEffectContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.orExpr`.
	 * @param ctx the parse tree
	 */
	enterOrExpr?: (ctx: OrExprContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.orExpr`.
	 * @param ctx the parse tree
	 */
	exitOrExpr?: (ctx: OrExprContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.andExpr`.
	 * @param ctx the parse tree
	 */
	enterAndExpr?: (ctx: AndExprContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.andExpr`.
	 * @param ctx the parse tree
	 */
	exitAndExpr?: (ctx: AndExprContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.notExpr`.
	 * @param ctx the parse tree
	 */
	enterNotExpr?: (ctx: NotExprContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.notExpr`.
	 * @param ctx the parse tree
	 */
	exitNotExpr?: (ctx: NotExprContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.relationalExpr`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpr?: (ctx: RelationalExprContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.relationalExpr`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpr?: (ctx: RelationalExprContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.additiveExpr`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpr?: (ctx: AdditiveExprContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.additiveExpr`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpr?: (ctx: AdditiveExprContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.multiplicativeExpr`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.multiplicativeExpr`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.unaryExpr`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpr?: (ctx: UnaryExprContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.unaryExpr`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpr?: (ctx: UnaryExprContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpr?: (ctx: PrimaryExprContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpr?: (ctx: PrimaryExprContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.idList`.
	 * @param ctx the parse tree
	 */
	enterIdList?: (ctx: IdListContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.idList`.
	 * @param ctx the parse tree
	 */
	exitIdList?: (ctx: IdListContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.path`.
	 * @param ctx the parse tree
	 */
	enterPath?: (ctx: PathContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.path`.
	 * @param ctx the parse tree
	 */
	exitPath?: (ctx: PathContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SpecParser.compOp`.
	 * @param ctx the parse tree
	 */
	enterCompOp?: (ctx: CompOpContext) => void;
	/**
	 * Exit a parse tree produced by `SpecParser.compOp`.
	 * @param ctx the parse tree
	 */
	exitCompOp?: (ctx: CompOpContext) => void;
}

