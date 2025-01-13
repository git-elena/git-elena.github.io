import React from 'react'

const ServiceItem = ({title, text, img, num}) => {
    return (
        <div className={`row item`}>
            
            {img && 
            (<div className='col-2 col-md-4 img'>
                <img className=' img-fluid shadoww rounded-3' src={img} alt={title} />
            </div>)}

            {num && 
            (<div className='col-2 num'>
                {num}
            </div>)}

            <div className='col-8'>
                <div className='title cardTitle'>{title}</div>
                <div className='text cardText'>{text}</div>
            </div>
        </div>
      )
}

export default ServiceItem;