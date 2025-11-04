/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-1': '#ece98f',
        'color-2': '#dee682',
        'color-3': '#c6e388',
        'color-4': '#aade85',
        'color-5': '#8ed881',
      },
    },
  },
  plugins: [],
};
