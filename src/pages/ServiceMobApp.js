import React from 'react'
import ContentPageServiceMobApp from '../components/PagesServices/PagesServiceContents/ContentPageServiceMobApp'
import BannerPageServiceMobApp from '../components/PagesServices/PagesServiceBanners/BannerPageServiceMobApp'

const ServiceMobApp = () => {
    return (
        <div className='services-page page mt-5 pt-5 '>
            <BannerPageServiceMobApp />
            <section className='section p-5 mx-lg-5 row '>
                <ContentPageServiceMobApp />
            </section>
        </div>
    )
}

export default ServiceMobApp
