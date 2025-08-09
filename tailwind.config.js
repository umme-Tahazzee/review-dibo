/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sx: '300px',
      sm : '640px',
      md : '768px',
      lg : '960px',
      xl : '1200px',
    },
    fontFamily:{
       primary : 'var(--font-jetbrainsMono)',
    },
    extend: {
      colors: {
       primary : '#1E1E1E',
       accent:{
          DEFAULT: '#87CEFA',
          hover: '#00e187',
          
       }
      },


    },
  },
  plugins: [require("tailwindcss-animate")],
}