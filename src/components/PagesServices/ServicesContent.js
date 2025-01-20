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
      
      {/* <ContentPageServiceMobApp />
      <div>
        <Link to='/service/mob-app' 
              className="btn btn-secondary button-2 mb-5" 
              tabIndex="-1" 
              role="button" 
              aria-disabled="true">{t('btn.readmore')}</Link>
      </div>

      <ContentPageServiceWebApp />
      <div>  
        <Link to='/service/web-app' 
              className="btn btn-secondary button-2 mb-5" 
              tabIndex="-1" 
              role="button" 
              aria-disabled="true">{t('btn.readmore')}</Link>
      </div> */}

      <PageServiceWebsite />
      <div>
        <Link to='/service/website' 
              className="btn btn-secondary button-2 mb-5" 
              tabIndex="-1" 
              role="button" 
              aria-disabled="true">{t('btn.readmore')}</Link>
      </div>

      <PageServiceApp />
      <div>
        <Link to='/service/app' 
              className="btn btn-secondary button-2 mb-5" 
              tabIndex="-1" 
              role="button" 
              aria-disabled="true">{t('btn.readmore')}</Link>
      </div>

      <PageServiceDesign />
      <div>
        <Link to='/service/design' 
              className="btn btn-secondary button-2 mb-5" 
              tabIndex="-1" 
              role="button" 
              aria-disabled="true">{t('btn.readmore')}</Link>
      </div>

    </section>
  )
}

export default ServicesContent
