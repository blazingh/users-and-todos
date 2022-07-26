/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: {
					1: "#282828",
					2: "#383838",
					3: "#484848",
				},
				grey: "#D6D6D6",
				blue: {
					10: "#1492E6",
					20: "#57B2EF",
					30: "#97CDF2",
				},
			},
		},
	},
	plugins: [],
};
