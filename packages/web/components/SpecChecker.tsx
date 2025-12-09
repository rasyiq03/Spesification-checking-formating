// packages/web/components/SpecChecker.tsx (pseudo)
import React, { useState, ChangeEvent, MouseEvent } from 'react';

interface SyntaxError {
  line: number;
  column: number;
  message: string;
}

interface Diagnostic {
  code: string;
  severity: string;
  message: string;
  recommendation: string;
}

interface UnitTest {
  title: string;
  code: string;
}

interface CheckResult {
  syntaxErrors: SyntaxError[];
  diagnostics: Diagnostic[];
  unitTests: UnitTest[];
}

export default function SpecChecker() {
  const [spec, setSpec] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);

  async function handleCheck() {
    setLoading(true);
    const res = await fetch('/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ spec })
    });
    const json = await res.json();
    setResult(json);
    setLoading(false);
  }

  return (
    <div>
      <div>
        <textarea value={spec} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSpec(e.target.value)} rows={12} cols={80} />
      </div>
      <button onClick={handleCheck} disabled={loading}>Check</button>

      {result && (
        <>
          <h3>Syntax Errors</h3>
          {result.syntaxErrors.length ? result.syntaxErrors.map((e: SyntaxError, i: number) => (
            <div key={i}>Line {e.line}:{e.column} — {e.message}</div>
          )) : <div>No syntax errors</div>}

          <h3>Diagnostics</h3>
          {result.diagnostics.length ? result.diagnostics.map((d: Diagnostic, i: number) => (
            <div key={i}>
              <b>{d.severity.toUpperCase()}</b> {d.code} — {d.message}
              <div>Recommendation: {d.recommendation}</div>
            </div>
          )) : <div>No semantic errors</div>}

          <h3>Unit Tests</h3>
          {result.unitTests.map((t: UnitTest, i: number) => (
            <div key={i}>
              <pre>{t.code}</pre>
              <button onClick={() => navigator.clipboard.writeText(t.code)}>Copy</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
