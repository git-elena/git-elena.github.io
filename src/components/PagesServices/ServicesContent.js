import React from 'react'
// import { useTranslation } from 'react-i18next'
// import ContentPageServiceWebApp from './PagesServiceContents/ContentPageServiceWebApp'
// import ContentPageServiceMobApp from './PagesServiceContents/ContentPageServiceMobApp'
import PageServiceWebsite from './PagesServiceContents/ContentPageServiceWebsite'
import PageServiceDesign from './PagesServiceContents/ContentPageServiceDesign'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import PageServiceApp from './PagesServiceContents/ContentPageServiceApp'

const ServicesContent = () => {
  const { t } = useTranslation()

  return (
    <section className='section p-5 mx-lg-5 row'>
{/* --------------------------------------- */}
<h2 className="mb-4 text-center">
                    {t('home.services.title.left')}
                    <span className="text-primary-emphasis">{t('home.services.title.center')}</span>
                        {t('home.services.title.right')}
                </h2>
{/* --------------------------------------- */}
      <PageServiceWebsite />
      <div className='_btn'>
        <Link to='/service/website' 
              className="btn-secondary button-2 mb-5" 
              tabIndex="-1" 
              role="button" 
              aria-disabled="true">{t('btn.readmore')}</Link>
      </div>

      <PageServiceApp />
      <div className='_btn'>
        <Link to='/service/app' 
              className="btn-secondary button-2 mb-5" 
              tabIndex="-1" 
              role="button" 
              aria-disabled="true">{t('btn.readmore')}</Link>
      </div>

      <PageServiceDesign />
      <div className='_btn'>
        <Link to='/service/design' 
              className="btn-secondary button-2 mb-5" 
              tabIndex="-1" 
              role="button" 
              aria-disabled="true">{t('btn.readmore')}</Link>
      </div>

    </section>
  )
}

export default ServicesContent
