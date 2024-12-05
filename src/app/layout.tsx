import type { Metadata } from 'next'
import { Cinzel, Inter, Orbitron } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import Preloader from '@/components/Preloader'
import FullHeightContainer from '@/components/FullHeightContainer'
import { TransitionBlocks } from '@/components/TransitionBlocks'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Happy Birthday!',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} ${orbitron.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Preloader />
          <Intro />
          <TransitionBlocks />
          <div className="noise"></div>
          <FullHeightContainer>
            <Header />
            {children}
            <Footer />
          </FullHeightContainer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
