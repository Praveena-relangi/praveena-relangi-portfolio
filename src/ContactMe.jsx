import React from 'react';
import Navbar from './Navbar';
import Location from './assets/location.png';
import Phone from './assets/call.png';
import Mail from './assets/email.png';
import Linkedin from './assets/linkedin.png';
import Git from './assets/github-icon.png';
import Credly from './assets/credly.png';
import './ContactMe.css';

const ContactMe = () => {
  const contactDetails = [
    { name: 'Location', info: 'Hyderabad, India', icon: Location, link: null },
    { name: 'Phone Number', info: '+91-8897224920', icon: Phone, link: 'tel:+918897224920' },
    { name: 'Email', info: 'relangipraveena99@gmail.com', icon: Mail, link: 'mailto:relangipraveena99@gmail.com' },
    { name: 'LinkedIn', info: 'linkedin.com/in/praveena-relangi-085383196/', icon: Linkedin, link: 'https://www.linkedin.com/in/praveena-relangi-085383196/' },
    { name: 'GitHub', info: 'github.com/Praveena-relangi', icon: Git, link: 'https://github.com/Praveena-relangi' },
    { name: 'Credly', info: 'credly.com/users/praveena-relangi', icon: Credly, link: 'https://www.credly.com/users/praveena-relangi' },
  ];

  return (
    <div className="contactme-page">
      <Navbar />
      <div className="contact-container">
        {contactDetails.map((contact, index) => {
          const cardContent = (
            <>
              <img src={contact.icon} alt={contact.name} className="contact-icon" />
              <div className="contact-info">
                <h3 className="contact-name">{contact.name}</h3>
                <p className="contact-detail">{contact.info}</p>
              </div>
            </>
          );

          return contact.link ? (
            <a
              className="contact-card"
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cardContent}
            </a>
          ) : (
            <div className="contact-card" key={index}>
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactMe;
