module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "2000px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
