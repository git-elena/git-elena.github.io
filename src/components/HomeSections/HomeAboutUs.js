import React from 'react'
import { useTranslation } from 'react-i18next';

const HomeAboutUs = () => {
    const { t } = useTranslation();
    return (
        <section className="section about-us py-5 bg-light ">
            <div className="container">
                <div className="col-lg-12 text-center">
                    <h2 className="mb-4">
                        {t('home.about.title.left')}
                        <span className="text-primary-emphasis">{t('home.about.title.center')}</span>
                        {t('home.about.title.right')}</h2>
                    <p className="text px-lg-5">{t('home.about.description')}</p>
                </div>
            </div>
        </section>
    )
}

export default HomeAboutUs
