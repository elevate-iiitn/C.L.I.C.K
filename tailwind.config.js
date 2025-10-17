/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-gold': '#FFD700',
        'midnight-blue': '#0a0a33',
        'soft-gray': '#f5f5f5',
      },
    },
  },
  plugins: [],
};
