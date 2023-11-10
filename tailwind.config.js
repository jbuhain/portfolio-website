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
        beige: '#eec33d', // Add your preferred beige color code
        forest: '#1e2124 ',
      },
    },
  },
  plugins: [],
}

