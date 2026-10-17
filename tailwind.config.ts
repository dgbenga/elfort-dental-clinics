import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
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
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'hsl(var(--primary-hover))',
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
        sky: {
          main: '#EAF3FF',
          deep: '#DCEBFC',
          line: '#C7DCF3',
        },
        navy: {
          DEFAULT: '#0B3A75',
          hover: '#082C5A',
        },
        ink: {
          DEFAULT: '#2F4562',
          muted: '#576F8E',
        },
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius-lg, 1.25rem)',
        DEFAULT: 'var(--radius, 1rem)',
        md: 'calc(var(--radius, 1rem) - 2px)',
        sm: 'var(--radius-sm, 0.75rem)',
      },
      boxShadow: {
        clinical: '0 2px 8px -2px rgba(11, 58, 117, 0.06)',
        'clinical-hover': '0 8px 24px -4px rgba(11, 58, 117, 0.12)',
        'floating-dock': '0 8px 30px rgba(11, 58, 117, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
