import calculateRank from '../utils/calculateRanks'

import { getUser, getRepos, getStars, getCommits, getIssues, getPr, getRank, getNextRank } from '@/app/utils/index'

import NotFound from './NotFound'
import ProfileCard from '../components/ProfileCard'
import SaveImage from '../components/saveImageButton'

export default async function Page ({ params }) {
  const { id } = params
  const user = await getUser({ id })
  if (user.message === 'Not Found' || user.message === "API rate limit exceeded for 201.235.28.197. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)") return <NotFound />
  const starsCount = await getRepos({ userLogin: user.login, reposCount: user.public_repos })
  const stars = await getStars({ starsCount })
  const commits = await getCommits({ userLogin: user.login })
  const issues = await getIssues({ userLogin: user.login })
  const pr = await getPr({ userLogin: user.login })
  const { level, nextLevelPercentage, nextLevel } = await calculateRank({ commits, pr, issues, stars, followers: user.followers })
  const hexRank = await getRank({ level })
  const hexNextRank = await getNextRank({ nextLevel })

  return (
    <>
      <ProfileCard hexRank={hexRank} user={user} stars={stars} pr={pr} commits={commits} issues={issues} nextLevelPercentage={nextLevelPercentage} nextLevel={hexNextRank} />
      <SaveImage />
    </>
  )
}
