/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js, jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
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
      },
      white: '#FFFFFF'
    },
    spacing: {
      xxs: '4px',
      xs: '8px',
      s: '16px',
      m: '24px',
      l: '32px',
      xl: '48px',
      xxl: '64px'
    },
    borderRadius: {
      none: '0',
      s: '8px',
      m: '16px',
      full: '9999px'
    },
    outlineWidth: {
      none: '0px',
      3: '3px',
      4: '4px'
    },
    borderWidth: {
      0: '0',
      3: '3px'
    },
    extend: {
      width: {
        16: '16px',
        48: '48px',
        150: '150px',
        178: '178px'
      },
      height: {
        16: '16px',
        48: '48px'
      }
    }
  }
};
