import React, { useRef, useState } from 'react';
import { generateReadableSpec, SpecLevel } from '../lib/specGenerator'; // Import generator

type Props = {
  code: string;
  setCode: (value: string) => void;
  onRun: () => void;
};

export default function EditorPanel({ code, setCode, onRun }: Props) {
  const lineNumbers = code.split('\n').length;
  
  // Refs & State
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const numsRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showExportMenu, setShowExportMenu] = useState(false);

  // Sync Scroll
  const handleScroll = () => {
    if (numsRef.current && areaRef.current) {
      numsRef.current.scrollTop = areaRef.current.scrollTop;
    }
  };

  // Import Logic
  const triggerFileUpload = () => fileInputRef.current?.click();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') setCode(content);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // --- EXPORT LOGIC ---
  const handleExport = (level: SpecLevel) => {
    try {
      // 1. Generate Teks
      const formattedText = generateReadableSpec(code, level);

      // 2. Buat File Blob
      const blob = new Blob([formattedText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      
      // 3. Trigger Download
      const link = document.createElement('a');
      link.href = url;
      link.download = `SystemSpec_${level.split(' ')[0]}.txt`; // Nama file: SystemSpec_Summary.txt
      document.body.appendChild(link);
      link.click();
      
      // 4. Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setShowExportMenu(false);
    } catch (e) {
      alert('Failed to generate spec. Please fix syntax errors first.');
      console.error(e);
    }
  };

  return (
    <div className="panel panel-left" style={{ position: 'relative' }}>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />

      {/* --- Panel Header --- */}
      <div className="panel-header">
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          📝 Source Code
          <button className="btn btn-secondary btn-small" onClick={triggerFileUpload} title="Import DSL">
            📂 Import
          </button>
          
          {/* EXPORT BUTTON & DROPDOWN */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button 
              className="btn btn-secondary btn-small" 
              onClick={() => setShowExportMenu(!showExportMenu)}
              title="Export Readable Spec"
            >
              📤 Export As...
            </button>

            {showExportMenu && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                marginTop: '5px',
                background: 'var(--bg-panel)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                zIndex: 100,
                width: '200px',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}>
                <div style={{ padding: '8px 12px', fontSize: '0.75rem', color: 'var(--text-secondary)', background: 'var(--bg-app)' }}>
                  SELECT FORMAT LEVEL
                </div>
                <button 
                  className="dropdown-item" 
                  style={dropdownItemStyle}
                  onClick={() => handleExport(SpecLevel.SUMMARY)}
                >
                  📑 Executive Summary
                </button>
                <button 
                  className="dropdown-item" 
                  style={dropdownItemStyle}
                  onClick={() => handleExport(SpecLevel.TECHNICAL)}
                >
                  ⚙️ Technical Spec
                </button>
                <button 
                  className="dropdown-item" 
                  style={dropdownItemStyle}
                  onClick={() => handleExport(SpecLevel.NATURAL)}
                >
                  🗣️ Natural Language
                </button>
              </div>
            )}
          </div>
        </span>

        <button className="btn btn-primary" onClick={onRun}>
          ▶ Run Check
        </button>
      </div>

      {/* Editor Area */}
      <div className="editor-wrapper" onClick={() => setShowExportMenu(false)}>
        <div className="line-numbers" ref={numsRef}>
          {Array.from({ length: Math.max(lineNumbers, 20) }).map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <textarea
          ref={areaRef}
          className="code-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onScroll={handleScroll}
          spellCheck={false}
          placeholder="// Type specifications here..."
        />
      </div>
      
      {/* Overlay click to close dropdown */}
      {showExportMenu && (
        <div 
          onClick={() => setShowExportMenu(false)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 90 }}
        />
      )}
    </div>
  );
}

// Styling Helper
const dropdownItemStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  padding: '10px 12px',
  textAlign: 'left',
  color: 'var(--text-primary)',
  cursor: 'pointer',
  fontSize: '0.9rem',
  borderBottom: '1px solid var(--border)',
  transition: 'background 0.2s'
};