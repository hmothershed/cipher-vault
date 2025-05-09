/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*/.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Arcade: ["Arcade", "sans-serif"],
            },
        },
    },
    plugins: [],
};