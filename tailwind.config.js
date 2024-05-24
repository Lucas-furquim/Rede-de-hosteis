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
      screens: {
        mxl: { max: "1200px" },
        // => @media (max-width: 1279px) { ... }

        mlg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mtrab: { max: "850px" },
        // => @media (max-width: 850pxpx) { para a pagina de trabalho }

        trab: { max: "900px" },
        // => @media (max-width: 900pxpx) { a sessão de trabalho na home }

        mmd: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        msm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        mimg: { max: "550px" },

        mximg: { max: "490px" },

        mxs: { max: "439px" },
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
