/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': {
          50:  '#2656C3',
          100: '#7293E4',
          200: '#262956',
          300: '#181B3F',          
				},
        'custom-yellow': {
					100: "#F8D34D",
				},
      },
      fontFamily: {        
				'roboto':	 	['roboto',  'sans-serif'],	
        'body': 		['lato', 'sans-serif'],			
        'title':    ['Passion One', 'sans-serif'],
			},
      backgroundImage: {         
        'stars': "url('./assets/background.svg')",
        'iphone': "url('./assets/iphone.webp')",
        'simon': "url('./assets/simon.png')",
      },
    },
  },
  plugins: [],
}

