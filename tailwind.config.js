/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // bright yellow
        secondary: '#FFEB3B', // lighter yellow
        dark: '#121212', // rich black
        'dark-light': '#1E1E1E', // slightly lighter black
      },
    },
  },
  plugins: [],
};
