import React from 'react'
import { useTranslation } from 'react-i18next'

const ServiceWebsite = () => {
    const { t } = useTranslation()
    return (
        <div className='services-page page mt-5 pt-5 '>
        {/* <BannerPageServiceWebsite /> */}
        <section className='section p-5 mx-lg-5 row '>
            {/* <ContentPageServiceWebsite /> */}

            <h3><span className="text-primary-emphasis">
                {t('pages.webSite.webSiteServices.websiteDevelopment.title.left')}
               </span>
                {t('pages.webSite.webSiteServices.websiteDevelopment.title.right')}
            </h3>
            <p>{t('pages.webSite.webSiteServices.websiteDevelopment.description')}</p>
            {/* -------------------------------------------------------------------------------- */}

            <h3><span className="text-primary-emphasis">
                {t('pages.webSite.webSiteServices.responsiveDesign.title.left')}
               </span>
                {t('pages.webSite.webSiteServices.responsiveDesign.title.right')}
            </h3>
            <p>{t('pages.webSite.webSiteServices.responsiveDesign.description')}</p>
            {/* -------------------------------------------------------------------------------- */}

            <h3><span className="text-primary-emphasis">
                {t('pages.webSite.webSiteServices.seoOptimization.title.left')}
               </span>
                {t('pages.webSite.webSiteServices.seoOptimization.title.right')}
            </h3>
            <p>{t('pages.webSite.webSiteServices.seoOptimization.description')}</p>
            {/* -------------------------------------------------------------------------------- */}

            <h3><span className="text-primary-emphasis">
                {t('pages.webSite.webSiteServices.highPerformance.title.left')}
               </span>
                {t('pages.webSite.webSiteServices.highPerformance.title.right')}
            </h3>
            <p>{t('pages.webSite.webSiteServices.highPerformance.description')}</p>
            {/* -------------------------------------------------------------------------------- */}

        </section>
    </div>
    )
}

export default ServiceWebsite
