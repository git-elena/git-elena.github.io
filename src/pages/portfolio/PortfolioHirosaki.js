import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../src/pages/css/Portfolio.css';
import '../../../src/pages/css/PortfolioHirosaki.css';

import device00 from '../../images/portfolio/hirosaki/devices/clear-device-00.png'
import device02 from '../../images/portfolio/hirosaki/devices/clear-device-02.png'


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
            <section className='project-overview'>
                <div className="container">
                    <h3>Project Overview</h3>
                    <table className='project-overview-table'>
                        <tbody>
                            <tr>
                                <td>
                                    <p>The primary goal of the project was to improve customer interaction and simplify the ordering process.</p>
                                    <p>The application provides users with a convenient way to browse the menu, place orders, pay online, and stay informed about special offers.</p>
                                </td>
                                <td className='td-50'>
                                    <div className='devices'>
                                        <div className='device device00'>
                                            <img src={device00} alt='Device Screenshot' />
                                        </div>
                                        <div className='device device02'>
                                            <img src={device02} alt='Device Screenshot' />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>We designed this product to meet the specific needs of the restaurant and its customers while supporting business growth.</p>
                                    <p>Additionally, users can view their past orders offline, adding to the convenience of the app.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className='project-design'>
                <div className='container'>
                <h3>Project Design</h3>
                </div>
            </section>
        </div>
    );
}



export default PortfolioHirosaki;
