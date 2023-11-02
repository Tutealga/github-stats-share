import Footer from '@/app/components/Footer'
import Search from '@/app/components/Search'
import '@/styles/globals.css'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const metadata = {
  title: 'GitHub Stats for Linkedin',
  description: 'Search your GitHub stats and share on Linkedin',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="relative bg-black text-white max-h-screen p-4">
          <section className="flex flex-col items-center justify-center p-5 w-[400px] m-auto gap-4">
          <h1 className="text-2xl font-bold">GitHub stats for Linkedin</h1>
          <section className="grid grid-cols-3 items-center sm:flex justify-center gap-4">
            <article className="flex items-center justify-center gap-0.5"><FontAwesomeIcon className='text-[#884dA7] w-6 h-6' icon={faAward} />Amethyst</article>
            <article className="flex items-center justify-center gap-0.5"><FontAwesomeIcon className='text-[#70d1f4] w-6 h-6' icon={faAward} />Diamond</article>
            <article className="flex items-center justify-center gap-0.5"><FontAwesomeIcon className='text-[#046307] w-6 h-6' icon={faAward} />Emerald</article>
            <article className="flex items-center justify-center gap-0.5"><FontAwesomeIcon className='text-[#ffd700] w-6 h-6' icon={faAward} />Gold</article>
            <article className="flex items-center justify-center gap-0.5"><FontAwesomeIcon className='text-[#bec2cb] w-6 h-6' icon={faAward} />Silver</article>
            <article className="flex items-center justify-center gap-0.5"><FontAwesomeIcon className='text-[#cd7f32] w-6 h-6' icon={faAward} />Bronze</article>
          </section>
          <Search />
        {children}
        <Footer />
          </section>
        </body>
    </html>
  )
}
