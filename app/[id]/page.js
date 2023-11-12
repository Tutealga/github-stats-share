import calculateRank from "../services/calculateRanks";
import SaveImage from "@/app/components/saveImageButton";

import { getUser, getRepos, getStars, getCommits, getIssues, getPr } from '@/app/services/index';

import NotFound from "./NotFound";

import { ranks } from "../const/ranks";
import ProfileCard from "../components/ProfileCard";

const getRank = async ({level}) => {
  const ranking = ranks.find((res) => res.name === level)
  return ranking
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
      <ProfileCard hexRank={hexRank} user={user} stars={stars} pr={pr} commits={commits} issues={issues}/>
  <SaveImage />
      </>
    )
}
