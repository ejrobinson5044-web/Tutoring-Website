import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0f172a',
        tealAccent: '#22d3ee',
        softGray: '#e2e8f0'
      }
    }
  },
  plugins: []
};

export default config;
