import React from 'react'
import chose1 from '../images/chose/chose-1.webp'
import chose2 from '../images/chose/chose-2.webp'
import chose3 from '../images/chose/chose-3.webp'
import chose4 from '../images/chose/chose-4.webp'
import chose5 from '../images/chose/chose-5.webp'

const Choose = () => {

    // Массив изображений для галереи
    const images_II = [
        { src: chose1, title: 'High Quality and Professionalism', desc: 'Our team consists of experienced developers and designers who use cutting-edge technologies to create modern and reliable solutions. We ensure that each project is executed with the utmost attention to detail and care.'},
        { src: chose5, title: 'Affordable Prices', desc: 'Our team consists of experienced developers and designers who use cutting-edge technologies to create modern and reliable solutions. We ensure that each project is executed with the utmost attention to detail and care.' },
        
    ];

    const images_III = [
      { src: chose3, title: 'Tailored Solutions', desc: 'Our team consists of experienced developers and designers who use cutting-edge technologies to create modern and reliable solutions. We ensure that each project is executed with the utmost attention to detail and care.' },
        { src: chose4, title: 'On-Time Delivery', desc: 'Our team consists of experienced developers and designers who use cutting-edge technologies to create modern and reliable solutions. We ensure that each project is executed with the utmost attention to detail and care.' },
        { src: chose2, title: 'Comprehensive Approach', desc: 'Our team consists of experienced developers and designers who use cutting-edge technologies to create modern and reliable solutions. We ensure that each project is executed with the utmost attention to detail and care.' },
    ];

    return (
    <div className="container">
     <div className="row mb-md-5  border-bottom">
        {images_II.map((image, index) => (
          <div className="col-md-6"
          key={index}>
            
          <div className="row">
            
            <div className="col-4 m-auto m-md-0">
              <img
                src= {image.src}
                className="rounded-circle border p-1 w-75 m-auto d-block"
                alt={image.title}
              />
            </div>
            <div className="col-md-8 text-center text-md-start mb-5">
            
                <h5 className="card-title">{image.title}</h5>
                <p className="card-text">
                  {image.desc}
                </p>
                
            </div>
            
          </div>
          </div>
        ))}
    </div>
    <div className='row'>
      {images_III.map((image, index) => (
        <div className="col-md-4 " key={index}>
          <div className="row">
            
            <div className="col-4 m-auto m-md-0">
              <img
                src= {image.src}
                className="border p-1 w-75 m-auto d-block"
                alt={image.title}
              />
            </div>
            <div className="col-md-8 text-center text-md-start mb-5">
            
                <h5 className="card-title">{image.title}</h5>
                <p className="card-text">
                  {image.desc}
                </p>
                
            </div>
            
          </div>
        </div>
      ))}
    </div>
   </div>
  )
}

export default Choose
