import React from 'react';
import '../css/PortfolioWolfvelity.css'
import Desktop from '../../components/ScrollableDisplay/Desktop';

import contentHome  from '../../images/portfolio/wolfvelity/desktop_screenshot_home.png';
import contentServis  from '../../images/portfolio/wolfvelity/desktop_screenshot_servis.png';

const PortfolioWolfvelity = () => {
    return (
        <div class="py-5 my-5">
            <Desktop content={contentHome}/>
            <div class="spacer"></div>
            <Desktop content={contentServis}/>
        </div>
    );
}
export default PortfolioWolfvelity;