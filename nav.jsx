import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');
on  
  const navLinks = ['Home', 'About', 'Speakers', 'Sponsors', 'Crew', 'Past events'];

  return (
    <header className="navbar-container">
      <nav className="navbar">
        
        <div className="navbar-logo">
          <a href="#home">
            <span className="logo-ted">TED</span>
            <span className="logo-x">x</span>
            <span className="logo-vssut">VSSUT</span>
          </a>
        </div>
      
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={activeLink === link ? 'active' : ''}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        
        <a href="#contact" className="contact-btn-link">
          <button className="contact-btn">Contact Us</button>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;