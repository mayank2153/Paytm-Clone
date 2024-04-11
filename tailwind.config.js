/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'sans': ['araboto medium', 'ui-sans-serif', 'system-ui', ],
    },
    colors:{
      skyblue: '#00baf2',
      bluehover: '#01AEE3',
      white: '#f8fafc',
      black: '#000000',
      blue400: '#60a5fa',
      blue950: '#172554',
      dblue: '#0f4a8a',
      bhover: '#043b78',
      gray100: '#dcddde',
      whitebg: '#f5f7fa',
    },
    extend: {
      backgroundImage: {
        'finsecbg' : "url('/images/fin-sec-bg.png')"
      }
    },
  },
  plugins: [],
}