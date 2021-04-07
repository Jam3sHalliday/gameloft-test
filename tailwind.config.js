const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "carouselImage": "url('http://res.cloudinary.com/jam3shalliday/image/upload/v1617769447/The_Oregon_Trail_Screen_02_EN_63734a52d9_gywypn.jpg')"
      })
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      realBlue: colors.blue,
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
