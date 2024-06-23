import React, { useState, useEffect } from 'react';
import './Resume.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Resume() {
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(true);

  useEffect(() => {
    setShowExperience(true);
  }, []);

  return (
    <section id="resume" className='resume-container'>
      <h5>Resume</h5>
      <div className="resume-contents">
        <div className="button-container">
          <button
            className={showExperience ? 'active' : ''}
            onClick={() => { setShowEducation(false); setShowExperience(true); }}
          >
            {showExperience && <i class="fa-solid fa-angles-right"></i>}
            Work Experience
          </button>
          <button
            className={showEducation ? 'active' : ''}
            onClick={() => { setShowEducation(true); setShowExperience(false); }}
          >
            {showEducation && <i class="fa-solid fa-angles-right"></i>}
            Education
          </button>
        </div>
        <div className="resume-content">
          {showEducation && (
            <div className="education animated-section slide-in">
              <div className="education-item">
                <div className="icon-bullet"><i className="fas fa-graduation-cap"></i></div>
                <div>
                  <h7>BSc in Computer Science & Engineering <br></br><span className='place'>@ BRAC University</span></h7><br></br>
                  <p className='timeline'>2020 - 2023</p>
                  <p><i className="fa-solid fa-angles-right"></i>Cum. GPA 3.83</p>
                  <p><i className="fa-solid fa-angles-right"></i>Relevant Coursework: Data Structures, Algorithms, Software Engineering, Artificial Intelligence, Data Science.</p>
                </div>
              </div>
              <div className="education-item">
                <div className="icon-bullet"><i className="fas fa-school"></i></div>
                <div>
                  <h7>HSC<span className='place'>   @ Dhaka College</span></h7><br></br>
                  <p className='timeline'>2019 | Science</p>
                  <p><i className="fa-solid fa-angles-right"></i>GPA 5.00</p>
                </div>
              </div>
              <div className="education-item">
                <div className="icon-bullet"><i className="fas fa-school"></i></div>
                <div>
                  <h7>SSC<span className='place'>   @ Monipur High School & College</span></h7><br></br>
                  <p className='timeline'>2017 | Science</p>
                  <p><i className="fa-solid fa-angles-right"></i>GPA 5.00</p>
                </div>
              </div>
            </div>
          )}
          {showExperience && (
            <div className="experience animated-section slide-in">
              <div className="experience-item">
                <div className="icon-bullet"><i className="fas fa-briefcase"></i></div>
                <div>
                  <h7>Student Tutor<span className='place'>   @ BRAC University</span></h7><br></br>
                  <p className='timeline'>Sep 2022 - Dec 2023</p>
                  <p><i className="fa-solid fa-angles-right"></i>Served as a Student Tutor in the course Programming Language for four consecutive semesters.</p>
                  <p><i className="fa-solid fa-angles-right"></i>Provided essential support to faculty during lab sessions by offering guidance and assistance to students.</p>
                  <p><i className="fa-solid fa-angles-right"></i>Mentored numerous students in their course-related studies, offering consultations and problem-solving sessions.</p>
                </div>
              </div>
              <div className="experience-item">
                <div className="icon-bullet"><i className="fas fa-laptop-code"></i></div>
                <div>
                  <h7>Co-Founder<span className='place'>   @ GameQart</span></h7><br></br>
                  <p className='timeline'>2019 - 2022</p>
                  <p><i className="fa-solid fa-angles-right"></i>Initiated and propelled the startup alongside a team of three friends, leveraging our collective skills.</p>
                  <p><i className="fa-solid fa-angles-right"></i>Spearheaded technical operations and oversaw product management, website maintenance, and page upkeep.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Resume;
