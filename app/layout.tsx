import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'
import ChatWidget from '@/components/ui/ChatWidget'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Samosa Hub - Traditional Flavors, Modern Twist',
    description: 'Experience the authentic taste of India with our premium handcrafted samosas. Perfect crunch in every bite.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-cream text-gray-800`}>
                <TopBar />
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <ChatWidget />
                <Footer />
            </body>
        </html>
    )
}
