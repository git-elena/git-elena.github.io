import React from 'react'
import './css/Services.css'
import '../components/css/Service.css'
import ServicesContent from '../components/PagesServices/ServicesContent'
import HomeContact from '../components/HomeSections/HomeContact'

const Services = () => {
  return (
    <div className='services-page page mt-5 pt-3 '>
      {/* <ServicesBanner /> */}

      <div className='row px-lg-5 ms-lg-0 services-content'>

        <div className='col-lg-1'>
        </div>
        <div className='col-lg-10 '>
          <ServicesContent />
        </div>
      </div>

      <HomeContact />
    </div>

    
  )
}

export default Services 