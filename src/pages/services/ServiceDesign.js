import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from './banner'

import bannerImg from '../../images/services/design/3_design.jpg'
import mainImg from '../../images/services/design/ui-ux-design.jpg'
import ServiceTitle from '../../components/HomeSections/Services/Title'
import HomeContact from '../../components/HomeSections/HomeContact'
import DesignList from './designItem/DesignList'

const ServiceDesign = () => {
    const { t } = useTranslation()

    return (
        <div className='service-page page'>
            <Banner src={bannerImg}/>
            <section className='section p-3 mx-lg-5 row '>
                <div className='service-title'>
                    <ServiceTitle
                        title_color={t('pages.service.design.title.left')}
                        title_black={t('pages.service.design.title.right')}
                        text={t('pages.service.design.title.description')} />
                </div>

                <div className='row designContent'>
                    <div className='col-12 col-lg-6'>
                        <h4>
                            {t('pages.service.design.listTitle.left')}
                            <span className='colored'> {t('pages.service.design.listTitle.center')} </span>
                            {t('pages.service.design.listTitle.right')}
                        </h4>
                        <p>{t('pages.service.design.listText')}</p>

                        <DesignList data={listData}/>

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


const listData = [
    {
      key: 'pages.service.design.list.1',
      title: 'pages.service.design.list.1.title',
      text: 'pages.service.design.list.1.text',
      items: [
        {
          key: 'pages.service.design.list.1.list.item_1',
          title: 'pages.service.design.list.1.list.item_1.title',
          text: 'pages.service.design.list.1.list.item_1.text',
        },
        {
          key: 'pages.service.design.list.1.list.item_2',
          title: 'pages.service.design.list.1.list.item_2.title',
          text: 'pages.service.design.list.1.list.item_2.text',
        },
        {
          key: 'pages.service.design.list.1.list.item_3',
          title: 'pages.service.design.list.1.list.item_3.title',
          text: 'pages.service.design.list.1.list.item_3.text',
        },
        {
          key: 'pages.service.design.list.1.list.item_4',
          title: 'pages.service.design.list.1.list.item_4.title',
          text: 'pages.service.design.list.1.list.item_4.text',
        },
      ],
      result: 'pages.service.design.list.1.result',
    },
    {
      key: 'pages.service.design.list.2',
      title: 'pages.service.design.list.2.title',
      text: 'pages.service.design.list.2.text',
      items: [
        {
          key: 'pages.service.design.list.2.list.item_1',
          title: 'pages.service.design.list.2.list.item_1.title',
          text: 'pages.service.design.list.2.list.item_1.text',
        },
        {
          key: 'pages.service.design.list.2.list.item_2',
          title: 'pages.service.design.list.2.list.item_2.title',
          text: 'pages.service.design.list.2.list.item_2.text',
        },
        {
          key: 'pages.service.design.list.2.list.item_3',
          title: 'pages.service.design.list.2.list.item_3.title',
          text: 'pages.service.design.list.2.list.item_3.text',
        },
      ],
      result: 'pages.service.design.list.2.result',
    },
    {
      key: 'pages.service.design.list.3',
      title: 'pages.service.design.list.3.title',
      text: 'pages.service.design.list.3.text',
      items: [
        {
          key: 'pages.service.design.list.3.list.item_1',
          title: 'pages.service.design.list.3.list.item_1.title',
          text: 'pages.service.design.list.3.list.item_1.text',
        },
        {
          key: 'pages.service.design.list.3.list.item_2',
          title: 'pages.service.design.list.3.list.item_2.title',
          text: 'pages.service.design.list.3.list.item_2.text',
        },
      ],
      result: 'pages.service.design.list.3.result',
    },
    {
      key: 'pages.service.design.list.4',
      title: 'pages.service.design.list.4.title',
      text: 'pages.service.design.list.4.text',
      items: [
        {
          key: 'pages.service.design.list.4.list.item_1',
          title: 'pages.service.design.list.4.list.item_1.title',
          text: 'pages.service.design.list.4.list.item_1.text',
        },
        {
          key: 'pages.service.design.list.4.list.item_2',
          title: 'pages.service.design.list.4.list.item_2.title',
          text: 'pages.service.design.list.4.list.item_2.text',
        },
        {
          key: 'pages.service.design.list.4.list.item_3',
          title: 'pages.service.design.list.4.list.item_3.title',
          text: 'pages.service.design.list.4.list.item_3.text',
        },
      ],
      result: 'pages.service.design.list.4.result',
    },
    {
      key: 'pages.service.design.list.5',
      title: 'pages.service.design.list.5.title',
      text: 'pages.service.design.list.5.text',
      items: [
        {
          key: 'pages.service.design.list.5.list.item_1',
          title: 'pages.service.design.list.5.list.item_1.title',
          text: 'pages.service.design.list.5.list.item_1.text',
        },
        {
          key: 'pages.service.design.list.5.list.item_2',
          title: 'pages.service.design.list.5.list.item_2.title',
          text: 'pages.service.design.list.5.list.item_2.text',
        },
      ],
      result: 'pages.service.design.list.5.result',
    },
    {
      key: 'pages.service.design.list.6',
      title: 'pages.service.design.list.6.title',
      text: 'pages.service.design.list.6.text',
      items: [
        {
          key: 'pages.service.design.list.6.list.item_1',
          title: 'pages.service.design.list.6.list.item_1.title',
          text: 'pages.service.design.list.6.list.item_1.text',
        },
        {
          key: 'pages.service.design.list.6.list.item_2',
          title: 'pages.service.design.list.6.list.item_2.title',
          text: 'pages.service.design.list.6.list.item_2.text',
        },
        {
          key: 'pages.service.design.list.6.list.item_3',
          title: 'pages.service.design.list.6.list.item_3.title',
          text: 'pages.service.design.list.6.list.item_3.text',
        },
      ],
      result: 'pages.service.design.list.6.result',
    },
  ];
  