import React, { useRef, useState, useEffect } from 'react';
import './css/PortfolioGallery.css'

import projectHirosaki from '../images/portfolio/portfolio-hirosaki.jpg'
import projectHelpcenter from '../images/portfolio/portfolio-helpcenter.jpg'
import projectWebsite1 from '../images/portfolio/portfolio-website1.jpg'
import projectWebsite2 from '../images/portfolio/portfolio-website2.jpg'
import projectWebsite3 from '../images/portfolio/portfolio-website3.jpg'
import projectWebsite4 from '../images/portfolio/portfolio-website4.jpg'
import projectWebsite5 from '../images/portfolio/portfolio-website5.jpg'
import projectDesign1 from '../images/portfolio/portfolio-design1.jpg'
import projectDesign2 from '../images/portfolio/portfolio-design2.jpg'
import projectDesign3 from '../images/portfolio/portfolio-design3.jpg'
import projectDesign4 from '../images/portfolio/portfolio-design4.jpg'

const PortfolioGallery = () => {
  

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollRef = useRef(null);

  // Массив изображений для галереи
  const images = [
    { src: projectHirosaki, title: 'HIROSAKI', desc: 'Sushi Delivery Service', entry: 'Mobile Application'},
    { src: projectHelpcenter, title: 'Help Center 24', desc: 'Sushi Delivery Service', entry: 'Mobile Application'},
    { src: projectDesign2, title: 'Kinu Liutas', desc: 'Tibetan Mastiffs Kennel', entry: 'Design' },
    { src: projectDesign4, title: 'Tribo', desc: 'Metal Products', entry: 'Design' },
    { src: projectDesign1, title: 'Designer', desc: 'Sites Creator', entry: 'Design' },

    { src: projectDesign3, title: 'Arabora', desc: 'Decore Studio', entry: 'Design' },

    { src: projectWebsite1, title: 'Omelchenko Olena', desc: 'Makeup Artist', entry: 'Website' },
    { src: projectWebsite3, title: 'KRP', desc: 'Kyiv River Port', entry: 'Website' },
    { src: projectWebsite2, title: 'MONDIS', desc: 'Wholesale vegetables. Delivery', entry: 'Website' },
    { src: projectWebsite4, title: 'GV', desc: 'Grand Vision', entry: 'Website' },
    { src: projectWebsite5, title: 'M GROUP', desc: 'Engineering & Construction company', entry: 'Website' },
    
  ];

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
          className="d-flex overflow-auto p-5"
          ref={scrollRef}
          style={{ whiteSpace: 'nowrap' }}
        >
          {images.map((image, index) => (
            <div
              className="card mx-2 bg-dark text-white py-3"
              key={index}
              style={{ minWidth: '300px' }}
              >
                
                <h6 className='text-center '>{image.entry}</h6>
              <img
                src={image.src}
                alt={image.title}
                className="card-img"
                style={{ cursor: 'pointer', maxWidth: '100%' }}
              />
              <div className="card-body">
                      <h5 className="card-title text-center">{image.title}</h5>
                      <p>{image.desc}</p>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end pe-3">
                <a href="#" 
                    className="btn btn-secondary button-2 m-0" 
                    tabIndex="-1" 
                    role="button" 
                    aria-disabled="true">Read more...</a>
              </div>
            </div>
          ))}
        </div>

        {/* Правая стрелка */}
        {showRightArrow && (
          <button
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

export default PortfolioGallery;
