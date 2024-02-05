/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'main-color': '#161823',
        'default': '#F35444',
      },
      textColor: {
        'default': '#F35444',
        'faded-black': '#666666'
      },
    },
  },
  plugins: [],
}