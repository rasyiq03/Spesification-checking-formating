# Spec-Checker

Spec-Checker adalah aplikasi berbasis Next.js dan TypeScript untuk melakukan analisis spesifikasi DSL dan menghasilkan unit test secara otomatis.

## Prasyarat

- Node.js (versi 18 atau lebih baru)
- pnpm (versi 7 atau lebih baru)

## Instalasi

1. **Clone repository**
   ```bash
   git clone <url-repo-anda>
   cd spec-checker
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

## Build Parser & Project

Parser ANTLR akan otomatis digenerate saat install, namun Anda bisa build ulang dengan:

```bash
pnpm run build
```

## Menjalankan Aplikasi

Untuk development (Next.js):

```bash
pnpm --filter web dev
```

Akses aplikasi di [http://localhost:3000](http://localhost:3000)

## Struktur Project

```
spec-checker/
├─ packages/
│  ├─ analyzer/      # ANTLR4 parser & semantic analyzer
│  ├─ web/           # Frontend Next.js
│  ├─ shared/        # (opsional) kode bersama
│  └─ scripts/       # Script generator parser
├─ grammar/          # Grammar ANTLR
├─ package.json
├─ pnpm-workspace.yaml
└─ tsconfig.base.json
```

## Fitur Utama

- Analisis sintaks dan semantik DSL
- Otomatis menghasilkan unit test dari hasil analisis
- UI modern berbasis React

## Troubleshooting

- Jika build gagal karena parser, pastikan versi `antlr4ts` adalah `0.5.0-alpha.4`
- Jalankan `pnpm install --force` jika ada masalah dependensi
