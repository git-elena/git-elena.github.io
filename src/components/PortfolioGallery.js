import React, { useRef, useState, useEffect } from 'react';
import './css/PortfolioGallery.css'

import projectHirosaki from '../images/portfolio/portfolio-hirosaki.jpg'

const PortfolioGallery = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollRef = useRef(null);

  // Массив изображений для галереи
  const images = [
    { src: projectHirosaki, title: 'HIROSAKI', entry: 'Mobile Application', desc: 'Sushi Delivery Service' },
    { src: 'https://via.placeholder.com/300x200', title: 'Project 2' },
    { src: 'https://via.placeholder.com/300x200', title: 'Project 3' },
    { src: 'https://via.placeholder.com/300x200', title: 'Project 4' },
    { src: 'https://via.placeholder.com/300x200', title: 'Project 5' },
    { src: 'https://via.placeholder.com/300x200', title: 'Project 6' },
    { src: 'https://via.placeholder.com/300x200', title: 'Project 7' },
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
    <div className="container-fluid">
      <h2 className="text-center mb-4 text-white">Portfolio</h2>
      <div className="position-relative">
        {/* Левая стрелка */}
        {showLeftArrow && (
          <button
            className="btn btn-secondary position-absolute start-0 top-50 translate-middle-y"
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
              className="card mx-2 bg-dark text-white shadow-lg"
              key={index}
              style={{ minWidth: '300px' }}
              >
                
                <h6 className='text-center m-2'>{image.entry}</h6>
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
            </div>
          ))}
        </div>

        {/* Правая стрелка */}
        {showRightArrow && (
          <button
            className="btn btn-secondary position-absolute end-0 top-50 translate-middle-y"
            onClick={scrollRight}
            style={{ zIndex: 1 }}
          >
            {/* &#9654; */}
            &rarr;
          </button>
        )}
      </div>
    </div>
  );
};

export default PortfolioGallery;
