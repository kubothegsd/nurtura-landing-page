/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Manrope", "system-ui", "sans-serif"],
        secondary: ["Inter", "system-ui", "sans-serif"],
        accent: ["Recoleta", "Georgia", "serif"],
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
