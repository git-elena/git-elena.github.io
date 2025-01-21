import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from './banner'

import ServiceTitle from '../../components/HomeSections/Services/Title'
import HomeContact from '../../components/HomeSections/HomeContact'

import AppTitle from './appItem/AppTitle'
import AppDesc from './appItem/AppDesc'
import AppItem from './appItem/AppItem'

import bannerImg from '../../images/services/app/2_app.jpg'
import mainImg_web from '../../images/services/app/website-app.jpg'
import mainImg_mob from '../../images/services/app/mobile-app.jpg'



const ServiceApp = () => {
    const { t } = useTranslation()
    return (       
        <div className='service-page page'>
            <Banner src={bannerImg}/>
            <section className='section px-5 mx-lg-5 row '>
                <div className='service-title'>
                    <ServiceTitle
                        title_left={t('pages.service.app.title.left')}
                        title_right={t('pages.service.app.title.right')}
                         />
                </div>
                <div>
                    <div className='row app-row'>
                        <div className='col-6'>
                            <div class="app-item my-border">                            
                                <div class="app-content">
                                    <AppTitle left={t('pages.service.app.itemWeb.title.left')} right={t('pages.service.app.itemWeb.title.right')}/>
                                    <AppDesc text={t('pages.service.app.itemWeb.description')} />
                                    <AppItem  title={t('pages.service.app.itemWeb.item_1.title')} text={t('pages.service.app.itemWeb.item_1.text')}/>
                                    <AppItem  title={t('pages.service.app.itemWeb.item_2.title')} text={t('pages.service.app.itemWeb.item_2.text')}/>
                                    <AppItem  title={t('pages.service.app.itemWeb.item_3.title')} text={t('pages.service.app.itemWeb.item_3.text')}/>
                                    <AppItem  title={t('pages.service.app.itemWeb.item_4.title')} text={t('pages.service.app.itemWeb.item_4.text')}/>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='app-item my-border'>
                                <img
                                    src={mainImg_web}
                                    alt="Web Application Development"
                                    className=""
                                    style={{ maxWidth: '100%' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row app-row'>
                        <div className='col-6'>
                            <div class="app-item my-border">
                                <img
                                    src={mainImg_mob}
                                    alt="Mobile Application Development"
                                    className=""
                                    style={{ maxWidth: '100%' }}
                                />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="app-item my-border">                            
                                <div class="app-content">
                                    <AppTitle left={t('pages.service.app.itemMob.title.left')} right={t('pages.service.app.itemMob.title.right')}/>
                                    <AppDesc text={t('pages.service.app.itemMob.description')} />
                                    <AppItem  title={t('pages.service.app.itemMob.item_1.title')} text={t('pages.service.app.itemMob.item_1.text')}/>
                                    <AppItem  title={t('pages.service.app.itemMob.item_2.title')} text={t('pages.service.app.itemMob.item_2.text')}/>
                                    <AppItem  title={t('pages.service.app.itemMob.item_3.title')} text={t('pages.service.app.itemMob.item_3.text')}/>
                                    <AppItem  title={t('pages.service.app.itemMob.item_4.title')} text={t('pages.service.app.itemMob.item_4.text')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='tableTitle text-center'>{t('pages.service.app.tableTitle')}</h4>

                <div className='table'>-------</div>

                <p className='tableNote'>{t('pages.service.table.note')}</p>
                <p className='endText'>{t('pages.service.app.endText')}</p>
                
            </section>
            <HomeContact />
        </div>
    )
}

export default ServiceApp
