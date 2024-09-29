import React from 'react'
import { useTranslation } from 'react-i18next';
import './css/Service.css'

const Service = ({img, title, description, btnTitle, btnLink, sideImgLeft}) => {
  const { t } = useTranslation();
  return (
      <div className=" row d-flex align-items-center my-5 ">
          {sideImgLeft && (
                <div className='col-lg-1'></div>
          )}
          {sideImgLeft && (
                <div className="col-lg-3 justify-content-center ">
                  <img className=' img-fluid shadow rounded-3 mb-5' src={img} alt={t(title)} />
                </div>
          )}
          {sideImgLeft && (
                <div className='col-lg-1'></div>
          )}
          
        <div className={`col-lg-7 description ${sideImgLeft ? 'ps-5' : 'ps-5'}` }>
            <h4 className="mb-4">{t(title)}</h4>
            
            <p className="mx-5 pe-5">{t(description)}</p>
            
            <div className="d-grid gap-2 d-md-flex">
                {/* <button className="btn btn-secondary button-2" type="button" >
                    <a href={t(btnLink)}>
                      {t(btnTitle)}
                    </a>
          </button> */}
          <a href="#" 
                    className="btn btn-secondary button-2 m-0" 
                    tabIndex="-1" 
                    role="button" 
                    aria-disabled="true">{t('button.readmore')}.</a>
            </div>
        </div> 
        
          {!sideImgLeft && (
            <div className='col-lg-1'></div>       
          )}
          {!sideImgLeft && (
            <div className="col-lg-3 justify-content-center">
                <img className=' img-fluid shadow rounded-3 mb-5' src={img} alt={t(title)} />
            </div>        
          )}

    </div>
  )
}

export default Service
