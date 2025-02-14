import React, { useRef, useState, useEffect } from 'react';
import './css/PricesGallery.css'

import { useTranslation } from 'react-i18next';

const PricesGallery = (params) => {
  const { t } = useTranslation();

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollRef = useRef(null);

  // Функция для прокрутки влево
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  // Функция для прокрутки вправо
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Функция для проверки, видимы ли стрелки
  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
  };

  // Добавляем обработчик прокрутки
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // Проверка сразу на первом рендере

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
      <div className="position-relative">
        {/* Левая стрелка */}
        {showLeftArrow && (
          <button
          key='left'
            className="btn next btn-secondary position-absolute start-0 top-50 translate-middle-y"
            onClick={scrollLeft}
            style={{ zIndex: 1 }}
          >
            {/* &#9664; */}
            &larr;
          </button>
        )}

        {/* Контейнер для горизонтальной прокрутки */}
        <div
          className="d-flex overflow-auto pb-4"
          ref={scrollRef}
          // style={{ whiteSpace: 'nowrap' }}
        >
          {params.items.map((item, index) => (


            <div key={index} className='price-card' >
              <div className='price-content bg-dark'>
                <h5 className={'text-center '+item.style}>{item.name}</h5>

                <dir className='row'>
                  <div className='col-6'>
                    <h6 className='text-center'>{item.price} kč</h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='text-center'>{item.period}</h6>
                  </div>
                </dir>
                
                <p>{item.description}</p>
              </div>
            </div>


            // <div>
            //   <h6 className='text-center text-white-50'>{image.entry}</h6>
            // <div
            //   className="card mx-3 bg-dark text-white pb-3"
            //   key={index}
            //   style={{ minWidth: '300px' }}
            //   >
                
            //     {/* <h6 className='text-center '>{image.entry}</h6> */}
            //   <img
            //     src={image.src}
            //     alt={image.title}
            //     className=""
            //     style={{ cursor: 'pointer', maxWidth: '100%' }}
            //   />
            //   <div className="card-body">
            //           <h5 className="card-title text-center">{image.title}</h5>
            //           <p className='text-secondary desc'>{image.desc}</p>
            //   </div>
            //   <div className="d-grid gap-2 d-md-flex justify-content-md-end pe-3">
            //     <Link to={image.link}
            //         className="btn btn-secondary button-2 m-0"
            //         tabIndex="-1" 
            //         role="button" 
            //         aria-disabled="true"
            //     >{t('btn.readmore')}</Link>
                
            //   </div>
            // </div>
            // </div>



          ))}
        </div>

        {/* Правая стрелка */}
        {showRightArrow && (
          <button
            key='right'
            className="btn next btn-secondary position-absolute end-0 top-50 translate-middle-y"
            onClick={scrollRight}
            style={{ zIndex: 1 }}
          >
            {/* &#9654; */}
            &rarr;
          </button>
        )}
      </div>
  );
};

export default PricesGallery;
