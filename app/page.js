'use client'

import { useEffect, useState } from "react";
import { ranks } from "./const/ranks";
import ProfileCard from "./components/ProfileCard";

const midudev = {name:'Miguel Ángel Durán', login:'midudev', avatar_url:"https://avatars.githubusercontent.com/u/1561955?v=4", followers: 18102, public_repos:200, twitter_username: "midudev", html_url:"https://github.com/midudev"}

export default function Home() {
const [rank, setRank] = useState(ranks[0])

useEffect(()=>{
  const length = ranks.length
  
  const intervalId = setInterval(()=> {
    const randomKey = ranks[Math.floor(Math.random() * length)]
    setRank(randomKey)
  }, 2500)

  return () => {
    clearInterval(intervalId)
  }
}, [])

  return (
      <ProfileCard hexRank={rank} user={midudev} stars={24000} pr={729} commits={32206} issues={133}/>
  )
}
