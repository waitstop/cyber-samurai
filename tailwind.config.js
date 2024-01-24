/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'druk': ['Druk Cyr', 'sans-serif'],
      },
      container: {
        center: true,
        screens: {
          DEFAULT: "100%",
          lg: "1320px"
        },
        padding: {
          DEFAULT: "1.25rem",
        },
      },
      colors: {
        "red": {
          DEFAULT:"#E2394F",
          "accent": "#E30F12"
        },
        "yellow": "#F1B82A",
        "blue": "#1E51EB",
        "purple": {
          DEFAULT: "#AE5EFF",
          "accent": "#5D2CE9",
        },
        "green": "#2EAC1B",
        "gray": {
          400: "#23282E",
          300: "#4A5461",
          200: "#8497AD",
          100: "#BED9FA"
        }
      }
    },
  },
  plugins: [],
}