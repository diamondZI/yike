
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'DarkImage':'url()',    
        // 'LightImage':'url(./public/sea.jpg)',    
        },
      keyframes:{
        wiggle: {
          '0%': { transform:'translateX(100%)' },
          
          '100%': { transform:'translateX(0)' },
        }
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width'
       
      },
     
    },
    animation:{
      
        wiggle: 'wiggle .5s ',
    
    },
    
    colors:{
      yellow :'#edf709',
      greenyellow:'#a4f12f',
      dodgerblue:'#2c8ce8',
      yellowbody:'#fcf105',
      darkorange:'#f57d01',
      buttoncolor:'#2B5AED',
      textcolor:'#fff',
      DarkBgColor:'#010920',
      Darktextcolor:'#3b4567',
      CardDarkColor:'rgb(47,42,26,.3)'
    }
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
export default config
