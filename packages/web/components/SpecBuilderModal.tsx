import React, { useState } from 'react';
import InfoIcon from './InfoIcon';
import { DEFINITIONS } from '../lib/definitions';

// --- Types ---
type Effect = string; 

type Rule = {
  name: string;
  condition: string; 
  effects: Effect[];
};

type Feature = {
  name: string;
  inputs: string;       
  outputs: string;      
  preconditions: string[];
  postconditions: string[];
  rules: Rule[];
};

type Props = {
  onClose: () => void;
  onGenerate: (spec: string) => void;
};

export default function SpecBuilderModal({ onClose, onGenerate }: Props) {
  const [sysName, setSysName] = useState('');
  const [features, setFeatures] = useState<Feature[]>([
    { name: '', inputs: '', outputs: '', preconditions: [], postconditions: [], rules: [] }
  ]);

  // --- Handlers ---
  const addFeature = () => setFeatures([...features, { name: '', inputs: '', outputs: '', preconditions: [], postconditions: [], rules: [] }]);
  
  const removeFeature = (idx: number) => {
    const copy = [...features];
    copy.splice(idx, 1);
    setFeatures(copy);
  };

  const updateFeature = (idx: number, field: keyof Feature, val: any) => {
    const copy = [...features];
    (copy[idx] as any)[field] = val;
    setFeatures(copy);
  };

  const addStringItem = (fIdx: number, field: 'preconditions' | 'postconditions') => {
    const copy = [...features];
    copy[fIdx][field].push('');
    setFeatures(copy);
  };

  const updateStringItem = (fIdx: number, field: 'preconditions' | 'postconditions', itemIdx: number, val: string) => {
    const copy = [...features];
    copy[fIdx][field][itemIdx] = val;
    setFeatures(copy);
  };

  const removeStringItem = (fIdx: number, field: 'preconditions' | 'postconditions', itemIdx: number) => {
    const copy = [...features];
    copy[fIdx][field].splice(itemIdx, 1);
    setFeatures(copy);
  };

  const addRule = (fIdx: number) => {
    const copy = [...features];
    copy[fIdx].rules.push({ name: '', condition: '', effects: [''] });
    setFeatures(copy);
  };

  const removeRule = (fIdx: number, rIdx: number) => {
    const copy = [...features];
    copy[fIdx].rules.splice(rIdx, 1);
    setFeatures(copy);
  };

  const updateRule = (fIdx: number, rIdx: number, field: keyof Rule, val: any) => {
    const copy = [...features];
    (copy[fIdx].rules[rIdx] as any)[field] = val;
    setFeatures(copy);
  };

  const addEffect = (fIdx: number, rIdx: number) => {
    const copy = [...features];
    copy[fIdx].rules[rIdx].effects.push('');
    setFeatures(copy);
  };

  const updateEffect = (fIdx: number, rIdx: number, eIdx: number, val: string) => {
    const copy = [...features];
    copy[fIdx].rules[rIdx].effects[eIdx] = val;
    setFeatures(copy);
  };

  const removeEffect = (fIdx: number, rIdx: number, eIdx: number) => {
    const copy = [...features];
    copy[fIdx].rules[rIdx].effects.splice(eIdx, 1);
    setFeatures(copy);
  };

  const handleGenerate = () => {
    let txt = `system ${sysName.replace(/\s+/g, '') || 'Untitled'} {\n`;

    features.forEach(f => {
      if (!f.name) return;
      txt += `  feature ${f.name.replace(/\s+/g, '')} {\n`;
      
      if (f.inputs.trim()) txt += `    input: ${f.inputs}\n`;
      if (f.outputs.trim()) txt += `    output: ${f.outputs}\n`;
      
      f.preconditions.forEach(p => { if(p.trim()) txt += `    precondition: ${p}\n`; });
      f.postconditions.forEach(p => { if(p.trim()) txt += `    postcondition: ${p}\n`; });

      f.rules.forEach(r => {
        if(r.name && r.condition) {
          txt += `    rule ${r.name.replace(/\s+/g, '')}: if ${r.condition} then do\n`;
          r.effects.forEach(e => { if(e.trim()) txt += `      ${e}\n`; });
        }
      });
      txt += `  }\n`;
    });

    txt += `}`;
    onGenerate(txt);
  };

  const labelStyle: React.CSSProperties = { 
    fontSize: '0.9rem', 
    color: 'var(--text-secondary)',
    marginBottom: '4px',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    // FIX 1: Gunakan Inline Style untuk Backdrop dengan Z-Index Tinggi
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'var(--backdrop)', // gunakan variable agar berubah sesuai theme
      zIndex: 2000, // Sangat tinggi agar di atas editor
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(4px)'
    }}>
      {/* Container Modal */}
      <div className="modal-container" style={{ 
        width: '850px', 
        maxWidth: '95%', 
        height: '90vh', 
        display: 'flex', 
        flexDirection: 'column',
        background: 'var(--bg-app)', // Pastikan ada background warna
        boxShadow: '0 10px 25px var(--shadow)',
        borderRadius: '8px'
      }}>
        
        {/* Header */}
        <div className="panel-header" style={{ borderRadius: '8px 8px 0 0', flexShrink: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', background: 'var(--bg-panel)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>🧩 Advanced Spec Builder</span>
            <InfoIcon title="Spec Builder" description="Gunakan tool ini untuk membuat kerangka DSL secara visual tanpa perlu mengetik sintaks manual." />
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', fontSize: '1.5rem', lineHeight: '1' }}>×</button>
        </div>

        {/* Scrollable Body */}
        <div className="modal-body" style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          
          {/* System Name */}
          <div className="input-group">
            <label style={labelStyle}>
              System Name 
              <InfoIcon title={DEFINITIONS.system.title} description={DEFINITIONS.system.desc} />
            </label>
            <input
              className="input-control"
              placeholder="e.g. BankingSystem (No Spaces)"
              value={sysName}
              onChange={e => setSysName(e.target.value)}
              style={{ padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--bg-input)', color: 'var(--text-primary)' }}
            />
          </div>

          <hr style={{ border: '0', borderTop: '1px solid var(--border)', margin: '20px 0' }} />

          {/* Features Loop */}
          {features.map((f, fIdx) => (
            <div key={fIdx} className="result-card" style={{ borderLeft: '4px solid var(--accent)', padding: '15px', marginBottom: '20px', background: 'var(--bg-panel)', borderRadius: '4px' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--accent)' }}>Feature #{fIdx + 1}</h3>
                  <InfoIcon title={DEFINITIONS.feature.title} description={DEFINITIONS.feature.desc} />
                </div>
                <button className="btn btn-secondary" style={{ color: 'var(--error)', borderColor: 'var(--error)', padding: '4px 10px' }} onClick={() => removeFeature(fIdx)}>Remove Feature</button>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <input
                  className="input-control"
                  placeholder="Feature Name (e.g. WithdrawMoney)"
                  value={f.name}
                  onChange={e => updateFeature(fIdx, 'name', e.target.value)}
                  style={{ fontWeight: 'bold', width: '100%', padding: '8px' }}
                />
              </div>

              {/* IO Section */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div>
                  <label style={labelStyle}>
                    Inputs (Read-Only)
                    <InfoIcon title={DEFINITIONS.input.title} description={DEFINITIONS.input.desc} />
                  </label>
                  <input className="input-control" placeholder="amount, accountId" value={f.inputs} onChange={e => updateFeature(fIdx, 'inputs', e.target.value)} style={{ width: '100%', padding: '8px' }} />
                </div>
                <div>
                  <label style={labelStyle}>
                    Outputs (Mutable)
                    <InfoIcon title={DEFINITIONS.output.title} description={DEFINITIONS.output.desc} />
                  </label>
                  <input className="input-control" placeholder="newBalance, status" value={f.outputs} onChange={e => updateFeature(fIdx, 'outputs', e.target.value)} style={{ width: '100%', padding: '8px' }} />
                </div>
              </div>

              {/* Conditions Section */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div>
                  <label style={labelStyle}>
                    Preconditions
                    <InfoIcon title={DEFINITIONS.precondition.title} description={DEFINITIONS.precondition.desc} />
                  </label>
                  {f.preconditions.map((p, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
                      <input className="input-control" placeholder="amount > 0" value={p} onChange={e => updateStringItem(fIdx, 'preconditions', pIdx, e.target.value)} style={{ flex: 1, padding: '6px' }} />
                      <button className="btn btn-secondary" onClick={() => removeStringItem(fIdx, 'preconditions', pIdx)}>✕</button>
                    </div>
                  ))}
                  <button className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '4px 8px', marginTop: '5px' }} onClick={() => addStringItem(fIdx, 'preconditions')}>+ Add Precondition</button>
                </div>
                <div>
                  <label style={labelStyle}>
                    Postconditions
                    <InfoIcon title={DEFINITIONS.postcondition.title} description={DEFINITIONS.postcondition.desc} />
                  </label>
                  {f.postconditions.map((p, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
                      <input className="input-control" placeholder="balance == old_balance - amount" value={p} onChange={e => updateStringItem(fIdx, 'postconditions', pIdx, e.target.value)} style={{ flex: 1, padding: '6px' }} />
                      <button className="btn btn-secondary" onClick={() => removeStringItem(fIdx, 'postconditions', pIdx)}>✕</button>
                    </div>
                  ))}
                  <button className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '4px 8px', marginTop: '5px' }} onClick={() => addStringItem(fIdx, 'postconditions')}>+ Add Postcondition</button>
                </div>
              </div>

              {/* Rules Section */}
              <div style={{ background: 'var(--muted-overlay)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <label style={{ ...labelStyle, fontSize: '1rem', fontWeight: 'bold', marginBottom: '15px' }}>
                  Rules (Logic)
                  <InfoIcon title={DEFINITIONS.rule.title} description={DEFINITIONS.rule.desc} />
                </label>
                
                {f.rules.map((r, rIdx) => (
                  <div key={rIdx} style={{ border: '1px solid var(--border)', padding: '12px', borderRadius: '6px', marginBottom: '15px', background: 'var(--bg-app)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Rule #{rIdx + 1}</span>
                      <button style={{ background: 'none', border: 'none', color: 'var(--error)', cursor: 'pointer', fontSize: '0.8rem' }} onClick={() => removeRule(fIdx, rIdx)}>Delete Rule</button>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', marginBottom: '10px' }}>
                      <input className="input-control" placeholder="Rule Name (e.g. R1)" value={r.name} onChange={e => updateRule(fIdx, rIdx, 'name', e.target.value)} style={{ padding: '6px' }} />
                      <input className="input-control" placeholder="IF Condition (e.g. amount <= balance)" value={r.condition} onChange={e => updateRule(fIdx, rIdx, 'condition', e.target.value)} style={{ padding: '6px' }} />
                    </div>

                    <div style={{ marginLeft: '10px', borderLeft: '3px solid var(--border)', paddingLeft: '12px' }}>
                      <label style={{ ...labelStyle, fontSize: '0.8rem' }}>
                        THEN DO (Effects)
                        <InfoIcon title={DEFINITIONS.effect.title} description={DEFINITIONS.effect.desc} />
                      </label>
                      {r.effects.map((ef, eIdx) => (
                        <div key={eIdx} style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
                          <input className="input-control" placeholder="balance = balance - amount" value={ef} onChange={e => updateEffect(fIdx, rIdx, eIdx, e.target.value)} style={{ flex: 1, padding: '6px' }} />
                          <button className="btn btn-secondary" style={{ padding: '2px 8px' }} onClick={() => removeEffect(fIdx, rIdx, eIdx)}>✕</button>
                        </div>
                      ))}
                      <button className="btn btn-secondary" style={{ fontSize: '0.75rem', marginTop: '5px', padding: '4px 8px' }} onClick={() => addEffect(fIdx, rIdx)}>+ Add Effect</button>
                    </div>
                  </div>
                ))}
                
                <button className="btn btn-secondary" style={{ width: '100%', borderStyle: 'dashed', padding: '10px' }} onClick={() => addRule(fIdx)}>+ Add New Rule</button>
              </div>

            </div>
          ))}

          <button className="btn btn-primary" style={{ width: '100%', marginTop: '10px', padding: '12px' }} onClick={addFeature}>
            + Add Another Feature
          </button>
        </div>

        {/* Footer */}
        <div style={{ padding: '16px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end', gap: '10px', background: 'var(--bg-panel)', borderRadius: '0 0 8px 8px' }}>
          <button className="btn btn-secondary" onClick={onClose} style={{ padding: '8px 16px' }}>Cancel</button>
          <button className="btn btn-primary" onClick={handleGenerate} style={{ padding: '8px 16px' }}>Generate Complete Spec</button>
        </div>
      </div>
    </div>
  );
}