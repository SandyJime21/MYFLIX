/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '200px',
                's': '450px',
                'xxl ': '1450 px '
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
}