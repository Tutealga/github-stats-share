import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const RankLayout = ({shadow, stroke, star}) => {

  return (
        <div className={`pentagono w-6 h-6 flex items-center justify-center ${shadow}`}><FontAwesomeIcon className={`w-4 h-4 ${star} ${stroke}`} icon={faStar} /></div>
          )
}

export default RankLayout