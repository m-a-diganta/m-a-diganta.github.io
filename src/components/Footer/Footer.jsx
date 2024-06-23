import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='social-icons'>
          <a href='https://github.com/m-a-diganta' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </a>
          <a href='https://linkedin.com/in/m-a-diganta/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin />
          </a>
        </div>
        <p>&copy; 2024 M.A. Diganta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
