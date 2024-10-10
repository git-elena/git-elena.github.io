import React from 'react'
import Choose from '../Choose'
import { useTranslation } from 'react-i18next';

const HomeChooseUs = () => {
    const { t } = useTranslation();
  return (
    <section className='section chose py-5 bg-white'>
                <div className="container">
                    <h2 className="mb-5 text-center">
                        
                        <span className="text-primary-emphasis">{t('choose.title-left')}</span>
                        {t('choose.title-right')}
                    </h2>

                    <Choose />
                </div>
            </section>
  )
}

export default HomeChooseUs
