// RuleEvaluator.ts
// Minimal, deterministic rule interpreter
// This is the UNIT UNDER TEST (SUT)

export type Context = Record<string, any>;
export type Output = Record<string, any>;

export type RuleAST = {
  condition: (ctx: Context) => boolean;
  effects: Array<(ctx: Context, out: Output) => void>;
};

/**
 * Evaluate a single rule AST against given context
 * Returns output mutations
 */
export function evaluateRule(rule: RuleAST, context: Context): Output {
  const output: Output = {};

  if (rule.condition(context)) {
    for (const effect of rule.effects) {
      effect(context, output);
    }
  }

  return output;
}
