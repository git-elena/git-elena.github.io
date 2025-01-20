import React from 'react'
import { useTranslation } from 'react-i18next'

const PageServiceApp = () => {
    const { t } = useTranslation()
  return (
    <div>
      <h3><span className="text-primary-emphasis">
        {   t('pages.services-page.appDevelopment.title.left')}</span>
        {   t('pages.services-page.appDevelopment.title.right')}</h3>
      <p>{  t('pages.services-page.appDevelopment.description')}</p>
      <h5>{ t('pages.services-page.appDevelopment.whyChooseUs')}</h5>
      <ul>
        <li><strong>{t('pages.services-page.appDevelopment.whyChooseUsList.point1.title')}:</strong> {t('pages.services-page.appDevelopment.whyChooseUsList.point1.desciption')}</li>
        <li><strong>{t('pages.services-page.appDevelopment.whyChooseUsList.point2.title')}:</strong> {t('pages.services-page.appDevelopment.whyChooseUsList.point2.desciption')}</li>
        <li><strong>{t('pages.services-page.appDevelopment.whyChooseUsList.point3.title')}:</strong> {t('pages.services-page.appDevelopment.whyChooseUsList.point3.desciption')}</li>
        <li><strong>{t('pages.services-page.appDevelopment.whyChooseUsList.point4.title')}:</strong> {t('pages.services-page.appDevelopment.whyChooseUsList.point4.desciption')}</li>
      </ul>
      <p>{   t('pages.services-page.appDevelopment.extra')}</p>
    </div>
  )
}

export default PageServiceApp
