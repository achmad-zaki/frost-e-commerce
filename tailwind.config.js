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
    extend: {
      dropShadow: {
        'thin': '0 4px 5px rgba(221, 221, 221, 0.25)',
      },
    },
  },
  plugins: [],
}
