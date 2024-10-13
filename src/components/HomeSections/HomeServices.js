import React from 'react'
import Service from '../Service'
import { useTranslation } from 'react-i18next';
import imgMobileApp from '../../images/home/mibile-app.webp'
import imgWebApp from '../../images/home/web-app.webp'
import imgWebpage from '../../images/home/webpages.webp'
import imgDesign from '../../images/home/design.webp'

const HomeServices = () => {
    const { t } = useTranslation();
  return (
    <section className='section services py-5 bg-white'>
            <div className="container">
                <h2 className="mb-4 text-center">
                    {t('services.title-left')}
                    <span className="text-primary-emphasis">{t('services.title-center')}</span>
                        {t('services.title-right')}
                </h2>
                <div className="d-none d-lg-block">
                    <Service 
                        img={imgMobileApp}
                        title={'services.mobAppDev'}
                        description={'services.mobAppDescription'}
                        btnLink='/service/mob-app'
                        sideImgLeft={false}
                    />

                    <Service
                        img={imgWebApp}
                        title={'services.webAppDev'}
                        description={'services.webAppDescription'}
                        btnLink='/service/web-app'
                        sideImgLeft={true}
                    />  
                    <Service 
                        img={imgWebpage}
                        title={'services.webSites'}
                        description={'services.webSitesDescription'}
                        btnLink='/service/website'
                        sideImgLeft={false}
                    />
                    <Service
                        img={imgDesign}
                        title={'services.design'}
                        description={'about.description'}
                        btnLink='/service/design'
                        sideImgLeft={true}
                    />
                </div>
                <div className="d-lg-none">
                    <Service 
                        img={imgMobileApp}
                        title={'services.mobAppDev'}
                        description={'services.mobAppDescription'}
                        btnLink='/service/mob-app'
                        sideImgLeft={true}
                    />
                    <Service
                        img={imgWebApp}
                        title={'services.webAppDev'}
                        description={'services.webAppDescription'}
                        btnLink='/service/web-app'
                        sideImgLeft={true}
                    />  
                    <Service 
                        img={imgWebpage}
                        title={'services.webSites'}
                        description={'services.webSitesDescription'}
                        btnLink='/service/website'
                        sideImgLeft={true}
                    />
                    <Service
                        img={imgDesign}
                        title={'services.design'}
                        description={'services.designDescription'}
                        btnLink='/service/design'
                        sideImgLeft={true}
                    />
                </div>
            </div> 
        </section>
  )
}

export default HomeServices
