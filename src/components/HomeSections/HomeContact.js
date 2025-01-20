import React from 'react'
import { useTranslation } from 'react-i18next';
import ContactForm from '../ContactForm';

const HomeContact = () => {
    const { t } = useTranslation();
  return (
    <section className='section contact-form py-5 bg-light'>
        <h2 className="mb-5 text-center">
            <span className="text-primary-emphasis">{t('home.contact.title.left')}</span>
            {t('home.contact.title.right')}
        </h2>
        <ContactForm />
    </section>
  )
}

export default HomeContact
