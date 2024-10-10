import React from 'react'
import { useTranslation } from 'react-i18next'

const ContentContentPageServiceWebsite = () => {
    const { t } = useTranslation()
  return (
    <div>
      <h3><span className="text-primary-emphasis">{t('services-page.websiteDevelopment.title.left')}</span>{t('services-page.websiteDevelopment.title.right')}</h3>
      <p>{t('services-page.websiteDevelopment.description')}</p>
      <h5>{t('services-page.websiteDevelopment.weOffer')}</h5>
      <ul>
        <li>{t('services-page.websiteDevelopment.weOfferList.point1')}</li>
        <li>{t('services-page.websiteDevelopment.weOfferList.point2')}</li>
        <li>{t('services-page.websiteDevelopment.weOfferList.point3')}</li>
        <li>{t('services-page.websiteDevelopment.weOfferList.point4')}</li>
      </ul>
      <p>{t('services-page.websiteDevelopment.extra')}</p>
    </div>
  )
}

export default ContentContentPageServiceWebsite
