import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Rank = ({shadow, stroke, star}) => {

  return (
        <div className={`pentagono w-12 h-12 flex items-center justify-center ${shadow}`}><FontAwesomeIcon className={`w-8 h-8 ${star} ${stroke}`} icon={faStar} /></div>
          )
}

export default Rank