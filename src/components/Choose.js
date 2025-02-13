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
        { src: choose1, title: t('home.choose.item_1.title'), desc: t('home.choose.item_1.desc')},
        { src: choose5, title: t('home.choose.item_5.title'), desc: t('home.choose.item_5.desc')},
        
    ];

    const images_III = [
      { src: choose3, title: t('home.choose.item_3.title'), desc: t('home.choose.item_3.desc')},
      { src: choose4, title: t('home.choose.item_4.title'), desc: t('home.choose.item_4.desc')},
      { src: choose2, title: t('home.choose.item_2.title'), desc: t('home.choose.item_2.desc')},
    ];

    return (
    <div className="container">
     <div className="row mb-md-5  border-b py-md-5">
        {images_II.map((image, index) => (
          <div className="col-md-6" key={index}>
            
            <div className="row myCard">
              
              <div className="col-4 m-auto m-md-0">
                <img
                  src= {image.src}
                  className="cardImg rounded-circle border p-1 w-75 m-auto d-block"
                  alt={image.title}
                />
              </div>
              <div className="col-md-8 text-md-start mb-5">
              
                  <div className="cardTitle">{image.title}</div>
                  <div className="cardText">{image.desc}</div>
                  
              </div>
              
            </div>

          </div>
        ))}
    </div>
    <div className='tt row  pt-md-5'>
      {images_III.map((image, index) => (
        <div className="col-md-4 " key={index}>
          <div className="row myCard">
            
            <div className="col-4 m-auto m-md-0">
              <img
                src= {image.src}
                className="cardImg border p-1 w-75 m-auto d-block"
                alt={image.title}
              />
            </div>
            <div className="col-md-8 text-md-start mb-5">
            
                <div className="cardTitle pb-2">{image.title}</div>
                <div className="cardText">{image.desc}</div>
                
            </div>
            
          </div>
        </div>
      ))}
    </div>
   </div>
  )
}

export default Choose
