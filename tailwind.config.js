/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      }, 
      colors: {
        beige: '#fcfcfb', // Add your preferred beige color code
      },
    },
  },
  plugins: [],
}

