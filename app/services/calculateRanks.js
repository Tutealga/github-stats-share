function exponential_cdf(x) {
    return 1 - 2 ** -x;
  }
  
  function log_normal_cdf(x) {
    return x / (1 + x);
  }
  
  async function calculateRank({commits, pr, issues, stars, followers}) {
    const COMMITS_MEDIAN = 1000, COMMITS_WEIGHT = 2;
    const PRS_MEDIAN = 50, PRS_WEIGHT = 3;
    const ISSUES_MEDIAN = 25, ISSUES_WEIGHT = 1;
    const STARS_MEDIAN = 50, STARS_WEIGHT = 4;
    const FOLLOWERS_MEDIAN = 10, FOLLOWERS_WEIGHT = 1;
  
    const TOTAL_WEIGHT = COMMITS_WEIGHT + PRS_WEIGHT + ISSUES_WEIGHT + STARS_WEIGHT + FOLLOWERS_WEIGHT;
  
    const THRESHOLDS = [1, 20, 40, 60, 80, 100];
    const LEVELS = ["Maestro", "Diamante", "Platino", "Oro", "Plata", "Bronze"];
  
    const rank = 1 - (COMMITS_WEIGHT * exponential_cdf(commits / COMMITS_MEDIAN) +
        PRS_WEIGHT * exponential_cdf(pr / PRS_MEDIAN) +
        ISSUES_WEIGHT * exponential_cdf(issues / ISSUES_MEDIAN) +
        STARS_WEIGHT * log_normal_cdf(stars / STARS_MEDIAN) +
        FOLLOWERS_WEIGHT * log_normal_cdf(followers / FOLLOWERS_MEDIAN)) /
        TOTAL_WEIGHT;
  
    const level = LEVELS[THRESHOLDS.findIndex((t) => rank * 100 <= t)];
   
    return {level, percentile: rank * 100} 
  }
  
  export { calculateRank };
  export default calculateRank;