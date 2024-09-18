import React from 'react';
import { useTranslation } from 'react-i18next';
import './css/Home.css'

function Home() {
  const { t } = useTranslation();

  return (
    <section className='home-page'>
        <div className='banner'>
            <h1>{t('home.title')}</h1>
            <p>{t('home.description')}</p>
            <button className='button-85'>{t('home.cta')}</button>
        </div>
    </section>
  );
}

export default Home;