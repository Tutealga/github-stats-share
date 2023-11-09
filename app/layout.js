import Footer from '@/app/components/Footer'
import Search from '@/app/components/Search'
import '@/styles/globals.css'
import RankLayout from './components/RankLayout'

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

const ranks = [
  {name: 'Diamond', shadow: 'shadow-[0_51px_2px_-30px_#8cebff_inset,54px_52px_2px_-30px_#7edeff_inset,_0px_-64px_2px_-30px_#62c4e7_inset]', stroke: 'stroke-[#44abcd] stroke-[1.5rem]', fill:'diamond'}, 
  {name: 'Emerald', shadow: 'shadow-[0_51px_2px_-30px_#69e08e_inset,54px_52px_2px_-30px_#5dd483_inset,_0px_-64px_2px_-30px_#43bc6d_inset]', stroke: 'stroke-[#24a558] stroke-[1.5rem]', fill:'emerald'},
  {name: 'Gold', shadow: 'shadow-[0_51px_2px_-30px_#fff438_inset,54px_52px_2px_-30px_#ffe524_inset,_0px_-64px_2px_-30px_#efc900_inset]', stroke: 'stroke-[#d0ad00] stroke-[1.5rem]', fill:'gold'}, 
  {name: 'Silver', shadow: 'shadow-[0_51px_2px_-30px_#d7dbe5_inset,54px_52px_2px_-30px_#cbcfd8_inset,_0px_-64px_2px_-30px_#b2b5be_inset]', stroke: 'stroke-[#999da6] stroke-[1.5rem]', fill:'silver'},
  {name: 'Bronze', shadow: 'shadow-[0_51px_2px_-30px_#bb8151_inset,54px_52px_2px_-30px_#b27949_inset,_0px_-64px_2px_-30px_#a0693b_inset]', stroke: 'stroke-[#8f5a2d] stroke-[1.5rem]', fill:'bronze'}
]

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="relative bg-[#050505] text-white max-h-screen p-4">
          <section className="flex flex-col items-center justify-center p-5 w-[400px] m-auto gap-4">
          <h1 className="text-2xl font-bold">GitHub stats for Linkedin</h1>
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
