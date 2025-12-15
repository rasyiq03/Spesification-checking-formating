import React, { useState, useEffect } from 'react';
import EditorPanel from '../components/EditorPanel';
import ResultsPanel from '../components/ResultsPanel';
import SpecBuilderModal from '../components/SpecBuilderModal';
import { validate } from '../../analyzer/src/index'; 
import { generateUnitTestsFromAST } from '../lib/testGenerator';

type TestResult = {
  code: string;
};

type SyntaxError = {
  line: number;
  column: number;
  message: string;
};

type Result = {
  unitTests?: TestResult[];
  syntaxErrors?: SyntaxError[];
};

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [accentColor, setAccentColor] = useState<string>('#38bdf8');
  const [spec, setSpec] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [showBuilder, setShowBuilder] = useState(false);

  // Apply Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Persist theme and detect system preference on first load
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') {
        setTheme(stored as 'light' | 'dark');
        return;
      }
    } catch (e) {}

    // if no stored preference, detect OS preference
    try {
      const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)');
      if (mq && mq.matches) setTheme('light');
    } catch (e) {}
  }, []);

  // save theme when it changes
  useEffect(() => {
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  // Load persisted accent color and apply
  useEffect(() => {
    try {
      const stored = localStorage.getItem('accentColor');
      if (stored) setAccentColor(stored);
    } catch (e) {}
  }, []);

  // Update CSS variables when accent color changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', accentColor);
    // compute a slightly darker hover color
    const hover = darkenHex(accentColor, 12);
    root.style.setProperty('--accent-hover', hover);
    try { localStorage.setItem('accentColor', accentColor); } catch (e) {}
  }, [accentColor]);

  // Helper: darken hex color by percent
  function darkenHex(hex: string, percent: number) {
    const { r, g, b } = hexToRgb(hex);
    const p = Math.max(0, Math.min(100, percent)) / 100;
    const rr = Math.round(r * (1 - p));
    const gg = Math.round(g * (1 - p));
    const bb = Math.round(b * (1 - p));
    return rgbToHex(rr, gg, bb);
  }

  function hexToRgb(hex: string) {
    const h = hex.replace('#', '');
    const bigint = parseInt(h.length === 3 ? h.split('').map(c=>c+c).join('') : h, 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
  }

  function rgbToHex(r: number, g: number, b: number) {
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  // --- LOGIKA VALIDASI UTAMA (REAL) ---
  const runCheck = () => {
    try {
      console.log('Running analysis...');
      
      // 1. Panggil Parser & Analyzer
      const { diagnostics, tree } = validate(spec);

      // 2. Format Error untuk UI
      // Kita gabungkan Syntax Error dan Semantic Error agar muncul di panel "Errors"
      const uiErrors: SyntaxError[] = diagnostics.map(d => ({
        line: d.location?.line || 0,
        column: d.location?.column || 0,
        // Tambahkan prefix severity jika bukan syntax error murni
        message: d.code === 'SYNTAX_ERROR' 
          ? d.message 
          : `[${d.severity.toUpperCase()}] ${d.message}`
      }));

      // 3. Generate Unit Tests (Hanya jika tidak ada error fatal)
      let generatedTests: TestResult[] = [];
      const hasFatalErrors = diagnostics.some(d => d.severity === 'error');

      if (!hasFatalErrors && tree) {
        // Panggil generator yang sudah Anda buat di testGenerator.tsx
        const rawTests = generateUnitTestsFromAST(tree);
        generatedTests = rawTests.map(t => ({
          code: t.code // Sesuaikan format jika perlu
        }));
      }

      // 4. Update State UI
      setResult({
        syntaxErrors: uiErrors,
        unitTests: generatedTests
      });

    } catch (e) {
      console.error("Critical Validation Error:", e);
      setResult({
        syntaxErrors: [{ line: 0, column: 0, message: "System Error: Check Console" }],
        unitTests: []
      });
    }
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-layout">
      {/* Header */}
      <header className="header">
        <div className="flex gap-2">
          <div className="app-logo">✓</div>
          <h1 className="app-title">
            Spec<span className="app-title-accent">Checker</span>
          </h1>
        </div>

        <div className="flex gap-2">
          <button className="btn btn-secondary" onClick={() => setShowBuilder(true)}>
            🧩 Open Builder
          </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input
                aria-label="Accent Color"
                title="Choose accent color"
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                style={{ width: 36, height: 36, padding: 0, border: 'none', background: 'transparent', cursor: 'pointer' }}
              />
              <button
                className="btn btn-secondary"
                onClick={toggleTheme}
                title="Toggle Theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        <EditorPanel 
          code={spec} 
          setCode={setSpec} 
          onRun={runCheck} 
        />
        <ResultsPanel result={result} />
      </main>

      {/* Modal */}
      {showBuilder && (
        <SpecBuilderModal
          onClose={() => setShowBuilder(false)}
          onGenerate={(text) => {
            setSpec(text);
            setShowBuilder(false);
          }}
        />
      )}
    </div>
  );
}