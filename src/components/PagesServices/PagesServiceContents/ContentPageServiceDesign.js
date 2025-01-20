import React from 'react'
import { useTranslation } from 'react-i18next'

const PageServiceDesign = () => {
    const { t } = useTranslation()
  return (
    <div>
      <h3><span className="text-primary-emphasis">{t('pages.services-page.uiUxDesign.title.left')}</span>{t('pages.services-page.uiUxDesign.title.right')}</h3>
      <p>{t('pages.services-page.uiUxDesign.description')}</p>
      <h5>{t('pages.services-page.uiUxDesign.servicesInclude')}</h5>
      <ul>
        <li>{t('pages.services-page.uiUxDesign.servicesIncludeList.point1')}</li>
        <li>{t('pages.services-page.uiUxDesign.servicesIncludeList.point2')}</li>
        <li>{t('pages.services-page.uiUxDesign.servicesIncludeList.point3')}</li>
        <li>{t('pages.services-page.uiUxDesign.servicesIncludeList.point4')}</li>
      </ul>
      <p>{t('pages.services-page.uiUxDesign.extra')}</p>
    </div>
  )
}

export default PageServiceDesign
