import React from 'react'
import PortfolioGallery from '../PortfolioGallery'
import { useTranslation } from 'react-i18next';

const HomePortfolio = () => {
    const { t } = useTranslation();
  return (
    <section className='section portfolio pb-3 bg-dark bg-gradient'>
                <div className="container-fluid">
                    <h2 className="mb-0 pt-5 text-center text-white">

                        <span className="text-primary-emphasis">{t('home.portfolio.title.left')}</span>
                        {t('home.portfolio.title.right')}
                    </h2>

                    <PortfolioGallery />
                </div>
            </section>
  )
}

export default HomePortfolio
