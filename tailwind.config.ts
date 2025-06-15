import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-neuemontreal)", "sans-serif"],
        heading: ["var(--font-neuemontreal)", "sans-serif"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config 