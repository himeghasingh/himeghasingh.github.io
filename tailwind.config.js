/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          '500': '#8A2BE2',
        },
        green: {
          '500': '#008000',
        }
      }
    },
    fontFamily:{
      secondary : ["Source Sans 3"],
    }
  },
  plugins: [],
}