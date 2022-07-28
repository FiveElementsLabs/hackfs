/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        principal: {
          blue: "#00001E",
          lightgray: "#E8EEF9",
          gray: "#BFC1C6",
          text: "#5C6F81",
        },
        bright: {
          blue: "#1988F7",
          green: "#32C66D",
          red: "#F82518",
          yellow: "#FFC700",
        },
        shade: {
          0: "#E8F1FF",
          1: "#CFE2FF",
          2: "#A8CBFF",
          3: "#73ABFF",
        },
        dark: {
          card: "#0f1d45",
          card2: "#0C1840",
          bg: "#040722",
        },
        buttonHover: "#69B4FF",
        elements: "#0A3576",
        light: {
          bg: "#E6EBF1",
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
