/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kontur-blue': '#0079C2',
        'kontur-hover': '#006AAB'
      }
    },
  },
  plugins: [],
}
