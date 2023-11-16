'use client'

import { useEffect, useState } from 'react'
import { ranks } from './const/ranks'
import ProfileCard from './components/ProfileCard'
import { homeUser } from './const/homeUser'

export default function Home () {
  const [rank, setRank] = useState(ranks[0])

  useEffect(() => {
    const length = ranks.length

    const intervalId = setInterval(() => {
      const randomKey = ranks[Math.floor(Math.random() * length)]
      setRank(randomKey)
    }, 2500)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <ProfileCard hexRank={rank} user={homeUser} stars={24000} pr={729} commits={32206} issues={133} />
}
