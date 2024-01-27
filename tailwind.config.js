import plugin from "tailwindcss/plugin";


/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [
		plugin(function ({matchUtilities, theme}) {
			matchUtilities(
				{
					'animate-duration': (value) => ({
						animationDuration: value,
					}),
				},
				{values: theme('transitionDuration')}
			)
		}),
		plugin(function ({matchUtilities, theme}) {
			matchUtilities(
				{
					'animate-delay': (value) => ({
						animationDelay: value,
					}),
				},
				{values: theme('transitionDelay')}
			)
		})
	],
	theme: {
		extend: {
			fontFamily: {
				'druk': ['Druk Text Wide Cyr', 'sans-serif'],
				'inter': ["Inter", "sans-serif"]
			},
			container: {
				center: true,
				screens: {
					DEFAULT: "100%",
					lg: "1320px"
				},
				padding: {
					DEFAULT: "1.25rem",
				},
			},
			colors: {
				"violet": {
					"accent": "rgba(93,44,233,1)",
				},
				"red": {
					500: "rgba(226,57,79,1)"
				},
				"amber": {
					400: "rgba(241,184,42,1)"
				},
				"blue": {
					700: "rgba(30,81,235,1)"
				},
				"zinc": {
					800: "rgba(35,40,46,1)"
				}
			}
		},
		keyframes: {
			'moveTop': {
				'0%': {transform: 'translateY(2rem)', opacity: 0},
				'100%': {transform: 'translateY(0)', opacity: 100},
			},
			'moveBottom': {
				'0%': {transform: 'translateY(-2rem)', opacity: 0},
				'100%': {transform: 'translateY(0)', opacity: 100},
			},
			'moveLeft': {
				'0%': {transform: 'translateX(2rem)', opacity: 0},
				'100%': {transform: 'translateX(0)', opacity: 100},
			},
			'moveRight': {
				'0%': {transform: 'translateX(-2rem)', opacity: 0},
				'100%': {transform: 'translateX(0)', opacity: 100},
			},
			"logoStamp": {
				"0%": {
					transform: "scale(5,5) rotate(-5deg)",
					opacity: 0
				},
				"100%": {
					transform: "scale(1,1) rotate(-5deg)",
					opacity: 100
				}
			}
		},
		animation: {
			'moveTop': 'moveTop 0.8s ease-in-out',
			'moveBottom': 'moveBottom 0.8s ease-in-out',
			'moveLeft': 'moveLeft 0.8s ease-in-out',
			'moveRight': 'moveRight 0.8s ease-in-out',
			'logoStamp': 'logoStamp 200ms ease-in'
		}
	}
}