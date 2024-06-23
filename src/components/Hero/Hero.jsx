import React from 'react';
import profile from '../../assets/new.svg'; 
import cv from '../../assets/cv.pdf'; 
import './Hero2.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className='hero-container'>
      <div className='hero-content'>
        <img src={profile} alt="Profile Image"/>
        <p><span className='nameSpan'>hello, Diganta here!</span> I'm all about diving into innovative projects and soaking up new skills. Count me in for some collaborative action. Let's team up and rock the tech scene together.</p>
        <div className="social-links-container">
          <div className="social-links">
            <a href="https://www.facebook.com/alfessanidiganta" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://github.com/m-a-diganta" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            {/* <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a> */}
            <a href="https://www.linkedin.com/in/m-a-diganta/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <a href={cv} className="download-cv" download>Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
