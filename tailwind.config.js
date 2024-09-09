/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts}'],
	theme: {
		extend: {
			fontSize: {
				xs: [
					'clamp(0.6rem, 0vi + 0.6rem, 0.6rem)',
					{ lineHeight: 'clamp(0.9rem, 0.5vi + 0.6rem, 1rem)' }
				],
				sm: [
					'clamp(0.75rem, 0.09vi + 0.73rem, 0.8rem)',
					{ lineHeight: 'clamp(1rem, 0.5vi + 0.8rem, 1.1rem)' }
				],
				base: [
					'clamp(0.94rem, 0.23vi + 0.88rem, 1.06rem)',
					{ lineHeight: 'clamp(1.25rem, 0.6vi + 1rem, 1.5rem)' }
				],
				md: [
					'clamp(1.17rem, 0.44vi + 1.06rem, 1.42rem)',
					{ lineHeight: 'clamp(1.5rem, 0.7vi + 1.2rem, 1.75rem)' }
				],
				lg: [
					'clamp(1.46rem, 0.77vi + 1.27rem, 1.89rem)',
					{ lineHeight: 'clamp(1.75rem, 0.8vi + 1.4rem, 2rem)' }
				],
				xl: [
					'clamp(1.83rem, 1.25vi + 1.52rem, 2.52rem)',
					{ lineHeight: 'clamp(2rem, 0.9vi + 1.6rem, 2.25rem)' }
				],
				'2xl': [
					'clamp(2.29rem, 1.94vi + 1.8rem, 3.35rem)',
					{ lineHeight: 'clamp(2.5rem, 1vi + 1.8rem, 2.75rem)' }
				]
			},
			screens: {
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			}
		}
	},
	plugins: []
};
