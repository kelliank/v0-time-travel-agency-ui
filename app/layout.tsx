import React from "react"
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'TimeTravel Agency | Voyagez à travers le temps',
  description: 'Découvrez le voyage temporel haut de gamme. Explorez le passé, vivez le présent, anticipez le futur avec TimeTravel Agency.',
  keywords: ['voyage temporel', 'time travel', 'agence de voyage', 'futur', 'passé', 'aventure'],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
