import React from 'react';
import Slider from 'react-slick';
import './Projects.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaGithub, FaExternalLinkAlt, FaVideo } from 'react-icons/fa';

import p1_1 from '../../assets/projects/p1_1.png'; 
import p1_2 from '../../assets/projects/p1_2.png'; 
import p1_3 from '../../assets/projects/p1_3.png'; 

import p2_1 from '../../assets/projects/p2_1.png'; 
import p2_2 from '../../assets/projects/p2_2.png'; 
import p2_3 from '../../assets/projects/p2_3.png'; 
import p2_4 from '../../assets/projects/p2_4.png'; 
import p2_5 from '../../assets/projects/p2_5.png'; 

import p3_1 from '../../assets/projects/p3_1.png'; 
import p3_2 from '../../assets/projects/p3_2.png'; 
import p3_3 from '../../assets/projects/p3_3.png'; 

import p4_1 from '../../assets/projects/p4_1.png'; 
import p4_2 from '../../assets/projects/p4_2.png'; 
import p4_3 from '../../assets/projects/p4_3.png'; 

import p5_1 from '../../assets/projects/p5_1.png'; 
import p5_2 from '../../assets/projects/p5_2.png'; 
import p5_3 from '../../assets/projects/p5_3.png'; 
import p5_4 from '../../assets/projects/p5_4.png'; 
import p5_5 from '../../assets/projects/p5_5.png'; 

import p6_1 from '../../assets/projects/p6_1.png'; 

import p7_1 from '../../assets/projects/p7_1.png'; 
import p7_2 from '../../assets/projects/p7_2.png'; 

import p8 from '../../assets/projects/p8.png'; 

import p9 from '../../assets/projects/p9.png'; 

import p10_1 from '../../assets/projects/p10_1.png'; 
import p10_2 from '../../assets/projects/p10_2.png'; 

import p11 from '../../assets/projects/p11.png'; 

import port_1 from '../../assets/projects/port_1.png'; 
import port_2 from '../../assets/projects/port_2.png'; 

const projects = [
  {
    title: "Medix-Connect",
    category: "Full-stack Web Development Project",
    tag: "/ A Search‑enabled E‑commerce Website Model for Pharmaceuticals",
    github: "https://github.com/example/ecommerce-platform",
    // live: "https://example.com/live",
    // video: "https://example.com/video",
    techs: ["Django", "Bootstrap", "HTML", "CSS"],
    description: "The project has been initiated based on the concept of building an online Pharmacy within an area along with an inventory checker. It allows the patients or customers to easily find the nearby pharmacies their desired products are available in. So, they don't need to rush from one pharmacy to another in case of an emergency. The Customers have the opportunity to order the medicines online as well. ",
    images: [p1_1, p1_2, p1_3]
  },
  {
    title: "Atlantic360",
    category: "Website Design and Management",
    tag: "/ Branding Agency for Modern Business",
    live: "https://atlantic360.ca/",
    techs: ["Wordpress", "Bootstrap", "HTML", "CSS"],
    description: "Atlantic360 is a branding agency that specialize in assisting brands in maximizing their potential through various services such as brainstorming, branding, strategy development, and execution. The website is crafted using WordPress, enhanced with customized sections tailored through foundational coding languages like HTML, CSS, and logical constructs. This approach is to explore proficiency in web design and frontend development. ",
    images: [p4_1, p4_2, p4_3]
  },
  {
    title: "E-Library",
    category: "Web Dev & Database System",
    tag: "/ An online Library for Readers to access books and rent online",
    github: "https://github.com/m-a-diganta/E-Library-PHP-HTML-CSS",
    techs: ["PHP", "MySQL", "HTML", "CSS"],
    description: "The core concept of this project is to make a functional online library, termed “E-Library”, where a group of users henceforth named “Readers” can access books in an online platform much like how one can access physical books from a normal library. There will be two other categories of users in our project, “Publishers” and “Admin”. The “Publisher” can, publish books and edit book descriptions while the “Admin” can do the aforementioned as well a few more things like, deleting books, searching for certain users or transactions etc.",
    images: [p2_1, p2_2, p2_3, p2_4, p2_5]
  },
  {
    title: "Crafters Corner",
    category: "Full-stack Web Development Project",
    tag: "/ An E-commerce Platform for Artisans and Carft Enthusiasts",
    github: "https://github.com/m-a-diganta/Crafters-Corner-MERN",
    techs: ["React", "NodeJs", "Express", "MongoDB"],
    description: "Crafters Corner: Where artisans, creators, & craft enthusiasts explore, buy, & sell handmade/machine-made products & courses. Fostering a vibrant community for sharing knowledge & connecting. Your ultimate destination for all things craft-related.",
    images: [p3_1, p3_2, p3_3]
  },
  {
    title: "Automated Detection of Ovarian Cancer Using Deep Learning Models and XAI",
    category: "Thesis Project",
    tag: "/ Implementation of Deep Learning Models for Detection and Classification - Performance Analysis with XAI",
    techs: ["Machine Learning", "Artificial Intelligence", "Deep Learning Models", "XAI"],
    description: "Developed an automated detection system using CNN models such as LeNet, ResNet, VGGNet and Inception to detect ovarian cancer.Conducted a comparative analysis of XAI models, including LIME, SHAP, and Integrated Gradients.",
    images: [p5_1, p5_2, p5_3, p5_4, p5_5]
  },
  {
    title: "Automated Plant Monitoring System",
    category: "Computer Interfacing",
    tag: "/ Interfacing a Micro-controller to External Sensors",
    github: "https://github.com/m-a-diganta/Automated-Plant-Monitoring-System-with-Arduino-UnoR3-CSE360-2023",
    techs: ["Arduino Uno R3", "YL-69", "MQ4", "TMP36", "LDR"],
    description: "This project introduces an Automated Plant Monitoring System (APMS) utilizing sensors to enhance agricultural practices. Key sensors include the YL-69 Soil Moisture Sensor, which detects soil conditions and triggers watering when needed. The MQ4 Methane Gas Sensor identifies methane levels, crucial for plant health assessment. The TMP36 Temperature Sensor monitors environmental temperature, activating alerts if conditions exceed optimal ranges. Additionally, the LDR Sensor measures sunlight exposure, aiding in determining adequate light levels for plant growth.",
    images: [p6_1, p6_1]
  },
  {
    title: "Diamond Price Prediction",
    category: "Data Science and ML/ AI",
    tag: "/ Implementation of Multiple Machine Learning Algorithms and XAI",
    github: "https://github.com/m-a-diganta/Diamond-Price-Prediction-using-Machine-Learning-CSE437-2023",
    techs: ["Machine Learning", "Artificial Intelligence", "XAI"],
    description: "This project focused on predicting diamond prices using machine learning. After cleaning and splitting the dataset, various models including Linear Regression, Decision Tree Regression, Random Forest Regression, Gradient Boosting Regression, Support Vector Regression (SVR), and K-Nearest Neighbors (KNN) were evaluated, with Random Forest Regression chosen for its superior performance. Hyperparameter tuning improved the model further. Explainable AI techniques, like Lime and ELI5, were used to interpret predictions.",
    images: [p7_1, p7_2]
  },
  {
    title: "Alfessani's Portfolio",
    category: "Dynamic Portfolio design with React",
    tag: "/ My Portfolio showcasing my experiences and projects",
    github: "https://github.com/m-a-diganta/m-a-diganta.github.io",
    techs: ["React","Javascript", "HTML", "CSS"],
    description: "This is a showcase of my professional experiences and projects. It highlights my career journey and the various projects I've worked on, ranging from web development to software engineering. Each project demonstrates my skills and expertise in creating functional and visually appealing solutions. Explore my portfolio to discover more about my work and achievements.",
    images: [port_1,port_2]
  },
  {
    title: "Networking Project",
    category: "Computer Networking",
    tag: "/ Demo Networking Setup for an Organization",
    github: "https://github.com/m-a-diganta/Networking-Project-Unknown-Organization-CSE421-2023",
    techs: ["CISCO Packet Tracer"],
    description: "This is a Networking project titled as 'Unknown Organization' for the course CSE421[Computer Networking].",
    images: [p8,p8]
  },
  {
    title: "Currency Converter",
    category: "JS Mini-Project",
    tag: "/ Experimenting with Javasccript",
    github: "https://github.com/m-a-diganta/MiniProject-Currency-Converter-Javascript",
    techs: ["Javascript", "HTML", "CSS"],
    description: "This is a Currency Converter implemented in JavaScript. It's designed for learning purposes and serves as a small project for understanding basic concepts of JavaScript programming.",
    images: [p9,p9]
  },
  {
    title: "Amazon homepage Clone",
    category: "CSS Mini-Project",
    tag: "/ A clone Website built with CSS",
    github: "https://github.com/m-a-diganta/CSS-Miniproject-Amazon-Homepage-Clone",
    techs: ["HTML", "CSS"],
    description: "This repository contains a replica of the Amazon.com homepage created for learning purpose using HTML and CSS.",
    images: [p10_1,p10_2]
  },
  {
    title: "TicTacToe Game",
    category: "JS Mini-Project",
    tag: "/ Experimenting with Javasccript",
    github: "https://github.com/m-a-diganta/MiniProject-TicTacToe-Game-Javascript",
    techs: ["Javascript", "HTML", "CSS"],
    description: "This is a simple TicTacToe game implemented in JavaScript. It's designed for learning purposes and serves as a small project for understanding basic concepts of JavaScript programming.",
    images: [p11,p11]
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section id="projects" className='projects-container'>
      <h5>Projects</h5>
      <div className="projects-content">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="slider-container">
              <Slider {...settings}>
                {project.images.map((image, idx) => (
                  <div className='p_img' key={idx}>
                    <img src={image} alt={`${project.title} ${idx + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="project-details">
              <h6>
                {project.title}
                <span className="project-icons">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.video && (
                    <a href={project.video} target="_blank" rel="noopener noreferrer">
                      <FaVideo />
                    </a>
                  )}
                </span>
              </h6>
              <p className='tag'>{project.tag}</p>
              <div className="techs-used">
                {project.techs.map((tech, idx) => (
                  <span key={idx} className="tech">{tech}</span>
                ))}
              </div>
              <p className='category'><strong>Category:</strong> {project.category}</p>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='shadow'></div>
    </section>
  );
};

export default Projects;
