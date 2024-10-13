import React from 'react'
// import ContentPageServiceMobApp from '../components/PagesServices/PagesServiceContents/ContentPageServiceMobApp'
// import BannerPageServiceMobApp from '../components/PagesServices/PagesServiceBanners/BannerPageServiceMobApp'
import { useTranslation } from 'react-i18next'

const ServiceMobApp = () => {
    const { t } = useTranslation()
    return (
        <div className='services-page page mt-5 pt-5 '>
            {/* <BannerPageServiceMobApp /> */}
            <section className='section p-5 mx-lg-5 row '>
                {/* <ContentPageServiceMobApp /> */}

                <h3><span className="text-primary-emphasis">
                    {t('pages.mobAppDev.mobileAppServices.mobileAppDevelopment.title.left')}
                    </span>
                    {t('pages.mobAppDev.mobileAppServices.mobileAppDevelopment.title.right')}
                </h3>
                <p>{t('pages.mobAppDev.mobileAppServices.mobileAppDevelopment.description')}</p>
                {/* -------------------------------------------------------------------------------- */}

                <h3><span className="text-primary-emphasis">
                    {t('pages.mobAppDev.mobileAppServices.androidIosSupport.title.left')}
                    </span>
                    {t('pages.mobAppDev.mobileAppServices.androidIosSupport.title.right')}
                </h3>
                <p>{t('pages.mobAppDev.mobileAppServices.androidIosSupport.description')}</p>
                {/* -------------------------------------------------------------------------------- */}

                <h3><span className="text-primary-emphasis">
                    {t('pages.mobAppDev.mobileAppServices.userFriendlyInterfaces.title.left')}
                    </span>
                    {t('pages.mobAppDev.mobileAppServices.userFriendlyInterfaces.title.right')}
                </h3>
                <p>{t('pages.mobAppDev.mobileAppServices.userFriendlyInterfaces.description')}</p>
                {/* -------------------------------------------------------------------------------- */}

                <h3><span className="text-primary-emphasis">
                    {t('pages.mobAppDev.mobileAppServices.crossPlatformNativeSolutions.title.left')}
                    </span>
                    {t('pages.mobAppDev.mobileAppServices.crossPlatformNativeSolutions.title.right')}
                    </h3>
                <p>{t('pages.mobAppDev.mobileAppServices.crossPlatformNativeSolutions.description')}</p>
                {/* -------------------------------------------------------------------------------- */}

                <h3><span className="text-primary-emphasis">
                    {t('pages.mobAppDev.mobileAppServices.fullDevelopmentCycle.title.left')}
                    </span>
                    {t('pages.mobAppDev.mobileAppServices.fullDevelopmentCycle.title.right')}
                    </h3>
                <p>{t('pages.mobAppDev.mobileAppServices.fullDevelopmentCycle.description')}</p>

            </section>
        </div>
    )
}

export default ServiceMobApp
