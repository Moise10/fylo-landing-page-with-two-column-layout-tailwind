module.exports = {
	content: ['./dist/index.html'],
	theme: {
		extend: {
			screens: {
				sm: '360px',
				// => @media (min-width: 640px) { ... }

				md: '799px',
				// => @media (min-width: 768px) { ... }

				lg: '1024px',
				// => @media (min-width: 1024px) { ... }

				xl: '1280px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }
			},
			boxShadow: {
				'3xl':'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
			},
		},
	},
	plugins: [],
};
