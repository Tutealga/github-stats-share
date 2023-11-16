import RankLayout from './RankLayout'

const ProgressBar = ({ nextLevelPercentage, nextLevel, bg }) => {
  const levelPercentage = nextLevelPercentage > 100 ? 100 : nextLevelPercentage.toFixed(1)

  return (
    <div title={`${levelPercentage}%`} className={`h-[4px] w-full rounded-md ${bg} bg-opacity-20 flex items-center justify-between`}>
      <div className={`h-full rounded-md ${nextLevel.background}`} style={{ width: `${levelPercentage}%` }} />
      <RankLayout star={nextLevel.fill} shadow={nextLevel.shadow} stroke={nextLevel.stroke} />
    </div>
  )
}

export default ProgressBar
