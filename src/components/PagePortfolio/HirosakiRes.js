import React from 'react'
import '../css/portfolio/HirosakiRes.css'

const HirosakiRes = ({title, text, align}) => {
    return (
        <div className={`res-${align}`}>
            <div className={`res-item`}>
                <div className={`symbol ${align}`}>✓</div>
                <div className={`resItem-title ${align}`}>{title}</div>
                <div className={`resItem-text ${align}`}>{text}</div>
            </div>
        </div>
      )
}

export default HirosakiRes;