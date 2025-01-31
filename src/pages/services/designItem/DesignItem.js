import React from 'react'
import { useTranslation } from 'react-i18next'

const DesignItem = ({title, text, List, result, key}) => {
    const { t } = useTranslation()
    return (
        <li key={key} className='designItem'>
            <h5>{t(title)}</h5>
            <p className='itemText'>{t(text)}</p>
            {List}
            <p className='itemResult'>
                <span>{t('pages.service.design.resultText')}: </span>
                {t(result)}
            </p>
        </li>
    )
}

export default DesignItem