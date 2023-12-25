/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Poppins", "sans-serif"],
      display: ["Lora", "serif"]
    }
  },
  darkMode: 'class',
  plugins: [],
}

