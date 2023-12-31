import defaultTheme from 'tailwindcss/defaultTheme'
import daisyui from 'daisyui'
import { colors } from './src/colors'


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: colors,
    extend: {
      fontFamily: {
        sans: ['Poppins', defaultTheme.fontFamily.sans],
        mono: ['Anonymous Pro', defaultTheme.fontFamily.mono],
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      screens: {
        'zero': '0px',
      }
    },
  },

  plugins: [daisyui],

  daisyui: {
    themes: true,
    base: true,
    styled: true,
  }
}
