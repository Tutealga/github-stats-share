import { Suspense } from 'react'
import Skeleton from '../components/Skeleton'
import Rank from '../components/Rank'
import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from './ProgressBar'

const ProfileCard = ({ hexRank, user, stars, pr, commits, issues, nextLevelPercentage, nextLevel }) => {
  const { avatar_url, name, html_url, login, public_repos, followers, twitter_username, blog } = user
  return (
    <Suspense fallback={<Skeleton />}>
      <article id='user-card' className={`border p-5 rounded-lg w-full h-[450px] bg-opacity-20 justify-between flex flex-col ${hexRank.border} ${hexRank.background} selection:ease-in-out duration-500 transition`}>
        <div className='flex items-center justify-between'>
          <div className='flex gap-2'>
            <Image src={avatar_url} width={50} height={50} alt={name} className='rounded-2xl w-14 h-14' />
            <div className='flex justify-center flex-col'>
              <p className='text-white flex items-center opacity-90'>{name}</p>
              <Link className='text-white flex hover:opacity-100 items-center text-sm opacity-60' href={html_url}>@{login}</Link>
            </div>
          </div>
          <Rank star={hexRank.fill} shadow={hexRank.shadow} stroke={hexRank.stroke} />
        </div>
        <ProgressBar nextLevelPercentage={nextLevelPercentage} nextLevel={nextLevel} bg={hexRank.background} />
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col text-sm'><p className='font-bold opacity-90'>{stars > 1000 ? `${(stars / 1000).toFixed(1)}k` : stars}</p><span className='opacity-80'>Stars</span></div>
          <div className='flex flex-col text-sm'><p className='font-bold opacity-90'>{pr > 1000 ? `${(pr / 1000).toFixed(1)}k` : pr}</p><span className='opacity-80'>Pull Requests</span></div>
          <div className='flex flex-col text-sm'><p className='font-bold opacity-90'>{commits > 1000 ? `${(commits / 1000).toFixed(1)}k` : commits}</p><span className='opacity-80'>Commits</span></div>
          <div className='flex flex-col text-sm'><p className='font-bold opacity-90'>{followers > 1000 ? `${(followers / 1000).toFixed(1)}k` : followers}</p><span className='opacity-80'>Followers</span></div>
          <div className='flex flex-col text-sm'><p className='font-bold opacity-90'>{public_repos > 1000 ? `${(public_repos / 1000).toFixed(1)}k` : public_repos}</p><span className='opacity-80'>Repositories</span></div>
          <div className='flex flex-col text-sm'><p className='font-bold opacity-90'>{issues > 1000 ? `${(issues / 1000).toFixed(1)}k` : issues}</p><span className='opacity-80'>Issues</span></div>
        </div>
        <div className='flex flex-start gap-6 text-sm'>
          {twitter_username && <Link href={`https://twitter.com/${twitter_username}`} className='gap-2 flex items-center hover:opacity-100 opacity-60'><FontAwesomeIcon className='w-4 h-4' icon={faXTwitter} />{twitter_username}</Link>}
          {blog && <Link className='gap-2 flex items-center hover:opacity-100 opacity-60' href={blog}><FontAwesomeIcon className='w-4 h-4' icon={faPaperclip} />website</Link>}
        </div>
      </article>
    </Suspense>
  )
}

export default ProfileCard
