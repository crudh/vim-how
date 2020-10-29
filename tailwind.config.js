module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.ts",
    "./components/**/*.tsx",
    "./components/**/*.ts",
    "./data/**/*.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code"],
      },
    },
  },
  variants: {},
  plugins: [],
};
