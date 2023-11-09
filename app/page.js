'use client'

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from "react";
import Rank from "./components/Rank";

  const ranks = {
    Diamante: {border:'border-[#70d1f4] bg-[#70d1f4]', borderb: 'border-b-[#70d1f4]', shadow: 'shadow-[0_51px_2px_-30px_#8cebff_inset,54px_52px_2px_-30px_#7edeff_inset,_0px_-64px_2px_-30px_#62c4e7_inset]', stroke: 'stroke-[#44abcd] stroke-[1.5rem]', fill:'diamond'}, 
    Oro: {border:'border-[#ffd700] bg-[#ffd700]', borderb: 'border-b-[#ffd700]', shadow: 'shadow-[0_51px_2px_-30px_#fff438_inset,54px_52px_2px_-30px_#ffe524_inset,_0px_-64px_2px_-30px_#efc900_inset]', stroke: 'stroke-[#d0ad00] stroke-[1.5rem]', fill:'gold'}, 
    Bronze: {border:'border-[#a97142] bg-[#a97142]', borderb: 'border-b-[#a97142]', shadow: 'shadow-[0_51px_2px_-30px_#bb8151_inset,54px_52px_2px_-30px_#b27949_inset,_0px_-64px_2px_-30px_#a0693b_inset]', stroke: 'stroke-[#8f5a2d] stroke-[1.5rem]', fill:'bronze'},
    Plata: {border:'border-[#bec2cb] bg-[#bec2cb]', borderb: 'border-b-[#bec2cb]', shadow: 'shadow-[0_51px_2px_-30px_#d7dbe5_inset,54px_52px_2px_-30px_#cbcfd8_inset,_0px_-64px_2px_-30px_#b2b5be_inset]', stroke: 'stroke-[#999da6] stroke-[1.5rem]', fill:'silver'},
    Platino: {border:'border-[#50c878] bg-[#50c878]', borderb: 'border-b-[#50c878]', shadow: 'shadow-[0_51px_2px_-30px_#69e08e_inset,54px_52px_2px_-30px_#5dd483_inset,_0px_-64px_2px_-30px_#43bc6d_inset]', stroke: 'stroke-[#24a558] stroke-[1.5rem]', fill:'emerald'}
  }

export default function Home() {
const [rank, setRank] = useState(ranks.Diamante)

useEffect(()=>{
  const keys = Object.keys(ranks)
  const length = keys.length
  
  const intervalId = setInterval(()=> {
    const randomKey = keys[Math.floor(Math.random() * length)]
    setRank(ranks[randomKey])
  }, 2500)

  return () => {
    clearInterval(intervalId)
  }
}, [])

  return (
    <article id="user-card" className={`bg-opacity-20 border p-5 rounded-lg w-full h-[450px] justify-between flex flex-col ${rank.border} ease-in-out duration-500 transition`}>
      <div className={`flex items-center justify-between border-opacity-20 ${rank.borderb} border-b pb-6`}>
        <div className="flex gap-2">
      <Image src="https://avatars.githubusercontent.com/u/1561955?v=4" width={50} height={50} className="w-14 h-14 rounded-2xl"/>
     <p className="text-white flex font-bold items-center">Miguel Ángel Durán</p>
        </div>
     <Rank star={rank.fill} shadow={rank.shadow} stroke={rank.stroke}/>
      </div>
     <div className="grid grid-cols-2 gap-4">
     <div className="flex flex-col text-sm"><p className="font-bold">24.0k</p><span>Stars</span></div>
     <div className="flex flex-col text-sm"><p className="font-bold">729</p><span>Pull Requests</span></div>
     <div className="flex flex-col text-sm"><p className="font-bold">32.1k</p><span>Commits</span></div>
     <div className="flex flex-col text-sm"><p className="font-bold">17.8k</p><span>Followers</span></div>
     <div className="flex flex-col text-sm"><p className="font-bold">200</p><span>Repositories</span></div>
     <div className="flex flex-col text-sm"><p className="font-bold">133</p><span>Issues</span></div>
     </div>
     <div className="flex flex-start gap-6 text-sm opacity-80">
     <Link className="gap-2 flex items-center" href="https://github.com/midudev"><FontAwesomeIcon className="w-4 h-4" icon={faGithub} />midudev</Link>
     <Link href="https://twitter.com/midudev" className="gap-2 flex items-center"><FontAwesomeIcon className="w-4 h-4" icon={faXTwitter} />midudev</Link>
     </div>
      </article>
  )
}
