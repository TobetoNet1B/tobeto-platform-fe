/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		'node_modules/flowbite-react/lib/esm/**/*.js'
	],
	darkMode: false,
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': {opacity: 0},
          '20%': { opacity: 1 },
          '33.333%': { opacity: 1 },
          '53.333%': { opacity: 0 }
        },
        fill:{
          '0% ': { width: '0' },
          '100%': { width: '100%' }
        }

      },
      animation: { fade: 'fade 4s ease infinite' , fill: 'fill 10s linear 1'},/*  fade 4s ease 0s infinite normal none running fade auto normal normal */
    },
  },
  plugins: [
		require('flowbite/plugin'),
		require('daisyui')
	],
	daisyui: {
    themes: ["light"],
  },
}

