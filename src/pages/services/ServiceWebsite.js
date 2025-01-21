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

                <div className='table'>-------</div>

                <p className='tableNote'>{t('pages.service.table.note')}</p>
                <p className='endText'>{t('pages.service.web.endText')}</p>
                
            </section>
            <HomeContact />
        </div>
    )
}

export default ServiceWebsite
