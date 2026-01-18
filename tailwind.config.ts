import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FFD700', // Gold
                secondary: '#8B4513', // SaddleBrown
                accent: '#FF8C00', // DarkOrange
                cream: '#FFF8E1',
                dark: '#1a1a1a',
            },
            fontFamily: {
                heading: ['var(--font-poppins)'],
                sans: ['var(--font-inter)'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'shine': 'shine 4s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeInUp: {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                shine: {
                    'to': { backgroundPosition: '200% center' },
                },
            }
        },
    },
    plugins: [],
}
export default config
