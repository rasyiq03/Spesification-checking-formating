import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { SpecLexer } from '../../analyzer/src/parser/SpecLexer'; // Sesuaikan path import parser Anda
import { SpecParser } from '../../analyzer/src/parser/SpecParser'; // Sesuaikan path import parser Anda

export enum SpecLevel {
  SUMMARY = 'Summary (High Level)',
  TECHNICAL = 'Technical (Structured)',
  NATURAL = 'Natural Language (User Stories)'
}

export function generateReadableSpec(dslCode: string, level: SpecLevel): string {
  // 1. Parsing Cepat (On-the-fly)
  const chars = CharStreams.fromString(dslCode);
  const lexer = new SpecLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new SpecParser(tokens);
  
  // Matikan error listener agar tidak spam console saat export draft
  parser.removeErrorListeners();
  
  const tree = parser.specification();
  
  // 2. Traversal & Formatting
  const output: string[] = [];
  const systems = getNodes(tree, 'systemDecl');

  systems.forEach(sys => {
    const sysName = getText(sys.name);
    
    // Header System
    output.push('='.repeat(50));
    output.push(`SYSTEM SPECIFICATION: ${sysName.toUpperCase()}`);
    output.push('='.repeat(50));
    output.push(`Generated Date: ${new Date().toLocaleString()}\n`);

    const features = getNodes(sys, 'featureDecl');

    features.forEach((feat, i) => {
      const featName = getText(feat.name);
      
      // -- HEADER FEATURE --
      output.push(`Feature #${i + 1}: ${featName}`);
      output.push('-'.repeat(30));

      // Ambil Data
      const inputDecl = getNodes(feat, 'inputDecl')[0];
      const outputDecl = getNodes(feat, 'outputDecl')[0];
      const rules = getNodes(feat, 'ruleDecl');
      const preconditions = getNodes(feat, 'preconditionDecl');
      const postconditions = getNodes(feat, 'postconditionDecl');

      const inputs = inputDecl ? getText(inputDecl.idList()).split(',') : [];
      const outputs = outputDecl ? getText(outputDecl.idList()).split(',') : [];

      // -- FORMATTING BERDASARKAN LEVEL --

      // LEVEL 1: SUMMARY
      if (level === SpecLevel.SUMMARY) {
        output.push(`   Inputs  : ${inputs.join(', ') || '-'}`);
        output.push(`   Outputs : ${outputs.join(', ') || '-'}`);
        output.push(`   Rules   : ${rules.length} defined logic blocks.`);
        output.push(''); // Spasi
      }

      // LEVEL 2: TECHNICAL
      else if (level === SpecLevel.TECHNICAL) {
        output.push(`   [DATA FLOW]`);
        output.push(`   > Input Variables  : ${inputs.join(', ') || 'None'}`);
        output.push(`   > Output Variables : ${outputs.join(', ') || 'None'}`);
        
        if (preconditions.length > 0) {
           output.push(`\n   [CONSTRAINTS]`);
           preconditions.forEach(p => output.push(`   > Pre-condition : ${getText(p.expr())}`));
        }

        output.push(`\n   [LOGIC RULES]`);
        rules.forEach(r => {
          const rName = getText(r.name);
          const ifThen = getNodes(r, 'ifThenEffect')[0];
          const cond = getText(ifThen.condition || getNodes(ifThen, 'expr')[0]);
          const effect = getText(ifThen.effectBlock());
          
          output.push(`   Rule: ${rName}`);
          output.push(`      IF   : ${cond}`);
          output.push(`      THEN : ${effect.replace(/\n/g, '; ')}`);
        });
        output.push('\n');
      }

      // LEVEL 3: NATURAL LANGUAGE (USER STORY STYLE)
      else if (level === SpecLevel.NATURAL) {
        output.push(`   As a system, I want to handle "${featName}" so that:`);
        
        output.push(`\n   1. I accept the following data:`);
        inputs.forEach(inn => output.push(`      - ${inn.trim()}`));

        output.push(`\n   2. I will verify these conditions first:`);
        if (preconditions.length === 0) output.push(`      - (No specific preconditions)`);
        preconditions.forEach(p => output.push(`      - Verify that ${humanizeLogic(getText(p.expr()))}`));

        output.push(`\n   3. Based on the logic, I will respond as follows:`);
        rules.forEach(r => {
           const rName = getText(r.name);
           const ifThen = getNodes(r, 'ifThenEffect')[0];
           const cond = humanizeLogic(getText(ifThen.condition || getNodes(ifThen, 'expr')[0]));
           
           // Clean up effects for readability
           let rawEffects = getText(ifThen.effectBlock());
           const cleanEffects = rawEffects
             .replace(/=/g, 'to')
             .replace(/output\./g, '')
             .replace(/\n/g, ', and set ');

           output.push(`      - SCENARIO "${rName}":`);
           output.push(`        WHEN ${cond},`);
           output.push(`        THEN the system shall set ${cleanEffects}.`);
        });
        
        output.push('\n');
      }
    });
  });

  return output.join('\n');
}

// --- HELPER FUNCTIONS ---

function getText(node: any): string {
  if (!node) return '';
  if (typeof node.getText === 'function') return node.getText();
  return node.text || '';
}

function getNodes(ctx: any, ruleName: string): any[] {
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
}

// Translate symbols to words
function humanizeLogic(text: string): string {
  return text
    .replace(/>=/g, ' is greater than or equal to ')
    .replace(/<=/g, ' is less than or equal to ')
    .replace(/==/g, ' is equal to ')
    .replace(/!=/g, ' is NOT equal to ')
    .replace(/>/g, ' is greater than ')
    .replace(/</g, ' is less than ')
    .replace(/&&| and /g, ' AND ')
    .replace(/\|\|| or /g, ' OR ')
    .replace(/!| not /g, ' NOT ');
}