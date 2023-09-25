/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      height: {
        fullMax: "150%",
      },
      spacing: {
        tela50: "40%",
        cem: "27rem",
        cem1: "30rem",
        cem2: "43rem",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
