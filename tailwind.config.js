/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#D87D4A",
        almostBlack: "#101010",
        lightGrey: "#f1f1f1",
        almostWhite: "#fafafa",
        lightOrange: "#fbaf85",
      },
    },
    fontFamily: {
      manrope: ["Manrope", "sans serif"],
    },
  },
  plugins: [],
};
