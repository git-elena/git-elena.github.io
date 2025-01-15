import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

import './css/Navigation.css';
// import Logo from './Logo';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import LogoComponent from './logo/Logo';

function Navigation() {
  const { t } = useTranslation();
  const location = useLocation(); // Получаем текущий путь
  const navigate = useNavigate(); // Для программной навигации


  const [dropdownOpen, setDropdownOpen] = useState(false);
    
  // Функция для закрытия мобильного меню
  const closeMobileMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Триггер для закрытия меню
    }
  };
  
  // // Функция для закрытия выпадающего меню
  // const closeDropdownMenu = () => {
  //   const dropdownMenus = document.querySelectorAll('.dropdown-menu.show');
  //   dropdownMenus.forEach((menu) => {
  //     menu.classList.remove('show');
  //   });
  // };

  // Переход на страницу Services при клике
  const goToServices = (e) => {
    e.preventDefault(); // Останавливаем поведение открытия подменю при клике
    closeMobileMenu(); // Закрыть мобильное меню
    navigate('/services'); // Перейти на страницу Services
  };

  // Управление состоянием открытия подменю при наведении
  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);


  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className="container">
          <LogoComponent />
          
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
                to="/" 
                onClick={() => { closeMobileMenu(); setDropdownOpen(false); }}>
                {t('nav.home')}
              </NavLink>
              </li>

              <li className="nav-item">
              <NavLink
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/about" 
                onClick={() => { closeMobileMenu(); setDropdownOpen(false); }}>
                {t('nav.about')}
              </NavLink>
              </li>

               {/* Выпадающее меню */}
              <li 
                className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  className={location.pathname.startsWith('/service') ? 'nav-link active dropdown-toggle' : 'nav-link dropdown-toggle'}
                  to="/services"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={dropdownOpen}
                  onClick={goToServices} // Переход на страницу Services при клике
                >
                  {t('nav.services')}
                </NavLink>
                <ul className={`dropdown-menu bg-gray ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                  
                  <li >
                    <NavLink 
                          className={({ isActive }) => isActive ? "nav-link dropdown-item active" : "nav-link dropdown-item"}
                          to="/service/mob-app" 
                          onClick={() => { closeMobileMenu(); setDropdownOpen(false); }}>
                      {t('nav.mobApp')}
                    </NavLink>
                  </li>

                  <li>
                    <NavLink 
                          className={({ isActive }) => isActive ? "nav-link dropdown-item active" : "nav-link dropdown-item"}
                          to="/service/web-app"
                          onClick={() => { closeMobileMenu(); setDropdownOpen(false); }}>
                      {t('nav.webApp')}
                    </NavLink>
                  </li>
                  
                  <li>
                    <NavLink 
                          className={({ isActive }) => isActive ? "nav-link dropdown-item active" : "nav-link dropdown-item"}
                          to="/service/website" 
                          onClick={() => { closeMobileMenu(); setDropdownOpen(false); }}>
                      {t('nav.website')}
                    </NavLink>
                  </li>

                  <li>
                    <NavLink 
                          className={({ isActive }) => isActive ? "nav-link dropdown-item active" : "nav-link dropdown-item"}
                          to="/service/design" 
                          onClick={() => { closeMobileMenu(); setDropdownOpen(false); }}>
                      {t('nav.design')}
                    </NavLink>
                  </li>

                </ul>
              </li>

              <li className="nav-item">
              <NavLink
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/portfolio" 
                onClick={() => { closeMobileMenu(); setDropdownOpen(false); }}>
                {t('nav.portfolio')}
              </NavLink>
              </li>

              <li className="nav-item">
              <NavLink
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/contact" 
                onClick={() => { closeMobileMenu(); setDropdownOpen(false); }}>
                {t('nav.contact')}
              </NavLink>
              </li>

            </ul>
          </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default Navigation;