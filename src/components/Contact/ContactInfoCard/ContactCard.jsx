import React from 'react';
import './ContactInfoCard.css';

const ContactCard = ({ icon, text }) => {
  return (
    <div className='contact-details-card'>
      <div className='icon'>
        {icon}
      </div>
      <p>{text}</p>
    </div>
  );
}

export default ContactCard;
