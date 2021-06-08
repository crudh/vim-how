// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./tailwind-safelist.txt", "./src/**/*.tsx", "./src/**/*.ts"],
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
    extend: {
      fontFamily: {
        fira: ["Fira Code"],
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
        1200: "1200ms",
        1400: "1400ms",
        1600: "1600ms",
        1800: "1800ms",
        2000: "2000ms",
      },
    },
  },
  variants: {},
  plugins: [],
};
