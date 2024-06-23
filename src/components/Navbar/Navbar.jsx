import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import MobileNav from '../MobileNav/MobileNav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <div className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={logo} alt="logo" />
          <ul>
            <li>
              <ScrollLink
                to="hero"
                smooth={true}
                duration={300}
                className="menu-item"
                style={{ textDecoration: 'none', color: '#caf0f8' }}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={300}
                className="menu-item"
                style={{ textDecoration: 'none', color: '#caf0f8' }}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="resume"
                smooth={true}
                duration={300}
                className="menu-item"
                style={{ textDecoration: 'none', color: '#caf0f8' }}
              >
                Resume
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={300}
                className="menu-item"
                style={{ textDecoration: 'none', color: '#caf0f8' }}
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={300}
                className="menu-item"
                style={{ textDecoration: 'none', color: '#caf0f8' }}
              >
                Projects
              </ScrollLink>
            </li>
            <button className="contact-btn">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={300}
                style={{ textDecoration: 'none', color: '#18d26e' }}
              >
                Let's Talk
              </ScrollLink>
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
