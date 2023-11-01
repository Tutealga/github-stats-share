export const getStars = async ({repos}) => {
    let starsCount = []
  
    repos.map(star => starsCount.push(star.stargazers_count))
   
   return starsCount.reduce((prev, act) => prev + act, 0);
  }