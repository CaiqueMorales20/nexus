import './globals.css'

import type { Metadata } from 'next'
import { Inter, Michroma } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/theme/theme-provider'

// eslint-disable-next-line
const michroma = Michroma({ subsets: ['latin'], weight: ['400'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nexus',
  description:
    'Discover top-notch technology and the latest notebooks at TechTopia. Shop the best deals on cutting-edge gadgets, accessories, and more. Your one-stop shop for all things tech, where innovation meets convenience.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
