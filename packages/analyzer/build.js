const { execSync } = require('child_process');
const path = require('path');

try {
  console.log('▶ Generating ANTLR parser...');

  // Path grammar → sesuai struktur kamu
  const grammarPath = path.join(__dirname, '..', '..', 'grammar', 'Spec.g4');

  // Output ke analyzer/src/parser
  const outputDir = path.join(__dirname, 'src', 'parser');

  execSync(
    `antlr4ts "${grammarPath}" -o "${outputDir}" -visitor`,
    { stdio: 'inherit' }
  );

  console.log('✔ ANTLR generation completed');

  console.log('▶ Compiling TypeScript...');
  execSync('tsc -b', { stdio: 'inherit' });

  console.log('✔ Build completed successfully');
} catch (err) {
  console.error('✖ Build failed');
  process.exit(1);
}
