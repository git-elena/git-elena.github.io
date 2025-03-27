import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LogoComponent from './logo/Logo';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/Footer.css'

const Footer = () => {
  const { t } = useTranslation();

    return (
        <footer className="bg-dark text-white py-4 px-4 px-md-5 ">
        <div className="footer container">
          <div className="row">
            {/* Первая колонка */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="h5"><span className='text-primary-emphasis'>{t('footer.about.left')}</span>{t('footer.about.right')}</h3>
              <LogoComponent width={130}/>
              <p className='about'>{t('footer.about.desc')}</p>
              {/* <LogoComponent width={130}/> */}
              <Link to='/politica' className='text-primary-emphasis text-decoration-none'>
                Zásady bezpečnosti
              </Link>
            </div>
            {/* Вторая колонка */}
            <div className="col-lg-3 col-md-6 mb-4 ps-lg-5">
              <h3 className="h5"><span className='text-primary-emphasis'>{t('footer.quickLinks.left')}</span>{t('footer.quickLinks.right')}</h3>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white text-decoration-none">
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white text-decoration-none">
                    {t('nav.services')}
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-white text-decoration-none">
                    {t('nav.portfolio')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white text-decoration-none">
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Третья колонка */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="h5"><span className='text-primary-emphasis'>{t('footer.contact-left')}</span>{t('footer.contact-right')}</h3>
              <p>{t('contacts.address')}</p>
              
              <p>
                {t('contacts.phone1')}  
                <br/> {t('contacts.phone2')}
              </p>
              
              <p>
                <span className='text-primary-emphasis'>{t('contacts.email')}</span>
                
              </p>
            </div>
            {/* Четвертая колонка */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h3 className="h5"><span className='text-primary-emphasis'>{t('footer.followUs-left')}</span>{t('footer.followUs-right')}</h3>
              <div>
                <a href="#"
                  className="text-white me-1"
                  aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#"
                  className="text-white me-1"
                  aria-label="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#"
                  className="text-white me-1"
                  aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#"
                  className="text-white"
                  aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-4 border-top">
            <p>
              &copy; {new Date().getFullYear()} {t('name')}.{' '}
              {t('footer.allRightsReserved')}
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;