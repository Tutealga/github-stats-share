function exponentialCdf (x) {
  return 1 - 2 ** -x
}

function logNormalCdf (x) {
  return x / (1 + x)
}

async function calculateRank ({ commits, pr, issues, stars, followers }) {
  const COMMITS_MEDIAN = 1000; const COMMITS_WEIGHT = 2
  const PRS_MEDIAN = 50; const PRS_WEIGHT = 3
  const ISSUES_MEDIAN = 25; const ISSUES_WEIGHT = 1
  const STARS_MEDIAN = 50; const STARS_WEIGHT = 4
  const FOLLOWERS_MEDIAN = 10; const FOLLOWERS_WEIGHT = 1

  const TOTAL_WEIGHT = COMMITS_WEIGHT + PRS_WEIGHT + ISSUES_WEIGHT + STARS_WEIGHT + FOLLOWERS_WEIGHT

  const THRESHOLDS = [1, 25, 50, 75, 100]
  const LEVELS = ['Diamond', 'Emerald', 'Gold', 'Silver', 'Bronze']

  const rank = 1 - (COMMITS_WEIGHT * exponentialCdf(commits / COMMITS_MEDIAN) +
        PRS_WEIGHT * exponentialCdf(pr / PRS_MEDIAN) +
        ISSUES_WEIGHT * exponentialCdf(issues / ISSUES_MEDIAN) +
        STARS_WEIGHT * logNormalCdf(stars / STARS_MEDIAN) +
        FOLLOWERS_WEIGHT * logNormalCdf(followers / FOLLOWERS_MEDIAN)) /
        TOTAL_WEIGHT

  const level = LEVELS[THRESHOLDS.findIndex((t) => rank * 100 <= t)]

  return { level }
}

export { calculateRank }
export default calculateRank
