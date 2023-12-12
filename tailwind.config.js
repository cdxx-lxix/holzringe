/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        menu: [ 'Oswald', 'sans-serif' ],
        branding: ['Horizon', 'sans-serif'],
        text: ['Roboto', 'sans-serif']
      },
      colors: {
        primary: {
          0: '#E9E9E9',
          100: '#F1F1F1',
          200: '#E0E0E0',
          300: '#FFFCF2',
          500: '#748386',
          1000: '#161616',
        },
        trprimary: {
          1000: '#161616a3',
          950: '#323232',
          900: '#999999'
        }
      }
    },
  },
  plugins: [],
}
