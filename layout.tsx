import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ALIRA - Personal Plan Generator',
  description: 'Chat with an AI strategic consultant to create your personalised 12-page plan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
