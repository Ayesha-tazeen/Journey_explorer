/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      fontFamily:{
        titleFont:"Roboto",
        bodyFont:"Poppins",
      },
      colors:{     
        wall:'#0f0613',
        head:'#872341',
        paras:'#ffffff',
        semihead:"#F05941"

      }
    },
  },
  plugins: [],
}

