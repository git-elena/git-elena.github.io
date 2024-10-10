import React from 'react'
import { useTranslation } from 'react-i18next';

const ServicesBanner = () => {
    const { t } = useTranslation();
  return (
    <section className="top-banner ">
            <div className="banner d-flex align-items-center justify-content-center">
                <div className="container text-center text-white py-5 my-5">
                <h1 className='mt-5'>
                    {t('services.title-left')}{' '}
                    <span className="text-primary-emphasis">{t('services.title-center')}</span>
                    {t('services.title-right')}
                </h1>
                
                </div>
            </div>
        </section>
  )
}

export default ServicesBanner
