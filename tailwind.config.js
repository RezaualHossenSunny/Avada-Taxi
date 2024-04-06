/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1140px',
      },
      fontFamily: {
        'popins': [ "Poppins", "sans-serif"]
      
      },
      backgroundImage: {
        'heder': "url('/src/assets/avada-taxi-homepage-hero.jpg')",
       
      }
    },
  },
  plugins: [],
}