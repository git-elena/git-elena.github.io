
import React from 'react'

const Technologie = ({IconComponent, title}) => {
   
  return (
      <div className='technologie'>
          <IconComponent alt={title} height="48" width="48" />
      <p>{title}</p>
    </div>
  )
}

export default Technologie
