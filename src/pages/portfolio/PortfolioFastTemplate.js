import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/PortfolioFastTemplate.css'

import HomeContact from '../../components/HomeSections/HomeContact';

import imgHeader from '../../images/portfolio/templates/YBI_iPad.png'
import imgApproach from '../../images/portfolio/templates/approach.jpg'

import imgDesigner from '../../images/portfolio/templates/Designer.png'
import imgTribo from '../../images/portfolio/templates/Tribo.png'
import imgArabora from '../../images/portfolio/templates/Arabora.png'
import imgCzechCenter from '../../images/portfolio/templates/CzechCenter.png'

import imgElena from '../../images/portfolio/templates/elena-style.jpg'
import imgGV from '../../images/portfolio/templates/gran-vision.jpg'
import imgKRP from '../../images/portfolio/templates/krp.jpg'
import imgMGroup from '../../images/portfolio/templates/m-group.jpg'
import WebsiteModX from '../../components/PagePortfolio/PortfolioFastTemplate/WebsiteModX'

import imgFull_designer from '../../images/portfolio/templates/fullScreenshot/YBI.jpg'
import imgFull_tribo from '../../images/portfolio/templates/fullScreenshot/Tribo.jpg'
import ImageFullView from '../../components/ImageFullView';

const PortfolioFastTemplate = () => {
  const { t } = useTranslation();

  return (
    <div className='portfolio-page page-content templates'>
        <section className='portfolio-header'>
                <h1>{t('pages.portfolio.template.title')}</h1>
                <div className='container'>
                    <div className='row'>
                        
                        <div className='col-md-6 overview'>
                            <div>
                                <h4>{t('pages.portfolio.template.section_1.title')}</h4>
                                <p>{t('pages.portfolio.template.section_1.text')}</p>
                            </div>
                        </div>
                        
                        <div className='col-md-6'>
                            <img
                                src={imgHeader}
                                alt='Fast Template YBI'
                                className="img-header"
                                style={{ maxWidth: '100%' }}
                            />
                        </div>

                        
                    </div>
                </div>
        </section>

        <section className='approach'>
        <div className="container">
            <h4>{t('pages.portfolio.template.section_2.title')}</h4>
            <div className=' grid-container'>
                <div className='d-none d-md-block grid-item image-item'>
                    <img
                        src={imgApproach}
                        alt='Fast Template Development Approach'
                        className="img-approach"
                        style={{ maxWidth: '100%' }}
                    />
                </div>
                <div className=' grid-item text-item'>
                    <ul>
                        <li><strong>{t('pages.portfolio.template.section_2.text.p1.title')}</strong> - {t('pages.portfolio.template.section_2.text.p1.text')}</li>
                        <li><strong>{t('pages.portfolio.template.section_2.text.p2.title')}</strong> - {t('pages.portfolio.template.section_2.text.p2.text')}</li>
                        <li><strong>{t('pages.portfolio.template.section_2.text.p3.title')}</strong> - {t('pages.portfolio.template.section_2.text.p3.text')}</li>
                        <li><strong>{t('pages.portfolio.template.section_2.text.p4.title')}</strong> - {t('pages.portfolio.template.section_2.text.p4.text')}</li>
                        <li><strong>{t('pages.portfolio.template.section_2.text.p5.title')}</strong> - {t('pages.portfolio.template.section_2.text.p5.text')}</li>
                        <li><strong>{t('pages.portfolio.template.section_2.text.p6.title')}</strong> - {t('pages.portfolio.template.section_2.text.p6.text')}</li>
                    </ul>
                </div>
            </div>
        </div>
        </section>

        <section className='outcomes'>
            <div className="container">
                <h4>{t('pages.portfolio.template.section_3.title')}</h4>
                <ul>
                    <li><strong>{t('pages.portfolio.template.section_3.text.p1.title')}</strong> - {t('pages.portfolio.template.section_3.text.p1.text')}</li>
                    <li><strong>{t('pages.portfolio.template.section_3.text.p2.title')}</strong> - {t('pages.portfolio.template.section_3.text.p2.text')}</li>
                    <li><strong>{t('pages.portfolio.template.section_3.text.p3.title')}</strong> - {t('pages.portfolio.template.section_3.text.p3.text')}</li>
                        
                </ul>
            </div>
        </section>

        <section className='project'>
            <div className="container">
                <h4>{t('pages.portfolio.template.section_4.title')}</h4>
                <div className='row'>
                    <div className='col-6'></div>
                    <div className='col-6'>
                        <p className='note'>
                            {t('pages.portfolio.template.section_4.text.p1')}
                        </p>
                    </div>
                </div>
                <div class="items">
                    <div className='row item'>
                        <div className='col-md-6'>
                            <ImageFullView 
                                name={'Designer Project'} 
                                thumbnail={imgDesigner}
                                fullImage={imgFull_designer}
                            />
                            {/* <img
                                src={imgDesigner}
                                alt='Designer Project'
                                className="img-header"
                                style={{ maxWidth: '100%' }}
                            /> */}
                        </div>
                        <div className='col-md-6'>
                            <div class="proj">
                                <h6>{t('pages.portfolio.template.section_4.case.c1.title')}</h6>
                                <p>
                                    {t('pages.portfolio.template.section_4.case.c1.text')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row item'>
                        <div className='col-md-6'>
                            <div class="proj">
                            <h6>{t('pages.portfolio.template.section_4.case.c2.title')}</h6>
                                <p>
                                    {t('pages.portfolio.template.section_4.case.c2.text')}
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <ImageFullView
                                name={'Tribo Project'}
                                thumbnail={imgTribo}
                                fullImage={imgFull_tribo}
                            />
                            {/* <img
                                src={imgTribo}
                                alt='Tribo Project'
                                className="img-header"
                                style={{ maxWidth: '100%' }}
                            /> */}
                        </div>
                    </div>
                    <div className='row item'>
                        <div className='col-md-6'>
                            <img
                                src={imgArabora}
                                alt='Arabora Project'
                                className="img-header"
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                        <div className='col-md-6'>
                            <div class="proj">
                                <h6>{t('pages.portfolio.template.section_4.case.c3.title')}</h6>
                                <p>
                                    {t('pages.portfolio.template.section_4.case.c3.text')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row item'>
                        <div className='col-md-6'>
                            <div class="proj">
                                <h6>{t('pages.portfolio.template.section_4.case.c4.title')}</h6>
                                <p>
                                    {t('pages.portfolio.template.section_4.case.c4.text.p1')}
                                </p>
                                <p>
                                    {t('pages.portfolio.template.section_4.case.c4.text.p2')}
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img
                                src={imgCzechCenter}
                                alt='Czech Center Project'
                                className="img-header"
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6'></div>
                    <div className='col-6'>
                        <p className='note mb-5'>
                        {t('pages.portfolio.template.section_4.text.p2')}
                        </p>
                    </div>
                </div>

                <div class="items-fast">

                    <div className='row'>
                        <div className='col-md-6'>
                            <WebsiteModX 
                                name={'Olena Project'} 
                                title={t('pages.portfolio.template.section_4.case.c5.title')}
                                text_1={t('pages.portfolio.template.section_4.case.c5.text.p1')}
                                text_2={t('pages.portfolio.template.section_4.case.c5.text.p2')}
                                link={'http://elena-style.com.ua/'}
                                img={imgElena}
                            />
                        </div>
                        <div className='col-md-6'>
                            <WebsiteModX
                                name={'Grand Vision Project'}
                                title={t('pages.portfolio.template.section_4.case.c6.title')}
                                text_1={t('pages.portfolio.template.section_4.case.c6.text.p1')}
                                text_2={t('pages.portfolio.template.section_4.case.c6.text.p2')}
                                link={'https://gran-vision.es/'}
                                img={imgGV}
                            />
                        </div> 
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <WebsiteModX
                                name={'Kyiv River Port Project'}
                                title={t('pages.portfolio.template.section_4.case.c7.title')}
                                text_1={t('pages.portfolio.template.section_4.case.c7.text.p1')}
                                text_2={t('pages.portfolio.template.section_4.case.c7.text.p2')}
                                link={'https://krp.ua/'}
                                img={imgKRP}
                            />
                        </div>
                        <div className='col-md-6'>
                            <WebsiteModX
                                name={'M-Group Project'}
                                title={t('pages.portfolio.template.section_4.case.c8.title')}
                                text_1={t('pages.portfolio.template.section_4.case.c8.text.p1')}
                                text_2={t('pages.portfolio.template.section_4.case.c8.text.p2')}
                                link={'https://m-group.org.ua/'}
                                img={imgMGroup}
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section className='pre-end'>
            <div className="container">
                <p>
                    {t('pages.portfolio.template.section_4.end')}
                </p>
            </div>
        </section>

        <section className='end'>
            <div className="container">
                {t('pages.portfolio.TFW')}              
            </div>
        </section>

        <HomeContact />
    </div>);
}

export default PortfolioFastTemplate;