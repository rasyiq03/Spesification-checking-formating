import React, { useState, useRef, useEffect } from 'react';

// ============================================================================
// 1. THEME CONFIGURATION
// ============================================================================
const THEMES: Record<string, any> = {
  midnight: {
    name: 'Midnight',
    colors: {
      '--bg-app': '#0f172a',
      '--bg-panel': '#1e293b',
      '--bg-card': '#020617',
      '--accent': '#3b82f6',
      '--accent-glow': 'rgba(59, 130, 246, 0.5)',
      '--text-main': '#e2e8f0',
      '--text-muted': '#94a3b8',
      '--border': '#334155',
    }
  },
  forest: {
    name: 'Forest',
    colors: {
      '--bg-app': '#022c22',
      '--bg-panel': '#064e3b',
      '--bg-card': '#052e16',
      '--accent': '#10b981',
      '--accent-glow': 'rgba(16, 185, 129, 0.5)',
      '--text-main': '#ecfdf5',
      '--text-muted': '#6ee7b7',
      '--border': '#065f46',
    }
  },
  sunset: {
    name: 'Sunset',
    colors: {
      '--bg-app': '#2a0a18', // Deep purple/red
      '--bg-panel': '#451a25',
      '--bg-card': '#1a050d',
      '--accent': '#f59e0b', // Orange
      '--accent-glow': 'rgba(245, 158, 11, 0.5)',
      '--text-main': '#fff1f2',
      '--text-muted': '#fda4af',
      '--border': '#831843',
    }
  },
  ocean: {
    name: 'Ocean',
    colors: {
      '--bg-app': '#083344', // Cyan dark
      '--bg-panel': '#164e63',
      '--bg-card': '#0e7490',
      '--accent': '#22d3ee',
      '--accent-glow': 'rgba(34, 211, 238, 0.5)',
      '--text-main': '#cffafe',
      '--text-muted': '#67e8f9',
      '--border': '#155e75',
    }
  }
};

// ============================================================================
// 2. CSS STYLES (Dynamic Variables & Responsive Media Queries)
// ============================================================================
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;600;800&display=swap');

  :root {
    /* Default fallback (Midnight) - will be overridden by JS */
    --bg-app: #0f172a;
    --bg-panel: #1e293b;
    --bg-card: #020617;
    --accent: #3b82f6;
    --accent-glow: rgba(59, 130, 246, 0.5);
    --text-main: #e2e8f0;
    --text-muted: #94a3b8;
    --border: #334155;
    
    --success: #10b981;
    --danger: #ef4444;
    --warning: #f59e0b;
  }

  body { margin: 0; background: var(--bg-app); color: var(--text-main); transition: background 0.5s ease; }
  * { box-sizing: border-box; }

  /* Animations */
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0% { box-shadow: 0 0 0 0 var(--accent-glow); } 70% { box-shadow: 0 0 0 10px rgba(0, 0, 0, 0); } 100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); } }
  @keyframes spin { to { transform: rotate(360deg); } }

  .animate-fade-in { animation: fadeIn 0.5s ease-out; }
  .animate-slide-up { animation: slideUp 0.4s ease-out forwards; }
  
  /* Scrollbar */
  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }

  /* Components */
  .btn-primary {
    background: var(--accent);
    color: var(--bg-app);
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
    display: flex; align-items: center; gap: 8px; justify-content: center;
  }
  .btn-primary:hover:not(:disabled) { filter: brightness(1.2); transform: translateY(-2px); }
  .btn-primary:active { transform: translateY(0); }
  .btn-primary:disabled { opacity: 0.6; cursor: wait; filter: grayscale(1); }

  .btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    color: var(--text-main);
    padding: 8px 14px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.9em;
    display: flex; align-items: center; gap: 6px;
  }
  .btn-secondary:hover { background: rgba(255, 255, 255, 0.1); border-color: var(--text-muted); }

  .glass-panel {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border);
    border-radius: 12px;
  }

  .editor-textarea {
    width: 100%;
    background: transparent;
    color: var(--text-main);
    border: none;
    padding: 16px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    line-height: 1.6;
    resize: none;
    outline: none;
    height: 100%;
  }
  
  .code-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s;
  }
  .code-card:hover { border-color: var(--accent); }

  .theme-dot {
    width: 24px; height: 24px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;
    transition: transform 0.2s;
  }
  .theme-dot:hover { transform: scale(1.2); }
  .theme-dot.active { border-color: white; box-shadow: 0 0 10px var(--accent); }

  /* RESPONSIVE LAYOUT SYSTEM */
  .layout-container { display: flex; height: 100vh; overflow: hidden; flex-direction: row; }
  .panel-left { width: 40%; display: flex; flex-direction: column; background: var(--bg-card); border-right: 1px solid var(--border); transition: width 0.3s; }
  .panel-right { flex: 1; display: flex; flex-direction: column; background: var(--bg-app); position: relative; }
  .mobile-tabs { display: none; } /* Hidden on desktop */
  .desktop-toolbar-text { display: inline; }

  /* MOBILE BREAKPOINT (< 768px) */
  @media (max-width: 768px) {
    .layout-container { flex-direction: column; height: calc(100vh - 60px); } /* Leave space for bottom nav */
    
    /* On mobile, we only show ONE panel at a time based on state */
    .panel-left { width: 100%; border-right: none; height: 100%; display: none; } 
    .panel-right { width: 100%; height: 100%; display: none; }
    
    .panel-active { display: flex !important; animation: fadeIn 0.3s; }
    
    .mobile-tabs { 
      display: flex; 
      height: 60px; 
      background: var(--bg-panel); 
      border-top: 1px solid var(--border);
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;
      justify-content: space-around; align-items: center;
    }
    
    .tab-btn {
      flex: 1; text-align: center; padding: 10px; color: var(--text-muted); font-size: 12px; font-weight: 600;
      display: flex; flex-direction: column; align-items: center; gap: 4px; background: none; border: none;
    }
    .tab-btn.active { color: var(--accent); }
    
    .desktop-toolbar-text { display: none; } /* Hide labels on mobile toolbar */
    .btn-secondary { padding: 8px; } /* Smaller buttons */
    h1 { font-size: 16px !important; }
  }
`;

export default function Home() {
  const [spec, setSpec] = useState(`system FinriendSystem {
  feature BadgeAcquisition {
    input: userProgress, badgeRequirement
    output: badgeUnlocked
    
    precondition: userProgress >= 0
    postcondition: badgeUnlocked == true
    
    rule UnlockBadge: 
        if userProgress >= badgeRequirement 
        then badgeUnlocked = true
  }
}`);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTheme, setActiveTheme] = useState('midnight');
  const [mobileTab, setMobileTab] = useState<'editor' | 'tests'>('editor'); // Mobile nav state
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 1. Inject Styles & Theme
  useEffect(() => {
    // Style Injection
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => { document.head.removeChild(styleSheet); };
  }, []);

  // 2. Apply Theme Variables when activeTheme changes
  useEffect(() => {
    const root = document.documentElement;
    const themeColors = THEMES[activeTheme].colors;
    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(key, value as string);
    });
  }, [activeTheme]);

  async function checkSpec() {
    setLoading(true);
    setError(null);
    setResult(null);
    
    // Auto switch to tests tab on mobile when checking
    if (window.innerWidth < 768) {
      setTimeout(() => setMobileTab('tests'), 800);
    }

    try {
      await new Promise(r => setTimeout(r, 600)); // Fake loading for UX
      const res = await fetch('/api/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ spec }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || JSON.stringify(data));
      setResult(data);
    } catch (err: any) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  const handleExport = () => {
    const blob = new Blob([spec], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `spec-${new Date().toISOString().slice(0,10)}.txt`;
    a.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setSpec(event.target.result as string);
        setResult(null);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  return (
    <>
      <div className="layout-container" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* ================= LEFT PANEL: UNIT TESTS ================= */}
        <div className={`panel-left ${mobileTab === 'tests' ? 'panel-active' : ''}`}>
          {/* Header */}
          <div style={{ padding: '15px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{display:'flex', alignItems:'center', gap: 10}}>
              <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: 'var(--text-main)' }}>Generated Tests</h2>
              <span style={{ fontSize: '10px', background: 'var(--bg-panel)', padding: '2px 8px', borderRadius: '12px', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>Jest</span>
            </div>
            
            {/* Theme Switcher (Visible on desktop left panel for convenience) */}
            <div style={{ display: 'flex', gap: 8 }}>
              {Object.keys(THEMES).map(key => (
                <div 
                  key={key}
                  className={`theme-dot ${activeTheme === key ? 'active' : ''}`}
                  style={{ background: THEMES[key].colors['--bg-panel'] }}
                  onClick={() => setActiveTheme(key)}
                  title={THEMES[key].name}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
            {!result && (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', textAlign: 'center', opacity: 0.6 }}>
                <span style={{fontSize: 40, marginBottom: 10}}>🧪</span>
                <p>Tests will appear here<br/>after you run Check.</p>
              </div>
            )}

            {result && result.unitTests?.length > 0 && (
              <div className="animate-fade-in">
                {result.unitTests.map((test: any, idx: number) => (
                  <div key={idx} className="code-card animate-slide-up" style={{ marginBottom: 15, animationDelay: `${idx * 0.1}s` }}>
                    <div style={{ padding: '8px 12px', background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent)' }}>CASE #{idx + 1}</span>
                      <button onClick={() => copyToClipboard(test.code)} className="btn-secondary" style={{ fontSize: '10px', padding: '2px 8px', height: 'auto' }}>Copy</button>
                    </div>
                    <pre style={{ margin: 0, padding: '15px', color: 'var(--text-muted)', overflowX: 'auto', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>
                      {test.code.trim()}
                    </pre>
                  </div>
                ))}
              </div>
            )}
            
            {result && result.unitTests?.length === 0 && result.syntaxErrors?.length === 0 && (
              <div style={{ padding: 15, border: '1px dashed var(--warning)', borderRadius: 8, color: 'var(--warning)', fontSize: '0.9em' }}>
                ⚠️ No rules detected to generate tests.
              </div>
            )}
          </div>
        </div>

        {/* ================= RIGHT PANEL: EDITOR ================= */}
        <div className={`panel-right ${mobileTab === 'editor' ? 'panel-active' : ''}`}>
          
          {/* Toolbar */}
          <div style={{ 
            padding: '10px 20px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            background: 'rgba(0,0,0,0.1)',
            backdropFilter: 'blur(5px)',
            borderBottom: '1px solid var(--border)',
            zIndex: 10
          }}>
            <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
              Spec<span style={{color: 'var(--accent)'}}>Checker</span>
            </h1>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <input type="file" accept=".txt,.g4" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
              
              <button className="btn-secondary" onClick={() => fileInputRef.current?.click()} title="Import File">
                📂 <span className="desktop-toolbar-text">Import</span>
              </button>
              
              <button className="btn-secondary" onClick={handleExport} title="Export File">
                💾 <span className="desktop-toolbar-text">Export</span>
              </button>
              
              <button 
                className="btn-primary" 
                onClick={checkSpec} 
                disabled={loading}
                style={{ animation: loading ? 'none' : 'pulse 2s infinite' }}
              >
                {loading ? (
                  <div style={{ width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                ) : '▶'}
                <span className="desktop-toolbar-text">{loading ? 'Checking...' : 'Run Check'}</span>
              </button>
            </div>
          </div>

          {/* Editor Area */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
            <div className="glass-panel" style={{ height: 'min(500px, 60vh)', marginBottom: 20 }}>
              <textarea
                value={spec}
                onChange={(e) => setSpec(e.target.value)}
                spellCheck={false}
                className="editor-textarea"
                placeholder="// Write system specification..."
              />
            </div>

            {/* Diagnostics Overlay */}
            {error && (
              <div className="animate-fade-in" style={{ padding: 15, background: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--danger)', borderRadius: 8, color: 'var(--danger)', marginBottom: 20 }}>
                <strong>System Error:</strong> {error}
              </div>
            )}

            {result && (
              <div className="animate-slide-up">
                <h3 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: 10 }}>Analysis Report</h3>

                {result.syntaxErrors?.length === 0 && result.diagnostics?.length === 0 && (
                  <div style={{ padding: 15, background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)', borderRadius: 8, color: 'var(--success)', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{fontSize: '1.2em'}}>✓</span> Valid Syntax & Semantics
                  </div>
                )}

                {result.syntaxErrors?.map((err: any, idx: number) => (
                  <div key={idx} style={{ padding: 10, marginBottom: 8, background: 'rgba(239, 68, 68, 0.1)', borderLeft: '3px solid var(--danger)', color: '#fca5a5', fontSize: '0.9em' }}>
                    <strong>Line {err.line}:{err.column}</strong> {err.message}
                  </div>
                ))}
                
                {result.diagnostics?.map((diag: any, idx: number) => (
                  <div key={idx} style={{ padding: 10, marginBottom: 8, background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid var(--warning)', color: 'var(--text-main)', fontSize: '0.9em' }}>
                    <span style={{fontWeight:'bold', color: 'var(--warning)'}}>[{diag.code}]</span> {diag.message}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= MOBILE NAVIGATION (Bottom Tabs) ================= */}
      <div className="mobile-tabs">
        <button 
          className={`tab-btn ${mobileTab === 'editor' ? 'active' : ''}`} 
          onClick={() => setMobileTab('editor')}
        >
          <span style={{fontSize: 18}}>📝</span> Editor
        </button>
        <button 
          className={`tab-btn ${mobileTab === 'tests' ? 'active' : ''}`} 
          onClick={() => setMobileTab('tests')}
        >
          <span style={{fontSize: 18}}>🧪</span> Tests 
          {result && <span style={{width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%', display: 'inline-block', marginLeft: 4}}></span>}
        </button>
      </div>
    </>
  );
}