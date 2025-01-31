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

const PortfolioKinuLiutas = () => {
    const { t } = useTranslation();

    return (
        <div className='portfolio-page page-content kinuliutas'>
            <section className='portfolio-header'>
                <h3>Website Development for a Dog Kennel</h3>
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
                            <h1>Tibetan Mastiff Kennel</h1>
                            <div class="div-gerb">
                                <img className="img-gerb"
                                    src={imgKinuLiutas}
                                    alt='Kinu Liutas'
                                />
                            </div>
                            <h4>Project Description</h4>
                            <p>The project focused on creating a unique website design for a Tibetan Mastiff kennel. The main goal was to develop a visually appealing, intuitive, and functional interface that highlights the exclusivity of the breed.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='section-1'>
                <div class="container">
                    <h3>Preparation and Research</h3>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='note'>Diagram illustrating the segmentation of Tibetan Mastiff website audiences:</p>
                            <div class="div-diagram">
                                <img className="img-diagram"
                                    src={imgDiagram}
                                />
                            </div>
                            <div className='diagramLegend'>
                                <p className='note'>Categories of Audience:</p>
                                <div className='row'>
                                    <div className='col-1'>
                                        <div className='color color-1'></div>
                                    </div>
                                    <div className='col-9'>
                                        <p>Potential Owners (50%)</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-1'>
                                        <div className='color color-2'></div>
                                    </div>
                                    <div className='col-9'>
                                        <p>Breeders (30%)</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-1'>
                                        <div className='color color-3'></div>
                                    </div>
                                    <div className='col-9'>
                                        <p>Breed Enthusiasts (20%)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <h4>We began with an analysis of:</h4>
                            <p><span>Website Goals: </span>Inform visitors about the kennel, showcase the beauty and merits of the dogs, and create a convenient platform for connecting with the owner.</p>
                            <p><span>Target Audience: </span>People interested in the Tibetan Mastiff breed, potential owners, and breeders.</p>
                            <p><span>Competitors: </span>Analyzed similar kennel websites to highlight the unique features of the Tibetan Mastiff website and enhance the user experience.</p>
                            <div className='table'>
                                <p className='note'>Table comparing competitor websites based on key parameters</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th style={{width:"100%"}}>Website</th>
                                            <th >Design</th>
                                            <th className='td'>Navigation Usability</th>
                                            <th className='td'>Breed Information</th>
                                            <th className='td'>Contact Information</th>
                                        </tr>
                                        <tr>
                                            <td>tibetan-mastiff.ru</td>
                                            <td>7/10 (Traditional)</td>
                                            <td className='td'>8/10</td>
                                            <td className='td'>9/10</td>
                                            <td className='td'>9/10</td>
                                        </tr>
                                        <tr>
                                            <td>tmnnov.ru</td>
                                            <td>8/10 (Modern)</td>
                                            <td className='td'>7/10</td>
                                            <td className='td'>8/10</td>
                                            <td className='td'>8/10</td>
                                        </tr>
                                        <tr>
                                            <td>mastif.info</td>
                                            <td>6/10 (Minimalistic)</td>
                                            <td className='td'>7/10</td>
                                            <td className='td'>7/10</td>
                                            <td className='td'>7/10</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p><span>Outcome: </span>A clear brief was created, outlining the requirements for the site's design and functionality.</p>

                        </div>
                    </div>
                </div>
            </section>

            <section className='section-2'>
                <div className='container'>
                    <h3>Design Concept</h3>
                
                    <div className='row'>
                        <div className='col-6'>
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
                        <div className='col-6'>
                            <p>During the concept development phase, a Moodboard was created, featuring elements associated with warmth, trust, and natural aesthetics. The color palette consisted of natural shades: green, beige, and brown, creating a comfortable and cozy atmosphere for users.</p>
                            <div class="color-palette">
                                <p className='note'>Color palette:</p>
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
                            <p><span>Outcome: </span>A style and tone were developed to convey the brand's values and ensure a comfortable user experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-3'>
                <div className='container'>
                    <h3>Prototyping</h3>
                    <div className='row prototyping'>
                        <div className='col-6'>
                            <img 
                                src={imgWireframe}
                                alt='Wireframe'
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                        <div className='col-6'>
                            <p>Wireframes of key pages were designed to clarify the structure and functional elements of the site. Additionally, animations were implemented to demonstrate interactive elements.</p>
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
                            <p><span>Outcome: </span>A solid foundation was established for the visual and functional implementation of the website.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-4'>
                <div className='container final'>
                    <h3>Final Website Version</h3>
                    <div className='row'>
                        <div className='col-6'></div>
                        <div className='col-6'>The completed website combines an intuitive interface, stylish design, and robust functionality. Key features include cards with puppy information, detailed breed descriptions, and kennel contact details.</div>
                    </div>
                    <img 
                        alt='Final Image'
                        src={imgFinal_00}
                        style={{ maxWidth: '100%' }}
                    />
                    <div className='row'>
                        <div className='col-6'>
                            <img 
                                alt='Final Image'
                                src={imgFinal_11}
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                        <div className='col-6'>
                            <img 
                                alt='Final Image'
                                src={imgFinal_12}
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <img 
                                alt='Final Image'
                                src={imgFinal_21}
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                        <div className='col-6'>
                            <img 
                                alt='Final Image'
                                src={imgFinal_22}
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
                            The mobile version was optimized to ensure a seamless experience across devices:
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-4'>
                            <img 
                                alt='Mobile'
                                src={imgMobile_00}
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                        <div className='col-8'>
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
                            <p><span>Outcome: </span>A polished final product that emphasizes the kennel's uniqueness and meets the needs of the target audience.</p>
                        
                        </div>
                    </div>

                </div>
            </section>

            <section className='section-end'>
                <div className='container'><h3>Thanks For Watching</h3></div>
            </section>
        </div>
    );
}

export default PortfolioKinuLiutas;