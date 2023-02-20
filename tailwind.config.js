/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        salatiga: ["Salatiga"],
      },
      colors: {
        "custom-dark": "#000000",
        "main-color": "#C43E1B",
        "custom-gray": "#454545",
        "custom-white": "#FFFFFF",
        "custom-purple": "#7843E8",
        "custom-yellow": "#FFF253",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-100%, 0)" },
        },
        // skew(-5deg)
        shake: {
          "0%": {
            transform: "translate(1px, 1px) rotate(0deg) ",
          },
          "10%": {
            transform: "translate(-1px, -2px) rotate(-1deg)",
          },
          "20%": {
            transform: "translate(-3px, 0px) rotate(1deg)",
          },
          "30%": {
            transform: "translate(3px, 2px) rotate(0deg)   ",
          },
          "40%": {
            transform: "translate(1px, -1px) rotate(1deg)   ",
          },
          "50%": {
            transform: " translate(-1px, 2px) rotate(-1deg)  ",
          },
          "60%": {
            transform: "  translate(-3px, 1px) rotate(0deg) ",
          },
          "70%": {
            transform: " translate(3px, 1px) rotate(-1deg)  ",
          },
          "80%": {
            transform: "  translate(-1px, -1px) rotate(1deg) ",
          },
          "90%": {
            transform: " translate(1px, 2px) rotate(0deg)  ",
          },
          "100%": {
            transform: "  translate(1px, -2px) rotate(-1deg) ",
          },
        },
      },
      animation: {
        slide: "slide 120s linear infinite",
        shake: "shake 1.5s infinite",
      },
    },
  },

  plugins: [],
}
