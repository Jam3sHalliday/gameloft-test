const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      realBlue: colors.blue,
    },
    extend: {
      backgroundImage: theme => ({
        
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
