import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './assets/profile.jpg';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Skills from './Skills'; 
import Certifications from './Certifications'; 
import ContactMe from './ContactMe'; 
//import KnowMore from './KnowMore'; 
import './App.css';

function App() {
  return (
    <Router basename="/praveena-relangi-portfolio">
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="landing-page">
                <div className="background-image"></div> 
                <div className="content">
                  <div className="profile-container">
                    <div className="profile-picture-container">
                      <img src={Profile} className="profile" alt="Profile" />
                    </div>
                  </div>
                  <div className="about-me-container">
                    <AboutMe />
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/MyCert" element={<Certifications />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          {/*<Route path="/KnowMore" element={<KnowMore />} />*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
