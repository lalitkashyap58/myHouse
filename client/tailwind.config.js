/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'sign':"url('./assets/pexels-anna-shvets-4226269.jpg')",
      }
    },
  },
  plugins: [],
}

