import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                // Tuned to resemble OpenMyPro teal/green + accent blues.
                omp: {
                    teal: '#16A394',
                    tealDark: '#0F8C7E',
                    mint: '#CFF5EA',
                    sky: '#E9F3FF',
                    blue: '#4BA3E3',
                    navy: '#0F2237',
                    gray: '#5C7080',
                    grid: '#DDE7E6'
                }
            },
            borderRadius: {
                'xl2': '1.25rem' // for the extra rounded blocks
            },
            boxShadow: {
                soft: '0 8px 24px rgba(15, 34, 55, 0.08)'
            },
            backgroundImage: {
                'grid-omp': 'linear-gradient(to right, rgba(221,231,230,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(221,231,230,.6) 1px, transparent 1px)'
            },
            backgroundSize: {
                'grid-16': '16px 16px'
            }
        }
    },
    plugins: []
}
export default config
