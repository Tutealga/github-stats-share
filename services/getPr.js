export const getPr = async ({userLogin}) => {
    const res = await fetch(`https://api.github.com/search/issues?q=author:${userLogin}+is:pr`)
    const json = await res.json()
    return json.total_count
   }