import Footer from '@/app/components/Footer'
import Search from '@/app/components/Search'
import '@/styles/globals.css'
import RankLayout from './components/RankLayout'
import { ranks } from './const/ranks'

export const metadata = {
  title: 'GitHub Stats for share',
  description: 'Search your GitHub stats and share on social networks',
  metadataBase: new URL('https://github-stats-linkedin.vercel.app'),
  openGraph: {
    title: 'GitHub stats for share on social networks',
    description: 'Search your GitHub stats and share on social networks',
    images: '/opengraph-image.jpg',
    url: 'https://github-stats-linkedin.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="relative bg-[#101a23] text-white max-h-screen p-4">
          <section className="flex flex-col items-center justify-center p-5 w-[400px] m-auto gap-4">
          <h1 className="text-2xl font-bold">GitHub stats for share</h1>
          <section className="grid grid-cols-3 items-center sm:flex justify-center gap-4">
            {ranks.map(rank => <article key={rank.name} className="flex items-center justify-center gap-1"><RankLayout star={rank.fill} shadow={rank.shadow} stroke={rank.stroke}/>{rank.name}</article>)}
          </section>
          <Search />
        {children}
        <Footer />
          </section>
        </body>
    </html>
  )
}
