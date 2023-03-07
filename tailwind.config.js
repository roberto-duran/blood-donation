/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#cf191f',
        primaryBackground: '#f5f5f4'
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        }
      },
      animation: {
        heartBeat: 'heartBeat 1.7s infinite'
      }
    },
  },
  plugins: [],
}
