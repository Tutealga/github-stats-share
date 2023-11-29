import Footer from '@/app/components/Footer'
import Search from '@/app/components/Search'
import '@/styles/globals.css'
import RankLayout from './components/RankLayout'
import { ranks } from './const/ranks'

export const metadata = {
  title: 'GitHub Stats to Share',
  description: 'Search your GitHub stats and share on social medias',
  metadataBase: new URL('https://github-stats-share.vercel.app'),
  openGraph: {
    title: 'GitHub stats to share on social medias',
    description: 'Search your GitHub stats and share on social medias',
    images: '/opengraph-image.jpg',
    url: 'https://github-stats-share.vercel.app'
  }
}

export default function RootLayout ({ children }) {
  return (
    <html>
      <body className='relative bg-[#05060f] text-white max-h-screen'>
        <section className='flex flex-col items-center justify-center p-4 w-[400px] m-auto gap-5'>
          <h1 className='text-4xl font-bold opacity-90'>GitHub Stats to Share</h1>
          <section className='grid grid-cols-3 items-center sm:flex justify-center gap-4'>
            {ranks.map(rank => <article key={rank.name} className='flex items-center justify-center gap-1'><RankLayout star={rank.fill} shadow={rank.shadow} stroke={rank.stroke} /><span className='opacity-80'>{rank.name}</span></article>)}
          </section>
          <Search />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  )
}
