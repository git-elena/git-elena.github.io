import React from 'react'
import './css/About.css'
import AboutContent from '../components/PageAbout/AboutContent'
import HomeContact from '../components/HomeSections/HomeContact'


const About = () => {
  return (
    <div class="page-about">
      
      <div className='about-page page mt-5 pt-3 '>
        {/* <AboutBanner /> */}
        <div className=''>
          <div className='row px-lg-5 ms-lg-0 about-content'>
      
            <div className='col-lg-1'>
            </div>
            <div className='col-lg-10 '><AboutContent /></div>
          </div>
        </div>
      </div>
      <HomeContact />
    </div>
  )
}

export default About
