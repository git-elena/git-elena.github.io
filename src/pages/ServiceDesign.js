import React from 'react'
import BannerPageServiceDesign from '../components/PagesServices/PagesServiceBanners/BannerPageServiceDesign'
import ContentPageServiceDesign from '../components/PagesServices/PagesServiceContents/ContentPageServiceDesign'

const ServiceDesign = () => {
    return (
        <div className='services-page page mt-5 pt-5 '>
            <BannerPageServiceDesign />
            <section className='section p-5 mx-lg-5 row '>
                <ContentPageServiceDesign />
            </section>
        </div>
    )
}

export default ServiceDesign
