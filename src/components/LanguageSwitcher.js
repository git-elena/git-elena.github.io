import React from 'react';
import { useTranslation } from 'react-i18next';
import './css/LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

    return (
      <div class="langSw">
        <select 
            id="languageSwitcher"
            onChange={handleLanguageChange}
            value={i18n.language}
        >
            <option value="en">English</option>
            <option value="cs">Čeština</option>
            <option value="uk">Українська</option>
        </select>
      </div>


  );
}

export default LanguageSwitcher;