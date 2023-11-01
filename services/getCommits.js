export const getCommits = async ({userLogin}) => {
    const res = await fetch(`https://api.github.com/search/commits?q=author:${userLogin}`)
    const json = await res.json()
    return json.total_count
   }