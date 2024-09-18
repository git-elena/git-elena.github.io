import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

import './css/Header.css';
import Logo from './Logo';

function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
    
  return (
      <header>
          <Logo />
      <nav>
        <ul>
          <li><Link to="/" className={isActive('/')}>{t('nav.home')}</Link></li>
          <li><Link to="/about" className={isActive('/about')}>{t('nav.about')}</Link></li>
          <li><Link to="/services" className={isActive('/services')}>{t('nav.services')}</Link></li>
          <li><Link to="/portfolio" className={isActive('/portfolio')}>{t('nav.portfolio')}</Link></li>
          <li><Link to="/contact" className={isActive('/contact')}>{t('nav.contact')}</Link></li>
        </ul>
      </nav>
      <LanguageSwitcher />
    </header>
  );
}

export default Header;