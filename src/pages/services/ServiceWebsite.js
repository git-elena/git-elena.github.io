import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from './banner'
import '../../components/css/Service.css'

import ServiceTitle from '../../components/HomeSections/Services/Title'
import HomeContact from '../../components/HomeSections/HomeContact'

import bannerImg from '../../images/services/web/1_web.jpg'
import mainImg from '../../images/services/web/webDevelopmentImage.jpg'


const ServiceWebsite = () => {
    const { t } = useTranslation()
    return (
        <div className='service-page page'>
            <Banner src={bannerImg}/>
            <section className='section px-5 mx-lg-5 row '>
                <div className='service-title'>
                    <ServiceTitle
                        title_left={t('pages.service.web.title.left')}
                        title_right={t('pages.service.web.title.right')}
                        text={t('pages.service.web.title.description')} />
                </div>
                <div>
                    <img
                        src={mainImg}
                        alt="Website Development"
                        className=""
                        style={{ maxWidth: '100%' }}
                    />
                </div>
                <h4 className='tableTitle text-center'>{t('pages.service.web.tableTitle')}</h4>

                <div className='table'>
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
                                <td className='col_1'>{t('pages.service.web.table.row_1.col_1')}</td>
                                <td className='col_2'>{t('pages.service.web.table.row_1.col_2')}</td>
                                <td className='col_3'>{t('pages.service.web.table.row_1.col_3')}</td>
                                <td className='col_4'>{t('pages.service.web.table.row_1.col_4')}</td>
                            </tr>
                            <tr>
                                <td className='col_1'>{t('pages.service.web.table.row_2.col_1')}</td>
                                <td className='col_2'>{t('pages.service.web.table.row_2.col_2')}</td>
                                <td className='col_3'>{t('pages.service.web.table.row_2.col_3')}</td>
                                <td className='col_4'>{t('pages.service.web.table.row_2.col_4')}</td>
                            </tr>
                            <tr>
                                <td className='col_1'>{t('pages.service.web.table.row_3.col_1')}</td>
                                <td className='col_2'>{t('pages.service.web.table.row_3.col_2')}</td>
                                <td className='col_3'>{t('pages.service.web.table.row_3.col_3')}</td>
                                <td className='col_4'>{t('pages.service.web.table.row_3.col_4')}</td>
                            </tr>
                            <tr>
                                <td className='col_1'>{t('pages.service.web.table.row_4.col_1')}</td>
                                <td className='col_2'>{t('pages.service.web.table.row_4.col_2')}</td>
                                <td className='col_3'>{t('pages.service.web.table.row_4.col_3')}</td>
                                <td className='col_4'>{t('pages.service.web.table.row_4.col_4')}</td>
                            </tr>
                            <tr>
                                <td className='col_1'>{t('pages.service.web.table.row_5.col_1')}</td>
                                <td className='col_2'>{t('pages.service.web.table.row_5.col_2')}</td>
                                <td className='col_3'>{t('pages.service.web.table.row_5.col_3')}</td>
                                <td className='col_4'>{t('pages.service.web.table.row_5.col_4')}</td>
                            </tr>
                        </tbody>
                    </table> 
                </div>

                <p className='tableNote'>{t('pages.service.table.note')}</p>
                
                <div className='endText'>
                    <ServiceTitle
                        text={t('pages.service.web.endText')}
                    />
                </div>

            </section>
            <HomeContact />
        </div>
    )
}

export default ServiceWebsite
