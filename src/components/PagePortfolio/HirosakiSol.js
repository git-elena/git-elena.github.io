import React from 'react'
import '../css/portfolio/HirosakiSol.css'

const HirosakiSol = ({title, text, align}) => {
    return (
        <div className={`sol-${align}`}>
            <div className={`sol-item`}>
                <div className={`solItem-title ${align}`}>{title}</div>
                <div className={`solItem-text ${align}`}>{text}</div>
            </div>
        </div>
      )
}

export default HirosakiSol;