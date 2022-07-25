/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#505050",
				grey: "#D6D6D6",
				yellow: {
					10: "#FFEE32",
					20: "#EC5050",
				},
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
