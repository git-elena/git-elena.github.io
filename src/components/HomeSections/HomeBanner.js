import React from 'react'
import { useTranslation } from 'react-i18next';

const HomeBanner = () => {
    const { t } = useTranslation();
  return (
    <section className="top-banner  full-screen-display">
            <div className="banner d-flex align-items-center justify-content-center">
                <div className="container text-center text-white py-5">
                <h1 className=''>
                    {t('home.banner.title.left')}{' '}
                    <span className="text-primary-emphasis">{t('home.banner.title.center')}</span>{' '}
                    {t('home.banner.title.right')}
                </h1>
                <p className="h5">{t('home.banner.description')}</p>
                <button className="btn btn-primary button-85 mt-3 mb-5">
                    {t('btn.contactUs')}
                </button>
                </div>
            </div>
        </section>
  )
}

export default HomeBanner
