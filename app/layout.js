import Footer from '@/app/components/Footer'
import Search from '@/app/components/Search'
import '@/styles/globals.css'

export const metadata = {
  title: 'GitHub Stats for Linkedin',
  description: 'Search your GitHub stats and share on Linkedin',
  metadataBase: new URL('https://github-stats-linkedin.vercel.app'),
  openGraph: {
    title: 'GitHub stats for share on Linkedin',
    description: 'Search your GitHub stats and share on Linkedin',
    images: '/opengraph-image.jpg',
    url: 'https://github-stats-linkedin.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="relative bg-[#050505] text-white max-h-screen p-4">
          <section className="flex flex-col items-center justify-center p-5 w-[400px] m-auto gap-4">
          <h1 className="text-2xl font-bold">GitHub stats for Linkedin</h1>
          <section className="grid grid-cols-3 items-center sm:flex justify-center gap-4">
            <article className="flex items-center justify-center gap-1"><div className='bg-[#70d1f4] rounded-full w-6 h-6' />Diamond</article>
            <article className="flex items-center justify-center gap-1"><div className='bg-[#046307] rounded-full w-6 h-6' />Emerald</article>
            <article className="flex items-center justify-center gap-1"><div className='bg-[#ffd700] rounded-full w-6 h-6' />Gold</article>
            <article className="flex items-center justify-center gap-1"><div className='bg-[#bec2cb] rounded-full w-6 h-6' />Silver</article>
            <article className="flex items-center justify-center gap-1"><div className='bg-[#cd7f32] rounded-full w-6 h-6' />Bronze</article>
          </section>
          <Search />
        {children}
        <Footer />
          </section>
        </body>
    </html>
  )
}
