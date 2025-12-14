// testGenerator.ts
// FINAL — ZERO DEPENDENCY TEST GENERATOR
// Output: Pure Jest tests (copy–paste ready)

export type UnitTestSnippet = {
  title: string;
  code: string;
};

/**
 * Generate Jest unit tests directly from DSL AST.
 * The generated tests are completely standalone.
 */
export function generateUnitTestsFromAST(tree: any): UnitTestSnippet[] {
  const tests: UnitTestSnippet[] = [];

  // ------------------------------
  // AST SAFE HELPERS
  // ------------------------------

  const getText = (node: any): string => {
    if (!node) return '';
    if (typeof node.getText === 'function') return node.getText();
    return node.text ?? '';
  };

  const getNodes = (ctx: any, ruleName: string): any[] => {
    if (!ctx) return [];

    // Prefer generated ANTLR accessors
    if (typeof ctx[ruleName] === 'function') {
      const res = ctx[ruleName]();
      return Array.isArray(res) ? res : res ? [res] : [];
    }

    // Fallback: manual children scan
    if (Array.isArray(ctx.children)) {
      return ctx.children.filter((c: any) =>
        c.constructor?.name?.toLowerCase().includes(ruleName.toLowerCase())
      );
    }

    return [];
  };

  // ------------------------------
  // MAIN TRAVERSAL
  // ------------------------------

  const systems = getNodes(tree, 'systemDecl');

  for (const system of systems) {
    const systemName = getText(system.name) || 'System';

    const features = getNodes(system, 'featureDecl');
    for (const feature of features) {
      const featureName = getText(feature.name) || 'Feature';

      const rules = getNodes(feature, 'ruleDecl');
      for (const rule of rules) {
        const ruleName = getText(rule.name) || 'Rule';

        const ifThen = getNodes(rule, 'ifThenEffect')[0];
        if (!ifThen) continue;

        const conditionCtx = ifThen.condition || getNodes(ifThen, 'expr')[0];
        const effectCtx =
          ifThen.effects ||
          ifThen.effectList ||
          getNodes(ifThen, 'effectList')[0] ||
          ifThen;

        if (!conditionCtx) continue;

        const rawCondition = getText(conditionCtx);
        const rawEffect = getText(effectCtx);

        const inputs = deriveInputs(rawCondition);

        const title = `${systemName} > ${featureName} > ${ruleName}`;

        const code = generateJestTest(
          title,
          rawCondition,
          rawEffect,
          inputs
        );

        tests.push({ title, code });
      }
    }
  }

  return tests;
}

// ======================================================
// CODE GENERATION (PURE STRING OUTPUT)
// ======================================================

function generateJestTest(
  title: string,
  condition: string,
  effect: string,
  inputs: Record<string, any>
): string {
  return `
test('${title}', () => {
  // Arrange
  const context = ${JSON.stringify(inputs, null, 2)};
  const output: any = {};

  // Act
  if (${toJsCondition(condition)}) {
    ${toJsEffects(effect)}
  }

  // Assert
  ${generateAssertion(effect)}
});
`.trim();
}

// ======================================================
// TRANSLATION HELPERS (DSL → JS)
// ======================================================

function toJsCondition(condition: string): string {
  return condition
    .replace(/\\band\\b/g, '&&')
    .replace(/\\bor\\b/g, '||')
    .replace(/\\bnot\\b/g, '!')
    .replace(/\\b([a-zA-Z_]\\w*)\\b/g, (m) => {
      if (['true', 'false'].includes(m)) return m;
      if (!isNaN(Number(m))) return m;
      return `context.${m}`;
    });
}

function toJsEffects(effect: string): string {
  return effect
    .replace(/^then\\s*/i, '')
    .split(/[,;]/)
    .map(e => {
      const [l, r] = e.split('=');
      if (!l || !r) return '';
      return `output.${l.trim()} = ${r.trim()};`;
    })
    .join('\\n    ');
}

function generateAssertion(effect: string): string {
  const cleaned = effect.replace(/^then\\s*/i, '');
  const [l, r] = cleaned.split('=');
  if (!l || !r) return '// Assertion could not be generated';
  return `expect(output.${l.trim()}).toBe(${r.trim()});`;
}

// ======================================================
// INPUT DERIVATION (MINIMAL SATISFYING VALUES)
// ======================================================

function deriveInputs(condition: string): Record<string, any> {
  const inputs: Record<string, any> = {};
  const regex = /([a-zA-Z_]\\w*)\\s*(>=|<=|==|>|<)\\s*(\\d+|true|false)/g;

  let match;
  while ((match = regex.exec(condition))) {
    const [, variable, operator, rawValue] = match;
    const value =
      rawValue === 'true'
        ? true
        : rawValue === 'false'
        ? false
        : Number(rawValue);

    if (typeof value === 'number') {
      inputs[variable] =
        operator.includes('>') ? value + 1 : value;
    } else {
      inputs[variable] = value;
    }
  }

  return Object.keys(inputs).length ? inputs : { sampleInput: 1 };
}
