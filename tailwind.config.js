module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#E55D48',
          dark: '#D45643',
        },
        secondary: {
          DEFAULT: '#1F385F', // Fixed typo from IF to 1F
          dark: '#122A4E',
        },
        black: '#111111',
        white: '#FFFFFF',
        background: {
          1: '#F9F9F9',
          2: 'rgba(31, 56, 95, 0.06)', // #1F385F with 6% opacity
        },
      },
    },
  },
  plugins: [],
}