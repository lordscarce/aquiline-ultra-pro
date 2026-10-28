import type { Config } from 'tailwindcss';

/**
 * Aquiline Ultra Pro Ltd — Design Token System
 * A tier-1 corporate palette: Deep Professional Orange, Slate Darks, Crisp Whites.
 */
const config: Config = {
   darkMode: 'class', 
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand Primary — Deep Professional Orange
        aquiline: {
          50:  '#FFF4EC',
          100: '#FFE4CC',
          200: '#FFC899',
          300: '#FFAB66',
          400: '#FF8E33',
          500: '#FF6B00', // Primary brand orange
          600: '#E05E00',
          700: '#B84C00',
          800: '#8A3900',
          900: '#5C2600',
        },
        // Corporate Slate System
        slate: {
          950: '#050811',
          900: '#0A0F1D', // Primary dark background
          850: '#0E1424',
          800: '#131A2E',
          700: '#1B2340',
          600: '#2A3456',
          500: '#3D4A73',
          400: '#5C6B94',
          300: '#8693B8',
          200: '#B4BDD6',
          100: '#E2E6F0',
          50:  '#F4F5F9',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Plus Jakarta Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem',  { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem',  { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      boxShadow: {
        'glow-orange': '0 0 40px rgba(255, 107, 0, 0.25)',
        'glow-orange-lg': '0 0 80px rgba(255, 107, 0, 0.35)',
        'premium': '0 1px 0 rgba(255,255,255,0.05), 0 20px 60px -20px rgba(0,0,0,0.5)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 40px rgba(255, 107, 0, 0.25)' },
          '50%': { boxShadow: '0 0 60px rgba(255, 107, 0, 0.45)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;