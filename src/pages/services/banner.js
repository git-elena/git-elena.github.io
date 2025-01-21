import React from 'react'

const Banner = ({src, alt}) => {
    return (       
        <div className='service-banner'>
            <img
                src={src}
                alt={alt}
                className=""
                style={{ maxWidth: '100%' }}
            />  
           
        </div>
    )
}

export default Banner
