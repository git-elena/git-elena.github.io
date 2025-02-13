import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../src/pages/css/PortfolioHirosaki.css';

import HomeContact from '../../components/HomeSections/HomeContact';

import HirosakiKeyFeature from '../../components/PagePortfolio/HirosakiKeyFeature';
import HirosakiTool from '../../components/PagePortfolio/HirosakiTool';

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
        <div className='portfolio-page page-content '>
            <div className='hirosaki'>
                <section className='portfolio-header'>
                    <div class="container">
                        <h3>{t('pages.portfolio.hirosaki.subtitle')}</h3>
                        <div className='content'>
                
                            <h1 className='banner-title'>{t('pages.portfolio.hirosaki.title')}</h1>
                            <h2 className='banner-subtitle'>{t('pages.portfolio.hirosaki.maintitle')}</h2>
                            <p className='banner-description'>{t('pages.portfolio.hirosaki.description')}</p>
                            <div className='phone-logos'>
                                <div className='android-logo phone-logo'></div>
                                <div className='iphone-logo phone-logo'></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='project-overview'>
                    <div class="container">
                        <h3>{t('pages.portfolio.hirosaki.body.section_1.title')}</h3>
                        <div className="content">
                            <div className='project-overview-table'>
                                <div className='td'>
                                    <p>{t('pages.portfolio.hirosaki.body.section_1.text.p1')}</p>
                                    <p>{t('pages.portfolio.hirosaki.body.section_1.text.p2')}</p>
                                </div>
                                <div className='td td-50'>
                                    <div className='desc devices'>
                                        <div className='device device00'>
                                        <ResponsiveImage
                                            file_path={img_path}
                                            file_name={`${img_name_screenshot_overview}00${img_name_screenshot_end}`}
                                            alt={t('pages.portfolio.hirosaki.body.alt')} />
                                            {/* <img src={overviewDevice00} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                        </div>
                                        <div className='device device02'>
                                        <ResponsiveImage
                                            file_path={img_path}
                                            file_name={`${img_name_screenshot_overview}02${img_name_screenshot_end}`}
                                            alt={t('pages.portfolio.hirosaki.body.alt')} />
                                            {/* <img src={overviewDevice02} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                        </div>
                                    </div>
                                    <div className='pad devices '>
                                        <div className='device device00'>
                                        <ResponsiveImage
                                            file_path={img_path}
                                            file_name={`${img_name_screenshot_overview}00${img_name_screenshot_end}`}
                                            alt={t('pages.portfolio.hirosaki.body.alt')} />
                                            {/* <img src={overviewDevice00} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                        </div>
                                        <div className='device device02'>
                                        <ResponsiveImage
                                            file_path={img_path}
                                            file_name={`${img_name_screenshot_overview}02${img_name_screenshot_end}`}
                                            alt={t('pages.portfolio.hirosaki.body.alt')} />
                                            {/* <img src={overviewDevice02} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='td'>
                                    <p>{t('pages.portfolio.hirosaki.body.section_1.text.p3')}</p>
                                    <p>{t('pages.portfolio.hirosaki.body.section_1.text.p4')}</p>
                                </div>
                            </div>
                
                        </div>
                    </div>
                </section>
                <section className='project-design'>
                    <div class="container">
                        <h3>{t('pages.portfolio.hirosaki.body.section_2.title')}</h3>
                        <div className='content'>
                            <div className='content-fonts'>
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
                            <div className='content-colors'>
                                <div className='colors'>
                                    <div className='color color-main'>
                                        <div className='color-example'>
                                            <div className='color-content'></div>
                                        </div>
                                        <div className='color-title'>
                                            <div className='color-name'>{t('pages.portfolio.hirosaki.body.section_2.text.c1')}</div>
                                            <div className='color-val'>#FF4132</div>
                                        </div>
                                    </div>
                                    <div className='color color-back'>
                                        <div className='color-example'>
                                            <div className='color-content'></div>
                                        </div>
                
                                        <div className='color-title'>
                                            <div className='color-name'>{t('pages.portfolio.hirosaki.body.section_2.text.c2')}</div>
                                            <div className='color-val'>#FFFFFF</div>
                                        </div>
                                    </div>
                                    <div className='color color-text'>
                                        <div className='color-example'>
                                            <div className='color-content'></div>
                                        </div>
                                        <div className='color-title'>
                                            <div className='color-name'>{t('pages.portfolio.hirosaki.body.section_2.text.c3')}</div>
                                            <div className='color-val'>#202020</div>
                                        </div>
                                    </div>
                                    <div className='color color-ascent'>
                                        <div className='color-example'>
                                            <div className='color-content'></div>
                                        </div>
                                        <div className='color-title'>
                                            <div className='color-name'>{t('pages.portfolio.hirosaki.body.section_2.text.c4')}</div>
                                            <div className='color-val'>#FF9900</div>
                                        </div>
                                    </div>
                                    <div className='color color-hint'>
                                        <div className='color-example'>
                                            <div className='color-content'></div>
                                        </div>
                                        <div className='color-title'>
                                            <div className='color-name'>{t('pages.portfolio.hirosaki.body.section_2.text.c5')}</div>
                                            <div className='color-val'>#FFC200</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='key-features'>
                <div class="container">
                    <h3>{t('pages.portfolio.hirosaki.body.section_3.title')}</h3>
                    <div className='content'>
                        <div className='text'>
                            <div className='left'>
                            <HirosakiKeyFeature
                            title={t('pages.portfolio.hirosaki.body.section_3.text.p1.header')}
                            text={t('pages.portfolio.hirosaki.body.section_3.text.p1.text')}/>
                
                            <HirosakiKeyFeature
                            title={t('pages.portfolio.hirosaki.body.section_3.text.p2.header')}
                            text={t('pages.portfolio.hirosaki.body.section_3.text.p2.text')}/>
                
                            <HirosakiKeyFeature
                            title={t('pages.portfolio.hirosaki.body.section_3.text.p3.header')}
                            text={t('pages.portfolio.hirosaki.body.section_3.text.p3.text')}/>
                
                            <HirosakiKeyFeature
                            title={t('pages.portfolio.hirosaki.body.section_3.text.p4.header')}
                            text={t('pages.portfolio.hirosaki.body.section_3.text.p4.text')}/>
                            </div>
                            <div  className='right'>
                            <HirosakiKeyFeature
                            title={t('pages.portfolio.hirosaki.body.section_3.text.p5.header')}
                            text={t('pages.portfolio.hirosaki.body.section_3.text.p5.text')}/>
                
                            <HirosakiKeyFeature
                            title={t('pages.portfolio.hirosaki.body.section_3.text.p6.header')}
                            text={t('pages.portfolio.hirosaki.body.section_3.text.p6.text')}/>
                
                            <HirosakiKeyFeature
                            title={t('pages.portfolio.hirosaki.body.section_3.text.p7.header')}
                            text={t('pages.portfolio.hirosaki.body.section_3.text.p7.text')}/>
                
                            <HirosakiKeyFeature
                            title={t('pages.portfolio.hirosaki.body.section_3.text.p8.header')}
                            text={t('pages.portfolio.hirosaki.body.section_3.text.p8.text')}/>
                            </div>
                        </div>
                        <div className='imgs'>
                            <div className='keys-imgs-first keys-imgs'>
                                <div className='keys-img-first keys-img-01 keys-img'>
                                    <ResponsiveImage
                                            file_path={img_path}
                                            file_name={`${img_name_screenshot_key}01${img_name_screenshot_end}`}
                                            alt={t('pages.portfolio.hirosaki.body.alt')} />
                                    {/* <img src={keyDevice01} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                </div>
                                <div className='keys-img-first keys-img-02 keys-img'>
                                    <ResponsiveImage
                                            file_path={img_path}
                                            file_name={`${img_name_screenshot_key}02${img_name_screenshot_end}`}
                                            alt={t('pages.portfolio.hirosaki.body.alt')} />
                                    {/* <img src={keyDevice02} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                </div>
                                <div className='keys-img-first keys-img-03 keys-img'>
                                    <ResponsiveImage
                                            file_path={img_path}
                                            file_name={`${img_name_screenshot_key}03${img_name_screenshot_end}`}
                                            alt={t('pages.portfolio.hirosaki.body.alt')} />
                                    {/* <img src={keyDevice03} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                </div>
                            </div>
                            <div className='keys-imgs-second keys-imgs'>
                                <div className='keys-img-second keys-img-04 keys-img'>
                                    <ResponsiveImage
                                            file_path={img_path}
                                            file_name={`${img_name_screenshot_key}04${img_name_screenshot_end}`}
                                            alt={t('pages.portfolio.hirosaki.body.alt')} />
                                    {/* <img src={keyDevice04} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                </div>
                                <div className='keys-img-second keys-img-05 keys-img'>
                                    <ResponsiveImage
                                            file_path={img_path}
                                            file_name={`${img_name_screenshot_key}05${img_name_screenshot_end}`}
                                            alt={t('pages.portfolio.hirosaki.body.alt')} />
                                    {/* <img src={keyDevice05} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                </div>
                                <div className='keys-img-second keys-img-06 keys-img'>
                                    <ResponsiveImage
                                            file_path={img_path}
                                            file_name={`${img_name_screenshot_key}06${img_name_screenshot_end}`}
                                            alt={t('pages.portfolio.hirosaki.body.alt')} />
                                    {/* <img src={keyDevice06} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <section className='screenshots'>
                <div class="container">
                    <h3>{t('pages.portfolio.hirosaki.body.section_4.title')}</h3>
                    <div className='content'>
                        <div className='screen-imgs'>
                            <div className='screen-img'>
                                <div className=' screen-img-01'>
                                    <ResponsiveImage
                                        file_path={img_path}
                                        file_name={`${img_name_screenshot}01${img_name_screenshot_end}`}
                                        alt={t('pages.portfolio.hirosaki.body.alt')} />
                                    {/* <img src={screenDevice01} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                </div>
                            </div>
                            <div className='screen-img'>
                                <div className=' screen-img-02 '>
                                <ResponsiveImage
                                        file_path={img_path}
                                        file_name={`${img_name_screenshot}02${img_name_screenshot_end}`}
                                        alt={t('pages.portfolio.hirosaki.body.alt')} />
                                    {/* <img src={screenDevice02} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                </div>
                            </div>
                            <div className='screen-img'>
                                <div className=' screen-img-04 '>
                                <ResponsiveImage
                                        file_path={img_path}
                                        file_name={`${img_name_screenshot}03${img_name_screenshot_end}`}
                                        alt={t('pages.portfolio.hirosaki.body.alt')} />
                                    {/* <img src={screenDevice03} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <section className='tools'>
                    <div class="container">
                        <h3>{t('pages.portfolio.hirosaki.body.section_5.title')}</h3>
                        <div className='content'>
                            <HirosakiTool
                                title={t('pages.portfolio.hirosaki.body.section_5.text.p1.header')}
                                text={t('pages.portfolio.hirosaki.body.section_5.text.p1.text')} />
                            <HirosakiTool
                                title={t('pages.portfolio.hirosaki.body.section_5.text.p2.header')}
                                text={t('pages.portfolio.hirosaki.body.section_5.text.p2.text')} />
                            <HirosakiTool
                                title={t('pages.portfolio.hirosaki.body.section_5.text.p3.header')}
                                text={t('pages.portfolio.hirosaki.body.section_5.text.p3.text')} />
                            <HirosakiTool
                                title={t('pages.portfolio.hirosaki.body.section_5.text.p4.header')}
                                text={t('pages.portfolio.hirosaki.body.section_5.text.p4.text')} />
                            <HirosakiTool
                                title={t('pages.portfolio.hirosaki.body.section_5.text.p5.header')}
                                text={t('pages.portfolio.hirosaki.body.section_5.text.p5.text')} />
                            <HirosakiTool
                                title={t('pages.portfolio.hirosaki.body.section_5.text.p6.header')}
                                text={t('pages.portfolio.hirosaki.body.section_5.text.p6.text')} />
                
                
                        </div>
                    </div>
                </section>
                <section className='img-sushi-01'></section>
                <section className='role'>
                    <div class="container">
                        <h3>{t('pages.portfolio.hirosaki.body.section_6.title')}</h3>
                        <div className='content'>
                            <div className='context-role'>
                                <HirosakiRole
                                    title={t('pages.portfolio.hirosaki.body.section_6.text.p1.header')}
                                    text= {t('pages.portfolio.hirosaki.body.section_6.text.p1.text')}
                                    align='right' />
                                <HirosakiRole
                                    title={t('pages.portfolio.hirosaki.body.section_6.text.p2.header')}
                                    text= {t('pages.portfolio.hirosaki.body.section_6.text.p2.text')}
                                    align='left'/>
                
                            </div>
                            <div className='context-role'>
                                <HirosakiRole
                                    title={t('pages.portfolio.hirosaki.body.section_6.text.p3.header')}
                                    text= {t('pages.portfolio.hirosaki.body.section_6.text.p3.text')}
                                    align='right' />
                                <HirosakiRole
                                    title={t('pages.portfolio.hirosaki.body.section_6.text.p4.header')}
                                    text= {t('pages.portfolio.hirosaki.body.section_6.text.p4.text')}
                                    align='left'/>
                            </div>
                            <div className='context-role'>
                                <HirosakiRole
                                    title=''
                                    text=""
                                    align='right'/>
                                <HirosakiRole
                                    title={t('pages.portfolio.hirosaki.body.section_6.text.p5.header')}
                                    text= {t('pages.portfolio.hirosaki.body.section_6.text.p5.text')}
                                    align='left'/>
                
                            </div>
                        </div>
                    </div>
                </section>
                <section className='img-sushi-02'></section>
                <section className='sol'>
                    <div class="container">
                        <h3>{t('pages.portfolio.hirosaki.body.section_7.title')}</h3>
                        <div className='content'>
                            <div className='desc'>
                                <div className='context-sol-left'>
                                    <HirosakiSol
                                        title={t('pages.portfolio.hirosaki.body.section_7.text.p1.header')}
                                        text= {t('pages.portfolio.hirosaki.body.section_7.text.p1.text')}
                                        align='right' />
                                    <HirosakiSol
                                        title={t('pages.portfolio.hirosaki.body.section_7.text.p2.header')}
                                        text= {t('pages.portfolio.hirosaki.body.section_7.text.p2.text')}
                                        align='right' />
                                </div>
                                <div className='context-sol-right'>
                                    <HirosakiSol
                                        title={t('pages.portfolio.hirosaki.body.section_7.text.p3.header')}
                                        text= {t('pages.portfolio.hirosaki.body.section_7.text.p3.text')}
                                        align='left'/>
                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='res'>
                    <div className='container'>
                        <h3>{t('pages.portfolio.hirosaki.body.section_8.title')}</h3>
                        <div className='content'>
                            <div className='context-res-left'>
                                <HirosakiRes
                                    title={t('pages.portfolio.hirosaki.body.section_8.text.p1.header')}
                                    text= {t('pages.portfolio.hirosaki.body.section_8.text.p1.text')}
                                    align='right'
                                    num='1' />
                                <HirosakiRes
                                    title={t('pages.portfolio.hirosaki.body.section_8.text.p2.header')}
                                    text= {t('pages.portfolio.hirosaki.body.section_8.text.p2.text')}
                                    align='right'
                                    num='2' />
                                <HirosakiRes
                                    title={t('pages.portfolio.hirosaki.body.section_8.text.p3.header')}
                                    text= {t('pages.portfolio.hirosaki.body.section_8.text.p3.text')}
                                    align='right'
                                    num='3' />
                            </div>
                            <div className='context-res-right'>
                                <div className='res-img '>
                                <ResponsiveImage
                                            file_path={img_path}
                                            file_name={`${img_name_screenshot}02${img_name_screenshot_end}`}
                                            alt={t('pages.portfolio.hirosaki.body.alt')} />
                                    {/* <img src={screenDevice02} alt={t('pages.portfolio.hirosaki.body.alt')} /> */}
                                </div>
                
                            </div>
                        </div>
                    </div>
                </section>
                <section className='end'>
                    <div className="container">
                    {t('pages.portfolio.TFW')}
                    </div>
                </section>
            </div>

            <HomeContact />
        </div>
    );
}



export default PortfolioHirosaki;
