import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAward, faBookBookmark, faCircleExclamation, faClockRotateLeft, faCodePullRequest, faPaperclip, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import calculateRank from "../calculateRanks";
import SaveImage from "@/components/saveImageButton";

const getRank = async ({level}) => {
  const ranks = {
  "Diamante": {border:'border-[#70d1f4] shadow-[inset_0_0_70px_0px_rgba(112,209,244,0.25)]', text:'text-[#70d1f4]', borderb: 'border-b-[#70d1f4]'}, 
  "Oro": {border:'border-[#ffd700] shadow-[inset_0_0_70px_0px_rgba(255,215,0,0.25)]', text:'text-[#ffd700]', borderb: 'border-b-[#ffd700]'}, 
  "Bronze": {border:'border-[#cd7f32] shadow-[inset_0_0_70px_0px_rgba(205,127,50,0.25)]', text:'text-[#cd7f32]', borderb: 'border-b-[#cd7f32]'},
  "Plata": {border:'border-[#bec2cb] shadow-[inset_0_0_70px_0px_rgba(190,194,203,0.25)]', text:'text-[#bec2cb]', borderb: 'border-b-[#bec2cb]'},
  "Platino": {border:'border-[#046307] shadow-[inset_0_0_70px_0px_rgba(4,99,7,0.25)]', text:'text-[#046307]', borderb: 'border-b-[#046307]'},
  "Maestro": {border:'border-[#884dA7] shadow-[inset_0_0_70px_0px_rgba(136,77,167,0.25)]', text:'text-[#884dA7]', borderb: 'border-b-[#884dA7]'}
}
  const ranking = Object.keys(ranks).find((res) => res === level)

  return ranks[ranking]
  }

const getUser = async ({id}) => {
  const res = await fetch(`https://api.github.com/users/${id}`)
  const json = await res.json()
  return json
}

const getRepos = async ({userLogin, reposCount}) => {
  const res = await fetch(`https://api.github.com/users/${userLogin}/repos?per_page=${reposCount}`)
  const json = await res.json()
  return json
}

const getStars = async ({repos}) => {
  let starsCount = []

  repos.map(star => starsCount.push(star.stargazers_count))
 
 return starsCount.reduce((prev, act) => prev + act, 0);
}

const getCommits = async ({userLogin}) => {
 const res = await fetch(`https://api.github.com/search/commits?q=author:${userLogin}`)
 const json = await res.json()
 return json.total_count
}

const getIssues = async ({userLogin}) => {
  const res = await fetch(`https://api.github.com/search/issues?q=author:${userLogin}+is:issue`)
  const json = await res.json()
  return json.total_count
 }

 const getPr = async ({userLogin}) => {
  const res = await fetch(`https://api.github.com/search/issues?q=author:${userLogin}+is:pr`)
  const json = await res.json()
  return json.total_count
 }

const twitter = 'https://twitter.com/'

export default async function Home({params}) {
const {id} = params
const user = await getUser({id})
const userLogin = user.login
const reposCount = user.public_repos
const followers = user.followers
const repos = await getRepos({userLogin, reposCount})
const stars = await getStars({repos})
const commits = await getCommits({userLogin})
const issues = await getIssues({userLogin})
const pr = await getPr({userLogin})
const {level, percentile} = await calculateRank({commits, pr, issues, stars, followers})
const hexRank = await getRank({level})

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 w-[400px] m-auto gap-4">
      <div id="user-card" className={`border p-5 rounded-lg w-full h-[450px] justify-between flex flex-col ${hexRank.border}`}>
      <div className={`flex items-center justify-between border-opacity-20 ${hexRank.borderb} border-b pb-6`}>
        <div className="flex gap-2">
      <Image src={user.avatar_url} width={50} height={50} className="rounded-full w-14 h-14"/>
     <p className="text-white flex font-bold items-center">{user.name}</p>
        </div>
     <FontAwesomeIcon title={`Top: ${percentile.toFixed(1)}%`} className={`${hexRank.text} w-10 h-10`} icon={faAward} flip />
      </div>
     <div className="grid grid-cols-2 gap-4">
     <div className="flex flex-col text-sm"><div className="flex gap-1 items-center"><FontAwesomeIcon className="w-4 h-4" icon={faStar} /><span>Stars:</span></div><p className="font-bold">{stars > 1000 ? `${(stars / 1000).toFixed(1)}k`: stars}</p></div>
     <div className="flex flex-col text-sm"><div className="flex gap-1 items-center"><FontAwesomeIcon className="w-4 h-4" icon={faCodePullRequest} /><span>Pull Requests:</span></div><p className="font-bold">{pr > 1000 ? `${(pr / 1000).toFixed(1)}k`: pr}</p></div>
     <div className="flex flex-col text-sm"><div className="flex gap-1 items-center"><FontAwesomeIcon className="w-4 h-4" icon={faClockRotateLeft} /><span>Commits:</span></div><p className="font-bold">{commits > 1000 ? `${(commits / 1000).toFixed(1)}k`: commits}</p></div>
     <div className="flex flex-col text-sm"><div className="flex gap-1 items-center"><FontAwesomeIcon className="w-4 h-4" icon={faUserGroup} /><span>Followers:</span></div><p className="font-bold">{user.followers > 1000 ? `${(user.followers / 1000).toFixed(1)}k`: user.followers}</p></div>
     <div className="flex flex-col text-sm"><div className="flex gap-1 items-center"><FontAwesomeIcon className="w-4 h-4" icon={faBookBookmark} /><span>Repositories:</span></div><p className="font-bold">{user.public_repos > 1000 ? `${(user.public_repos / 1000).toFixed(1)}k`: user.public_repos}</p></div>
     <div className="flex flex-col text-sm"><div className="flex gap-1 items-center"><FontAwesomeIcon className="w-4 h-4" icon={faCircleExclamation} /><span>Issues:</span></div><p className="font-bold">{issues > 1000 ? `${(issues / 1000).toFixed(1)}k`: issues}</p></div>
     </div>
     <div className="flex flex-start gap-6 text-sm opacity-80">
     <Link className="gap-2 flex items-center" href={user.html_url}><FontAwesomeIcon className="w-4 h-4" icon={faGithub} />{user.login}</Link>
     {user.twitter_username && <Link href={`${twitter}${user.twitter_username}`} className="gap-2 flex items-center"><FontAwesomeIcon className="w-4 h-4" icon={faXTwitter} />{user.twitter_username}</Link>}
     {user.blog && <Link className="gap-2 flex items-center" href={user.blog}><FontAwesomeIcon className="w-4 h-4" icon={faPaperclip} />website</Link>}
     </div>
      </div>
    <SaveImage />
    </main>
  )
}
