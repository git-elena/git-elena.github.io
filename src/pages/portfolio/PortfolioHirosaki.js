import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../src/pages/css/Portfolio.css'
import '../../../src/pages/css/PortfolioHirosaki.css'

const PortfolioHirosaki = () => {
    const { t } = useTranslation();

    return (
        <div className='portfolio-page page-content hirosaki'>
            <div className='portfolio-banner'>
                <div className='container'>
                    <h3>Mobile Application</h3>
                    <h1 className='banner-title'>HIROSAKI</h1>
                    <h2 className='banner-subtitle'>Sushi House</h2>

                    <p className='banner-description'>"Hirosaki Sushi House" is a commercial mobile application developed by our team for a real Japanese restaurant with an established customer base. </p>

                    <div className='phone-logos'>
                        <div className='android-logo phone-logo'></div>
                        <div className='iphone-logo phone-logo'></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}



export default PortfolioHirosaki;
