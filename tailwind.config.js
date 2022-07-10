/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'monts': ['Montserrat', 'sans-serif'],
      'opsans':['Open Sans', 'sans-serif'],
      'noto': ['Noto Serif JP', 'serif']
    },
    extend: {
      colors: {
        'blacko2': "#242424",
        'dark-blue': "#031745",
        'light-grey': "#F4F6F6",
        'dark-grey': "#5F5F64",
        'green-cyan': "#244D4D",
      },
      height: {
        'h-screen': "50vh"
      }
    },
  },
  plugins: [],
}