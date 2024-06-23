import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Element name="hero">
                  <Hero />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="resume">
                  <Resume />
                </Element>
                <Element name="skills">
                  <Skills />
                </Element>
                <Element name="projects">
                  <Projects />
                </Element>
                <Element name="contact">
                  <Contact />
                </Element>
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
