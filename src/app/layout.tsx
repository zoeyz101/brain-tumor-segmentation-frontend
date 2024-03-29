import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Load THREEJS before AMI */}
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.3/dat.gui.min.js"></script>
        <script type="text/javascript" src="https://unpkg.com/three@0.113.0/build/three.min.js"></script>
        <script type="text/javascript" src="https://unpkg.com/three@0.113.0/examples/js/loaders/STLLoader.js"></script>
        <script type="text/javascript" src="https://unpkg.com/ami.js@next/build/ami.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"/>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
