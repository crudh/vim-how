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
