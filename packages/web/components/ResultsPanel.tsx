import React, { useState } from 'react';

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

type Props = {
  result: Result | null;
};

export default function ResultsPanel({ result }: Props) {
  const [tab, setTab] = useState<'tests' | 'errors'>('tests');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  // Logic untuk Copy All
  const handleCopyAll = () => {
    if (!result?.unitTests || result.unitTests.length === 0) return;

    // 1. Gabungkan semua code menjadi satu string dengan pemisah newline
    const allCode = result.unitTests.map(t => t.code).join('\n\n');

    // 2. Copy ke clipboard
    navigator.clipboard.writeText(allCode);

    // 3. Feedback Visual
    setCopyStatus('copied');
    setTimeout(() => setCopyStatus('idle'), 2000);
  };

  // Empty State
  if (!result) {
    return (
      <div className="panel panel-right">
        <div className="results-empty">
          <div className="results-empty-icon">🔍</div>
          <p>Press "Run Check" to see results</p>
        </div>
      </div>
    );
  }

  return (
    <div className="panel panel-right">
      {/* Tabs Header */}
      <div className="tabs-header">
        <button
          className={`tab-btn ${tab === 'tests' ? 'active' : ''}`}
          onClick={() => setTab('tests')}
        >
          Unit Tests ({result.unitTests?.length || 0})
        </button>
        <button
          className={`tab-btn ${tab === 'errors' ? 'active' : ''}`}
          onClick={() => setTab('errors')}
        >
          Errors ({result.syntaxErrors?.length || 0})
        </button>
      </div>

      {/* Results Area */}
      <div className="results-area">
        
        {/* TAB: TESTS */}
        {tab === 'tests' && (
          <div>
            {/* --- NEW: COPY ALL ACTION BAR --- */}
            {result.unitTests && result.unitTests.length > 0 && (
              <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                <button 
                  className="btn btn-primary btn-small"
                  onClick={handleCopyAll}
                  style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  {copyStatus === 'copied' ? '✅ All Copied!' : '📑 Copy All Test Cases'}
                </button>
              </div>
            )}

            {result.unitTests?.map((test, i) => (
              <div key={i} className="result-card">
                <div className="result-card-header">
                  <strong className="result-card-title">
                    Test Case #{i + 1}
                  </strong>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => navigator.clipboard.writeText(test.code)}
                  >
                    📋 Copy
                  </button>
                </div>
                <pre className="code-block">{test.code}</pre>
              </div>
            ))}
            
            {(!result.unitTests || result.unitTests.length === 0) && (
              <p className="text-center mt-4" style={{ color: 'var(--text-secondary)' }}>
                No unit tests generated
              </p>
            )}
          </div>
        )}

        {/* TAB: ERRORS */}
        {tab === 'errors' && (
          <div>
            {result.syntaxErrors?.map((err, i) => (
              <div key={i} className="result-card error-card">
                <div className="error-card-title">
                  Line {err.line}:{err.column}
                </div>
                <div style={{ fontSize: '0.9rem' }}>{err.message}</div>
              </div>
            ))}
            {(!result.syntaxErrors || result.syntaxErrors.length === 0) && (
              <div className="text-center text-success mt-4" style={{ fontSize: '0.95rem' }}>
                ✅ No syntax errors found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}