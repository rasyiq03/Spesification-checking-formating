// /web/lib/testGenerator.tsx

export type UnitTestSnippet = {
  title: string;
  code: string;
};

/**
 * Generate Jest unit tests directly from DSL AST.
 * FIX V6: Smarter Input Derivation (Constraint Solving)
 * - Base value changed to 50 to allow subtraction safely.
 * - Better handling of Date/String logical comparisons.
 */
export function generateUnitTestsFromAST(tree: any): UnitTestSnippet[] {
  const tests: UnitTestSnippet[] = [];

  // --- AST HELPERS ---
  const getText = (node: any): string => {
    if (!node) return '';
    if (typeof node.getText === 'function') return node.getText();
    return node.text ?? '';
  };

  const reconstructText = (ctx: any): string => {
    if (!ctx) return '';
    if (ctx.symbol) return ctx.text;
    if (Array.isArray(ctx.children) && ctx.children.length > 0) {
      return ctx.children.map((child: any) => reconstructText(child)).join(' ');
    }
    return ctx.text || '';
  };

  const getNodes = (ctx: any, ruleName: string): any[] => {
    if (!ctx) return [];
    if (typeof ctx[ruleName] === 'function') {
      const res = ctx[ruleName]();
      return Array.isArray(res) ? res : res ? [res] : [];
    }
    if (Array.isArray(ctx.children)) {
      return ctx.children.filter((c: any) =>
        c.constructor?.name?.toLowerCase().includes(ruleName.toLowerCase())
      );
    }
    return [];
  };

  // --- TRAVERSAL ---
  const systems = getNodes(tree, 'systemDecl');

  for (const system of systems) {
    const systemName = reconstructText(system.name) || 'System';
    const features = getNodes(system, 'featureDecl');

    for (const feature of features) {
      const featureName = reconstructText(feature.name) || 'Feature';
      const rules = getNodes(feature, 'ruleDecl');

      for (const rule of rules) {
        const ruleName = reconstructText(rule.name) || 'Rule';
        
        const ifThen = getNodes(rule, 'ifThenEffect')[0];
        if (!ifThen) continue;

        const conditionCtx = ifThen.condition || getNodes(ifThen, 'expr')[0];
        if (!conditionCtx) continue;
        const rawCondition = reconstructText(conditionCtx);

        const effectBlock = getNodes(ifThen, 'effectBlock')[0];
        if (!effectBlock) continue;

        const assignments = getNodes(effectBlock, 'assignmentEffect');
        const effectLines: string[] = [];
        let allEffectTextForInputScanning = ""; 

        let firstVar = '';
        let firstVal = '';

        for (const assign of assignments) {
          const pathCtx = getNodes(assign, 'path')[0];
          const exprCtx = getNodes(assign, 'expr')[0];

          if (pathCtx && exprCtx) {
            const varName = reconstructText(pathCtx).replace(/\s+/g, '');
            let varValue = reconstructText(exprCtx);
            
            allEffectTextForInputScanning += " " + varValue;
            const processedValue = addContextPrefix(varValue);

            effectLines.push(`output.${varName} = ${processedValue};`);

            if (!firstVar) {
              firstVar = varName;
              firstVal = processedValue;
            }
          }
        }

        const combinedTextForScanning = rawCondition + " " + allEffectTextForInputScanning;
        const inputs = deriveInputs(combinedTextForScanning);
        
        const title = `${systemName} > ${featureName} > ${ruleName}`;

        const code = generateJestTest(
          title,
          rawCondition,
          effectLines,
          inputs,
          firstVar,
          firstVal
        );

        tests.push({ title, code });
      }
    }
  }

  return tests;
}

// ======================================================
// CODE GENERATION
// ======================================================

function generateJestTest(
  title: string,
  condition: string,
  effectLines: string[],
  inputs: Record<string, any>,
  assertVar: string,
  assertVal: string
): string {
  
  const jsCondition = addContextPrefix(condition)
    .replace(/\band\b/g, '&&')
    .replace(/\bor\b/g, '||')
    .replace(/\bnot\b/g, '!');

  const effectsBlock = effectLines.length > 0 ? effectLines.join('\n    ') : '// No effects';
  
  // Handling Assertion Value
  let assertValueCode = assertVal;
  // Jika assertVal adalah string literal, biarkan. Jika variabel context, pastikan prefix benar.
  // Sudah dihandle oleh addContextPrefix di loop utama, tapi kita pastikan di sini aman.

  const assertion = assertVar 
    ? `expect(output.${assertVar}).toBe(${assertValueCode});` 
    : '// No assertion possible';

  return `
test('${title}', () => {
  // Arrange
  const context: any = ${JSON.stringify(inputs, null, 2)};
  const output: Record<string, any> = {};

  // Act
  if (${jsCondition}) {
    ${effectsBlock}
  }

  // Assert
  ${assertion}
});
`.trim();
}

// ======================================================
// HELPERS
// ======================================================

function addContextPrefix(text: string): string {
  return text.replace(/("[^"]*"|'[^\']*'|\b[a-zA-Z_]\w*\b)/g, (m) => {
    if (m.startsWith('"') || m.startsWith("'")) return m;
    if (!isNaN(Number(m))) return m;
    if (['true', 'false', 'null', 'undefined'].includes(m)) return m;
    if (['and', 'or', 'not', 'if', 'then', 'do'].includes(m)) return m;
    return `context.${m}`;
  });
}

function deriveInputs(textToScan: string): Record<string, any> {
  const inputs: Record<string, any> = {};
  
  // Regex Comparison: Menangkap Var Oper Value
  const regexComparison = /([a-zA-Z_]\w*)\s*(>=|<=|==|>|<)\s*(\d+|true|false|"[^"]*")/g;
  // Regex Variable Finder: Menangkap semua variabel
  const regexVariable = /\b([a-zA-Z_]\w*)\b/g;

  const keywords = new Set(['if', 'then', 'do', 'and', 'or', 'not', 'true', 'false', 'null']);

  // 1. Scan Variable yang berdiri sendiri dulu untuk set DEFAULT
  let match;
  while ((match = regexVariable.exec(textToScan))) {
    const word = match[1];
    if (!keywords.has(word) && isNaN(Number(word))) {
      // LOGIC FIX: Beri nilai default 50 (tengah-tengah)
      // Agar kalau dikurangi 1 tidak jadi 0, kalau ditambah tidak overflow aneh
      // Kecuali jika nama variabel mengandung 'Date' atau 'Code', beri string/angka spesifik
      if (word.toLowerCase().includes('date')) inputs[word] = 20240101; 
      else if (word.toLowerCase().includes('code')) inputs[word] = "DEFAULT_CODE";
      else inputs[word] = 50; 
    }
  }

  // 2. Scan Comparison untuk OVERRIDE nilai agar kondisi terpenuhi (Satisfiability)
  // Reset regex index karena kita scan ulang string yang sama
  regexComparison.lastIndex = 0; 
  while ((match = regexComparison.exec(textToScan))) {
    const [, variable, operator, rawValue] = match;
    let value: any = rawValue;

    if (rawValue === 'true') value = true;
    else if (rawValue === 'false') value = false;
    else if (rawValue.startsWith('"')) value = rawValue.replace(/"/g, ''); 
    else if (!isNaN(Number(rawValue))) value = Number(rawValue);

    if (typeof value === 'number') {
      if (operator === '>') inputs[variable] = value + 1;
      else if (operator === '<') inputs[variable] = value - 1;
      else if (operator === '>=') inputs[variable] = value;
      else if (operator === '<=') inputs[variable] = value;
      else if (operator === '==') inputs[variable] = value;
    } else {
      // String / Boolean equality
      if (operator === '==') inputs[variable] = value;
      if (operator === '!=') {
        if (typeof value === 'boolean') inputs[variable] = !value;
        else inputs[variable] = "DIFFERENT_VALUE";
      }
    }
  }

  // 3. Logic khusus untuk perbandingan antar dua variabel (Var1 > Var2)
  // Ini level lanjut, kita coba regex sederhana: Var1 > Var2
  const regexVarToVar = /([a-zA-Z_]\w*)\s*(>|<|>=|<=|==)\s*([a-zA-Z_]\w*)/g;
  while ((match = regexVarToVar.exec(textToScan))) {
    const [, var1, op, var2] = match;
    // Hindari keyword
    if (keywords.has(var1) || keywords.has(var2)) continue;

    const val1 = inputs[var1];
    const val2 = inputs[var2];

    // Jika keduanya angka (default 50), kita manipulasi salah satu
    if (typeof val1 === 'number' && typeof val2 === 'number') {
      if (op === '>') inputs[var1] = val2 + 10;
      else if (op === '<') inputs[var1] = val2 - 10;
      else if (op === '==') inputs[var1] = val2;
    }
  }

  return Object.keys(inputs).length ? inputs : { sampleInput: 50 };
}