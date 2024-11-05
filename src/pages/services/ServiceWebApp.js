import React from 'react'
import { useTranslation } from 'react-i18next'

const ServiceWebApp = () => {
    const { t } = useTranslation()
    return (
        <div className='services-page page mt-5 pt-5 '>
            {/* <BannerPageServiceWebApp /> */}
            <section className='section p-5 mx-lg-5 row '>
                {/* <ContentPageServiceWebApp /> */}

            <h3><span className="text-primary-emphasis">
                {t('pages.webAppDev.webAppServices.webAppDevelopment.title.left')}
                </span>
                {t('pages.webAppDev.webAppServices.webAppDevelopment.title.right')}
            </h3>
            <p>{t('pages.webAppDev.webAppServices.webAppDevelopment.description')}</p>
            {/* -------------------------------------------------------------------------------- */}

            <h3><span className="text-primary-emphasis">
                {t('pages.webAppDev.webAppServices.digitalSolutions.title.left')}
                </span>
                {t('pages.webAppDev.webAppServices.digitalSolutions.title.right')}
            </h3>
            <p>{t('pages.webAppDev.webAppServices.digitalSolutions.description')}</p>
            {/* -------------------------------------------------------------------------------- */}

            <h3><span className="text-primary-emphasis">
                {t('pages.webAppDev.webAppServices.scalabilityFlexibility.title.left')}
                </span>
                {t('pages.webAppDev.webAppServices.scalabilityFlexibility.title.right')}
            </h3>
            <p>{t('pages.webAppDev.webAppServices.scalabilityFlexibility.description')}</p>
            {/* -------------------------------------------------------------------------------- */}

            <h3><span className="text-primary-emphasis">
                {t('pages.webAppDev.webAppServices.cloudIntegration.title.left')}
                </span>
                {t('pages.webAppDev.webAppServices.cloudIntegration.title.right')}
            </h3>
            <p>{t('pages.webAppDev.webAppServices.cloudIntegration.description')}</p>
            {/* -------------------------------------------------------------------------------- */}

            <h3><span className="text-primary-emphasis">
                {t('pages.webAppDev.webAppServices.dataDrivenSolutions.title.left')}
                </span>
                {t('pages.webAppDev.webAppServices.dataDrivenSolutions.title.right')}
            </h3>
            <p>{t('pages.webAppDev.webAppServices.dataDrivenSolutions.description')}</p>
            {/* -------------------------------------------------------------------------------- */}

            </section>
        </div>
    )
}

export default ServiceWebApp
