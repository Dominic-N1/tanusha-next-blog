/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const myColor360 = 40;
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      // gray: colors.rose, // slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      fuchsia: colors.pink,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      red: colors.red,
      purple: colors.purple,
      // gray: {
      //   50: `hsl(${myColor360}, 100%, 90%)`,
      //   100: `hsl(${myColor360}, 100%, 81%)`,
      //   200: `hsl(${myColor360}, 100%, 72%)`,
      //   300: `hsl(${myColor360}, 100%, 63%)`,
      //   400: `hsl(${myColor360}, 100%, 54%)`,
      //   500: `hsl(${myColor360}, 100%, 45%)`,
      //   600: `hsl(${myColor360}, 100%, 8%)`,
      //   700: `hsl(${myColor360}, 100%, 15%)`,
      //   800: `hsl(${myColor360}, 100%, 8%)`,
      //   900: `hsl(${myColor360}, 100%, 79%)`,
      // },
      gray: {
        50: `#D7c0c0`,
        100: `#000`,
        200: `#000`,
        300: `#c44449`,
        400: `#fededf`,
        500: `#D7c0c0`,
        600: `#404040`,
        700: `#c44449`,
        800: `#404040`,
        900: `#fededf`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
