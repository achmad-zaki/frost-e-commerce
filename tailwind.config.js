/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sofia': ['Sofia Sans, sans-serif']
    },
    colors: {
      'primary': '#F54B64',
      'secondary': '#CD3750',
      'white': '#FFFFFF'  
    },
    extend: {},
  },
  plugins: [],
}
