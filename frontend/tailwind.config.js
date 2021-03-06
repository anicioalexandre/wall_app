module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.{ts,tsx,js}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      white: 'var(--white-color)',
      black: 'var(--black-color)',
      primary: {
        light: 'var(--primary-color-light)',
        DEFAULT: 'var(--primary-color-medium)',
        dark: 'var(--primary-color-dark)',
        contrast: 'var(--white-color)'
      },
      secondary: {
        light: 'var(--secondary-color-light)',
        DEFAULT: 'var(--secondary-color-medium)',
        dark: 'var(--secondary-color-dark)',
        contrast: 'var(--white-color)'
      },
      gray: {
        20: 'var(--gray-color-light)',
        60: 'var(--gray-color-medium)',
        100: 'var(--gray-color-dark)'
      },
      success: {
        light: 'var(--success-color-light)',
        DEFAULT: 'var(--success-color-medium)',
        dark: 'var(--success-color-dark)',
        contrast: 'var(--white-color)'
      },
      danger: {
        light: 'var(--danger-color-light)',
        DEFAULT: 'var(--danger-color-medium)',
        dark: 'var(--danger-color-dark)',
        constrast: 'var(--white-color)'
      }
    },
    extend: {
      minHeight: {
        6: '6rem',/* 96px */
        8: '8rem',/* 128px */
        11: '11rem',/* 176px */
        16: '16rem'/* 256px */
      },
      maxHeight: {
        6: '6rem',/* 96px */
        8: '8rem',/* 128px */
        11: '11rem',/* 176px */
        16: '16rem',/* 256px */
        75: '75vh'
      },
      minWidth: {
        8: '8rem',/* 128px */
        16: '16rem',/* 256px */
        20: '20rem',/* 320px */
        24: '24rem',/* 384px */
        32: '32rem',/* 512px */
        36: '36rem'/* 576px */
      },
      maxWidth: {
        8: '8rem',/* 128px */
        16: '16rem',/* 256px */
        26: '26rem',/* 416px */
        32: '32rem'/* 512px */
      },
      screens: {
        'custom-media': {'raw': '(max-width: 600px)'},
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
