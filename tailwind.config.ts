import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

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
    typography,
  ],
}
export default config 