import type { Metadata } from 'next'
import Head from 'next/head'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600', '700'],
})

export const metadata: Metadata = {
  title: 'Hoy que hiciste ?',
  description: 'Te ayudamos a construir lazos con una nueva generación de padres y madres, más presentes, más conscientes, más digitales.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
