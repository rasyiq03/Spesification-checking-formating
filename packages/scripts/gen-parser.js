// packages/scripts/gen-parser.js
const { execSync } = require('child_process');
const path = require('path');

const grammarFile = path.resolve(__dirname, '../../grammar/Spec.g4');
const outDir = path.resolve(__dirname, '../analyzer/src/parser');

try {
  console.log('Generating parser from', grammarFile);
  execSync(`npx antlr4ts -visitor -o "${outDir}" "${grammarFile}"`, { stdio: 'inherit' });
  console.log('Parser generated at', outDir);
} catch (e) {
  console.error('Failed to generate parser:', e);
  process.exit(1);
}
