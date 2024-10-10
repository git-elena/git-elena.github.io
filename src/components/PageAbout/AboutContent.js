import React from 'react'
import { useTranslation } from 'react-i18next';

const AboutContent = () => {
    const { t } = useTranslation();
  return (
    <section className='section p-5 mx-lg-5 row '>
        <h3><span className="text-primary-emphasis">{t('about-page.p1.title.left')}</span>{t('about-page.p1.title.right')}</h3>
        
        <p>{t('about-page.p1.text')}</p>
        
        <h3><span className="text-primary-emphasis">{t('about-page.p2.title.left')}</span>{t('about-page.p2.title.right')}</h3>
        <p>{t('about-page.p2.text')}</p>
        
        <h3><span className="text-primary-emphasis">{t('about-page.p3.title.left')}</span>{t('about-page.p3.title.right')}</h3>
        <p>{t('about-page.p3.text')}</p>
        <ul>
            <li><b>{t('about-page.p3.list.1.title')}</b> {t('about-page.p3.list.1.text')}</li>
            <li><b>{t('about-page.p3.list.2.title')}</b> {t('about-page.p3.list.2.text')}</li>
            <li><b>{t('about-page.p3.list.3.title')}</b> {t('about-page.p3.list.3.text')}</li>
            <li><b>{t('about-page.p3.list.4.title')}</b> {t('about-page.p3.list.4.text')}</li>
          
        </ul>

        <h3><span className="text-primary-emphasis">{t('about-page.p4.title.left')}</span>{t('about-page.p4.title.right')}</h3>
        <ul>
            <li><b>{t('about-page.p4.list.1.title')}</b> {t('about-page.p4.list.1.text')}</li>
            <li><b>{t('about-page.p4.list.2.title')}</b> {t('about-page.p4.list.2.text')}</li>
            <li><b>{t('about-page.p4.list.3.title')}</b> {t('about-page.p4.list.3.text')}</li>
        </ul>

        <h3><span className="text-primary-emphasis">{t('about-page.p5.title.left')}</span>{t('about-page.p5.title.right')}</h3>
        <p>{t('about-page.p5.text')}</p>
        
      </section>
  )
}

export default AboutContent
