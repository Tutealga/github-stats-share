export const getIssues = async ({userLogin}) => {
    const res = await fetch(`https://api.github.com/search/issues?q=author:${userLogin}+is:issue`)
    const json = await res.json()
    return json.total_count
   }