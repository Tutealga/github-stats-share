import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Rank = ({ shadow, stroke, star }) => {
  return (
    <div className={`pentagono w-10 h-10 flex items-center justify-center ${shadow}`}>
      <FontAwesomeIcon className={`w-6 h-6 ${star} stroke-[1.5rem] ${stroke}`} icon={faStar} />
    </div>
  )
}

export default Rank
