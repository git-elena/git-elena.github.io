import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/PortfolioFastTemplate.css'

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

const PortfolioFastTemplate = () => {
  const { t } = useTranslation();

  return (
    <div className='portfolio-page page-content templates'>
        <section className='portfolio-header'>
                <h1>Fast and Efficient Website Development{'\n'}
                Using Templates and Custom Designs</h1>
                <div className='container'>
                    <div className='row'>
                        
                        <div className='col-6 overview'>
                            <div>
                                <h4> Overview </h4>
                                <p>In today’s fast-paced digital world, businesses often require a swift and reliable approach to launching their online presence. This case study showcases a series of websites that were successfully developed within tight deadlines using ready-made templates, custom client designs, or reference examples provided by the client. Our streamlined development process allowed for rapid deployment without sacrificing quality or functionality.</p>
                            </div>
                        </div>
                        
                        <div className='col-6'>
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
            <h4>Development Approach</h4>
            <div className=' grid-container'>
                <div className='grid-item image-item'>
                    <img
                        src={imgApproach}
                        alt='Fast Template Development Approach'
                        className="img-approach"
                        style={{ maxWidth: '100%' }}
                    />
                </div>
                <div className=' grid-item text-item'>
                    <ul>
                        <li><strong>Leveraging Ready-Made Templates</strong> - We efficiently adapted and customized existing templates, enabling faster development while maintaining a professional and polished look.</li>
                        <li><strong>Implementing Custom Client Designs</strong> - When clients provided their own designs, we ensured precise implementation according to modern UX/UI standards to deliver visually appealing and user-friendly interfaces.</li>
                        <li><strong>Developing Based on Reference Examples</strong> - For projects where clients provided inspiration or reference sites, we recreated the desired look and feel while incorporating tailored adjustments to meet business needs.</li>
                        <li><strong>Ensuring Full Responsiveness</strong> - Each website was designed and tested for compatibility across various devices, ensuring seamless performance on desktops, tablets, and smartphones.</li>
                        <li><strong>Optimizing for Speed and SEO</strong> - We applied best practices in web performance optimization, including fast-loading assets, clean code structures, and search engine-friendly configurations.</li>
                        <li><strong>Integrating Essential Features</strong> - Functional elements such as contact forms, social media links, and analytics tracking were set up to enhance user engagement and data-driven decision-making.</li>
                    </ul>
                </div>
            </div>
        </div>
        </section>

        <section className='outcomes'>
            <div className="container">
                <h4>Key Outcomes</h4>
                <ul>
                    <li><strong>Rapid Deployment</strong> - The websites were successfully launched in minimal timeframes without compromising functionality or user experience.</li>
                    <li><strong>Cost-Efficient Solutions</strong> – By leveraging templates and predefined frameworks, we minimized development costs while maximizing quality.</li>
                    <li><strong>Scalable and Adaptable Results</strong> – Clients received fully operational web solutions that could be expanded or customized further as their business evolved.</li>
                </ul>
            </div>
        </section>

        <section className='project'>
            <div className="container">
                <h4>Project Showcase</h4>
                <div className='row'>
                    <div className='col-6'></div>
                    <div className='col-6'>
                        <p className='note'>
                            A unique design crafted using client-provided examples as inspiration while maintaining originality and brand identity:
                        </p>
                    </div>
                </div>
                <div class="items">
                    <div className='row item'>
                        <div className='col-6'>
                            <img
                                src={imgDesigner}
                                alt='Designer Project'
                                className="img-header"
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                        <div className='col-6'>
                            <div class="proj">
                                <h6>Designer</h6>
                                <p>
                                    A humorous yet professional web design that engages clients. Uses animations and bright colors for memorability.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row item'>
                        <div className='col-6'>
                            <div class="proj">
                                <h6>Tribo</h6>
                                <p>
                                    A minimalist website that showcases the company's creative approach to architectural metal projects. Custom design created using client-provided references as inspiration.
                                </p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <img
                                src={imgTribo}
                                alt='Tribo Project'
                                className="img-header"
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                    </div>
                    <div className='row item'>
                        <div className='col-6'>
                            <img
                                src={imgArabora}
                                alt='Arabora Project'
                                className="img-header"
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                        <div className='col-6'>
                            <div class="proj">
                                <h6>Arabora</h6>
                                <p>
                                    A website design that emphasizes the quality and uniqueness of products. Simple navigation to attract potential clients.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row item'>
                        <div className='col-6'>
                            <div class="proj">
                                <h6>Czech Center</h6>
                                <p>
                                    A website designed for employment opportunities in the Czech Republic. Features a clean, professional layout that ensures easy navigation for job seekers and employers.
                                </p>
                                <p>
                                    In addition to the website design, a custom logo was also developed to establish a strong brand identity.
                                </p>
                            </div>
                        </div>
                        <div className='col-6'>
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
                        <p className='note'>
                            Websites built precisely according to the clients’ designs, ensuring full adherence to their visions and specifications:
                        </p>
                    </div>
                </div>

                <div class="items-fast">

                    <div className='row'>
                        <div className='col-6'>
                            <div className='item-fast'>
                                <img
                                    src={imgElena}
                                    alt='Olena Project'
                                    className="img-header"
                                    style={{ maxWidth: '100%' }}
                                />
                                <h6>Omelchenko Olena</h6>
                                <ul>
                                    <li>A makeup artist's website from Kyiv.</li>
                                    <li>Created on MODx Revolution.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-6'>
                        <img
                                    src={imgGV}
                                    alt='Grand Vision Project'
                                    className="img-header"
                                    style={{ maxWidth: '100%' }}
                                />
                                <h6>GV (Grand Vision)</h6>
                                <ul>
                                    <li>Corporate website for an advertising company in Spain.</li>
                                    <li>Built on MODx Revolution.</li>
                                </ul>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            <div className='item-fast'>
                                <img
                                    src={imgKRP}
                                    alt='Kyiv River Port Project'
                                    className="img-header"
                                    style={{ maxWidth: '100%' }}
                                />
                                <h6>KRP (Kyiv River Port)</h6>
                                <ul>
                                    <li>Official website of the Kyiv River Port.</li>
                                    <li>Built on MODx Revolution.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-6'>
                        <img
                                    src={imgMGroup}
                                    alt='M-Group Project'
                                    className="img-header"
                                    style={{ maxWidth: '100%' }}
                                />
                                <h6>M GROUP</h6>
                                <ul>
                                    <li>An engineering and construction company.</li>
                                    <li>Built on MODx Revolution.</li>
                                </ul>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section className='pre-end'>
            <div className="container">
                <p>
                    This case study highlights our ability to deliver high-quality web solutions quickly and effectively. By leveraging industry best practices, we ensure that businesses not only get online swiftly but also have a robust digital foundation to grow and succeed.
                </p>
            </div>
        </section>

        <section className='end'>
            <div className="container">
                Thanks For Watching               
            </div>
        </section>

    </div>);
}

export default PortfolioFastTemplate;