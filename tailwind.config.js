/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {        
				'roboto':	 	['roboto',  'sans-serif'],	
        'body': 		['lato', 'sans-serif'],			
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

