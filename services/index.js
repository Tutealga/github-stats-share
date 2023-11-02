import { searchPath, userPath } from "@/const/links"

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

   export const getPr = async ({userLogin}) => {
    const res = await fetch(`${searchPath}issues?q=author:${userLogin}+is:pr`)
    const json = await res.json()
    return json.total_count
   }

   export const getRepos = async ({userLogin, reposCount}) => {
    const res = await fetch(`${userPath}${userLogin}/repos?per_page=${reposCount}`)
    const json = await res.json()
    return json
  }

  export const getStars = async ({repos}) => {
    let starsCount = []
  
    repos.map(star => starsCount.push(star.stargazers_count))
   
   return starsCount.reduce((prev, act) => prev + act, 0);
  }

  export const getUser = async ({id}) => {
    const res = await fetch(`${userPath}${id}`)
    const json = await res.json()
    return json
  }