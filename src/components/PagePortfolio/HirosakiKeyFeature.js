import React from 'react'
import '../../../src/components/css/portfolio/HirosakiKeyFeature.css'

const HirosakiKeyFeature  = ({title, text}) => {
  
    return (
      <div className='key-item'>
        <div className='keyItem-title'>{title}</div>
        <div className='keyItem-text'>{text}</div>
      </div>
    )
  
}

export default HirosakiKeyFeature;