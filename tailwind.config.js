import defaultTheme from 'tailwindcss/defaultTheme'
import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green-primary': '#A0FF1F',
      'pink-primary': '#F70087',
      'black-primary': '#000000',
      'white-primary': '#FFFFFF',

      'green-secondary': '#00ED71',
      'pink-secondary': '#F402561A',

      'gray':{
        'dark': '#5B5B5B',
        'DEFAULT': '#C3C3C3',
        'light': '#F8F8F8',
      },

      'gradient-primary': 'linear-gradient(81deg, #A0FF1F 13.17%, #00ED71 86.83%)',

      'success': '#00ED71',
      'success-light': '#00ED7133', // last 2 numbers for 20% opacity
      'error':'#F40256',
      'error-light': '#F4025626' // last 2 numbers are for 20% opacity
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontFamily:{
        sans:['Poppins', defaultTheme.fontFamily]
      },
    }
  },

  plugins: [daisyui],

  daisyui:{
    themes: false,
    base: false,
    styled: false,
  }
}
