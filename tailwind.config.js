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
        cem: "37%",
        cem1: "30%",
        cem2: "42%",
        cem3: "54%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
