export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#101727",
        secondary: "#16B87F",
        teitary: "#182130",
        gray: "#737B88",
        white: "#FFFFFF",
        black: "#000000",
        info: "#183054",
        warning: "#982730",
        danger: "#982730",
        success: "#23CF6A",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          sm: "1.5%",
          md: "2.5%",
          lg: "3%",
          xl: "5%",
          "2xl": "8%",
        },
      },
    },
  },
  plugins: [],
};
