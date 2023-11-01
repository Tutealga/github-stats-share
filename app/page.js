import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAward, faBookBookmark, faCircleExclamation, faClockRotateLeft, faCodePullRequest, faPaperclip, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import calculateRank from "./calculateRanks";
import { twitter } from "@/const/links";
import { getUser } from "@/services/getUser";
import { getRepos } from "@/services/getRepos";
import { getStars } from "@/services/getStars";
import { getCommits } from "@/services/getCommits";
import { getIssues } from "@/services/getIssues";
import { getPr } from "@/services/getPr";
import { getRank } from "@/services/getRank";

export default async function Home() {
const user = await getUser({id: 'midudev'})
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
    <>
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
    </>
  )
}
