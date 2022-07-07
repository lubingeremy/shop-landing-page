/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'monts': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'blacko2': "#242424",
      }
    },
  },
  plugins: [],
}