import { Suspense } from "react";
import Skeleton from "../components/Skeleton";
import Rank from "../components/Rank";
import { twitter } from "@/app/const/links";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

const ProfileCard = ({hexRank, user, stars, pr, commits, issues}) => {
  return (
    <Suspense fallback={<Skeleton />}>
        <article id="user-card" className={`border p-5 rounded-lg w-full h-[450px] bg-opacity-20 justify-between flex flex-col ${hexRank.border} ease-in-out duration-500 transition`}>
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
        </article>
      </Suspense>
  )
}

export default ProfileCard