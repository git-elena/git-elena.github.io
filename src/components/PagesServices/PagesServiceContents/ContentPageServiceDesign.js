import React from 'react'
import { useTranslation } from 'react-i18next'

const PageServiceDesign = () => {
    const { t } = useTranslation()
  return (
    <div>
      <h3><span className="text-primary-emphasis">{t('services-page.uiUxDesign.title.left')}</span>{t('services-page.uiUxDesign.title.right')}</h3>
      <p>{t('services-page.uiUxDesign.description')}</p>
      <h5>{t('services-page.uiUxDesign.servicesInclude')}</h5>
      <ul>
        <li>{t('services-page.uiUxDesign.servicesIncludeList.point1')}</li>
        <li>{t('services-page.uiUxDesign.servicesIncludeList.point2')}</li>
        <li>{t('services-page.uiUxDesign.servicesIncludeList.point3')}</li>
        <li>{t('services-page.uiUxDesign.servicesIncludeList.point4')}</li>
      </ul>
      <p>{t('services-page.uiUxDesign.extra')}</p>
    </div>
  )
}

export default PageServiceDesign
