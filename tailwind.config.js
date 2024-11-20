/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      width: {
        50: "50%",
      },
      colors: {
        banner: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
