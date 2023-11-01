import Footer from '@/components/Footer'
import Search from '@/components/Search'
import '@/styles/globals.css'

export const metadata = {
  title: 'GitHub Stats',
  description: 'GitHub stats for Linkedin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <main className="flex min-h-screen flex-col items-center justify-center p-5 w-[400px] m-auto gap-4">
          <Search />
        {children}
        <Footer />
        </main>
        </body>
    </html>
  )
}
