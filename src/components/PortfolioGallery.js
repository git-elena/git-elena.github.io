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
import { useTranslation } from 'react-i18next';

const PortfolioGallery = () => {
  const { t } = useTranslation();

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollRef = useRef(null);

  // Массив изображений для галереи
  const images = [
    {link:'/', src: projectHirosaki, title: t('portfolio.project.Hirosaki.title'), desc: t('portfolio.project.Hirosaki.desc'), entry: t('portfolio.project.Hirosaki.entry')},
    {link:'/', src: projectHelpcenter, title: t('portfolio.project.HelpCenter.title'), desc: t('portfolio.project.HelpCenter.desc'), entry:  t('portfolio.project.HelpCenter.entry')},
    {link:'/', src: projectDesign2, title: t('portfolio.project.KinuLiutas.title'), desc: t('portfolio.project.KinuLiutas.desc'), entry: t('portfolio.project.KinuLiutas.entry') },
    {link:'/', src: projectDesign4, title: t('portfolio.project.Tribo.title'), desc: t('portfolio.project.Tribo.desc'), entry: t('portfolio.project.Tribo.entry') },
    {link:'/', src: projectDesign1, title: t('portfolio.project.Designer.title'), desc: t('portfolio.project.Designer.desc'), entry: t('portfolio.project.Designer.entry') },
    {link:'/', src: projectDesign3, title: t('portfolio.project.Arabora.title'), desc: t('portfolio.project.Arabora.desc'), entry: t('portfolio.project.Arabora.entry') },
    {link:'/', src: projectWebsite1, title: 'Omelchenko Olena', desc: 'Makeup Artist', entry: 'Website' },
    {link:'/', src: projectWebsite3, title: 'KRP', desc: 'Kyiv River Port', entry: 'Website' },
    {link:'/', src: projectWebsite2, title: 'MONDIS', desc: 'Wholesale vegetables. Delivery', entry: 'Website' },
    {link:'/', src: projectWebsite4, title: 'GV', desc: 'Grand Vision', entry: 'Website' },
    {link:'/', src: projectWebsite5, title: 'M GROUP', desc: 'Engineering & Construction company', entry: 'Website' },
    
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
          // style={{ whiteSpace: 'nowrap' }}
        >
          {images.map((image, index) => (
            <div>
              <h6 className='text-center text-white-50'>{image.entry}</h6>
            <div
              className="card mx-3 bg-dark text-white pb-3"
              key={index}
              style={{ minWidth: '300px' }}
              >
                
                {/* <h6 className='text-center '>{image.entry}</h6> */}
              <img
                src={image.src}
                alt={image.title}
                className=""
                style={{ cursor: 'pointer', maxWidth: '100%' }}
              />
              <div className="card-body">
                      <h5 className="card-title text-center">{image.title}</h5>
                      <p className='text-secondary desc'>{image.desc}</p>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end pe-3">
                <a href={image.link} 
                    className="btn btn-secondary button-2 m-0" 
                    tabIndex="-1" 
                    role="button" 
                    aria-disabled="true">{t('button.readmore')}</a>
              </div>
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
