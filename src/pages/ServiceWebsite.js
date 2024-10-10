import React from 'react'
import BannerPageServiceWebsite from '../components/PagesServices/PagesServiceBanners/BannerPageServiceWebsite'
import ContentPageServiceWebsite from '../components/PagesServices/PagesServiceContents/ContentPageServiceWebsite'

const ServiceWebsite = () => {
    return (
        <div className='services-page page mt-5 pt-5 '>
        <BannerPageServiceWebsite />
        <section className='section p-5 mx-lg-5 row '>
            <ContentPageServiceWebsite />
        </section>
    </div>
    )
}

export default ServiceWebsite
