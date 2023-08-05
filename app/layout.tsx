import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import ThemeContextProvider from '@/context/themeContext'
import ActiveSectionContextProvider from '@/context/activeSectionContext'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/themeSwitch'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sanghel | Portfolio',
  description: 'Sanghel, Front-end developer with +1 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90  ${inter.className}`}>
        <div className="bg-[#F27EDF] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] opacity-90 dark:bg-[#c759b5"></div>
        <div className="bg-[#6f23D9] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-2rem] opacity-50 dark:bg-[#370f6f]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
        
      </body>
    </html>
  )
}
