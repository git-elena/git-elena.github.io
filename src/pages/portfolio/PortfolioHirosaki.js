import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../src/pages/css/PortfolioHirosaki.css';

import HirosakiKeyFeature from '../../components/PagePortfolio/HirosakiKeyFeature';
import HirosakiTool from '../../components/PagePortfolio/HirosakiTool';

// import overviewDevice00 from '../../images/portfolio/hirosaki/XXL/devices/overview-device-00.png';
// import overviewDevice02 from '../../images/portfolio/hirosaki/XXL/devices/overview-device-02.png';

// import keyDevice01 from '../../images/portfolio/hirosaki/XXL/devices/key-device-01.png';
// import keyDevice02 from '../../images/portfolio/hirosaki/XXL/devices/key-device-02.png';
// import keyDevice03 from '../../images/portfolio/hirosaki/XXL/devices/key-device-03.png';
// import keyDevice04 from '../../images/portfolio/hirosaki/XXL/devices/key-device-04.png';
// import keyDevice05 from '../../images/portfolio/hirosaki/XXL/devices/key-device-05.png';
// import keyDevice06 from '../../images/portfolio/hirosaki/XXL/devices/key-device-06.png';

// import screenDevice01 from '../../images/portfolio/hirosaki/XXL/devices/screenshot-device-01.png';
// import screenDevice02 from '../../images/portfolio/hirosaki/XXL/devices/screenshot-device-02.png';
// import screenDevice03 from '../../images/portfolio/hirosaki/XXL/devices/screenshot-device-03.png';
// import screenDevice04 from '../../images/portfolio/hirosaki/XXL/devices/screenshot-device-04.png';

import HirosakiRole from '../../components/PagePortfolio/HirosakiRole';
import HirosakiSol  from '../../components/PagePortfolio/HirosakiSol';
import HirosakiRes  from '../../components/PagePortfolio/HirosakiRes';
import ResponsiveImage from '../../components/ResponsiveImage';

const img_path = '/images/portfolio/hirosaki'
const img_name_screenshot = 'devices/screenshot-device-'
const img_name_screenshot_end = '.png'
const img_name_screenshot_overview = 'devices/overview-device-'
const img_name_screenshot_key = 'devices/key-device-'


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
                            <div className='desc devices'>
                                <div className='device device00'>
                                <ResponsiveImage 
                                    file_path={img_path} 
                                    file_name={`${img_name_screenshot_overview}00${img_name_screenshot_end}`} 
                                    alt='Device Screenshot' />
                                    {/* <img src={overviewDevice00} alt='Device Screenshot' /> */}
                                </div>
                                <div className='device device02'>
                                <ResponsiveImage 
                                    file_path={img_path} 
                                    file_name={`${img_name_screenshot_overview}02${img_name_screenshot_end}`} 
                                    alt='Device Screenshot' />
                                    {/* <img src={overviewDevice02} alt='Device Screenshot' /> */}
                                </div>
                            </div>

                            <div className='pad devices '>
                                <div className='device device00'>
                                <ResponsiveImage 
                                    file_path={img_path} 
                                    file_name={`${img_name_screenshot_overview}00${img_name_screenshot_end}`} 
                                    alt='Device Screenshot' />
                                    {/* <img src={overviewDevice00} alt='Device Screenshot' /> */}
                                </div>
                                <div className='device device02'>
                                <ResponsiveImage 
                                    file_path={img_path} 
                                    file_name={`${img_name_screenshot_overview}02${img_name_screenshot_end}`} 
                                    alt='Device Screenshot' />
                                    {/* <img src={overviewDevice02} alt='Device Screenshot' /> */}
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
                    <div className='left'>
                    <HirosakiKeyFeature 
                    title='Online Ordering' 
                    text='An intuitive ordering system allows customers to place orders for delivery or pickup and even schedule them at a convenient time.'/>
                    
                    <HirosakiKeyFeature 
                    title='Offline Order History' 
                    text='Users can access their past orders even when offline, enhancing the overall usability of the application.'/>
                    
                    <HirosakiKeyFeature 
                    title='PayPal Payments' 
                    text='Integrated PayPal functionality enables users to pay for their orders quickly and securely.'/>
                    
                    <HirosakiKeyFeature 
                    title='Menu Browsing' 
                    text='Users can explore a well-structured menu with high-quality photos and detailed descriptions of dishes to help them make informed choices.'/>
                    </div>
                    <div  className='right'>
                    <HirosakiKeyFeature 
                    title='Push Notifications' 
                    text='Notifications about order status, new offers, and exclusive deals keep users informed and engaged.'/>
                    
                    <HirosakiKeyFeature 
                    title='Promotions and Discounts' 
                    text='Real-time updates on current promotions and special offers encourage repeat orders and customer engagement.'/>
                    
                    <HirosakiKeyFeature 
                    title='Instant Order Notifications for Staff via Telegram' 
                    text='All orders are immediately sent to the restaurant’s Telegram bot, ensuring that staff receives timely updates about new orders.'/>
                    
                    <HirosakiKeyFeature 
                    title='Integration with Bitrix24' 
                    text='The application is integrated with the Bitrix24 API, allowing the restaurant to automate order management and maintain customer records efficiently.'/>
                    </div>
                </div>
                <div className='imgs'>
                    <div className='keys-imgs-first keys-imgs'>
                        <div className='keys-img-first keys-img-01 keys-img'>
                            <ResponsiveImage 
                                    file_path={img_path} 
                                    file_name={`${img_name_screenshot_key}01${img_name_screenshot_end}`} 
                                    alt='Device Screenshot' />
                            {/* <img src={keyDevice01} alt='Device Screenshot' /> */}
                        </div>
                        <div className='keys-img-first keys-img-02 keys-img'>
                            <ResponsiveImage 
                                    file_path={img_path} 
                                    file_name={`${img_name_screenshot_key}02${img_name_screenshot_end}`} 
                                    alt='Device Screenshot' />
                            {/* <img src={keyDevice02} alt='Device Screenshot' /> */}
                        </div>
                        <div className='keys-img-first keys-img-03 keys-img'>
                            <ResponsiveImage 
                                    file_path={img_path} 
                                    file_name={`${img_name_screenshot_key}03${img_name_screenshot_end}`} 
                                    alt='Device Screenshot' />
                            {/* <img src={keyDevice03} alt='Device Screenshot' /> */}
                        </div>
                    </div>
                    <div className='keys-imgs-second keys-imgs'>
                        <div className='keys-img-second keys-img-04 keys-img'>
                            <ResponsiveImage 
                                    file_path={img_path} 
                                    file_name={`${img_name_screenshot_key}04${img_name_screenshot_end}`} 
                                    alt='Device Screenshot' />
                            {/* <img src={keyDevice04} alt='Device Screenshot' /> */}
                        </div>
                        <div className='keys-img-second keys-img-05 keys-img'>
                            <ResponsiveImage 
                                    file_path={img_path} 
                                    file_name={`${img_name_screenshot_key}05${img_name_screenshot_end}`} 
                                    alt='Device Screenshot' />
                            {/* <img src={keyDevice05} alt='Device Screenshot' /> */}
                        </div>
                        <div className='keys-img-second keys-img-06 keys-img'>
                            <ResponsiveImage 
                                    file_path={img_path} 
                                    file_name={`${img_name_screenshot_key}06${img_name_screenshot_end}`} 
                                    alt='Device Screenshot' />
                            {/* <img src={keyDevice06} alt='Device Screenshot' /> */}
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className='screenshots'>
            <h3>Screenshots</h3>
            <div className='container'>
                <div className='screen-imgs'>
                    <div className='screen-img'>
                        <div className=' screen-img-01'>
                            <ResponsiveImage 
                                file_path={img_path} 
                                file_name={`${img_name_screenshot}01${img_name_screenshot_end}`} 
                                alt='Device Screenshot' />
                            {/* <img src={screenDevice01} alt='Device Screenshot' /> */}
                        </div>
                    </div>
                    <div className='screen-img'>
                        <div className=' screen-img-02 '>
                        <ResponsiveImage 
                                file_path={img_path} 
                                file_name={`${img_name_screenshot}02${img_name_screenshot_end}`} 
                                alt='Device Screenshot' />
                            {/* <img src={screenDevice02} alt='Device Screenshot' /> */}
                        </div>
                    </div>
                    <div className='screen-img'>
                        <div className=' screen-img-04 '>
                        <ResponsiveImage 
                                file_path={img_path} 
                                file_name={`${img_name_screenshot}03${img_name_screenshot_end}`} 
                                alt='Device Screenshot' />
                            {/* <img src={screenDevice03} alt='Device Screenshot' /> */}
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className='tools'>
                <h3>Technologies and Tools</h3>
                <div className='container'>
                    <HirosakiTool 
                        title='Flutter and Dart' 
                        text='We used Flutter to build a single codebase for both iOS and Android, ensuring a consistent experience across platforms. Dart was utilized to implement the app’s business logic.' />
                    <HirosakiTool 
                        title='REST API Integration' 
                        text='REST API was used to ensure seamless communication between the server and the app, keeping menu and order data up-to-date in real-time.' />
                    <HirosakiTool 
                        title='State Management with Provider' 
                        text='We used Provider to manage app data efficiently, delivering smooth and quick user interactions even under heavy loads.' />
                    <HirosakiTool 
                        title='Firebase Services' 
                        text='Firebase was used to send push notifications, keeping users informed about order updates and promotions.' />
                    <HirosakiTool 
                        title='PayPal Integration' 
                        text='We implemented PayPal functionality to enable convenient and secure online payments.' />
                    <HirosakiTool 
                        title='Telegram Bot for Staff' 
                        text='We integrated a Telegram bot that instantly receives all new orders, ensuring that restaurant staff is promptly notified and can process orders without delay.' />
                    
                    
                </div>
            </section>
            <section className='img-sushi-01'></section>
            <section className='role'>
                <h3>Our Role in the Project</h3>
                <div className='container'>
                    <div className='context-role'>
                        <HirosakiRole 
                            title='UI/UX Design' 
                            text='We created a simple, intuitive design to ensure easy access to the menu and a smooth ordering process.' 
                            align='right' />
                            <HirosakiRole 
                            title='Backend Integration'
                            text="We connected the app to the restaurant's backend via REST API, ensuring that all data was synchronized and updated in real-time."
                            align='left'/>
                        
                    </div>
                    <div className='context-role'>
                        <HirosakiRole 
                            title='Testing and Optimization' 
                            text='Our team conducted extensive testing to fix bugs, improve performance, and optimize the app for a smooth user experience.' 
                            align='right' />
                        <HirosakiRole 
                            title='Integration with Bitrix24'
                            text="We implemented Bitrix24 API integration to streamline order management and make it easier for the restaurant to maintain customer records."
                            align='left'/>
                    </div>
                    <div className='context-role'>
                        <HirosakiRole 
                            title=''
                            text=""
                            align='right'/>
                        <HirosakiRole 
                            title='Telegram Bot Integration'
                            text="We configured a Telegram bot to instantly notify staff about new orders, reducing delays and improving service efficiency."
                            align='left'/>
                    
                    </div>
                </div>
            </section>
            <section className='img-sushi-02'></section>
            <section className='sol'>
                <h3>Challenges And Solutions</h3>
                <div className='container'>
                    <div className='desc'>
                        <div className='context-sol-left'>
                            <HirosakiSol
                                title='Timely Order Notifications for Staff'
                                text='We integrated a Telegram bot to ensure that orders were instantly sent to the staff, minimizing delays in processing.'
                                align='right' />
                            <HirosakiSol
                                title='Bitrix24 Integration'
                                text='By connecting the app with Bitrix24, we helped the restaurant automate its order management, simplifying administrative tasks.'
                                align='right' />
                        </div>
                        <div className='context-sol-right'>
                            <HirosakiSol
                                title='PayPal Integration'
                                text="We successfully implemented PayPal to provide users with a fast and secure online payment option."
                                align='left'/>
                        
                        </div>
                    </div>
                </div>
            </section>
            <section className='res'>
                <h3>Results</h3>
                <div className='container'>
                    <div className='context-res-left'>
                        <HirosakiRes 
                            title='Successful Launch' 
                            text='The app was launched on both Google Play and the App Store, receiving positive reviews for its ease of use and functionality.' 
                            align='right'
                            num='1' />
                        <HirosakiRes 
                            title='Increased Sales' 
                            text='The simple and convenient ordering process contributed to a 25% increase in online sales during the first month of launch.' 
                            align='right'
                            num='2' />
                        <HirosakiRes 
                            title='Improved Customer Satisfaction'
                            text="The intuitive interface, seamless navigation, fast payment system, and the ability to view orders offline received high praise from users, increasing customer loyalty."
                            align='right'
                            num='3' />
                    </div>
                    <div className='context-res-right'>
                        <div className='res-img '>
                        <ResponsiveImage 
                                    file_path={img_path} 
                                    file_name={`${img_name_screenshot}02${img_name_screenshot_end}`} 
                                    alt='Device Screenshot' />
                            {/* <img src={screenDevice02} alt='Device Screenshot' /> */}
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className='end'>
                <div>Thanks For Watching</div>
            </section>
        </div>
    );
}



export default PortfolioHirosaki;
