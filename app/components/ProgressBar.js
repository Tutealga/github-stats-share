import RankLayout from './RankLayout'

const ProgressBar = ({ nextLevelPercentage, nextLevel, bg }) => {
  return (
    <div title={`${nextLevelPercentage > 100 ? 100 : nextLevelPercentage.toFixed(1)}%`} className={`h-[4px] w-full rounded-md ${bg} bg-opacity-20 flex items-center justify-between`}>
      <div className={`h-full rounded-md ${nextLevel.background}`} style={{ width: `${nextLevelPercentage > 100 ? 100 : nextLevelPercentage}%` }} />
      <RankLayout star={nextLevel.fill} shadow={nextLevel.shadow} stroke={nextLevel.stroke} />
    </div>
  )
}

export default ProgressBar
