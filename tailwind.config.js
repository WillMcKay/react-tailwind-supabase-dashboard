/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#54E0A7',
        'secondary': '#141414',
        'background': '#0F0F0F',
      },
    },
  },
  plugins: [],
}