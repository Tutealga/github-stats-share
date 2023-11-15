import { searchPath, userPath } from "@/app/const/links"
import { ranks } from "../const/ranks"

export const getCommits = async ({userLogin}) => {
    const res = await fetch(`${searchPath}commits?q=author:${userLogin}`)
    const json = await res.json()
    return json.total_count
   }

   export const getIssues = async ({userLogin}) => {
    const res = await fetch(`${searchPath}issues?q=author:${userLogin}+is:issue`)
    const json = await res.json()
    return json.total_count
   }

  export const getRank = async ({level}) => {
    const ranking = ranks.find((res) => res.name === level)
    return ranking
    }

   export const getPr = async ({userLogin}) => {
    const res = await fetch(`${searchPath}issues?q=author:${userLogin}+is:pr`)
    const json = await res.json()
    return json.total_count
   }

   export const getRepos = async ({userLogin, reposCount}) => {
     let pages = Math.ceil(reposCount / 100)
     let stars = []
    
     if(reposCount >= 100){
      for(let i = 1; i <= pages; i++){
        const res = await fetch(`${userPath}${userLogin}/repos?per_page=100&page=${i}`)
        const json = await res.json()
        json.map(star => stars.push(star.stargazers_count))
      } 
    } else {
      const res = await fetch(`${userPath}${userLogin}/repos?per_page=${reposCount}`)
      const json = await res.json()
      json.map(star => stars.push(star.stargazers_count))
    }
    return stars
  }

  export const getStars = async ({starsCount}) => {   
   return starsCount.reduce((prev, act) => prev + act, 0);
  }

  export const getUser = async ({id}) => {
    const res = await fetch(`${userPath}${id}`, { next: { revalidate: 1 } })
      const json = await res.json()
      return json
    }
    