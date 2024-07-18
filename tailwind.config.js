/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif']
      },
      colors: {
        black: '#2D2D2D',
        white: '#FFFFFF',
        grayLight: '#F3F3F3',
        redLight: '#F3EFEC',
        green: '#009379',
        orange:'#FF5C28'
      },
    },
  },
  plugins: [],
}

