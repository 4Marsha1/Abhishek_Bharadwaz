/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                nunito: ['nunito', 'sans-serif'],
                open: ['Open Sans', 'sans-serif'],
                lexend: ['Lexend', 'sans-serif'],
                satoshi: ['Satoshi', 'sans-serif']
            },
            colors: {
                orange: '#DC3726',
                lightGrey: '#F6F6F6',
                darkGrey: '#C1C1C1'
            }
        }
    },
    plugins: [],
}

