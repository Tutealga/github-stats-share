export const getRepos = async ({userLogin, reposCount}) => {
    const res = await fetch(`https://api.github.com/users/${userLogin}/repos?per_page=${reposCount}`)
    const json = await res.json()
    return json
  }