import React from 'react';
import { useTranslation } from 'react-i18next';
import './css/Home.css'
// import helpcenter from '../images/helpcenter_01.jpg'
// import phone from '../images/phones/phone_25.webp'
import imgMobileApp from '../images/home/mibile-app.webp'
import imgWebApp from '../images/home/web-app.webp'
import imgWebpage from '../images/home/webpages.webp'
import imgDesign from '../images/home/design.webp'
import Service from '../components/Service';
import Technologie from '../components/Technologie';

import { ReactComponent as ReactIcon } from '../images/home/logos/logo-react.svg';
import { ReactComponent as AndroidStudioIcon } from '../images/home/logos/logo-android-studio.svg';
import { ReactComponent as FigmaIcon } from '../images/home/logos/logo-figma.svg';
import { ReactComponent as FlutterIcon } from '../images/home/logos/logo-flutter.svg';
import { ReactComponent as JavaIcon } from '../images/home/logos/logo-java.svg';
import { ReactComponent as JsIcon } from '../images/home/logos/logo-js.svg';
import { ReactComponent as ModxIcon } from '../images/home/logos/logo-modx.svg';
// import { ReactComponent as PhotoshopIcon } from '../images/home/logos/logo-photoshop.svg';
// import { ReactComponent as PhpIcon } from '../images/home/logos/logo-php.svg';
import { ReactComponent as FirebaseIcon } from '../images/home/logos/logo-firebase.svg';
import { ReactComponent as Typo3Icon } from '../images/home/logos/logo-typo3.svg';
import { ReactComponent as KotlinIcon } from '../images/home/logos/logo-kotlin.svg';
import { ReactComponent as XcodeIcon } from '../images/home/logos/logo-xcode.svg';
import { ReactComponent as SwiftIcon } from '../images/home/logos/logo-swift.svg';
import PortfolioGallery from '../components/PortfolioGallery';

function Home() {
  const { t } = useTranslation();

    return (
    <main className='home-page mt-5'>
        
        <section className="top-banner ">
            <div className="banner d-flex align-items-center justify-content-center">
                <div className="container text-center text-white py-5 my-5">
                <h1 className='mt-5'>
                    {t('home.title-left')}{' '}
                    <span className="text-primary-emphasis">{t('home.title-center')}</span>{' '}
                    {t('home.title-right')}
                </h1>
                <p className="lead">{t('home.description')}</p>
                <button className="btn btn-primary button-85 mt-3 mb-5">
                    {t('home.cta')}
                </button>
                </div>
            </div>
        </section>
      
        <section className="section about-us py-5 bg-light ">
            <div className="container">
                <div className="col-lg-12 text-center">
                    <h2 className="mb-4">
                        {t('about.title-left')}
                        <span className="text-primary-emphasis">{t('about.title-center')}</span>
                        {t('about.title-right')}</h2>
                    <p className="lead">{t('about.description')}</p>
                </div>
            </div>
        </section>
        
        <section className='section services py-5 bg-white bg-gray'>
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
                        btnTitle={'services.btnTitleReadmore'}
                        btnLink={'services.btnTitleReadmore'}
                        sideImgLeft={false}
                    />

                    <Service
                        img={imgWebApp}
                        title={'services.webAppDev'}
                        description={'services.webAppDescription'}
                        btnTitle={'services.btnTitleReadmore'}
                        btnLink={'services.btnTitleReadmore'}
                        sideImgLeft={true}
                    />  
                    <Service 
                        img={imgWebpage}
                        title={'services.webSites'}
                        description={'services.webSitesDescription'}
                        btnTitle={'services.btnTitleReadmore'}
                        btnLink={'services.btnTitleReadmore'}
                        sideImgLeft={false}
                    />
                    <Service
                        img={imgDesign}
                        title={'services.design'}
                        description={'about.description'}
                        btnTitle={'services.btnTitleReadmore'}
                        btnLink={'services.btnTitleReadmore'}
                        sideImgLeft={true}
                    />
                </div>
                <div className="d-lg-none">
                    <Service 
                        img={imgMobileApp}
                        title={'services.mobAppDev'}
                        description={'services.mobAppDescription'}
                        btnTitle={'services.btnTitleReadmore'}
                        btnLink={'services.btnTitleReadmore'}
                        sideImgLeft={true}
                    />
                    <Service
                        img={imgWebApp}
                        title={'services.webAppDev'}
                        description={'services.webAppDescription'}
                        btnTitle={'services.btnTitleReadmore'}
                        btnLink={'services.btnTitleReadmore'}
                        sideImgLeft={true}
                    />  
                    <Service 
                        img={imgWebpage}
                        title={'services.webSites'}
                        description={'services.webSitesDescription'}
                        btnTitle={'services.btnTitleReadmore'}
                        btnLink={'services.btnTitleReadmore'}
                        sideImgLeft={true}
                    />
                    <Service
                        img={imgDesign}
                        title={'services.design'}
                        description={'about.description'}
                        btnTitle={'services.btnTitleReadmore'}
                        btnLink={'services.btnTitleReadmore'}
                        sideImgLeft={true}
                    />
                </div>
            </div> 
        </section>
        
        <section className='section technologies py-5 bg-light '>
            <div className="container">
                <h2 className='mb-4 text-center'><span className="text-primary-emphasis">{t('technologies.title-left')}</span>{t('technologies.title-right')}</h2>
                <div className="row d-flex align-items-center text-center">
                    <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={ReactIcon} title="React" /></div>
                    <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={FlutterIcon} title="Flutter" /></div>    
                    <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={XcodeIcon} title="Xcode" /></div>             
                    <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={AndroidStudioIcon} title="Android Studio" /></div>
                    <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={Typo3Icon} title="YPO3" /></div>
                    <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={ModxIcon} title="ModX" /></div>
                    <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={SwiftIcon} title="Swift" /></div>
                    <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={KotlinIcon} title="Kotlin" /></div>
                    <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={JavaIcon} title="Java" /></div>
                    <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={JsIcon} title="JavaScript" /></div>
                    <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={FirebaseIcon} title="Firebase" /></div>
                    <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={FigmaIcon} title="Figma" /></div>
                    
                </div>
            </div> 
        </section>
        
        <section className='section portfolio pb-3 bg-dark bg-gradient'>
            <div className="container-fluid">
                <h2 className="mb-0 pt-5 text-center text-white">
                    
                    <span className="text-primary-emphasis">{t('portfolio.title-left')}</span>
                        {t('portfolio.title-right')}
                </h2>
                
                    <PortfolioGallery />
            </div>
        </section>
        
        <section className='section'>
            comments
            
        </section>
  </main>
  );
}

export default Home;