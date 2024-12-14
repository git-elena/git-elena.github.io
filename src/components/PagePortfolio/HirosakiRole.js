import React from 'react'
import '../css/portfolio/HirosakiRole.css'

const HirosakiRole = ({title, text, align}) => {
    return (
        <div className={`role-${align}`}>
            <div className={`role-item`}>
                <div className={`roleItem-title ${align}`}>{title}</div>
                <div className={`roleItem-text ${align}`}>{text}</div>
            </div>
        </div>
      )
}

export default HirosakiRole;