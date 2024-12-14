import React from 'react'
import '../css/portfolio/HirosakiTool.css'

const HirosakiTool = ({title, text}) => {
    return (
        <div className='tool-item'>
          <div className='toolItem-title'>{title}</div>
          <div className='toolItem-text'>{text}</div>
        </div>
      )
}

export default HirosakiTool;