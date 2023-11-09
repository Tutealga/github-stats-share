import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import calculateRank from "../services/calculateRanks";
import SaveImage from "@/app/components/saveImageButton";
import { twitter } from "@/app/const/links";
import { getUser, getRepos, getStars, getCommits, getIssues, getPr } from '@/app/services/index';
import { Suspense } from "react";
import Skeleton from "../components/Skeleton";
import NotFound from "./NotFound";
import Rank from "../components/Rank";

const getRank = async ({level}) => {
  const ranks = {
    "Diamante": {border:'border-[#70d1f4] bg-[#70d1f4]', borderb: 'border-b-[#70d1f4]', shadow: 'shadow-[0_51px_2px_-30px_#8cebff_inset,54px_52px_2px_-30px_#7edeff_inset,_0px_-64px_2px_-30px_#62c4e7_inset]', stroke: 'stroke-[#44abcd] stroke-[1.5rem]', fill:'diamond'}, 
    "Oro": {border:'border-[#ffd700] bg-[#ffd700]', borderb: 'border-b-[#ffd700]', shadow: 'shadow-[0_51px_2px_-30px_#fff438_inset,54px_52px_2px_-30px_#ffe524_inset,_0px_-64px_2px_-30px_#efc900_inset]', stroke: 'stroke-[#d0ad00] stroke-[1.5rem]', fill:'gold'}, 
    "Bronze": {border:'border-[#a97142] bg-[#a97142]', borderb: 'border-b-[#a97142]', shadow: 'shadow-[0_51px_2px_-30px_#bb8151_inset,54px_52px_2px_-30px_#b27949_inset,_0px_-64px_2px_-30px_#a0693b_inset]', stroke: 'stroke-[#8f5a2d] stroke-[1.5rem]', fill:'bronze'},
    "Plata": {border:'border-[#bec2cb] bg-[#bec2cb]', borderb: 'border-b-[#bec2cb]', shadow: 'shadow-[0_51px_2px_-30px_#d7dbe5_inset,54px_52px_2px_-30px_#cbcfd8_inset,_0px_-64px_2px_-30px_#b2b5be_inset]', stroke: 'stroke-[#999da6] stroke-[1.5rem]', fill:'silver'},
    "Platino": {border:'border-[#50c878] bg-[#50c878]', borderb: 'border-b-[#50c878]', shadow: 'shadow-[0_51px_2px_-30px_#69e08e_inset,54px_52px_2px_-30px_#5dd483_inset,_0px_-64px_2px_-30px_#43bc6d_inset]', stroke: 'stroke-[#24a558] stroke-[1.5rem]', fill:'emerald'}
  }

  const ranking = Object.keys(ranks).find((res) => res === level)

  return ranks[ranking]
  }

export default async function Page({params}) {
const {id} = params
const user = await getUser({id})
if(user.message === 'Not Found') return <NotFound />
const followers = user.followers
const starsCount = await getRepos({userLogin: user.login, reposCount: user.public_repos})
const stars = await getStars({starsCount})
const commits = await getCommits({userLogin: user.login})
const issues = await getIssues({userLogin: user.login})
const pr = await getPr({userLogin: user.login})
const {level} = await calculateRank({commits, pr, issues, stars, followers})
const hexRank = await getRank({level})

  return (
      <>
      <Suspense fallback={<Skeleton />}>
        <div id="user-card" className={`border p-5 rounded-lg w-full h-[450px] bg-opacity-20 justify-between flex flex-col ${hexRank.border}`}>
        <div className={`flex items-center justify-between border-opacity-20 ${hexRank.borderb} border-b pb-6`}>
          <div className="flex gap-2">
        <Image src={user.avatar_url} width={50} height={50} className="rounded-2xl w-14 h-14"/>
       <p className="text-white flex font-bold items-center">{user.name}</p>
          </div>
          <Rank star={hexRank.fill} shadow={hexRank.shadow} stroke={hexRank.stroke}/>
        </div>
       <div className="grid grid-cols-2 gap-4">
       <div className="flex flex-col text-sm"><p className="font-bold">{stars > 1000 ? `${(stars / 1000).toFixed(1)}k`: stars}</p><span>Stars</span></div>
       <div className="flex flex-col text-sm"><p className="font-bold">{pr > 1000 ? `${(pr / 1000).toFixed(1)}k`: pr}</p><span>Pull Requests</span></div>
       <div className="flex flex-col text-sm"><p className="font-bold">{commits > 1000 ? `${(commits / 1000).toFixed(1)}k`: commits}</p><span>Commits</span></div>
       <div className="flex flex-col text-sm"><p className="font-bold">{user.followers > 1000 ? `${(user.followers / 1000).toFixed(1)}k`: user.followers}</p><span>Followers</span></div>
       <div className="flex flex-col text-sm"><p className="font-bold">{user.public_repos > 1000 ? `${(user.public_repos / 1000).toFixed(1)}k`: user.public_repos}</p><span>Repositories</span></div>
       <div className="flex flex-col text-sm"><p className="font-bold">{issues > 1000 ? `${(issues / 1000).toFixed(1)}k`: issues}</p><span>Issues</span></div>
       </div>
       <div className="flex flex-start gap-6 text-sm opacity-80">
       <Link className="gap-2 flex items-center" href={user.html_url}><FontAwesomeIcon className="w-4 h-4" icon={faGithub} />{user.login}</Link>
       {user.twitter_username && <Link href={`${twitter}${user.twitter_username}`} className="gap-2 flex items-center"><FontAwesomeIcon className="w-4 h-4" icon={faXTwitter} />{user.twitter_username}</Link>}
       {user.blog && <Link className="gap-2 flex items-center" href={user.blog}><FontAwesomeIcon className="w-4 h-4" icon={faPaperclip} />website</Link>}
       </div>
        </div>
      </Suspense>
  <SaveImage />
      </>
    )
}
