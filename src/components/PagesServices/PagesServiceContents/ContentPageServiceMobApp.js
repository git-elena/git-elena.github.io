import React from 'react'
import { useTranslation } from 'react-i18next'

const ContentPageServiceMobApp = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h3><span className="text-primary-emphasis">{t('services-page.mobileAppDevelopment.title.left')}</span>{t('services-page.mobileAppDevelopment.title.right')}</h3>
      <p>{t('services-page.mobileAppDevelopment.description')}</p>
      <h5>{t('services-page.mobileAppDevelopment.benefits')}</h5>
      <ul>
        <li>{t('services-page.mobileAppDevelopment.benefitsList.point1')}</li>
        <li>{t('services-page.mobileAppDevelopment.benefitsList.point2')}</li>
        <li>{t('services-page.mobileAppDevelopment.benefitsList.point3')}</li>
        <li>{t('services-page.mobileAppDevelopment.benefitsList.point4')}</li>
      </ul>
      <p>{t('services-page.mobileAppDevelopment.extra')}</p>

    </div>
  )
}

export default ContentPageServiceMobApp
