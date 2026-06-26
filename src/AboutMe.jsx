import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutMe.css';

function AboutMe() {
  const navigate = useNavigate();  

  const handlePortfolioClick = () => {
    navigate('/Portfolio'); // Navigate to the Portfolio page
  };

  return (
    <div className="about-me-container">
      <h1 className="about-me-heading">About me</h1>
      <p className="about-me-description">
        I am Praveena Relangi, a Software Engineer from India with 4+ years of experience across the
        Healthcare and Telecommunications domains. I have a strong Mainframe foundation in COBOL, JCL,
        DB2, IMS DB, VSAM and Assembler, built delivering enterprise solutions for AT&amp;T and Elevance
        Health. Alongside that, I am IBM Full Stack Software Developer certified and actively expanding
        into full-stack and AI-assisted development with Django, React, Node.js, MongoDB, Docker and
        Kubernetes. I enjoy bridging legacy systems with modern web applications, and I'm always learning
        new technologies to make meaningful contributions to the ever-evolving tech landscape.
      </p>
      <div className="divider"></div>
      <button className="Portfolio-btn" onClick={handlePortfolioClick}>
        Portfolio
      </button>
      <a className='Resume-btn'
        href="/praveena-relangi-portfolio/Praveena_Relangi_Mainframe_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mainframe Resume
      </a>
      <a className='Resume-btn'
        href="/praveena-relangi-poertfolio/Praveena_Relangi_FullStack_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Full Stack / AI Resume
      </a>
    </div>
  );
}

export default AboutMe;
