import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../src/pages/css/PortfolioKinuLiutas.css';

import imgHeader from '../../images/portfolio/kinuliutas/header-image.jpg'
import imgKinuLiutas from '../../images/portfolio/kinuliutas/Logo-gerb.png'
import imgDiagram from '../../images/portfolio/kinuliutas/diagram.jpg'

import imgMoodboard_1 from '../../images/portfolio/kinuliutas/Moodboard_1.jpg'
import imgMoodboard_2 from '../../images/portfolio/kinuliutas/Moodboard_2.jpg'

import imgWireframe from '../../images/portfolio/kinuliutas/Wireframe.png'

import imgInteractive_1 from '../../images/portfolio/kinuliutas/interactive_00.gif'
import imgInteractive_2 from '../../images/portfolio/kinuliutas/interactive_01.gif'

import imgFinal_00 from '../../images/portfolio/kinuliutas/final_00.jpg'
import imgFinal_11 from '../../images/portfolio/kinuliutas/final_11.jpg'
import imgFinal_12 from '../../images/portfolio/kinuliutas/final_12.jpg'
import imgFinal_21 from '../../images/portfolio/kinuliutas/final_21.jpg'
import imgFinal_22 from '../../images/portfolio/kinuliutas/final_22.jpg'
import imgFinal_30 from '../../images/portfolio/kinuliutas/final_30.jpg'

import imgMobile_00 from '../../images/portfolio/kinuliutas/mobile_00.jpg'
import imgMobile_01 from '../../images/portfolio/kinuliutas/mobile_01.jpg'
import imgMobile_02 from '../../images/portfolio/kinuliutas/mobile_02.jpg'
import imgMobile_03 from '../../images/portfolio/kinuliutas/mobile_03.jpg'
import HomeContact from '../../components/HomeSections/HomeContact';

const PortfolioKinuLiutas = () => {
    const { t } = useTranslation();

    return (
        <div className='portfolio-page page-content kinuliutas'>
            <section className='portfolio-header'>
                
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                        <img
                            src={imgHeader}
                            alt='Tibetan Mastiffs'
                            className="img-header"
                            style={{ maxWidth: '100%' }}
                        />
                        </div>
                        <div className='col-6'>
                            <h3>{t('pages.portfolio.TM.subtitle')}</h3>
                            
                            <div class="div-gerb">
                                <img className="img-gerb"
                                    src={imgKinuLiutas}
                                    alt='Kinu Liutas'
                                />
                            </div>

                            <h1>{t('pages.portfolio.TM.title')}</h1>
                            <h4 className='d-none d-md-block'>{t('pages.portfolio.TM.maintitle')}</h4>
                            <p>{t('pages.portfolio.TM.description')}</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='section-1'>
                <div class="container">
                    <h3>{t('pages.portfolio.TM.body.section_1.title')}</h3>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='note'>{t('pages.portfolio.TM.body.section_1.diagram.title')}</p>
                            <div class="div-diagram">
                                <img className="img-diagram mt-3 mt-sm-0 mb-3 mb-sm-0"
                                    src={imgDiagram}
                                    alt='Diagram'
                                />
                            </div>
                            <div className='diagramLegend'>
                                <p className='note'>{t('pages.portfolio.TM.body.section_1.diagram.legend.title')}</p>
                                <div className='row'>
                                    <div className='col-3 col-md-2 col-lg-1'>
                                        <div className='color color-1'></div>
                                    </div>
                                    <div className='col-9'>
                                        <p>{t('pages.portfolio.TM.body.section_1.diagram.legend.p1')}</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-3 col-md-2 col-lg-1'>
                                        <div className='color color-2'></div>
                                    </div>
                                    <div className='col-9'>
                                        <p>{t('pages.portfolio.TM.body.section_1.diagram.legend.p2')}</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-3 col-md-2 col-lg-1'>
                                        <div className='color color-3'></div>
                                    </div>
                                    <div className='col-9'>
                                        <p>{t('pages.portfolio.TM.body.section_1.diagram.legend.p3')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <h4>{t('pages.portfolio.TM.body.section_1.text.title')}</h4>
                            <p><span>{t('pages.portfolio.TM.body.section_1.text.p1.title')} </span>{t('pages.portfolio.TM.body.section_1.text.p1.text')}</p>
                            <p><span>{t('pages.portfolio.TM.body.section_1.text.p2.title')} </span>{t('pages.portfolio.TM.body.section_1.text.p2.text')}</p>
                            <p><span>{t('pages.portfolio.TM.body.section_1.text.p3.title')} </span>{t('pages.portfolio.TM.body.section_1.text.p3.text')}</p>
                            <div className='table d-none d-md-block'>
                                <p className='note'>{t('pages.portfolio.TM.body.section_1.text.table.title')}</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th style={{width:"100%"}}>{t('pages.portfolio.TM.body.section_1.text.table.col_1.title')}</th>
                                            <th >{t('pages.portfolio.TM.body.section_1.text.table.col_2.title')}</th>
                                            <th className='td'>{t('pages.portfolio.TM.body.section_1.text.table.col_3.title')}</th>
                                            <th className='td'>{t('pages.portfolio.TM.body.section_1.text.table.col_4.title')}</th>
                                            <th className='td'>{t('pages.portfolio.TM.body.section_1.text.table.col_5.title')}</th>
                                        </tr>
                                        <tr>
                                            <td>tibetan-mastiff.ru</td>
                                            <td>7/10 ({t('pages.portfolio.TM.body.section_1.text.table.col_2.r1')})</td>
                                            <td className='td'>8/10</td>
                                            <td className='td'>9/10</td>
                                            <td className='td'>9/10</td>
                                        </tr>
                                        <tr>
                                            <td>tmnnov.ru</td>
                                            <td>8/10 ({t('pages.portfolio.TM.body.section_1.text.table.col_2.r2')})</td>
                                            <td className='td'>7/10</td>
                                            <td className='td'>8/10</td>
                                            <td className='td'>8/10</td>
                                        </tr>
                                        <tr>
                                            <td>mastif.info</td>
                                            <td>6/10 ({t('pages.portfolio.TM.body.section_1.text.table.col_2.r3')})</td>
                                            <td className='td'>7/10</td>
                                            <td className='td'>7/10</td>
                                            <td className='td'>7/10</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p  className='d-none d-md-block'><span>{t('pages.portfolio.TM.body.section_1.text.p4.title')} </span>{t('pages.portfolio.TM.body.section_1.text.p4.text')}</p>

                        </div>
                    </div>
                    
                    <div className='table d-md-none d-block'>
                        <p className='note'>{t('pages.portfolio.TM.body.section_1.text.table.title')}</p>
                        <table>
                            <tbody>
                                <tr>
                                <th style={{width:"100%"}}>{t('pages.portfolio.TM.body.section_1.text.table.col_1.title')}</th>
                                    <th >{t('pages.portfolio.TM.body.section_1.text.table.col_2.title')}</th>
                                    <th className='td'>{t('pages.portfolio.TM.body.section_1.text.table.col_3.title')}</th>
                                    <th className='td'>{t('pages.portfolio.TM.body.section_1.text.table.col_4.title')}</th>
                                    <th className='td'>{t('pages.portfolio.TM.body.section_1.text.table.col_5.title')}</th>
                                </tr>
                                <tr>
                                    <td>tibetan-mastiff.ru</td>
                                    <td>7/10 ({t('pages.portfolio.TM.body.section_1.text.table.col_2.r1')})</td>
                                    <td className='td'>8/10</td>
                                    <td className='td'>9/10</td>
                                    <td className='td'>9/10</td>
                                </tr>
                                <tr>
                                    <td>tmnnov.ru</td>
                                    <td>8/10 ({t('pages.portfolio.TM.body.section_1.text.table.col_2.r2')})</td>
                                    <td className='td'>7/10</td>
                                    <td className='td'>8/10</td>
                                    <td className='td'>8/10</td>
                                </tr>
                                <tr>
                                    <td>mastif.info</td>
                                    <td>6/10 ({t('pages.portfolio.TM.body.section_1.text.table.col_2.r3')})</td>
                                    <td className='td'>7/10</td>
                                    <td className='td'>7/10</td>
                                    <td className='td'>7/10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <p  className='d-md-none d-block'><span>{t('pages.portfolio.TM.body.section_1.text.p4.title')} </span>{t('pages.portfolio.TM.body.section_1.text.p4.text')}</p>

                </div>
            </section>

            <section className='section-2'>
                <div className='container'>
                    <h3>{t('pages.portfolio.TM.body.section_2.title')}</h3>
                
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='row moodboard'>
                                <div className='col-6'>
                                    <img 
                                        alt='Moodboard'
                                        src={imgMoodboard_1}
                                        style={{ maxWidth: '100%' }}
                                    />
                                </div>
                                <div className='col-6'>
                                <img 
                                        alt='Moodboard'
                                        src={imgMoodboard_2}
                                        style={{ maxWidth: '100%' }}
                                    />
                                </div>
                                <div className='col-6'></div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3 mt-md-0'>
                            <p>{t('pages.portfolio.TM.body.section_2.text')}</p>
                            <div class="color-palette">
                                <p className='note'>{t('pages.portfolio.TM.body.section_2.palette')}</p>
                                <div className='row palette'>
                                    <div className='col-6'>
                                        <div className='color-1 color'>#0A4F59</div>
                                        <div className='color-3 color'>#5e0b05</div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='color-2 color'>#91680e</div>
                                        <div className='color-4 color'>#f4ad00</div>
                                    </div>
                                </div>
                            </div>
                            <p><span>{t('pages.portfolio.TM.body.section_2.p.title')} </span>{t('pages.portfolio.TM.body.section_2.p.text')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-3'>
                <div className='container'>
                    <h3>{t('pages.portfolio.TM.body.section_3.title')}</h3>
                    <div className='row prototyping'>
                        <div className='col-md-6'>
                            <img 
                                src={imgWireframe}
                                alt='Wireframe'
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                        <div className='col-md-6 mt-3 mt-md-0'>
                            <p>{t('pages.portfolio.TM.body.section_3.text')}</p>
                            <div className='row interactive'>
                                <div className='col-6'>
                                    <img 
                                        alt='Interactive'
                                        src={imgInteractive_1}
                                        style={{ maxWidth: '100%' }}
                                    />
                                </div>
                                <div className='col-6'>
                                    <img 
                                        alt='Interactive'
                                        src={imgInteractive_2}
                                        style={{ maxWidth: '100%' }}
                                    />
                                </div>
                            </div>
                            <p><span>{t('pages.portfolio.TM.body.section_3.p.title')} </span>{t('pages.portfolio.TM.body.section_3.p.text')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-4'>
                <div className='container final'>
                    <h3>{t('pages.portfolio.TM.body.section_4.title')}</h3>
                    <div className='row'>
                        <div className='col-6'></div>
                        <div className='col-6'><p>{t('pages.portfolio.TM.body.section_4.text_1')}</p></div>
                    </div>
                    <img
                        alt='Final Image'
                        src={imgFinal_00}
                        style={{ maxWidth: '100%' }}
                    />
                    <div className='row'>
                        <div className='col-md-6'>
                            <img 
                                alt='Final Image'
                                src={imgFinal_11}
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                        <div className='col-md-6'>
                            <img 
                                alt='Final Image'
                                src={imgFinal_12}
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img 
                                alt='Final Image'
                                src={imgFinal_22}
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                        <div className='col-md-6'>
                            <img 
                                alt='Final Image'
                                src={imgFinal_21}
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                    </div>
                    <img 
                        alt='Final Image'
                        src={imgFinal_30}
                        style={{ maxWidth: '100%' }}
                    />
                    <div className='row'>
                        <div className='col-6'></div>
                        <div className='col-6 mt-3'>
                            <p>{t('pages.portfolio.TM.body.section_4.text_2')}</p>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='final-00'
                                alt='Mobile'
                                src={imgMobile_00}
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                        <div className='col-md-8'>
                            <div className='row mobiles'>
                                <div className='col-4'>
                                    <img 
                                        alt='Mobile'
                                        src={imgMobile_01}
                                        style={{ maxWidth: '100%' }}
                                    />
                                </div>
                                <div className='col-4'>
                                    <img 
                                        alt='Mobile'
                                        src={imgMobile_02}
                                        style={{ maxWidth: '100%' }}
                                    />
                                </div>
                                <div className='col-4'>
                                    <img 
                                        alt='Mobile'
                                        src={imgMobile_03}
                                        style={{ maxWidth: '100%' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row out'>
                        <div className='col-6'></div>
                        <div className='col-6'>
                            <p><span>{t('pages.portfolio.TM.body.section_4.p.title')} </span>{t('pages.portfolio.TM.body.section_4.p.text')}</p>
                        
                        </div>
                    </div>

                </div>
            </section>

            <section className='end'>
                <div className='container'>{t('pages.portfolio.TFW')}</div>
            </section>

            <HomeContact />
        </div>
    );
}

export default PortfolioKinuLiutas;