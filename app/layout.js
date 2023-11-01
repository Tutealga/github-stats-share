import '@/styles/globals.css'

export const metadata = {
  title: 'GitHub Stats',
  description: 'GitHub stats for Linkedin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
        </body>
    </html>
  )
}
