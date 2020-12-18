// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.ts",
    "./components/**/*.tsx",
    "./components/**/*.ts",
    "./data/**/*.ts",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      blue: colors.blue,
      gray: colors.blueGray,
      green: colors.green,
      orange: colors.orange,
      red: colors.red,
      pink: colors.pink,
    },
    extend: {
      fontFamily: {
        fira: ["Fira Code"],
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
