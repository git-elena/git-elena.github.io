import React from 'react'
import './css/Logo.css'
import SVGComponent from './LogoSVG'

const Logo = () => {
  return (
    <div className='logo'>
          {/* <img src={logoFromSrc} alt="Logo" /> */}
          <SVGComponent width={270} color={'white'} />
    </div>
  )
}

export default Logo
