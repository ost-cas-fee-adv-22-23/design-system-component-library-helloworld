/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      red: '#FF0000',
      pink: {
        50: '#FDF2F8',
        100: '#FCE7F3',
        200: '#FBCFE8',
        300: '#F9A8D4',
        400: '#F472B6',
        500: '#EC4899',
        600: '#DB2777',
        700: '#BE185D',
        800: '#9D174D',
        900: '#831843'
      },
      slate: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A'
      },
      violet: {
        50: '#F5F3FF',
        100: '#EDE9FE',
        200: '#DDD6FE',
        300: '#C4B5FD',
        400: '#A78BFA',
        500: '#8B5CF6',
        600: '#5B21B6',
        700: '#6D28D9',
        800: '#5B21B6',
        900: '#4C1D95'
      }
    },
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans] // override default tailwind with poppins
    },
    fontSize: {
      l3: ['48px'],
      l2: ['40px'],
      l1: ['32px'],
      m2: ['24px'],
      m1: ['20px'],
      s3: ['18px'],
      s2: ['16px'],
      s1: ['14px']
    },
    fontWeight: {
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    spacing: {
      none: '0px',
      xxxxs: '2px',
      xxxs: '3px',
      xxs: '4px',
      xs: '8px',
      s: '16px',
      m: '24px',
      l: '32px',
      xl: '48px',
      xxl: '64px',
      xl3: '80px',
      xl4: '96px',
      xl5: '128px',
      xl6: '160px',
      xl7: '192px'
    },
    borderRadius: {
      none: '0',
      s: '8px',
      m: '16px',
      full: '9999px'
    },
    outlineWidth: {
      none: '0px',
      2: '2px',
      3: '3px',
      4: '4px'
    },
    borderWidth: {
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px'
    },
    extend: {
      backgroundImage: {
        gradient70:
          'linear-gradient(90deg, var(--tw-gradient-from) -12.5%, var(--tw-gradient-to) 62.9%);',
        gradient80:
          'linear-gradient(90deg, var(--tw-gradient-from) -15.3%, var(--tw-gradient-to) 38.8%);'
      },
      width: {
        16: '16px',
        40: '40px',
        44: '44px',
        48: '48px',
        64: '64px',
        70: '70px',
        96: '96px',
        150: '150px',
        160: '160px',
        178: '178px',
        264: '264px',
        355: '355px',
        615: '615px',
        630: '630px',
        636: '636px'

      },
      height: {
        16: '16px',
        40: '40px',
        44: '44px',
        48: '48px',
        64: '64px',
        70: '70px',
        96: '96px',
        160: '160px',
        328: '328px'
      },
      rotate: {
        360: '360deg'
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms'
      }
    },
    divideWidth: {
      0: '0',
      1: '1px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    }
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        '.head-1': {
          fontSize: theme('fontSize.l3'),
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.current')
        },
        '.head-2': {
          fontSize: theme('fontSize.l2'),
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.current')
        },
        '.head-3': {
          fontSize: theme('fontSize.l1'),
          fontWeight: theme('fontWeight.semibold'),
          color: theme('colors.current')
        },
        '.head-4': {
          fontSize: theme('fontSize.m2'),
          fontWeight: theme('fontWeight.semibold'),
          color: theme('colors.current')
        },
        '.paragraph-L': {
          fontSize: theme('fontSize.m2'),
          fontWeight: theme('fontWeight.medium'),
          color: theme('colors.current')
        },
        '.paragraph-M': {
          fontSize: theme('fontSize.s3'),
          fontWeight: theme('fontWeight.medium'),
          color: theme('colors.current')
        },
        '.label-XL': {
          fontSize: theme('fontSize.m2'),
          fontWeight: theme('fontWeight.semibold'),
          color: theme('colors.current')
        },
        '.label-L': {
          fontSize: theme('fontSize.m1'),
          fontWeight: theme('fontWeight.semibold'),
          color: theme('colors.current')
        },
        '.label-M': {
          fontSize: theme('fontSize.s2'),
          fontWeight: theme('fontWeight.semibold'),
          color: theme('colors.current')
        },
        '.label-S': {
          fontSize: theme('fontSize.s1'),
          fontWeight: theme('fontWeight.semibold'),
          color: theme('colors.current')
        },
        '.placeholder': {
          fontSize: theme('fontSize.s1'),
          fontWeight: theme('fontWeight.semibold'),
          color: theme('colors.current')
        }
      });
    })
  ]
};
