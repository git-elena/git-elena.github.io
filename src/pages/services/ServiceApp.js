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
import PricesGallery from '../../components/PricesGallery'



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
                        text={t('pages.service.app.title.description')} />
                </div>
                <div>
                    <div className='row app-row'>
                    <div className='col-lg-6 d-block d-lg-none mb-4'>
                            <div className='app-item my-border'>
                                <img
                                    src={mainImg_web}
                                    alt="Web Application Development"
                                    className=""
                                    style={{ maxWidth: '100%' }}
                                />
                            </div>
                        </div>
                        <div className='col-lg-6'>
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
                        <div className='col-lg-6 d-none d-lg-block'>
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
                        <div className='col-lg-6 mb-4 mb-lg-0'>
                            <div class="app-item my-border">
                                <img
                                    src={mainImg_mob}
                                    alt="Mobile Application Development"
                                    className=""
                                    style={{ maxWidth: '100%' }}
                                />
                            </div>
                        </div>
                        <div className='col-lg-6'>
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

                <div className='table d-none d-md-block'>
                    <table>
                        <thead>
                            <tr>
                                <th className='col_1'>{t('pages.service.table.col_1')}</th>
                                <th className='col_2'>{t('pages.service.table.col_2')}</th>
                                <th className='col_3'>{t('pages.service.table.col_3')}</th>
                                <th className='col_4'>{t('pages.service.table.col_4')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='col_1'>{t('pages.service.app.table.row_1.col_1')}</td>
                                <td className='col_2'>{t('pages.service.app.table.row_1.col_2')}</td>
                                <td className='col_3'>{t('pages.service.app.table.row_1.col_3')}</td>
                                <td className='col_4'>{t('pages.service.app.table.row_1.col_4')}</td>
                            </tr>
                            <tr>
                                <td className='col_1'>{t('pages.service.app.table.row_2.col_1')}</td>
                                <td className='col_2'>{t('pages.service.app.table.row_2.col_2')}</td>
                                <td className='col_3'>{t('pages.service.app.table.row_2.col_3')}</td>
                                <td className='col_4'>{t('pages.service.app.table.row_2.col_4')}</td>
                            </tr>
                            <tr>
                                <td className='col_1'>{t('pages.service.app.table.row_3.col_1')}</td>
                                <td className='col_2'>{t('pages.service.app.table.row_3.col_2')}</td>
                                <td className='col_3'>{t('pages.service.app.table.row_3.col_3')}</td>
                                <td className='col_4'>{t('pages.service.app.table.row_3.col_4')}</td>
                            </tr>
                            <tr>
                                <td className='col_1'>{t('pages.service.app.table.row_4.col_1')}</td>
                                <td className='col_2'>{t('pages.service.app.table.row_4.col_2')}</td>
                                <td className='col_3'>{t('pages.service.app.table.row_4.col_3')}</td>
                                <td className='col_4'>{t('pages.service.app.table.row_4.col_4')}</td>
                            </tr>
                            <tr>
                                <td className='col_1'>{t('pages.service.app.table.row_5.col_1')}</td>
                                <td className='col_2'>{t('pages.service.app.table.row_5.col_2')}</td>
                                <td className='col_3'>{t('pages.service.app.table.row_5.col_3')}</td>
                                <td className='col_4'>{t('pages.service.app.table.row_5.col_4')}</td>
                            </tr>
                            <tr>
                                <td className='col_1'>{t('pages.service.app.table.row_5.col_1')}</td>
                                <td className='col_2'>{t('pages.service.app.table.row_5.col_2')}</td>
                                <td className='col_3'>{t('pages.service.app.table.row_5.col_3')}</td>
                                <td className='col_4'>{t('pages.service.app.table.row_5.col_4')}</td>
                            </tr>
                        </tbody>
                    </table> 
                </div>

                <div className='service-prices d-md-none'>
                    <PricesGallery items={[
                        {
                            name:           t('pages.service.app.table.row_1.col_1'),
                            description:    t('pages.service.app.table.row_1.col_2'),
                            price:          t('pages.service.app.table.row_1.col_3'),
                            period:         t('pages.service.app.table.row_1.col_4')
                        },
                        {
                            name:           t('pages.service.app.table.row_2.col_1'),
                            description:    t('pages.service.app.table.row_2.col_2'),
                            price:          t('pages.service.app.table.row_2.col_3'),
                            period:         t('pages.service.app.table.row_2.col_4')
                        },
                        {
                            name:           t('pages.service.app.table.row_3.col_1'),
                            description:    t('pages.service.app.table.row_3.col_2'),
                            price:          t('pages.service.app.table.row_3.col_3'),
                            period:         t('pages.service.app.table.row_3.col_4'),
                            style:          'px-5'
                        },
                        {
                            name:           t('pages.service.app.table.row_4.col_1'),
                            description:    t('pages.service.app.table.row_4.col_2'),
                            price:          t('pages.service.app.table.row_4.col_3'),
                            period:         t('pages.service.app.table.row_4.col_4')
                        },
                        {
                            name:           t('pages.service.app.table.row_5.col_1'),
                            description:    t('pages.service.app.table.row_5.col_2'),
                            price:          t('pages.service.app.table.row_5.col_3'),
                            period:         t('pages.service.app.table.row_5.col_4')
                        },
                    ]}/>
                </div>

                <p className='tableNote'>{t('pages.service.table.note')}</p>
                
                <div className='endText'>
                    <ServiceTitle
                        text={t('pages.service.app.endText')}
                    />
                </div>
                
                <p ></p>
                
            </section>
            <HomeContact />
        </div>
    )
}

export default ServiceApp
