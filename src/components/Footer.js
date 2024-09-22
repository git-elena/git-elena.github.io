import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/Footer.css'

const Footer = () => {
  const { t } = useTranslation();

    return (
        <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            {/* Первая колонка */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="h5"><span className='text-primary-emphasis'>{t('footer.about-left')}</span>{t('footer.about-right')}</h3>
              <p>{t('footer.aboutDescription')}</p>
            </div>
            {/* Вторая колонка */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="h5"><span className='text-primary-emphasis'>{t('footer.quickLinks-left')}</span>{t('footer.quickLinks-right')}</h3>
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
              <p>{t('footer.address')}</p>
              <p>
                +420 728 056 984
              </p>
              <p>
                <span className='text-primary-emphasis'>add.software.developer@gmail.com</span>
              </p>
            </div>
            {/* Четвертая колонка */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="h5"><span className='text-primary-emphasis'>{t('footer.followUs-left')}</span>{t('footer.followUs-right')}</h3>
              <div>
                <a href="#"
                  className="text-white me-3"
                  aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#"
                  className="text-white me-3"
                  aria-label="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#"
                  className="text-white me-3"
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
              &copy; {new Date().getFullYear()} AddSoftware.{' '}
              {t('footer.allRightsReserved')}
            </p>
          </div>
        </div>
      </footer>
    // <footer className="bg-gray-800 text-white py-8">
    //   <div className="container mx-auto px-4">
    //     <div className="grid row md:grid-cols-4 gap-8">
    //       <div className='col-3 col-md-6 col-sm-12'>
    //         <h3 className="text-lg font-bold mb-4">{t('footer.about')}</h3>
    //         <p className="text-wrap">{t('footer.aboutDescription')}</p>
    //       </div>
    //       <div className='col-3 col-sm-12'>
    //         <h3 className="text-lg font-bold mb-4">{t('footer.quickLinks')}</h3>
    //         <ul>
    //           <li><Link to="/" className="hover:text-gray-300">{t('nav.home')}</Link></li>
    //           <li><Link to="/about" className="hover:text-gray-300">{t('nav.about')}</Link></li>
    //           <li><Link to="/services" className="hover:text-gray-300">{t('nav.services')}</Link></li>
    //           <li><Link to="/portfolio" className="hover:text-gray-300">{t('nav.portfolio')}</Link></li>
    //           <li><Link to="/contact" className="hover:text-gray-300">{t('nav.contact')}</Link></li>
    //         </ul>
    //       </div>
    //       <div className='col-3 col-sm-12'> 
    //         <h3 className="text-lg font-bold mb-4">{t('footer.contact')}</h3>
    //         <p>{t('footer.address')}</p>
    //         <p>{t('footer.phone')}: +420 728 056 984</p>
    //         <p>{t('footer.email')}: add.software.developer@gmail.com</p>
    //       </div>
    //       <div className='col-3 col-sm-12'>
    //         <h3 className="text-lg font-bold mb-4">{t('footer.followUs')}</h3>
    //         <div className="flex space-x-4">
    //           <a href="#" className="hover:text-gray-300" aria-label="Facebook">
    //             <i className="fab fa-facebook-f"></i>
    //           </a>
    //           <a href="#" className="hover:text-gray-300" aria-label="Twitter">
    //             <i className="fab fa-twitter"></i>
    //           </a>
    //           <a href="#" className="hover:text-gray-300" aria-label="LinkedIn">
    //             <i className="fab fa-linkedin-in"></i>
    //           </a>
    //           <a href="#" className="hover:text-gray-300" aria-label="Instagram">
    //             <i className="fab fa-instagram"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-8 border-t border-gray-700 pt-8 text-center">
    //       <p>&copy; {new Date().getFullYear()} AddSoftware. {t('footer.allRightsReserved')}</p>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;