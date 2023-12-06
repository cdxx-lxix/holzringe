/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  content: [],
  theme: {
    // colors: {
    //   primary: "#161616"
    // },
    extend: {
      fontFamily: {
        menu: [ 'Oswald', 'sans-serif' ],
        branding: ['Horizon', 'sans-serif'],
        text: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
