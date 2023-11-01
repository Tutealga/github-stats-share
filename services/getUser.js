export const getUser = async ({id}) => {
    const res = await fetch(`https://api.github.com/users/${id}`)
    const json = await res.json()
    return json
  }