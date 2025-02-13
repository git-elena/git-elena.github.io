import React from 'react'
import { useTranslation } from 'react-i18next';
import '../css/Service.css'
import ServiceTitle from './Services/Title.js';
import ServiceItem from './Services/Item.js';

import imgServiceWeb_01 from '../../images/home/services/web/item_01.png'
import imgServiceWeb_02 from '../../images/home/services/web/item_02.png'
import imgServiceWeb_03 from '../../images/home/services/web/item_03.png'
import imgServiceWeb_04 from '../../images/home/services/web/item_04.png'
import imgServiceWeb_05 from '../../images/home/services/web/item_05.png'

import imgServiceApp_01 from '../../images/home/services/app/item_01.png'
import imgServiceApp_02 from '../../images/home/services/app/item_02.png'
import imgServiceApp_03 from '../../images/home/services/app/item_03.png'
import imgServiceApp_04 from '../../images/home/services/app/item_04.png'
import { Link } from 'react-router-dom';


const HomeServices = () => {
    const { t } = useTranslation();
  return (
    <section className='section services bg-white py-5'>
            <div className="container">
{/* --------------------------------------- */}
                <h2 className="mb-4 text-center">
                    {t('home.services.title.left')}
                    <span className="text-primary-emphasis">{t('home.services.title.center')}</span>
                        {t('home.services.title.right')}
                </h2>
{/* --------------------------------------- */}
                <div className='section-web'>
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className='col-lg-8'>
                            <div className='service-title'>
                                <ServiceTitle 
                                    title_left={t('home.services.webDev.title.left')} 
                                    title_right={t('home.services.webDev.title.right')}
                                    text={t('home.services.webDev.title.description')} />
                            </div>
                        </div>
                        <div className='col-2'></div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-12 col-md-5'>
                            <ServiceItem 
                                title={t('home.services.webDev.item_1.title')} 
                                text={t('home.services.webDev.item_1.text')} 
                                img={imgServiceWeb_01} />
                        </div>  
                        <div className='col-12 col-md-5'>
                            <ServiceItem 
                                title={t('home.services.webDev.item_2.title')} 
                                text={t('home.services.webDev.item_2.text')} 
                                img={imgServiceWeb_02} />
                        </div>
                        <div className='col-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-12 col-md-5'>
                            <ServiceItem 
                                title={t('home.services.webDev.item_3.title')} 
                                text={t('home.services.webDev.item_3.text')} 
                                img={imgServiceWeb_03} />
                        </div>
                        <div className='col-12 col-md-5'>
                            <ServiceItem 
                                title={t('home.services.webDev.item_4.title')} 
                                text={t('home.services.webDev.item_4.text')} 
                                img={imgServiceWeb_04} />
                        </div>
                        <div className='col-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-12 col-md-5'>
                            <ServiceItem 
                                title={t('home.services.webDev.item_5.title')} 
                                text={t('home.services.webDev.item_5.text')} 
                                img={imgServiceWeb_05} />
                        </div>
                        <div className='col-12 col-md-5'>
                            
                        </div>
                        <div className='col-1'></div>
                    </div>

                    <div className='_btn'>
                        <Link to="/service/website"
                            className="button-2"
                            tabIndex="-1" 
                            role="button" 
                            aria-disabled="true"
                        >{t('btn.readmore')}</Link>
                    </div> 

                </div>
{/* --------------------------------------- */}
                <div className='section-app'>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-12 col-md-10'>
                            <div className='section-card my-border'>
                                <div className='row'>
                                    <div className='col-lg-1 d-none d-lg-block'></div>
                                    <div className='col col-lg-10'>
                                        <div className='service-title'>
                                            <ServiceTitle 
                                                mobile={t('home.services.appDev.title.color_Mobile')}
                                                webApp={t('home.services.appDev.title.color_WebApp')}
                                                dev={t('home.services.appDev.title.black_Dev')}
                                                text={t('home.services.appDev.title.description')} />
                                        </div>
                                        <ServiceItem 
                                            title={t('home.services.appDev.item_1.title')}
                                            text={t('home.services.appDev.item_1.text')}
                                            img={imgServiceApp_01}
                                        />
                                        <ServiceItem 
                                            title={t('home.services.appDev.item_2.title')}
                                            text={t('home.services.appDev.item_2.text')}
                                            img={imgServiceApp_02}
                                        />
                                        <ServiceItem 
                                            title={t('home.services.appDev.item_3.title')}
                                            text={t('home.services.appDev.item_3.text')}
                                            img={imgServiceApp_03}
                                        />
                                        <ServiceItem 
                                            title={t('home.services.appDev.item_4.title')}
                                            text={t('home.services.appDev.item_4.text')}
                                            img={imgServiceApp_04}
                                        />

                                        <div className='_btn'>
                                            <Link to="/service/app"
                                                className="button-2"
                                                tabIndex="-1" 
                                                role="button" 
                                                aria-disabled="true"
                                            >{t('btn.readmore')}</Link>
                                        </div> 

                                    </div>
                                    <div className='col-md-1'></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-1'></div>
                    </div>
                </div>
{/* --------------------------------------- */}
                <div className='section-design'> 
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className='col-lg-8'>
                            <div className='service-title'>
                                <ServiceTitle 
                                    title_color={t('home.services.design.title.color')} 
                                    title_black={t('home.services.design.title.black')}
                                    text={t('home.services.design.title.description')} />
                            </div>
                        </div>
                        <div className='col-2'></div>
                    </div>

                    <div className='table-design'>
                        <div className='row'>
                            <div className=' col-lg-4'>
                                <ServiceItem 
                                    title={t('home.services.design.item_1.title')}
                                    text={t('home.services.design.item_1.text')}
                                    num={'1.'}
                                />
                            </div>
                            <div className='col-md-6 col-lg-4'>
                                <ServiceItem 
                                    title={t('home.services.design.item_2.title')}
                                    text={t('home.services.design.item_2.text')}
                                    num={'2.'}
                                />
                            </div>
                            <div className='col-md-6 col-lg-4'>
                                <ServiceItem 
                                    title={t('home.services.design.item_3.title')}
                                    text={t('home.services.design.item_3.text')}
                                    num={'3.'}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <ServiceItem 
                                    title={t('home.services.design.item_4.title')}
                                    text={t('home.services.design.item_4.text')}
                                    num={'4.'}
                                />
                            </div>
                            <div className='col-md-6 col-lg-4'>
                                <ServiceItem 
                                    title={t('home.services.design.item_5.title')}
                                    text={t('home.services.design.item_5.text')}
                                    num={'5.'}
                                />
                            </div>
                            <div className='col-md-6 col-lg-4'>
                                <ServiceItem 
                                    title={t('home.services.design.item_6.title')}
                                    text={t('home.services.design.item_6.text')}
                                    num={'6.'}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4'></div>
                            <div className='col-lg-4'>
                                <ServiceItem 
                                    title={t('home.services.design.item_7.title')}
                                    text={t('home.services.design.item_7.text')}
                                    num={'7.'}
                                />
                            </div>
                            <div className='col-4'></div>
                        </div>

                        <div className='_btn'>
                            <Link to="/service/design"
                                className="button-2"
                                tabIndex="-1" 
                                role="button" 
                                aria-disabled="true"
                            >{t('btn.readmore')}</Link>
                        </div> 
                        
                    </div>
                </div>
{/* --------------------------------------- */}              
            </div> 
        </section>
  )
}

export default HomeServices
