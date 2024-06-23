import React from 'react';
import './About.css';
import profile from '../../assets/profile.jpg'; 

function About() {
  return (
    <section id="about" className='about-container'>
        <h5>About me</h5>
        <div className='about-content'>
            <div className='profile-img'><img src={profile} /></div>
            <div className='profile-des'>
                <h6 className='title'>Software Engineering Enthusiast</h6>
                <p className='title-tag'>Committed to continuous learning, collaboration, and eventual mentorship.</p>
                <p className='story'>My name's M.A. Diganta, a recent Computer Science graduate with a passion for technology and a knack for problem-solving. My journey into the world of programming began with Python during my academic years. Over time, I've expanded my toolkit to include languages like JavaScript, C, and PHP. Currently, I'm immersed in mastering React and Node.js for full-stack web development, driven by my eagerness to create dynamic digital solutions. Alongside, I've also ventured into the exciting domain of machine learning and AI, utilizing them for my thesis and other projects.<br></br><br></br>
                
                Beyond academics, I've had the privilege of serving as a Student Tutor, guiding and mentoring peers through their programming endeavors. Furthermore, I co-founded a small startup, where I cultivated invaluable teamwork and collaborative skills.<br></br><br></br>
                What sets me apart is my dedication to continual learning and growth. In essence, I'm a determined individual with a passion for innovation and an unwavering commitment to personal and professional growth.</p>
            </div>
            
        </div>

    </section>
  )
}

export default About
