// Generated from E:\Semester 3\Programing Language Pragmatics\DSL - Requirement\018_023_Requirement Spesification and Testing project\spec-checker\grammar\Spec.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SpecParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SpecVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SpecParser.specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecification?: (ctx: SpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.systemDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSystemDecl?: (ctx: SystemDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.featureDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeatureDecl?: (ctx: FeatureDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.inputDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputDecl?: (ctx: InputDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.outputDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputDecl?: (ctx: OutputDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.preconditionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreconditionDecl?: (ctx: PreconditionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.postconditionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostconditionDecl?: (ctx: PostconditionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.ruleDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleDecl?: (ctx: RuleDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.ifThenEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenEffect?: (ctx: IfThenEffectContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.effectBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEffectBlock?: (ctx: EffectBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.assignmentEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentEffect?: (ctx: AssignmentEffectContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.orExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpr?: (ctx: OrExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.andExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpr?: (ctx: AndExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.notExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpr?: (ctx: NotExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.relationalExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpr?: (ctx: RelationalExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.additiveExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpr?: (ctx: AdditiveExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.multiplicativeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.unaryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpr?: (ctx: UnaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.primaryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.idList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdList?: (ctx: IdListContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath?: (ctx: PathContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SpecParser.compOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompOp?: (ctx: CompOpContext) => Result;
}

