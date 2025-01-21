import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from './banner'

import bannerImg from '../../images/services/3_design.jpg'


const ServiceDesign = () => {
    const { t } = useTranslation()
    return (
        <div className='service-page page'>
            <Banner src={bannerImg}/>
            <section className='section p-5 mx-lg-5 row '>
                
            </section>
        </div>
    )
}

export default ServiceDesign
