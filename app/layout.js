import Footer from '@/app/components/Footer'
import Search from '@/app/components/Search'
import '@/styles/globals.css'

export const metadata = {
  title: 'GitHub Stats',
  description: 'GitHub stats for Linkedin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white">
        <main className="flex min-h-screen flex-col items-center justify-center p-5 w-[400px] m-auto gap-4">
          <h1 className="text-2xl font-bold">GitHub stats for Linkedin</h1>
          <Search />
        {children}
        <Footer />
        </main>
        </body>
    </html>
  )
}
