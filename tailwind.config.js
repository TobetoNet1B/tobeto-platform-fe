/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/flowbite-react/lib/esm/**/*.js",
		"./node_modules/tw-elements-react/dist/js/**/*.js"
	],
	plugins: [
		require("flowbite/plugin"),
		require("daisyui"),
		require("tw-elements-react/dist/plugin.cjs")
	],
	daisyui: {
		themes: ["light"]
	},
	theme: {
		extend: {
			colors: {
				bs_blue: "#56a2bd",
				bs_indigo: "#6610f2",
				bs_purple: "#6f42c1",
				bs_pink: "#d63384",
				bs_red: "#fc5c46",
				bs_orange: "#fd7e14",
				bs_yellow: "#fbdc8e",
				bs_green: "#006251",
				bs_teal: "#20c997",
				bs_cyan: "#0dcaf0",
				bs_black: "#000",
				bs_white: "#fff",
				bs_gray: "#57534e",
				bs_gray_dark: "#292524",
				bs_gray_100: "#f5f5f4",
				bs_gray_200: "#e7e5e4",
				bs_gray_300: "#d6d3d1",
				bs_gray_400: "#a8a29e",
				bs_gray_500: "#78716c",
				bs_gray_600: "#57534e",
				bs_gray_700: "#44403c",
				bs_gray_800: "#292524",
				bs_gray_900: "#1c1917",
				bs_primary: "#93f",
				bs_secondary: "#93f",
				bs_success: "#65b996",
				bs_info: "#4d4d4d",
				bs_warning: "#ed9c56",
				bs_danger: "#fc5c46",
				bs_light: "#f5f5f4",
				bs_dark: "#181717",
				bs_primary_light: "#e1e1e1",
				bs_secondary_light: "#ebe3ff",
				bs_success_light: "#e6efee",
				bs_info_light: "#4d4d4d",
				bs_warning_light: "#fef8e8",
				bs_danger_light: "#ffefec",
				bs_light_light: "#fafaf9",
				bs_primary_rgb: "153,51,255",
				bs_secondary_rgb: "153,51,255",
				bs_success_rgb: "101,185,150",
				bs_info_rgb: "77,77,77",
				bs_warning_rgb: "237,156,86",
				bs_danger_rgb: "252,92,70",
				bs_light_rgb: "245,245,244",
				bs_dark_rgb: "24,23,23",
				bs_primary_light_rgb: "225,225,225",
				bs_secondary_light_rgb: "235,227,255",
				bs_success_light_rgb: "230,239,238",
				bs_info_light_rgb: "77,77,77",
				bs_warning_light_rgb: "254,248,232",
				bs_danger_light_rgb: "255,239,236",
				bs_light_light_rgb: "250,250,249",
				bs_primary_text_emphasis: "#3d1466",
				bs_secondary_text_emphasis: "#3d1466",
				bs_success_text_emphasis: "#284a3c",
				bs_info_text_emphasis: "#1f1f1f",
				bs_warning_text_emphasis: "#5f3e22",
				bs_danger_text_emphasis: "#65251c",
				bs_light_text_emphasis: "#44403c",
				bs_dark_text_emphasis: "#44403c",
				bs_primary_bg_subtle: "#ebd6ff",
				bs_secondary_bg_subtle: "#ebd6ff",
				bs_success_bg_subtle: "#e0f1ea",
				bs_info_bg_subtle: "#dbdbdb",
				bs_warning_bg_subtle: "#fbebdd",
				bs_danger_bg_subtle: "#fededa",
				bs_light_bg_subtle: "#fafafa",
				bs_dark_bg_subtle: "#a8a29e",
				bs_primary_border_subtle: "#d6adff",
				bs_secondary_border_subtle: "#d6adff",
				bs_success_border_subtle: "#c1e3d5",
				bs_info_border_subtle: "#b8b8b8",
				bs_warning_border_subtle: "#f8d7bb",
				bs_danger_border_subtle: "#febeb5",
				bs_light_border_subtle: "#e7e5e4",
				bs_dark_border_subtle: "#78716c",
				bs_white_rgb: "255,255,255",
				bs_black_rgb: "0,0,0",
				bs_body_color: "#1c1917",
				bs_body_color_rgb: "28,25,23",
				bs_body_bg: "#fff",
				bs_body_bg_rgb: "255,255,255",
				bs_emphasis_color: "#000",
				bs_emphasis_color_rgb: "0,0,0",
				bs_secondary_color: "rgba(28,25,23,.75)",
				bs_secondary_color_rgb: "28,25,23",
				bs_secondary_bg: "#e7e5e4",
				bs_secondary_bg_rgb: "231,229,228",
				bs_tertiary_color: "rgba(28,25,23,.5)",
				bs_tertiary_color_rgb: "28,25,23",
				bs_tertiary_bg: "#f5f5f4",
				bs_tertiary_bg_rgb: "245,245,244",
				bs_heading_color: "#001410",
				bs_link_color: "#93f",
				bs_link_color_rgb: "153,51,255",
				bs_link_decoration: "underline",
				bs_link_hover_color: "#7a29cc",
				bs_link_hover_color_rgb: "122,41,204",
				bs_code_color: "#d63384",
				bs_highlight_bg: "#fef5dd",
				bs_border_width: "1px",
				bs_border_style: "solid",
				bs_border_color: "#f5f5f4",
				bs_border_color_translucent: "rgba(0,0,0,.175)",
				bs_focus_ring_color: "rgba(153,51,255,.25)",
				bs_form_valid_color: "#65b996",
				bs_form_valid_border_color: "#65b996",
				bs_form_invalid_color: "#fc5c46",
				bs_form_invalid_border_color: "#fc5c46",
				bs_btn_color: "#fff",
				bs_btn_bg: "#93f",
				bs_btn_border_color: "#93f",
				bs_btn_hover_color: "#fff",
				bs_btn_hover_bg: "#822bd9",
				bs_btn_hover_border_color: "#7a29cc",
				bs_btn_focus_shadow_rgb: "168,82,255",
				bs_btn_active_color: "#fff",
				bs_btn_active_bg: "#7a29cc",
				bs_btn_active_border_color: "#7326bf",
				bs_btn_active_shadow: "inset 0 3px 5px rgba(0,0,0,.125)",
				bs_btn_disabled_color: "#fff",
				bs_btn_disabled_bg: "#93f",
				bs_btn_disabled_border_color: "#93f",



				// Admin Panel İçin Başlangıç
				current: 'currentColor',
				transparent: 'transparent',
				white: '#FFFFFF',
				black: '#1C2434',
				'black-2': '#010101',
				body: '#64748B',
				bodydark: '#AEB7C0',
				bodydark1: '#DEE4EE',
				bodydark2: '#8A99AF',
				primary: '#3C50E0',
				secondary: '#80CAEE',
				stroke: '#E2E8F0',
				gray: '#EFF4FB',
				graydark: '#333A48',
				'gray-2': '#F7F9FC',
				'gray-3': '#FAFAFA',
				whiten: '#F1F5F9',
				whiter: '#F5F7FD',
				boxdark: '#24303F',
				'boxdark-2': '#1A222C',
				strokedark: '#2E3A47',
				'form-strokedark': '#3d4d60',
				'form-input': '#1d2a39',
				'meta-1': '#DC3545',
				'meta-2': '#EFF2F7',
				'meta-3': '#10B981',
				'meta-4': '#313D4A',
				'meta-5': '#259AE6',
				'meta-6': '#FFBA00',
				'meta-7': '#FF6766',
				'meta-8': '#F0950C',
				'meta-9': '#E5E7EB',
				success: '#219653',
				danger: '#D34053',
				warning: '#FFA70B',
			},
			fontSize: {
				'title-xxl': ['44px', '55px'],
				'title-xl': ['36px', '45px'],
				'title-xl2': ['33px', '45px'],
				'title-lg': ['28px', '35px'],
				'title-md': ['24px', '30px'],
				'title-md2': ['26px', '30px'],
				'title-sm': ['20px', '26px'],
				'title-xsm': ['18px', '24px'],
			},
			spacing: {
				4.5: '1.125rem',
				5.5: '1.375rem',
				6.5: '1.625rem',
				7.5: '1.875rem',
				8.5: '2.125rem',
				9.5: '2.375rem',
				10.5: '2.625rem',
				11: '2.75rem',
				11.5: '2.875rem',
				12.5: '3.125rem',
				13: '3.25rem',
				13.5: '3.375rem',
				14: '3.5rem',
				14.5: '3.625rem',
				15: '3.75rem',
				15.5: '3.875rem',
				16: '4rem',
				16.5: '4.125rem',
				17: '4.25rem',
				17.5: '4.375rem',
				18: '4.5rem',
				18.5: '4.625rem',
				19: '4.75rem',
				19.5: '4.875rem',
				21: '5.25rem',
				21.5: '5.375rem',
				22: '5.5rem',
				22.5: '5.625rem',
				24.5: '6.125rem',
				25: '6.25rem',
				25.5: '6.375rem',
				26: '6.5rem',
				27: '6.75rem',
				27.5: '6.875rem',
				29: '7.25rem',
				29.5: '7.375rem',
				30: '7.5rem',
				31: '7.75rem',
				32.5: '8.125rem',
				34: '8.5rem',
				34.5: '8.625rem',
				35: '8.75rem',
				36.5: '9.125rem',
				37.5: '9.375rem',
				39: '9.75rem',
				39.5: '9.875rem',
				40: '10rem',
				42.5: '10.625rem',
				44: '11rem',
				45: '11.25rem',
				46: '11.5rem',
				47.5: '11.875rem',
				49: '12.25rem',
				50: '12.5rem',
				52: '13rem',
				52.5: '13.125rem',
				54: '13.5rem',
				54.5: '13.625rem',
				55: '13.75rem',
				55.5: '13.875rem',
				59: '14.75rem',
				60: '15rem',
				62.5: '15.625rem',
				65: '16.25rem',
				67: '16.75rem',
				67.5: '16.875rem',
				70: '17.5rem',
				72.5: '18.125rem',
				73: '18.25rem',
				75: '18.75rem',
				90: '22.5rem',
				94: '23.5rem',
				95: '23.75rem',
				100: '25rem',
				115: '28.75rem',
				125: '31.25rem',
				132.5: '33.125rem',
				150: '37.5rem',
				171.5: '42.875rem',
				180: '45rem',
				187.5: '46.875rem',
				203: '50.75rem',
				230: '57.5rem',
				242.5: '60.625rem',
			},
			maxWidth: {
				2.5: '0.625rem',
				3: '0.75rem',
				4: '1rem',
				11: '2.75rem',
				13: '3.25rem',
				14: '3.5rem',
				15: '3.75rem',
				22.5: '5.625rem',
				25: '6.25rem',
				30: '7.5rem',
				34: '8.5rem',
				35: '8.75rem',
				40: '10rem',
				42.5: '10.625rem',
				44: '11rem',
				45: '11.25rem',
				70: '17.5rem',
				90: '22.5rem',
				94: '23.5rem',
				125: '31.25rem',
				132.5: '33.125rem',
				142.5: '35.625rem',
				150: '37.5rem',
				180: '45rem',
				203: '50.75rem',
				230: '57.5rem',
				242.5: '60.625rem',
				270: '67.5rem',
				280: '70rem',
				292.5: '73.125rem',
			},
			maxHeight: {
				35: '8.75rem',
				70: '17.5rem',
				90: '22.5rem',
				550: '34.375rem',
				300: '18.75rem',
			},
			minWidth: {
				22.5: '5.625rem',
				42.5: '10.625rem',
				47.5: '11.875rem',
				75: '18.75rem',
			},
			zIndex: {
				999999: '999999',
				99999: '99999',
				9999: '9999',
				999: '999',
				99: '99',
				9: '9',
				1: '1',
			},
			opacity: {
				65: '.65',
			},
			transitionProperty: { width: 'width', stroke: 'stroke' },
			borderWidth: {
				6: '6px',
			},
			boxShadow: {
				default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
				card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
				'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
				switcher:
					'0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
				'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
				1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
				2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
				3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
				4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
				5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
				6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
				7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
				8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
			},
			dropShadow: {
				1: '0px 1px 0px #E2E8F0',
				2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
			},
			darkMode: 'class',
			fontFamily: {
				satoshi: ['Satoshi', 'sans-serif'],
			},
			screens: {
				'2xsm': '375px',
				xsm: '425px',
				'3xl': '2000px',
				...defaultTheme.screens,
			},
			//Admin Panel İçin Bitiş

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
				},
				//Admin
				rotating: {
					'0%, 100%': { transform: 'rotate(360deg)' },
					'50%': { transform: 'rotate(0deg)' },
				},
				//Admin
			}
		},
		animation: {
			fade: "fade 4s ease infinite",
			fill: "fill 10s linear 1",
			animateHeart: "animateHeart 0.3s linear forwards 0.25s",
			animateHeartOut: "animateHeartOut 0.3s linear forwards",
			animateCircle: "animateCircle 0.3s linear forwards",
			antProgresActive: "antProgresActive 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite",
			preloaderAnimation: "preloaderAnimation 2s linear infinite",
			carrosel: "carrosel 12s linear infinite",
			//Admin
			'ping-once': 'ping 5s cubic-bezier(0, 0, 0.2, 1)',
			rotating: 'rotating 30s linear infinite',
			'spin-1.5': 'spin 1.5s linear infinite',
			'spin-2': 'spin 2s linear infinite',
			'spin-3': 'spin 3s linear infinite',
			//Admin
		}
	}
};
