module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'red': {
          50: '#FFF2F2',
          100: '#FFE6E6',
          200: '#FFBFBF',
          300: '#FF9999',
          400: '#FF4D4D',
          500: '#FF0000',
          600: '#E60000',
          700: '#990000',
          800: '#730000',
          900: '#4D0000',
          },
          'youtube': {
            50: '#F4F4F4',
            100: '#EAEAEA',
            200: '#C9C9C9',
            300: '#A9A9A9',
            400: '#696969',
            500: '#282828',
            600: '#242424',
            700: '#181818',
            800: '#121212',
            900: '#0C0C0C',
            },
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
};
