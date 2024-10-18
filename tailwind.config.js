/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxHeight: {
        '40': '10rem',
      },
      boxShadow: {
        sidebar: '0 5px 20px rgba(0, 0, 0, 0.2)',
      },
      padding: {
        '15px-25px': '15px 25px',
        '75px': '75px',
        '30px': '30px',
        '20px': '20px',
        '10px': '10px',
      },
      margin: {
        '30px': '30px',
        'l25px-r35px': '0 35px 0 25px',
        '20px': '20px',
        '10px': '10px',
      },
      fontSize: {
        '15px': '15px',
        '13px': '13px'
      },
      colors: {
        'nav': '#676b84',
        'primary': '#4d4f5c'
      }
    },
  },
  variants: {
    extend: {
      maxHeight: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}


