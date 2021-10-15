// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      ...defaultTheme.screens,
      sm: "300px",
    },
    colors: {
      black: "#20242B",
      blue: "#15191F",
      green: "#4CFFB3",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
