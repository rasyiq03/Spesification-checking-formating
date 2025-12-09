// packages/web/lib/testGenerator.ts

export type UnitTestSnippet = { title: string; code: string };

/**
 * Generate functional unit tests based on the AST Rule definitions.
 * Versi Robust: Mengakses method generated ANTLR (misal: ctx.systemDecl()) secara langsung.
 */
export function generateUnitTestsFromDiagnostics(tree: any, rawDiagnostics: any): UnitTestSnippet[] {
  const tests: UnitTestSnippet[] = [];

  // ==========================================
  // 1. SAFE ACCESS HELPERS (Kunci Perbaikan)
  // ==========================================

  // Helper untuk mendapatkan text aman
  const getText = (node: any): string => {
    if (!node) return '';
    if (typeof node.getText === 'function') return node.getText();
    if (node.text) return node.text;
    return '';
  };

  /**
   * Helper Sakti: Mencoba mengambil children dengan segala cara.
   * Prioritas 1: Panggil method context (misal: ctx.systemDecl())
   * Prioritas 2: Filter children manual (fallback)
   */
  const getNodes = (ctx: any, ruleName: string): any[] => {
    if (!ctx) return [];

    // CARA 1: Coba panggil method generated ANTLR (misal: tree.systemDecl())
    if (typeof ctx[ruleName] === 'function') {
      const result = ctx[ruleName]();
      // Pastikan hasil adalah array (ANTLR mengembalikan array untuk rule bertanda + atau *)
      if (Array.isArray(result)) return result;
      // Jika return single object, bungkus jadi array
      if (result) return [result];
    }

    // CARA 2: Fallback manual filter children (jika method tidak ketemu)
    if (ctx.children && Array.isArray(ctx.children)) {
      return ctx.children.filter((child: any) => {
        const cName = child.constructor ? child.constructor.name : '';
        return cName.toLowerCase().includes(ruleName.toLowerCase());
      });
    }

    return [];
  };

  /**
   * Helper Khusus: Mengambil single child (misal: ifThenEffect)
   */
  const getSingleNode = (ctx: any, ruleName: string): any => {
    const nodes = getNodes(ctx, ruleName);
    return nodes.length > 0 ? nodes[0] : null;
  };

  // ==========================================
  // 2. MAIN LOGIC TRAVERSAL
  // ==========================================

  // Langkah 1: Ambil semua System Declaration
  // (Sesuai grammar: specification : systemDecl+ EOF ;)
  const systems = getNodes(tree, 'systemDecl');
  
  for (const system of systems) {
    const systemName = system.name ? getText(system.name) : 'UnnamedSystem';

    // Langkah 2: Ambil semua Feature Declaration di dalam System
    const features = getNodes(system, 'featureDecl');

    for (const feature of features) {
      const featureName = feature.name ? getText(feature.name) : 'UnnamedFeature';

      // Langkah 3: Ambil semua Rule Declaration di dalam Feature
      const rules = getNodes(feature, 'ruleDecl');

      for (const rule of rules) {
        const ruleName = rule.name ? getText(rule.name) : 'UnnamedRule';

        // Langkah 4: Ambil isi Rule (If-Then Logic)
        const ifThen = getSingleNode(rule, 'ifThenEffect');
        if (!ifThen) continue;

        // Ambil Condition dan Effects
        // Note: Property 'condition' dan 'effects' biasanya dibuat oleh ANTLR jika ada label di grammar,
        // tapi jika tidak, kita cari berdasarkan ruleName-nya.
        // Di grammar Anda: ifThenEffect : IF condition=expr THEN effects=effectList ;
        
        // Akses properti 'condition' (karena dilabeli 'condition=expr')
        const conditionCtx = ifThen.condition || getSingleNode(ifThen, 'expr');
        
        // Akses properti 'effects' (karena dilabeli 'effects=effectList')
        const effectListCtx = ifThen.effects || ifThen.effectList || getSingleNode(ifThen, 'effectList');

        if (!conditionCtx) continue;

        // Ekstrak string logika mentah
        const rawCondition = getText(conditionCtx);
        const rawEffect = effectListCtx ? getText(effectListCtx) : getText(ifThen); // Fallback ambil text full jika effectList null

        // ==========================================
        // 3. GENERATE TEST CODE
        // ==========================================
        
        const { inputs } = analyzeConditionForInputs(rawCondition);

        // Ubah operator spec (and, or, not) ke JS (&&, ||, !)
        const jsCondition = rawCondition
            .replace(/\band\b/g, '&&')
            .replace(/\bor\b/g, '||')
            .replace(/\bnot\b/g, '!');

        const title = `${systemName} > ${featureName} > ${ruleName}`;
        
        const code = `
test('${title} should trigger correctly', () => {
  // 1. Arrange: Setup input data based on condition: "${rawCondition}"
  const inputs = ${JSON.stringify(inputs, null, 2)};

  // 2. Act: Simulate logic
  const context = { ...inputs }; 
  let output = {};

  // Rule Logic Simulation
  if (${convertVariablesToContext(jsCondition)}) {
    // Expected Effect: ${rawEffect}
    ${convertEffectToJs(rawEffect)}
  }

  // 3. Assert: Verify logic execution
  ${generateAssertion(rawEffect)}
});
`;
        tests.push({ title, code });
      }
    }
  }

  return tests;
}

// ==========================================
// 4. GENERATION HELPERS
// ==========================================

function analyzeConditionForInputs(conditionStr: string) {
  const inputs: Record<string, any> = {};
  
  // Regex untuk menangkap variabel dan nilai
  const regex = /([a-zA-Z_]\w*)\s*(==|!=|>=|<=|>|<)\s*(".*?"|\d+|true|false)/g;
  let match;

  while ((match = regex.exec(conditionStr)) !== null) {
    const [_, variable, operator, valueStr] = match;
    let value: any = valueStr;

    if (valueStr === 'true') value = true;
    else if (valueStr === 'false') value = false;
    else if (valueStr.startsWith('"')) value = valueStr.replace(/"/g, ''); 
    else value = Number(valueStr);

    // Logic sederhana untuk membuat input yang memenuhi kondisi
    if (typeof value === 'number') {
      if (operator === '<') inputs[variable] = value - 1;
      else if (operator === '<=') inputs[variable] = value;
      else if (operator === '>') inputs[variable] = value + 1;
      else if (operator === '>=') inputs[variable] = value;
      else inputs[variable] = value;
    } else {
      inputs[variable] = value;
    }
  }
  
  if (Object.keys(inputs).length === 0) {
    inputs['sampleInput'] = "CHANGE_ME";
  }

  return { inputs };
}

function convertVariablesToContext(jsCondition: string): string {
  // Tambahkan 'context.' di depan variabel
  return jsCondition.replace(/\b([a-zA-Z_]\w*)\b/g, (match) => {
    if (['true', 'false', 'null', 'undefined', 'context'].includes(match)) return match;
    if (!isNaN(Number(match))) return match; 
    return `context.${match}`;
  });
}

function convertEffectToJs(rawEffect: string): string {
  // Bersihkan kata 'then' dan ubah '=' jadi 'output.x = y'
  const cleanEffect = rawEffect.replace(/^then\s+/i, '').trim();
  
  return cleanEffect.split(/[,;]/).map(eff => {
    if (!eff.includes('=')) return `// ${eff}`;
    const [left, right] = eff.split('=');
    return `output.${left.trim()} = ${right.trim()};`;
  }).join('\n    ');
}

function generateAssertion(rawEffect: string): string {
  const cleanEffect = rawEffect.replace(/^then\s+/i, '').trim();
  const parts = cleanEffect.split('=');
  
  if (parts.length < 2) return `// Could not generate assertion`;
  
  const variable = parts[0].trim();
  let expectedValue = parts.slice(1).join('=').replace(/;$/, '').trim(); 
  
  return `expect(output.${variable}).toBe(${expectedValue});`;
}