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
import { Link } from 'react-router-dom';

const PortfolioGallery = () => {
  const { t } = useTranslation();

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollRef = useRef(null);

  // Массив изображений для галереи
  const images = [
    {link:'/portfolio/hirosaki', src: projectHirosaki, title: t('home.portfolio.project.Hirosaki.title'), desc: t('home.portfolio.project.Hirosaki.desc'), entry: t('home.portfolio.project.Hirosaki.entry')},
    {link:'/portfolio/helpcenter24', src: projectHelpcenter, title: t('home.portfolio.project.HelpCenter.title'), desc: t('home.portfolio.project.HelpCenter.desc'), entry:  t('home.portfolio.project.HelpCenter.entry')},
    {link:'/portfolio/kinu-liutas', src: projectDesign2, title: t('home.portfolio.project.KinuLiutas.title'), desc: t('home.portfolio.project.KinuLiutas.desc'), entry: t('home.portfolio.project.KinuLiutas.entry') },
    {link:'/portfolio/templates', src: projectDesign4, title: t('home.portfolio.project.Tribo.title'), desc: t('home.portfolio.project.Tribo.desc'), entry: t('home.portfolio.project.Tribo.entry') },
    {link:'/portfolio/templates', src: projectDesign1, title: t('home.portfolio.project.Designer.title'), desc: t('home.portfolio.project.Designer.desc'), entry: t('home.portfolio.project.Designer.entry') },
    {link:'/portfolio/templates', src: projectDesign3, title: t('home.portfolio.project.Arabora.title'), desc: t('home.portfolio.project.Arabora.desc'), entry: t('home.portfolio.project.Arabora.entry') },
    {link:'/portfolio/templates', src: projectWebsite1, title: t('home.portfolio.project.OO.title'), desc: t('home.portfolio.project.OO.desc'), entry: t('home.portfolio.project.OO.entry') },
    {link:'/portfolio/templates', src: projectWebsite3, title: t('home.portfolio.project.KRP.title'), desc: t('home.portfolio.project.KRP.desc'), entry: t('home.portfolio.project.KRP.entry') },
    {link:'/portfolio/templates', src: projectWebsite4, title: t('home.portfolio.project.GV.title'), desc: t('home.portfolio.project.GV.desc'), entry: t('home.portfolio.project.GV.entry') },
    {link:'/portfolio/templates/', src: projectWebsite5, title: t('home.portfolio.project.MG.title'), desc: t('home.portfolio.project.MG.desc'), entry: t('home.portfolio.project.MG.entry') },
    
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
          className="d-flex overflow-auto py-5"
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
                <Link to={image.link}
                    className="btn btn-secondary button-2 m-0"
                    tabIndex="-1" 
                    role="button" 
                    aria-disabled="true"
                >{t('btn.readmore')}</Link>
                
              </div>
            </div>
            </div>
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

export default PortfolioGallery;
