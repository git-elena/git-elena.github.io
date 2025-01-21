import React from 'react'


const AppTitle = ({left, right}) => {
    return (
        <div className='app-title'>
            <span className='left'>{left}</span>
            <span className='right'>{right}</span>
        </div>
    )
}

export default AppTitle