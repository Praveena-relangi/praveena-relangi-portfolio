import React from 'react';
import Navbar from './Navbar';
import IBM from './assets/IBM.png';
import AWS from './assets/aws.jpg';
import HackerRank from './assets/hackerrank.png';
import LinkedInLearning from './assets/Linkedin-learning.png';
import Internshala from './assets/internshala.jpg';
import Nxtwave from './assets/Nxtwave.jpeg';
import "./Certifications.css";

function CertificationCard({ image, alt, name, link }) {
  return (
    <div className="certification-card" onClick={() => window.open(link, "_blank")}>
      <img src={image} className="certification-img" alt={alt} />
      <h3 className="certification-name">{name}</h3>
    </div>
  );
}

function Certifications() {
  const certifications = [
    { image: IBM, alt: "IBM", name: "IBM Full Stack Software Developer Professional Certificate", link: "https://www.coursera.org/account/accomplishments/specialization/XAOJW3K57GQK" },
    { image: IBM, alt: "IBM", name: "Healthcare Industry Jumpstart", link: "https://www.credly.com/badges/4cbec8e8-6b87-48cb-bf77-99d48a9a9ed1/public_url" },
    { image: IBM, alt: "IBM", name: "IBM Developer for Z/OS Basics", link: "https://www.credly.com/badges/17ae585c-6bc7-4bee-a6c2-dba4dfd5d516/public_url" },
    { image: AWS, alt: "AWS", name: "AWS Generative AI Essentials", link: "https://www.credly.com/badges/58ef3631-4dfc-4491-bc4f-a4ae9e5e0ba9/public_url" },
    { image: HackerRank, alt: "HackerRank", name: "Problem Solving (Basic)", link: "https://www.hackerrank.com/certificates/39216539574e" },
    { image: HackerRank, alt: "HackerRank", name: "Python (Basic)", link: "https://www.hackerrank.com/certificates/dfc7979c9671" },
    { image: LinkedInLearning, alt: "LinkedIn Learning", name: "AWS Cloud Practitioner: Cloud Concepts", link: "https://www.linkedin.com/learning/certificates/e9d2ebfdd8015c6c6f5050836c76b4cf314ab1c145798e3cbeecadfe0fd9650d" },
    { image: LinkedInLearning, alt: "LinkedIn Learning", name: "AWS Cloud Practitioner: Security", link: "https://www.linkedin.com/learning/certificates/81d9fac9ed7ff5e3b105207fa35719a512a1b24a238b335f8d6caf44eb474b17" },
    { image: Internshala, alt: "Internshala", name: "Web Development", link: "https://trainings.internshala.com/view_certificate/9B698BA8-34AC-E2BF-1290-06C6579874CD/CD6BF7A8-990D-91A3-4412-48CCB411D1D1/" },
    { image: Nxtwave, alt: "NxtWave", name: "NxtWave MERN Stack Program (In Progress)", link: "https://certificates.ccbp.in/intensive/responsive-website?id=JNQGEUUWMT" },
  ];

  return (
    <div className="certifications-page">
      <Navbar />
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            image={cert.image}
            alt={cert.alt}
            name={cert.name}
            link={cert.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Certifications;
