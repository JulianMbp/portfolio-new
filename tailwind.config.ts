

import type { Config } from "tailwindcss";


export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			azul: {
  				'50': '#f0fbfb',
  				'100': '#d8f1f5',
  				'200': '#9fdae4',
  				'300': '#84cedc',
  				'400': '#4bb0c5',
  				'500': '#2f94ab',
  				'600': '#2a7890',
  				'700': '#286276',
  				'800': '#285262',
  				'900': '#254554',
  				'950': '#142d38'
  			},
			'brunoColor': {
        '50': '#fffbec',
        '100': '#fff5d3',
        '200': '#ffe8a5',
        '300': '#ffd66d',
        '400': '#ffb832',
        '500': '#ffa00a',
        '600': '#ff8800',
        '700': '#cc6402',
        '800': '#a14d0b',
        '900': '#82410c',
        '950': '#461f04',
    },
    'lunaColor': {
        '50': '#fef1f9',
        '100': '#fee5f4',
        '200': '#ffccec',
        '300': '#ffa1db',
        '400': '#ff66c0',
        '500': '#fb39a4',
        '600': '#eb1782',
        '700': '#cd0966',
        '800': '#a90b54',
        '900': '#8d0e49',
        '950': '#570028',
    },
    'brownieColor': {
        '50': '#ffffe6',
        '100': '#fdffbd',
        '200': '#ffff7e',
        '300': '#fff635',
        '400': '#ffe700',
        '500': '#ffcc00',
        '600': '#de9c00',
        '700': '#b06e00',
        '800': '#915502',
        '900': '#7a4509',
        '950': '#572a00',
    },
    'minecraft-border': {
        '50': '#f7f7f7',
        '100': '#ededed',
        '200': '#dfdfdf',
        '300': '#c6c6c6',
        '400': '#adadad',
        '500': '#999999',
        '600': '#888888',
        '700': '#7b7b7b',
        '800': '#676767',
        '900': '#545454',
        '950': '#363636',
    },
    'experiencie': {
        '50': '#fdfbe9',
        '100': '#fcf6c5',
        '200': '#faeb8e',
        '300': '#f6d84e',
        '400': '#f1c31e',
        '500': '#e1ab11',
        '600': '#b77c0b',
        '700': '#9b5e0d',
        '800': '#804b13',
        '900': '#6d3d16',
        '950': '#401f08',
    },
  		},

  	}
  },
  plugins: [],
} satisfies Config;
