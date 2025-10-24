import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-red': '#A31222',
        'warm-gold': '#D4A351',
        'winter-blue': '#0C3A5B',
        'pine-green': '#2F5B45',
        'natural-wood': '#C9A67A',
        'off-white': '#FAFAF9',
        'charcoal': '#1F2937',
        'soft-gray': '#F3F4F6',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        accent: ['var(--font-accent)', 'Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'grad-hero': 'linear-gradient(135deg, #A31222, #D4A351)',
      },
    },
  },
  plugins: [],
};

export default config;
