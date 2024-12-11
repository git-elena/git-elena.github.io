import React from 'react';
import { useTranslation } from 'react-i18next';
// import '../../../src/pages/css/Portfolio.css';
import '../../../src/pages/css/PortfolioHirosaki.css';

import device00 from '../../images/portfolio/hirosaki/devices/clear-device-00.png'
import device02 from '../../images/portfolio/hirosaki/devices/clear-device-02.png'


const PortfolioHirosaki = () => {
    const { t } = useTranslation();

    return (
        <div className='portfolio-page page-content hirosaki'>
            <section className='portfolio-header'>
                <h3>Mobile Application</h3>
                <div className='container'>
                    
                    <h1 className='banner-title'>HIROSAKI</h1>
                    <h2 className='banner-subtitle'>Sushi House</h2>

                    <p className='banner-description'>"Hirosaki Sushi House" is a commercial mobile application developed by our team for a real Japanese restaurant with an established customer base. </p>

                    <div className='phone-logos'>
                        <div className='android-logo phone-logo'></div>
                        <div className='iphone-logo phone-logo'></div>
                    </div>
                </div>
            </section>
            <section className='project-overview'>
                <h3>Project Overview</h3>
                <div className="container">
                    <div className='project-overview-table'>
                        <div className='td'>
                            <p>The primary goal of the project was to improve customer interaction and simplify the ordering process.</p>
                            <p>The application provides users with a convenient way to browse the menu, place orders, pay online, and stay informed about special offers.</p>
                        </div>
                        <div className='td td-50'>
                            <div className=' desc devices'>
                                <div className='device device00'>
                                    <img src={device00} alt='Device Screenshot' />
                                </div>
                                <div className='device device02'>
                                    <img src={device02} alt='Device Screenshot' />
                                </div>
                            </div>

                            <div className='pad devices '>
                                <div className='device device00'>
                                    <img src={device00} alt='Device Screenshot' />
                                </div>
                                <div className='device device02'>
                                    <img src={device02} alt='Device Screenshot' />
                                </div>
                            </div>
                        </div>
                        <div className='td'>
                            <p>We designed this product to meet the specific needs of the restaurant and its customers while supporting business growth.</p>
                            <p>Additionally, users can view their past orders offline, adding to the convenience of the app.</p>
                        </div>
                    </div>

                    
                </div>
            </section>
            <section className='project-design'>
                <h3>Project Design</h3>
                <div className='container'>
                    <div className='container-fonts'>
                        <div className='fonts'>
                            <div className='font font-logo'>
                                <div className='font-title'>
                                    <div className='font-position'>Logo</div>
                                    <div className='font-name'>Made In China</div>
                                </div>
                                <div className='font-content'>Aa</div>
                            </div>
                            <div className='font font-android'>
                                <div className='font-title'>
                                    <div className='font-position'>Android</div>
                                    <div className='font-name'>Roboto</div>
                                </div>
                                <div className='font-content'>Aa</div>
                            </div>
                            <div className='font font-iphone'>
                                <div className='font-title'>
                                    <div className='font-position'>iPhone</div>
                                    <div className='font-name'>San Francisco</div>
                                </div>
                                <div className='font-content'>Aa</div>
                            </div>
                        </div>
                    </div>
                    <div className='container-colors'>
                        <div className='colors'>
                            <div className='color color-main'>
                                <div className='color-example'>
                                    <div className='color-content'></div>
                                </div>
                                <div className='color-title'>
                                    <div className='color-name'>Main Color</div>
                                    <div className='color-val'>#FF4132</div>
                                </div>
                            </div>
                            <div className='color color-back'>
                                <div className='color-example'>
                                    <div className='color-content'></div>
                                </div>
                                
                                <div className='color-title'>
                                    <div className='color-name'>Background</div>
                                    <div className='color-val'>#FFFFFF</div>
                                </div>
                            </div>
                            <div className='color color-text'>
                                <div className='color-example'>
                                    <div className='color-content'></div>
                                </div>
                                <div className='color-title'>
                                    <div className='color-name'>Main Text</div>
                                    <div className='color-val'>#202020</div>
                                </div>
                            </div>
                            <div className='color color-ascent'>
                                <div className='color-example'>
                                    <div className='color-content'></div>
                                </div>
                                <div className='color-title'>
                                    <div className='color-name'>Ascent Text</div>
                                    <div className='color-val'>#FF9900</div>
                                </div>
                            </div>
                            <div className='color color-hint'>
                                <div className='color-example'>
                                    <div className='color-content'></div>
                                </div>
                                <div className='color-title'>
                                    <div className='color-name'>Hint</div>
                                    <div className='color-val'>#FFC200</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='key-features'>
            <h3>Key Features</h3>
            <div className='container'>
                <div className='text'>
                    
                </div>
                <div className='imgs'></div>
            </div>
            </section>
        </div>
    );
}



export default PortfolioHirosaki;
