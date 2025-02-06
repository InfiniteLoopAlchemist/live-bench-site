import { darkColors } from './colors.js';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                ...darkColors
            },
            fontFamily: {
                'level-up': [ '"Level Up"', 'sans-serif' ]
            },
            screens: {
                xs: '400px',
                xsxl: '500px'
            }
        },
    },
    plugins: []
} 
