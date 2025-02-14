/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			"animation": {
				"background-shine": "background-shine 1.575s linear infinite",
				"swing": "swing 1s ease-in-out 1",
				"spin": "spin 1s linear infinite",
				"luna": "luna 5s linear infinite",
				"CometaX": "CometaX 5s ease-out infinite",
				"spin": "spin 30s linear infinite",

			},
			"keyframes": {
				"spin": {
					"0%": {
						"transform": "rotate(0deg)"
					},
					"100%": {
						"transform": "rotate(360deg)"
					}
				},
				"CometaX": {
					"0%": {
						"transform": "translateX(0%)",
						"rotate": "90deg",
						"opacity": "0",
					},
					"25%": {
						"opacity": ".5",
					},
					"50%": {
						"opacity": "1",
					},
					"100%": {
						"transform": "translateX(4000%)",
						"rotate": "270deg",
						"opacity": "0",
					}
				},
				"luna": {
					"0%": {
						"transform": "translateX(0%)",
						"rotate": "0deg",
						"opacity": "0",

					},
					"50%": {
						"transform": "translateX(100%)",
						"rotate": "-20deg",
						"opacity": "1",

					},
					"100%": {
						"transform": "translateX(200%)",
						"rotate": "-30deg",
						"opacity": "0",

					}
				},

				"spin": {
					"from": {
						"transform": "rotate(0deg)"
					},
					"to": {
						"transform": "rotate(360deg)"
					}
				},
				"background-shine": {
					"from": {
						"backgroundPosition": "0 0"
					},
					"to": {
						"backgroundPosition": "-200% 0"
					}
				},
				"swing": {
					"0%": {
						"transform": "rotate(0deg)"
					},
					"100%": {
						"transform": "rotate(360deg)"
					}
				}
			}
		},
	},
	plugins: [],
}

