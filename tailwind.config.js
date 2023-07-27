/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        one : "#B16CEA",
        two : "#FF5E69",
        three : "#FF8A56",
        four : "#FFA84B"
      },
      
      daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
    },
  },

  plugins: [require("daisyui"), require('@tailwindcss/typography'),],
}

