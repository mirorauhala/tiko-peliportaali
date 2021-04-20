module.exports = {
  purge: {
    content: ['./*.html', './*.vue'],

  },
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Overpass']
    },
    textColor: {
      'tuni': '#570099'
    },
    borderColor: theme => ({
      ...theme('colors'),
      'tuni': '#570099',
    }),

    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
