import React from 'react'
import BannerPageServiceWebApp from '../components/PagesServices/PagesServiceBanners/BannerPageServiceWebApp'
import ContentPageServiceWebApp from '../components/PagesServices/PagesServiceContents/ContentPageServiceWebApp'

const ServiceWebApp = () => {
    return (
        <div className='services-page page mt-5 pt-5 '>
            <BannerPageServiceWebApp />
            <section className='section p-5 mx-lg-5 row '>
                <ContentPageServiceWebApp />
            </section>
        </div>
    )
}

export default ServiceWebApp
