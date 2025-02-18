import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './css/CustomDropdown.css'; // Подключаем CSS

const CustomDropdown = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'cs', label: 'Čeština' },
        { code: 'en', label: 'English' },
        
        { code: 'uk', label: 'Українська' }
    ];

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="dropdown lang" ref={dropdownRef}>
            <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                {currentLanguage.label} 
            </button>
            {isOpen && (
                <ul className="dropdown-list">
                    {languages.map(lang => (
                        <li 
                            key={lang.code} 
                            className={`dropdown-item ${i18n.language === lang.code ? 'active' : ''}`} 
                            onClick={() =>{
                                i18n.changeLanguage(lang.code);
                                setIsOpen(false);
                            }}>
                            {lang.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
