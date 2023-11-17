import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'green-apple': '#46D377',
        'purple' : '#4643E0',
        'purple-medium' : '#3431B2',
        'purple-light' : '#C5C7DB',
        'blue-medium': '#00095A',
        'blue-dark' : '#101542',
        'green-light' : '#C9EFD6'
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config
