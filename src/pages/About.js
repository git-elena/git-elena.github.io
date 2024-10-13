import React from 'react'
import './css/About.css'
import AboutBanner from '../components/PageAbout/AboutBanner'
import AboutContent from '../components/PageAbout/AboutContent'


const About = () => {
  return (
    <div className='about-page page mt-5 pt-5 '>
      {/* <AboutBanner /> */}
      <div className=''>
        <div className='row px-lg-5 ms-lg-0 about-content'>
          
          <div className='col-lg-1'>
          </div>
          <div className='col-lg-10 '><AboutContent /></div>
        </div>
      </div>
    </div>
  )
}

export default About
