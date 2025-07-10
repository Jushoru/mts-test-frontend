/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F2F3F7',
        'foreground': '#1D2023',
        'accent': '#FF0032',

        'placeholder': '#6D7782',
        'input-border': '#BBC1C7',

        'accentHover': '#C80028',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}