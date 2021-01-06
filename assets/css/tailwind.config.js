const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      teal: colors.teal,
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
