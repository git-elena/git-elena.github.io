import React, { useState, useEffect } from 'react';
import './css/ScrollToTopButton.css'; // Подключение CSS-файла

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      🠁
    </button>
  );
};

export default ScrollToTopButton;
