import calculateRank from '../services/calculateRanks'

import { getUser, getRepos, getStars, getCommits, getIssues, getPr, getRank } from '@/app/services/index'

import NotFound from './NotFound'
import ProfileCard from '../components/ProfileCard'
import SaveImage from '../components/saveImageButton'

export default async function Page ({ params }) {
  const { id } = params
  const user = await getUser({ id })
  if (user.message === 'Not Found') return <NotFound />
  const starsCount = await getRepos({ userLogin: user.login, reposCount: user.public_repos })
  const stars = await getStars({ starsCount })
  const commits = await getCommits({ userLogin: user.login })
  const issues = await getIssues({ userLogin: user.login })
  const pr = await getPr({ userLogin: user.login })
  const { level } = await calculateRank({ commits, pr, issues, stars, followers: user.followers })
  const hexRank = await getRank({ level })

  return (
    <>
      <ProfileCard hexRank={hexRank} user={user} stars={stars} pr={pr} commits={commits} issues={issues} />
      <SaveImage />
    </>
  )
}
