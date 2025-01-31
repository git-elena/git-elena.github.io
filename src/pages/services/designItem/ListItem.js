import React from 'react'
import { useTranslation } from 'react-i18next'

const ListItem = ({title, text, key}) => {
    const { t } = useTranslation()
    return (
        <li  key={key} className='listItem'>
            <p><span>{t(title)}:</span> {t(text)}</p>
        </li>
    )
}

export default ListItem