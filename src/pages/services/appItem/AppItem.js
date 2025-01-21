import React from 'react'


const AppItem = ({title, text}) => {
    return (
        <div className='item'>
            <p className='title'>{title}</p>
            <p className='text'>{text}</p>
        </div>
    )
}

export default AppItem