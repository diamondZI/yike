
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
      keyframes:{
        linkup:{
          '0%':{
             opacity:'1'
          },
          "100%":{
            opacity:'0'
          }
        }
      }
    },
    animation:{
      
      'animation-linkup':'linkup 1s liner all'
    },
    fontFamily:{
      'message':'Bradley Hand ITC'
    },
    colors:{
      yellow :'#edf709',
      greenyellow:'#a4f12f',
      dodgerblue:'#2c8ce8',
      yellowbody:'#fcf105',
      darkorange:'#f57d01',
      buttoncolor:'#2B5AED',
      textcolor:'#fff'
    }
  },
  plugins: [
  ],
}
export default config
