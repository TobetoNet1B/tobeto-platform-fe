/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  plugins: [
    require("flowbite/plugin"),
    require("daisyui"),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "20%": { opacity: 1 },
          "33.333%": { opacity: 1 },
          "53.333%": { opacity: 0 },
        },
        fill: {
          "0% ": { width: "0" },
          "100%": { width: "100%" },
        },
        animateHeart: {
          "40%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        animateHeartOut: {
          "0%": { transform: "scale(1.4)" },
          "100%": { transform: "scale(1)" },
        },
        animateCircle: {
          "40%": {
            transform: "scale(10)",
            opacity: 1,
            fill: "#dd4688",
          },
          "55%": {
            transform: "scale(11)",
            opacity: 1,
            fill: "#d46abf",
          },
          "65%": {
            transform: "scale(12)",
            opacity: 1,
            fill: "#cc8ef5",
          },
          "75%": {
            transform: "scale(13)",
            opacity: 1,
            fill: "transparent",
            stroke: "#cc8ef5",
            strokeWidth: ".5",
          },
          "85%": {
            transform: "scale(17)",
            opacity: 1,
            fill: "transparent",
            stroke: "#cc8ef5",
            strokeWidth: ".2",
          },
          "95%": {
            transform: "scale(18)",
            opacity: 1,
            fill: "transparent",
            stroke: "#cc8ef5",
            strokeWidth: ".1",
          },
          "100%": {
            transform: "scale(19)",
            opacity: 1,
            fill: "transparent",
            stroke: "#cc8ef5",
            strokeWidth: "0",
          },
        },
        antProgresActive: {
          "0%": {
            transform: "translateX(-100%) scaleX(0)",
            opacity: 0.1,
          },
          "20%": {
            transform: "translateX(-100%) scaleX(0)",
            opacity: 0.5,
          },
          "100%": {
            transform: "translateX(0) scaleX(1)",
            opacity: 0,
          },
        },
        preloaderAnimation: {
          "0%": {
            opacity: 0.3,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0.3,
          }
        },
        carrosel: {
          "0%": {
            transform: "rotateY(1turn) translateZ(130px) rotateY(-1turn)",
            zIndex: 10,
            opacity: 1
          },
        
          "50%": {
            zIndex: -10
          },
        
          "to": {
            transform: "rotateY(0deg) translateZ(130px) rotateY(0deg)",
            zIndex: 10,
            opacity: 1,
          }
        }
      },
    },
    animation: {
      fade: "fade 4s ease infinite",
      fill: "fill 10s linear 1",
      animateHeart: "animateHeart 0.3s linear forwards 0.25s",
      animateHeartOut: "animateHeartOut 0.3s linear forwards",
      animateCircle: "animateCircle 0.3s linear forwards",
      antProgresActive: "antProgresActive 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite",
      preloaderAnimation: "preloaderAnimation 2s linear infinite",
      carrosel: "carrosel 12s linear infinite"
    } /*  fade 4s ease 0s infinite normal none running fade auto normal normal */,
  },
};
