module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Overpass']
    },
    textColor:  theme => ({
      ...theme('colors'),
      'tuni': '#570099',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'tuni': '#570099',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
