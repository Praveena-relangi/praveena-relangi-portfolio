import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Navbar.css'; 

function Navbar() {
  const navigate = useNavigate(); 
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    if (path === '/KnowMore') {
      alert('Coming soon');
      setMenuOpen(false);
      return; // Prevent navigation
    }
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => handleNavigation('/')}>
        Praveena Relangi
      </div>
      <button
        className="navbar-toggle"
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li className="nav" onClick={() => handleNavigation('/Skills')}>Skills</li>
        <li className="nav" onClick={() => handleNavigation('/MyCert')}>Certifications</li>
        <li className="nav" onClick={() => handleNavigation('/ContactMe')}>Contact</li>
        <li className="nav" onClick={() => handleNavigation('/KnowMore')}>Know More</li>
      </ul>
    </nav>
  );
}

export default Navbar;
