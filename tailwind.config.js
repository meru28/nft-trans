module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
			fontFamily: {
        'sans': ['"Helvetica Neue"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
      fontSize: {
        '26px': ['1.625rem'],
      },
      letterSpacing: {
        '.125em': '.125em',
      },
      lineHeight: {
        '1.3': '1.3',
        '1.6': '1.6',
      },
      colors: {
        'black-0B': '#0B0B0B;',
        'gray-E2': '#E2E2E2',
        'gray-79': '#797979',
      },
      spacing: {
        '1.25': '0.3125rem', // 5px
        '2.5': '0.625rem', // 10px
        '7.5': '1.875rem', // 30px
        '12.5': '3.125rem', // 50px
        '15': '3.75rem', // 60px
        '21.25': '5.3125rem', // 85px
        '25': '6.25rem', // 100px
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'semantic-green': 'var(--semantic-green)',
        'negative-red': 'var(--negative-red)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
