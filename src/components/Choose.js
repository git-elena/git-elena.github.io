import React from 'react'
import { useTranslation } from 'react-i18next';
import choose1 from '../images/choose/choose-1.webp'
import choose2 from '../images/choose/choose-2.webp'
import choose3 from '../images/choose/choose-3.webp'
import choose4 from '../images/choose/choose-4.webp'
import choose5 from '../images/choose/choose-5.webp'

const Choose = () => {
    const { t } = useTranslation();
    // Массив изображений для галереи
    const images_II = [
        { src: choose1, title: t('choose.title1'), desc: t('choose.desc1')},
        { src: choose5, title: t('choose.title5'), desc: t('choose.desc5')},
        
    ];

    const images_III = [
      { src: choose3, title: t('choose.title3'), desc: t('choose.desc3')},
      { src: choose4, title: t('choose.title4'), desc: t('choose.desc4')},
      { src: choose2, title: t('choose.title2'), desc: t('choose.desc2')},
    ];

    return (
    <div className="container">
     <div className="row mb-md-5  border-bottom py-md-5">
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
    <div className='row  py-md-5'>
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
