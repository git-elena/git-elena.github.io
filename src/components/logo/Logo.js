import React from 'react'
import '../css/Logo.css'
import SVGComponent from './LogoSVG'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
          {/* <img src={logoFromSrc} alt="Logo" /> */}
          <SVGComponent width={200} color={'white'} />
      </Link>
    </div>
  )
}

export default Logo
