/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#132337',
        'secondary': '#1C2E45',
        'custom-color': '#0F1824',
        'custom-text': '#92AFD3',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light'], // Set 'light' to default to light mode, or 'dark' for dark mode
  },
}

