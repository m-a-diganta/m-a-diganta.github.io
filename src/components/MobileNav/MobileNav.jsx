import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './MobileNav.css';
import logo from '../../assets/logo.svg'; 

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className='mobile-menu-container'>
        <img className='logo' src={logo} alt="logo" />
        <ul>
          <li><ScrollLink to="hero" smooth={true} duration={500} className='menu-item'>Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} duration={500} className='menu-item'>About</ScrollLink></li>
          <li><ScrollLink to="resume" smooth={true} duration={500} className='menu-item'>Resume</ScrollLink></li>
          <li><ScrollLink to="skills" smooth={true} duration={500} className='menu-item'>Skills</ScrollLink></li>
          <li><ScrollLink to="projects" smooth={true} duration={500} className='menu-item'>Projects</ScrollLink></li>
          <button className='contact-btn' onClick={() => {}}><ScrollLink to="contact" smooth={true} duration={500} className='menu-item'>Let's Talk</ScrollLink></button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
