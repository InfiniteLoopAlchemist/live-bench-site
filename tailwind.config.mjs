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
                'bungee': [ 'bungeeregular', 'sans-serif' ],
                'slab': [ 'alfa_slab_oneregular', 'sans-serif' ]
            },
            screens: {
                xs: '400px',
                xsxl: '500px'
            }
        },
    },
    plugins: []
} 
