'use client'

import { useEffect, useState } from 'react'
import { ranks } from './const/ranks'
import ProfileCard from './components/ProfileCard'
import { homeUser } from './const/homeUser'

export default function Home () {
  const [rank, setRank] = useState(ranks[0])
  const [nextRank, setNextRank] = useState(ranks[0])

  useEffect(() => {
    const length = ranks.length

    const intervalId = setInterval(() => {
      const index = Math.floor(Math.random() * length)
      const randomKey = ranks[index]
      const nextRandomKey = ranks[index !== 0 ? index - 1 : index]
      console.log(randomKey, nextRandomKey)
      setRank(randomKey)
      setNextRank(nextRandomKey)
    }, 2500)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <ProfileCard hexRank={rank} user={homeUser} stars={24000} pr={729} commits={32206} issues={133} nextLevelPercentage={rank.name === 'Diamond' ? 100 : Math.floor(Math.random() * 100)} nextLevel={nextRank} />
}
