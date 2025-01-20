import React from 'react'
import { useTranslation } from 'react-i18next'

const ContentPageServiceWebApp = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h3><span className="text-primary-emphasis">{t('pages.services-page.webAppDevelopment.title.left')}</span>{t('pages.services-page.webAppDevelopment.title.right')}</h3>
      <p>{t('pages.services-page.webAppDevelopment.description')}</p>
      <h5>{t('pages.services-page.webAppDevelopment.whyUs')}</h5>
      <ul>
        <li>{t('pages.services-page.webAppDevelopment.whyUsList.point1')}</li>
        <li>{t('pages.services-page.webAppDevelopment.whyUsList.point2')}</li>
        <li>{t('pages.services-page.webAppDevelopment.whyUsList.point3')}</li>
        <li>{t('pages.services-page.webAppDevelopment.whyUsList.point4')}</li>
      </ul>
      <p>{t('pages.services-page.webAppDevelopment.extra')}</p>

    </div>
  )
}

export default ContentPageServiceWebApp
