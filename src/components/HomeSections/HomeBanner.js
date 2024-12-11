import React from 'react'
import { useTranslation } from 'react-i18next';

const HomeBanner = () => {
    const { t } = useTranslation();
  return (
    <section className="top-banner  full-screen-display">
            <div className="banner d-flex align-items-center justify-content-center">
                <div className="container text-center text-white py-5">
                <h1 className=''>
                    {t('home.title-left')}{' '}
                    <span className="text-primary-emphasis">{t('home.title-center')}</span>{' '}
                    {t('home.title-right')}
                </h1>
                <p className="h5">{t('home.description')}</p>
                <button className="btn btn-primary button-85 mt-3 mb-5">
                    {t('home.cta')}
                </button>
                </div>
            </div>
        </section>
  )
}

export default HomeBanner