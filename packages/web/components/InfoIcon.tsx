import React, { useState } from 'react';

type Props = {
  title: string;
  description: string;
};

export default function InfoIcon({ title, description }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Handler untuk membuka/menutup
  const toggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Mencegah refresh halaman
    e.stopPropagation(); // Mencegah klik tembus ke elemen parent
    setIsOpen(!isOpen);
  };

  // Handler khusus untuk menutup
  const close = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    // Gunakan 'span' atau 'div' inline agar tidak merusak layout label
    <div 
      style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '6px', position: 'relative', verticalAlign: 'middle' }}
      onClick={(e) => e.stopPropagation()} // Safety net terakhir
    >
      {/* Tombol Ikon (?) */}
      <button
        type="button"
        onClick={toggle}
        style={{
          background: isOpen ? 'var(--error)' : 'var(--accent)', // Berubah warna saat aktif
          color: 'var(--text-primary)',
          border: 'none',
          borderRadius: '50%',
          width: '20px', // Sedikit diperbesar agar mudah diklik
          height: '20px',
          fontSize: '0.8rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          padding: 0,
          lineHeight: 1,
          zIndex: 1 // Pastikan tombol di atas elemen sekitarnya
        }}
        title="Info"
      >
        {isOpen ? '✕' : '?'}
      </button>

      {/* POPUP AREA */}
      {isOpen && (
        <>
          {/* 1. LAYER BACKDROP (Layar Penuh Transparan) */}
          {/* Ini menangkap klik di MANA SAJA di luar popup untuk menutupnya */}
          <div 
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              zIndex: 9998,
              cursor: 'default' 
            }} 
            onClick={close} 
          />
          
          {/* 2. KONTEN POPUP */}
          <div 
            style={{
              position: 'absolute',
              top: '28px', // Jarak dari tombol ?
              left: '-10px',
              width: '280px',
              background: 'var(--bg-panel)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '12px',
              boxShadow: '0 8px 30px var(--shadow)', // Shadow tebal agar terlihat melayang
              zIndex: 9999, // Paling atas
              color: 'var(--text-primary)',
              textAlign: 'left',
              cursor: 'auto'
            }}
            onClick={(e) => e.stopPropagation()} // Agar klik TEKS tidak menutup popup
          >
            {/* Header Popup */}
            <div style={{ 
              fontWeight: 'bold', 
              marginBottom: '8px', 
              color: 'var(--accent)', 
              fontSize: '0.95rem',
              borderBottom: '1px solid var(--border)',
              paddingBottom: '6px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>{title}</span>
              
              {/* Tombol Close Tambahan di dalam Popup */}
              <button 
                onClick={close}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  lineHeight: '0.5',
                  padding: '0 4px'
                }}
              >
                ×
              </button>
            </div>
            
            {/* Isi Deskripsi */}
            <div style={{ 
              fontSize: '0.85rem', 
              lineHeight: '1.5', 
              color: 'var(--text-secondary)',
              whiteSpace: 'pre-wrap' 
            }}>
              {description}
            </div>
          </div>
        </>
      )}
    </div>
  );
}