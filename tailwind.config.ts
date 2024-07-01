import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        soul: {
          '950': '#101114',
          '900': '#1F1E24',
        },
        base: {
          '500': '#4779FF',
          '550': '#264dff',
        },
       error: {
          '500': '#ED4E1D',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
