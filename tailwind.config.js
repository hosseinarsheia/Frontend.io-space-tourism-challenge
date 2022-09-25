/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
        'Barlow-Condensed': ['Barlow Condensed', 'sans-serif'],
        Bellefair: ['Bellefair', 'serif'],
      },

      fontSize: {
        150: ['9.375rem', { lineHeight: '1' }],
      },

      colors: {
        'light-blue': '#D0D6F9',
        'dark-blue': '#242836',
      },

      screens: {
        desktop: '1024px',
      },
    },
  },
  plugins: [],
};
