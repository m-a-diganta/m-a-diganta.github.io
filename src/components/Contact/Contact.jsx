import React, { useState } from 'react';
import './Contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaHome, FaPhone } from 'react-icons/fa';
import ContactCard from './ContactInfoCard/ContactCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('Message sent!');
  };

  return (
    <section className='contact-container'>
      <h5>Contact Me</h5>

      <div className='contact-content'>
        <div className='contact-cards'>
          <ContactCard
            icon={<AiOutlineMail />}
            text="m.a.diganta01@gmail.com"
          />
          <ContactCard
            icon={<FaGithub />}
            text="github.com/m-a-diganta"
          />
          <ContactCard
            icon={<FaLinkedin />}
            text="linkedin.com/in/m-a-diganta/"
          />
          <ContactCard
            icon={<FaPhone />}
            text="+8801748993181"
          />
          <ContactCard
            icon={<FaHome />}
            text="South Monipur, Mirpur, Dhaka."
          />
        </div>
        <div className='contact-form'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit' className='submit-button'>Send Message</button>
          </form>
        </div>
      </div>
    </section>

    
  );
}

export default Contact;
