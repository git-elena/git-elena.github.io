import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from './banner'

import bannerImg from '../../images/services/design/3_design.jpg'
import mainImg from '../../images/services/design/ui-ux-design.jpg'
import ServiceTitle from '../../components/HomeSections/Services/Title'
import HomeContact from '../../components/HomeSections/HomeContact'

const ServiceDesign = () => {
    const { t } = useTranslation()
    return (
        <div className='service-page page'>
            <Banner src={bannerImg}/>
            <section className='section p-5 mx-lg-5 row '>
                <div className='service-title'>
                    <ServiceTitle
                        title_color={t('pages.service.design.title.left')}
                        title_black={t('pages.service.design.title.right')}
                        text={t('pages.service.design.title.description')} />
                </div>

                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <h4>Creating a Unique Website Design: Step-by-Step Process</h4>
                        Let’s go through the key stages of this process:

<br/>
<br/>
1. Preparation and Research
<br/>
At the first stage, we gather all the necessary information:
<br/><br/>
Defining Goals: We set the objectives of the website and the outcomes you aim to achieve.
<br/>
Audience Analysis: We study the interests, behavior, and needs of your target audience.
<br/>
Competitor Research: We analyze competitors to create a unique proposition.
<br/>
Brief Creation: We document the key requirements and preferences in detail.
<br/>
<br/>
Result: a deep understanding of the project and visual direction.
<br/>
<br/>
2. Concept Development
<br/>
This stage marks the beginning of the creative process:
<br/><br/>
Sketches and Wireframes: We create sketches of the site’s structure for convenient element placement.
<br/>
Defining Style: We choose a color palette, fonts, and graphic elements.
<br/>
Moodboard: We compile visual ideas that inspire and align with the brand.
<br/><br/>
Result: an approved concept that will form the basis of the design.
<br/>
<br/>
3. Prototyping
<br/>
We move on to creating an interactive prototype:
<br/><br/>
Interactive Design: We display the layout of elements and user interaction with the interface.
<br/>
UX Testing: We check how convenient the user journey (User Flow) is.
<br/><br/>
Result: a functional prototype showing how the website will work.
<br/>
<br/>
4. Visual Design Creation
<br/>
The main stage of developing a unique design:
<br/><br/>
Homepage: We establish the style and atmosphere of the site.
<br/>
Internal Pages: We design pages in a unified style.
<br/>
UI Elements: We create buttons, forms, icons, and other interface elements.
<br/><br/>
Result: a professional mockup ready for implementation.
<br/>
<br/>
5. Review and Approval
<br/>
We take all your feedback into account:
<br/><br/>
Feedback Collection: We gather comments from the client.
<br/>
Final Adjustments: We refine the design to fully meet your expectations.
<br/><br/>
Result: the final design ready to be handed over to developers.
<br/>
<br/>
6. Handover to Developers
<br/>
In the final stage, we prepare the project for implementation:
<br/><br/>
Element Export: We provide graphic files and resources.
<br/>
Guidelines: We deliver recommendations on colors, fonts, and dimensions for developers.
<br/>
Technical Support: We assist in integrating the design into the project.
<br/><br/>
Result: a ready-to-implement design that will bring your project to life.
                    </div>
                    <div className='col-6 d-none d-lg-block'>
                        <img
                            src={mainImg}
                            alt="UI/UX Design"
                            className=""
                            style={{ maxWidth: '100%' }}
                        />
                    </div>
                </div>

                <h4 className='tableTitle text-center'>{t('pages.service.design.tableTitle')}</h4>

                <div className='table'>
                    <table>
                        <thead>
                            <tr>
                                <th className='col_1'>{t('pages.service.table.col_1')}</th>
                                <th className='col_2'>{t('pages.service.table.col_2')}</th>
                                <th className='col_3'>{t('pages.service.table.col_3')}</th>
                                <th className='col_4'>{t('pages.service.table.col_4')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='col_1'>{t('pages.service.design.table.row_1.col_1')}</td>
                                <td className='col_2'>{t('pages.service.design.table.row_1.col_2')}</td>
                                <td className='col_3'>{t('pages.service.design.table.row_1.col_3')}</td>
                                <td className='col_4'>{t('pages.service.design.table.row_1.col_4')}</td>
                            </tr>
                            <tr>
                                <td className='col_1'>{t('pages.service.design.table.row_2.col_1')}</td>
                                <td className='col_2'>{t('pages.service.design.table.row_2.col_2')}</td>
                                <td className='col_3'>{t('pages.service.design.table.row_2.col_3')}</td>
                                <td className='col_4'>{t('pages.service.design.table.row_2.col_4')}</td>
                            </tr>
                        </tbody>
                    </table> 
                </div>

                <p className='tableNote'>{t('pages.service.table.note')}</p>

                <div className='endText'>
                    <ServiceTitle
                        text={t('pages.service.design.endText')}
                    />
                </div>

            </section>
            <HomeContact />
        </div>
    )
}

export default ServiceDesign
