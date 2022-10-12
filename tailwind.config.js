/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./img/forest2.jpg')",
        "bg-svg" : "url('./img/bg2.svg')",
        "color-pattern" : "linear-gradient(to right top, #1fc274, #41c160, #5abf4a, #70bc32, #84b90d)",
      },
      colors: {
        "green-primary": "#186A3B", 
      },
    },
  },
  plugins: [],
};
