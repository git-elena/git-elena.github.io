import React from 'react'
import { useTranslation } from 'react-i18next'

const ServiceDesign = () => {
    const { t } = useTranslation()
    return (
        
        <div className='services-page page mt-5 pt-5 '>
            {/* <BannerPageServiceDesign /> */}
            <section className='section p-5 mx-lg-5 row '>
                {/* <ContentPageServiceDesign /> */}
                
                <h3><span className="text-primary-emphasis">
                    {t('pages.design.uiUxServices.uiUxDesign.title.left')}
                    </span>
                    {t('pages.design.uiUxServices.uiUxDesign.title.right')}
                </h3>
                <p>{t('pages.design.uiUxServices.uiUxDesign.description')}</p>
                {/* -------------------------------------------------------------------------------- */}

                <h3><span className="text-primary-emphasis">
                    {t('pages.design.uiUxServices.customUiDesign.title.left')}
                    </span>
                    {t('pages.design.uiUxServices.customUiDesign.title.right')}
                </h3>
                <p>{t('pages.design.uiUxServices.customUiDesign.description')}</p>
                {/* -------------------------------------------------------------------------------- */}

                <h3><span className="text-primary-emphasis">
                    {t('pages.design.uiUxServices.prototypingTesting.title.left')}
                    </span>
                    {t('pages.design.uiUxServices.prototypingTesting.title.right')}
                </h3>
                <p>{t('pages.design.uiUxServices.prototypingTesting.description')}</p>
                {/* -------------------------------------------------------------------------------- */}

                <h3><span className="text-primary-emphasis">
                    {t('pages.design.uiUxServices.userResearch.title.left')}
                    </span>
                    {t('pages.design.uiUxServices.userResearch.title.right')}
                </h3>
                <p>{t('pages.design.uiUxServices.userResearch.description')}</p>
                {/* -------------------------------------------------------------------------------- */}


            </section>
        </div>
    )
}

export default ServiceDesign
