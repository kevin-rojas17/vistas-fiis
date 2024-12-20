/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00B4D8',
        'primary-dark': '#0096B4',
      },
    },
  },
  plugins: [],
};