
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Telegram } from '../servers/Telegram';

import iconMap from '../images/home/contactForm/001.png'
import iconPhone1 from '../images/home/contactForm/002.png'
import iconPhone2 from '../images/home/contactForm/003.png'
import iconMail from '../images/home/contactForm/004.png'

const ContactForm = () => {
  const  { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Telegram.sendMessage({message:formData.message, name:formData.name, email:formData.email})
    // Здесь можно добавить логику для обработки отправки формы
    // console.log('Name:', formData.name);
  };

  return (
    <div className="container my-5 contactForm">
        <div className='row'>
            <form onSubmit={handleSubmit} className='col-lg-8'>
              <div className='fields my-border'>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">{t('home.contact.name')}</label>
                  <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">{t('home.contact.email')}</label>
                  <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">{t('home.contact.message')}</label>
                  <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-secondary button-2 w-100">{t('home.contact.submit')}</button>
              </div>
            </form>
            {/* <div className='col-1'></div> */}
            <div className='col-4 d-none d-lg-block'>
                <div className='contacts my-bg my-border'>
                  <div>
                    <p>
                      <img className='iconContactForm' src={iconMap} />
                      {t('contacts.address')}</p>
                    <p>
                      <img className='iconContactForm' src={iconPhone1} />
                      {t('contacts.phone1')}</p>
                    <p>
                      <img className='iconContactForm' src={iconPhone2} />
                      {t('contacts.phone2')}</p>
                    <p>
                      <img className='iconContactForm' src={iconMail} />
                       {t('contacts.email')}</p>
                  </div>
                </div>
                {/* <img className='img-fluid shadow rounded-3 mb-5 d-none d-lg-block' src={formImg} alt='ContactFormImage'/> */}
            </div>
      </div>
    </div>
  );
};

export default ContactForm;
