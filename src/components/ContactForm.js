
import React, { useState } from 'react';
import formImg from '../images/contact-form.webp'

const ContactForm = () => {
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
    // Здесь можно добавить логику для обработки отправки формы
    console.log('Form Data:', formData);
  };

  return (
    <div className="container my-5">
        <div className='row'>
            <form onSubmit={handleSubmit} className='col-lg-8'>
                <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
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
                <label htmlFor="email" className="form-label">Email address</label>
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
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                </div>
                <button type="submit" className="btn btn-secondary button-2 w-100">Send Message</button>
            </form>
            {/* <div className='col-1'></div> */}
            <div className='col-4'>
                <img className='img-fluid shadow rounded-3 mb-5 d-none d-lg-block' src={formImg} alt='ContactFormImage'/>
            </div>
      </div>
    </div>
  );
};

export default ContactForm;
