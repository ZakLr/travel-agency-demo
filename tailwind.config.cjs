/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(52 211 153)",
        secondary: "rgb(4 120 87)",
        third: "rgb(94 234 212)",
        fourth: "rgb(0 0 0)",
      },
    },
    screens: {
      xl: { max: "1200px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "550px" },
      xsm: { max: "425px" },
    },
  },
  plugins: [],
};
