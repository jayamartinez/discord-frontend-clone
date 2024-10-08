/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: {
          900: '#202225',
          850: "#2b2d31",
          800: '#2f3136',
          750: "#393d41",
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5'
        },
        blue: "#5865f2",
        "custom-gray": "#8f969e",
      },
      fontFamily: {
        custom: ['gg-sans','sans-serif'],
      }

    },
  },
  plugins: [],
}