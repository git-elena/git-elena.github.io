import React from 'react';
import { useTranslation } from 'react-i18next';
import './css/Home.css'
// import helpcenter from '../images/helpcenter_01.jpg'
import phone from '../images/phones/phone_25.webp'

function Home() {
  const { t } = useTranslation();

    return (
    <main className='home-page'>
        
        <section className="top-banner">
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
      
        <section className="about-us py-5 bg-light ">
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
        
        <section className='services py-5 bg-white bg-gray'>
            <div className="container">
                <h2 className="mb-4 text-center">
                    {t('services.title-left')}
                    <span className="text-primary-emphasis">{t('services.title-center')}</span>
                    {t('services.title-right')}</h2>
                    
                    <div className=" row d-flex align-items-center">
                        <div className="col-lg-6 description">
                            <h4 className="mb-4">{t('services.mobileDev')}</h4>
                            <p className="m-5">{t('about.description')}</p>
                            <div class="d-grid gap-2 d-md-flex">
                                <button class="btn btn-secondary button-2" type="button">{t('services.mobile-btn')}</button>
                            </div>
                        </div> 
                        <div className='col-lg-1'></div>
                        <div className="col-lg-5 justify-content-center">
                            <img className='m-5 img-fluid shadow-lg rounded-3'
                            src={phone} alt={t('services.mobile')} />
                        </div>        
                    </div>

                    <div className=" row d-flex align-items-center">        
                        <div className="col-lg-5 justify-content-center">
                            <img className='m-5 img-fluid shadow-lg rounded-3'
                            src={phone} alt={t('services.mobile')} />
                        </div>  
                        <div className='col-lg-1'></div>
                        <div className="col-lg-6 description">
                            <h4 className="mb-4">{t('services.mobileDev')}</h4>
                            <p className="m-5">{t('about.description')}</p>
                            <div class="d-grid gap-2 d-md-flex">
                                <button class="btn btn-secondary button-2" type="button">{t('services.mobile-btn')}</button>
                            </div>
                        </div>
                    </div>

                    <div className=" row d-flex align-items-center">
                        <div className="col-lg-6 description">
                            <h4 className="mb-4">{t('services.mobileDev')}</h4>
                            <p className="m-5">{t('about.description')}</p>
                            <div class="d-grid gap-2 d-md-flex">
                                <button class="btn btn-secondary button-2" type="button">{t('services.mobile-btn')}</button>
                            </div>
                        </div> 
                        <div className='col-lg-1'></div>
                        <div className="col-lg-5 justify-content-center">
                            <img className='m-5 img-fluid shadow-lg rounded-3'
                            src={phone} alt={t('services.mobile')} />
                        </div>        
                    </div>
            </div> 
        </section>
        
        
  </main>
  );
}

export default Home;