import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        heading: ['Clash Display', 'var(--font-dm-sans)'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config 