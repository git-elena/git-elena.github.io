import React from 'react'
import '../../css/portfolio/FastTemplateModX.css'

const WebsiteModX = ({name, title, text_1, text_2, link, img}) => {
  return (
    <div className='item-fast'>
        <a href={link} target="_blank">
            <img
                src={img}
                alt={name}
                className="img-header"
                style={{ maxWidth: '100%' }}
            />
            <h6>{title}</h6>
        </a>
        <ul>
            <li>{text_1}</li>
            <li>{text_2}</li>
        </ul>
    </div>
  )
}

export default WebsiteModX


