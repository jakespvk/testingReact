import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './navbar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jake Spievak',
  description: 'Jake Spievak -- Photographer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={inter.className}>
            <NavBar/>
            {children}
        </body>
    </html>
  )
}
