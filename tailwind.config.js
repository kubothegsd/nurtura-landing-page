/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#F54279',
          green: '#16D171',
          darkGreen: '#0BA857',
          superDarkGreen: '#106B3D',
          neutral: '#4D4D4D',
          orange: '#F64B27',
          yellow: '#FFB71A',
          sand: '#DEC4AC',
          blush: '#FFE5E5',
          mint: '#A1D6B6',
          'turquoise-light': '#5EC4CD',
          turquoise: '#118AB2',
          blue: '#006494',
        },
      },
      fontFamily: {
        primary: ['Manrope', 'system-ui', 'sans-serif'],
        secondary: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Recoleta', 'Georgia', 'serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
