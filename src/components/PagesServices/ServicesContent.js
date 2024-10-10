import React from 'react'
// import { useTranslation } from 'react-i18next'
import ContentPageServiceWebApp from './PagesServiceContents/ContentPageServiceWebApp'
import ContentPageServiceMobApp from './PagesServiceContents/ContentPageServiceMobApp'
import PageServiceWebsite from './PagesServiceContents/ContentPageServiceWebsite'
import PageServiceDesign from './PagesServiceContents/ContentPageServiceDesign'

const ServicesContent = () => {


  return (
    <section className='section p-5 mx-lg-5 row'>
      <ContentPageServiceMobApp />
      <ContentPageServiceWebApp />
      <PageServiceWebsite />
      <PageServiceDesign />

    </section>
  )
}

export default ServicesContent
