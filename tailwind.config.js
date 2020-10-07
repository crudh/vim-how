module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.js",
    "./components/**/*.tsx",
    "./components/**/*.js",
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
