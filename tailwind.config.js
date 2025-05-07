module.exports = {
    content: [
        "./*.html",
        "./src/**/*.{html,js}",
      ],
    theme: {
      extend: {
        colors: {
          primary: '#f6a800',
          secondary: '#26c',
          dark: '#222',
          body: '#666',
          light: '#999',
          grey: '#f5f5f5',
          lightGray: '#e1e1e1',
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        keyframes: {
          fixedBottom: {
            '0%': { transform: 'translateY(100%)', 'transform-origin': 'center top 0px' },
            '100%': { transform: 'translateY(0)' },
          },
        },
        animation: {
          'fixed-bottom': 'fixedBottom 0.4s ease-out',
        },
      },
    },
    plugins: [],
  }
  