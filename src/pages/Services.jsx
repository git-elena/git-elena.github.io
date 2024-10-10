import React from 'react'
import './css/Services.css'
import ServicesBanner from '../components/PagesServices/ServicesBanner'
import ServicesContent from '../components/PagesServices/ServicesContent'

const Services = () => {
  return (
    <div className='services-page page mt-5 pt-5 '>
      <ServicesBanner />

      <div className='row px-lg-5 ms-lg-0 services-content'>

        <div className='col-lg-1'>
        </div>
        <div className='col-lg-10 '>
          <ServicesContent />
        </div>
      </div>

    </div>

    
  )
}

export default Services 