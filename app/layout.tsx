import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components'
import { Toaster } from "react-hot-toast";
import AuthProvider from '@/components/AuthProvider';


export const metadata: Metadata = {
  title: 'Commerce-API',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        <Navbar />
        <Toaster position="top-center" />
        {children}
        </AuthProvider>
        </body>
    </html>
  )
}
