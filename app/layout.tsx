import Footer from '@/components/footer'
import './globals.css'

import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider.tsx'
import { Toaster } from 'react-hot-toast'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Toaster/>
      <Navbar />
        {children}
      <Footer/>
      </body>
    </html>
  )
}
