import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gerenciador do PROCAPI',
  description: 'Aplicação para gerancimento de dados do PROCAPI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head />
      <body className={inter.className}>
        <nav>
          Meu NavBar
        </nav>
        {children}
      </body>
    </html>
  )
}
