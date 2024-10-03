import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

import './css/Navigation.css';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const { t } = useTranslation();
    
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className="container">
          <Logo />
          
          {/* Кнопка для открытия меню на мобильных устройствах */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Основное меню */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <NavLink
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/">
                {t('nav.home')}
              </NavLink>
                {/* <a className="nav-link active" aria-current="page" href="/">{t('nav.home')}</a> */}
                {/* <Link to="/" className={isActive('/')}>{t('nav.home')}</Link> */}
              </li>
              <li className="nav-item">
              <NavLink
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/about">
                {t('nav.about')}
              </NavLink>
                {/* <a className="nav-link" href="/about">{t('nav.about')}</a> */}
                {/* <Link to="/about" className={isActive('/about')}>{t('nav.about')}</Link> */}
              </li>
              <li className="nav-item">
              <NavLink
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/services">
                {t('nav.services')}
              </NavLink>
                {/* <a className="nav-link" href="/services">{t('nav.services')}</a> */}
                {/* <Link to="/services" className={isActive('/services')}>{t('nav.services')}</Link> */}
              </li>
              <li className="nav-item">
              <NavLink
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/portfolio">
                {t('nav.portfolio')}
              </NavLink>
                {/* <a className="nav-link" href="/portfolio">{t('nav.portfolio')}</a> */}
                {/* <Link to="/portfolio" className={isActive('/portfolio')}>{t('nav.portfolio')}</Link> */}
              </li>
              <li className="nav-item">
              <NavLink
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/contact">
                {t('nav.contact')}
              </NavLink>
                {/* <a className="nav-link" href="/contact">{t('nav.contact')}</a> */}
                {/* <Link to="/contact" className={isActive('/contact')}>{t('nav.contact')}</Link> */}
              </li>
            </ul>
          </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default Navigation;