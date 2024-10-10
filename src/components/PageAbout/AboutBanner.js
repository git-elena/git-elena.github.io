import React from 'react'
import { useTranslation } from 'react-i18next';

const AboutBanner = () => {
    const { t } = useTranslation();
  return (
    <section className="top-banner ">
            <div className="banner d-flex align-items-center justify-content-center">
                <div className="container text-center text-white py-5 my-5">
                <h1 className='mt-5'>
                    {t('about.title-left')}{' '}
                    <span className="text-primary-emphasis">{t('about.title-center')}</span>
                    {t('about.title-right')}
                </h1>
                
                </div>
            </div>
        </section>
  )
}

export default AboutBanner
