import React from 'react'
import Service from '../Service'
import { useTranslation } from 'react-i18next';
import imgMobileApp from '../../images/home/mibile-app.webp'
import imgWebApp from '../../images/home/web-app.webp'
// import imgWebpage from '../../images/home/webpages.webp'
import imgDesign from '../../images/home/design.webp'
import ServiceTitle from './Services/Title.js';
import ServiceItem from './Services/Item.js';
//////////////////////////////

import imgServiceWeb_01 from '../../images/home/services/web/item_01.png'
import imgServiceWeb_02 from '../../images/home/services/web/item_02.png'
import imgServiceWeb_03 from '../../images/home/services/web/item_03.png'
import imgServiceWeb_04 from '../../images/home/services/web/item_04.png'
import imgServiceWeb_05 from '../../images/home/services/web/item_05.png'

import imgServiceApp_01 from '../../images/home/services/app/item_01.png'
import imgServiceApp_02 from '../../images/home/services/app/item_02.png'
import imgServiceApp_03 from '../../images/home/services/app/item_03.png'
import imgServiceApp_04 from '../../images/home/services/app/item_04.png'




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

                <div className='section-web'>
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className='col-lg-8'>
                            <div className='service-title'>
                                <ServiceTitle 
                                    title_left={t('services.websiteDev.left')} 
                                    title_right={t('services.websiteDev.right')}
                                    text={t('services.websiteDescription')} />
                            </div>
                        </div>
                        <div className='col-2'></div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-12 col-md-5'>
                            <ServiceItem 
                                title={`Website Development\nfor Any Purpose`} 
                                text={'We create projects of any complexity — from simple landing pages to large corporate portals. We use popular CMS platforms and modern web development technologies to ensure stable performance and ease of use.'} 
                                img={imgServiceWeb_01} />
                        </div>  
                        <div className='col-12 col-md-5'>
                            <ServiceItem 
                                title={'Custom Design with\nResponsive Layout'} 
                                text={'Our designers craft exclusive interfaces that make your website stand out from the competition. All projects are adapted for seamless performance on desktops, tablets, and smartphones.'} 
                                img={imgServiceWeb_02} />
                        </div>
                        <div className='col-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-12 col-md-5'>
                            <ServiceItem 
                                title={'Fast Development with\nReady-Made Templates'} 
                                text={'When time is limited, we offer high-quality templates that can be customized to meet your requirements. This accelerates the website creation process while maintaining functionality and attractiveness.'} 
                                img={imgServiceWeb_03} />
                        </div>
                        <div className='col-12 col-md-5'>
                            <ServiceItem 
                                title={'E-commerce Website\nDevelopment'} 
                                text={'We build user-friendly and reliable platforms for online commerce. Our e-commerce solutions include efficient product management systems, payment integration, and other essential features for successful operation.'} 
                                img={imgServiceWeb_04} />
                        </div>
                        <div className='col-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-12 col-md-5'>
                            <ServiceItem 
                                title={'Technical Maintenance\nand Support'} 
                                text={'After project completion, we offer website maintenance services, including regular updates, bug fixes, performance improvements, and technical support.'} 
                                img={imgServiceWeb_05} />
                        </div>
                        <div className='col-12 col-md-5'>
                            
                        </div>
                        <div className='col-1'></div>
                    </div>
                    <div className='btn'>
                        <button className='button-2'>{t('services.btnTitleReadmore')}</button>
                    </div> 
                </div>
{/* <hr /> */}
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
                                                mobile={t('services.appDev.color_Mobile')}
                                                webApp={t('services.appDev.color_WebApp')}
                                                dev={t('services.appDev.black_Dev')}
                                                text={t('services.appDevDescription')} />
                                        </div>
                                        <ServiceItem 
                                            title={'Development for Any Platform'}
                                            text={'We create mobile and web applications that adapt to your business tasks. Using modern technologies and tools, we develop reliable solutions, whether they are simple utilities or complex corporate systems.'}
                                            img={imgServiceApp_01}
                                        />
                                        <ServiceItem 
                                            title={'Custom UI/UX Design'}
                                            text={'We pay special attention to the appearance and usability of applications. Our designers create unique interfaces that make interaction with the application intuitive and pleasant.'}
                                            img={imgServiceApp_02}
                                        />
                                        <ServiceItem 
                                            title={'Integration with External Systems'}
                                            text={'We ensure seamless integration with third-party services, such as payment systems, social networks, analytics platforms, and corporate tools (CRM, ERP). This expands the functionality of your application.'}
                                            img={imgServiceApp_03}
                                        />
                                        <ServiceItem 
                                            title={'Maintenance and Support'}
                                            text={'Our work does not end at the development stage. We offer ongoing support services, including bug fixes, regular updates, and the addition of new functionality as needed.'}
                                            img={imgServiceApp_04}
                                        />
                                        <div className='btn'>
                                            <button className='button-2'>{t('services.btnTitleReadmore')}</button>
                                        </div> 
                                    </div>
                                    <div className='col-md-1'></div>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className='col-1'></div>
                    </div>
                </div>

{/* <hr /> */}
                <div className='section-design'>
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className='col-lg-8'>
                            <div className='service-title'>
                                <ServiceTitle 
                                    title_color={t('services.design.color')} 
                                    title_black={t('services.design.black')}
                                    text={t('services.designDescription')} />
                            </div>
                        </div>
                        <div className='col-2'></div>
                    </div>

                    <div className='table-design'>
                        <div className='row'>
                            <div className=' col-lg-4'>
                                <ServiceItem 
                                    title={'User and Business Goals Research'}
                                    text={'We study the target audience, user behavior, and project business goals to create an interface that is as efficient and user-friendly as possible.'}
                                    num={'1.'}
                                />
                            </div>
                            <div className='col-md-6 col-lg-4'>
                                <ServiceItem 
                                    title={'User Experience (UX) Design'}
                                    text={'We design the structure and logic of the application or website. Our specialists create clear and intuitive interaction scenarios to ensure a comfortable user experience.'}
                                    num={'2.'}
                                />
                            </div>
                            <div className='col-md-6 col-lg-4'>
                                <ServiceItem 
                                    title={'User Interface (UI) Design'}
                                    text={'We develop the visual style of the application or website. This includes: Selecting the color palette; Creating unique icons; Choosing fonts and their sizes; Drawing all screens or pages;'}
                                    num={'3.'}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <ServiceItem 
                                    title={'Prototyping'}
                                    text={'We create interactive prototypes that allow us to test the logic of the application or website before development begins. This helps identify and fix potential issues at an early stage.'}
                                    num={'4.'}
                                />
                            </div>
                            <div className='col-md-6 col-lg-4'>
                                <ServiceItem 
                                    title={'Design Adaptation for Different Devices'}
                                    text={'Our solutions consider various screen sizes and specific features of mobile devices, tablets, and computers. We ensure the product is convenient to use on any platform.'}
                                    num={'5.'}
                                />
                            </div>
                            <div className='col-md-6 col-lg-4'>
                                <ServiceItem 
                                    title={'Design System Development'}
                                    text={'We develop a set of rules and components used to maintain a consistent style as the product evolves. This speeds up the process of adding new features and pages.'}
                                    num={'6.'}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4'></div>
                            <div className='col-lg-4'>
                                <ServiceItem 
                                    title={'Comprehensive Solution'}
                                    text={'We offer a comprehensive approach: from UX/UI design to prototyping and adaptation for different devices. The result is a fully finished product that meets your business objectives and user expectations.'}
                                    num={'7.'}
                                />
                            </div>
                            <div className='col-4'></div>
                        </div>
                        <div className='btn'>
                            <button className='button-2'>{t('services.btnTitleReadmore')}</button>
                        </div> 
                    </div>

                </div>
               
            </div> 
        </section>
  )
}

export default HomeServices
