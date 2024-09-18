import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.about')}</h3>
            <p>{t('footer.aboutDescription')}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul>
              <li><Link to="/" className="hover:text-gray-300">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="hover:text-gray-300">{t('nav.services')}</Link></li>
              <li><Link to="/portfolio" className="hover:text-gray-300">{t('nav.portfolio')}</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.contact')}</h3>
            <p>{t('footer.address')}</p>
            <p>{t('footer.phone')}: +420 XXX XXX XXX</p>
            <p>{t('footer.email')}: info@yourcompany.cz</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-300" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-300" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-gray-300" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Your Company Name. {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;