import type { Metadata } from 'next'
import './globals.css'
import { Header } from './(site)/components/Header'
import { Footer } from './(site)/components/Footer'

export const metadata: Metadata = {
    title: 'OpenMyPro - Replica',
    description: 'Frontend-only replica of OpenMyPro homepage in Next.js + Tailwind + TS',
    applicationName: 'OpenMyPro',
    themeColor: '#0FB5A9',
    manifest: '/site.webmanifest',
    icons: {
        icon: [
            { url: '/favicon.ico' },
        ],
        apple: [
            { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcut: [{ url: '/favicon.ico' }],
        other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#0FB5A9' }],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-dvh bg-white flex flex-col overflow-x-clip">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    )
}