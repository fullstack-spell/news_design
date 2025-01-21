import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                theme: {
                    grey: '#989891',
                    black: '#1e1e1e',
                    red: '#ad323e',
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
