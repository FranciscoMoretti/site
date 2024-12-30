// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        gray: colors.gray,
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          50: 'hsl(var(--primary)/0.5)',
          100: 'hsl(var(--primary)/0.1)',
          200: 'hsl(var(--primary)/0.2)',
          300: 'hsl(var(--primary)/0.3)',
          400: 'hsl(var(--primary)/0.4)',
          500: 'hsl(var(--primary)/0.5)',
          600: 'hsl(var(--primary)/0.6)',
          700: 'hsl(var(--primary)/0.7)',
          800: 'hsl(var(--primary)/0.8)',
          900: 'hsl(var(--primary)/0.9)',
          foreground: 'hsl(var(--primary-foreground))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary)/ 0.9)',
              },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
          },
        },
        invert: {
          css: {
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary)/ 0.9)',
              },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
