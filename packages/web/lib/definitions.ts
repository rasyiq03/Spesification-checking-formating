export const DEFINITIONS = {
  system: {
    title: "System",
    desc: "Nama aplikasi atau modul utama yang sedang Anda rancang. Contoh: 'BankingSystem', 'E-LearningPlatform'."
  },
  feature: {
    title: "Feature",
    desc: "Kemampuan spesifik atau fungsionalitas dalam sistem. Satu sistem bisa memiliki banyak fitur. Contoh: 'TransferMoney', 'Login', 'GenerateReport'."
  },
  input: {
    title: "Input (Masukan)",
    desc: "Data mentah yang diterima oleh fitur ini dari pengguna atau sistem lain. \n\nPENTING: Variabel Input bersifat 'Read-Only' (tidak boleh diubah nilainya di dalam Rule)."
  },
  output: {
    title: "Output (Keluaran)",
    desc: "Data hasil pemrosesan atau status akhir setelah fitur dijalankan. Variabel inilah yang akan diubah nilainya (assignment) di dalam Rule."
  },
  precondition: {
    title: "Precondition (Syarat Awal)",
    desc: "Kondisi yang WAJIB bernilai TRUE sebelum fitur ini boleh dijalankan. Jika syarat ini tidak terpenuhi, fitur akan menolak eksekusi. Contoh: 'saldo >= 0'."
  },
  postcondition: {
    title: "Postcondition (Jaminan Akhir)",
    desc: "Kondisi yang DIJAMIN akan bernilai TRUE setelah fitur selesai dijalankan. Ini adalah kontrak/janji sistem terhadap outputnya."
  },
  rule: {
    title: "Rule (Logika Bisnis)",
    desc: "Skenario logika 'If-Then-Do'.\n- IF: Kondisi pemicu.\n- DO: Aksi perubahan nilai output yang terjadi."
  },
  effect: {
    title: "Effect (Aksi)",
    desc: "Perubahan nilai yang terjadi pada variabel Output. Contoh: 'status = SUCCESS' atau 'saldo = saldo - 100'."
  }
};