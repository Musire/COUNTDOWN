/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors: {
        desatblue: '#343650',
        darkblue: '#1E1F29',
        blackblue: '#191A24',
        grayblue: '#8486A9',
        softred: '#FB6087', 
        deep: '#201e2b'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      backgroundImage: {
        'hills': "url('./assets/hills.svg')",
        'stars': "url('./assets/stars.svg')",
        'top': "url('./assets/Top.png')",
        'bottom': "url('./assets/Bottom.png')"
      },
      animation: {
        flip: 'flip 1s cubic-bezier(0.42, 0, 0.58, 1)',
        topcard: 'topcard 400ms cubic-bezier(0.42, 0, 0.58, 1) infinite',
        bottomcard: 'bottomcard 400ms cubic-bezier(0.42, 0, 0.58, 1) infinite'
      },
      keyframes: {
        topcard: {
          '0%' : { opacity: 1 },
          '50%' : { transform: 'translateY(50%) rotateX(90deg)'},
          '100%' : { transform: 'translateY(50%) rotateX(90deg)'}
        },
        bottomcard: {
          '0%' : { transform: 'rotateX(-90deg)'},
          '50%' : { transform: 'translateY(-50%) rotateX(-90deg)'},
          '100%' : { transform: 'translateY(0%) rotateX(0deg)'}
        },
        flip: {
          '0%' : { transform: 'rotateX(0deg)'},
          '50%' : { transform: 'rotateX(90deg)'},
          '100%' : { transform: 'rotateX(180deg)'}
        }
      },
    },
  },
  
}
