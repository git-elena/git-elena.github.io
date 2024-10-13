import React from 'react'
import { useTranslation } from 'react-i18next';

const HomeAboutUs = () => {
    const { t } = useTranslation();
    return (
        <section className="section about-us py-5 bg-light ">
            <div className="container">
                <div className="col-lg-12 text-center">
                    <h2 className="mb-4">
                        {t('about.title-left')}
                        <span className="text-primary-emphasis">{t('about.title-center')}</span>
                        {t('about.title-right')}</h2>
                    <p className="lead">{t('about.description')}</p>
                </div>
            </div>
        </section>
    )
}

export default HomeAboutUs