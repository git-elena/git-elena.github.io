import React from 'react'
import Service from '../Service'
import { useTranslation } from 'react-i18next';
import imgMobileApp from '../../images/home/mibile-app.webp'
import imgWebApp from '../../images/home/web-app.webp'
// import imgWebpage from '../../images/home/webpages.webp'
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
            
                
                <div className="row">
                <div className='col-sm-12 col-md-4 mb-3'>
                    <Service
                            img={imgWebApp}
                            title={'services.webAppDev'}
                            description={'services.webAppDescription'}
                            btnLink='/service/web-app'
                            sideImgLeft={true}
                    />  
                </div>
                
                <div className='col-sm-12 col-md-4 mb-3'>
                    <Service 
                        img={imgMobileApp}
                        title={'services.mobAppDev'}
                        description={'services.mobAppDescription'}
                        btnLink='/service/mob-app'
                        sideImgLeft={false}
                    />
                </div>
                    
                    {/* <Service 
                        img={imgWebpage}
                        title={'services.webSites'}
                        description={'services.webSitesDescription'}
                        btnLink='/service/website'
                        sideImgLeft={false}
                    /> */}
                <div className='col-sm-12 col-md-4  mb-3'>
                    <Service
                        img={imgDesign}
                        title={'services.design'}
                        description={'services.designDescription'}
                        btnLink='/service/design'
                        sideImgLeft={true}
                    />
                    
                </div>
                </div>

               
            </div> 
        </section>
  )
}

export default HomeServices
