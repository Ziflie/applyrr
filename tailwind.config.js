/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': ['Secular One', 'sans-serif'],
      'second': ['Press Start 2P', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}