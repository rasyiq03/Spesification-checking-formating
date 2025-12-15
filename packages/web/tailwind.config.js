/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Karena config ada di dalam folder 'web', kita pakai './'
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
    // Tambahkan ini jika kamu punya folder 'lib' atau lainnya di 'web'
    "./lib/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}