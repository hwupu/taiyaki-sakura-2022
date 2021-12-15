module.exports = {
	mode: 'jit',
  purge: ['./src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			screens: {
				'hd': '1921px',
			},
			maxWidth: {
				'hd': '1920px',
			},
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
