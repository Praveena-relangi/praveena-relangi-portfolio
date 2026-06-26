import React from 'react';
import Navbar from './Navbar';
import Experience from './assets/experience.png';
import Education from './assets/education.jpg';

import './Portfolio.css';

function Section({ title, items, image, alt }) {
  return (
    <div className="section-container">
      <div className="image-container">
        <img src={image} className="section-img" alt={alt} />
      </div>
      <div className="section-content">
        <h1>{title}</h1>
        {items.map((item, index) => (
          <div key={index}>
            <h3>{item.role}</h3>
            <p>{item.description}</p>
            {item.bullets && (
              <ul>
                {item.bullets.map((bullet, bIndex) => (
                  <li key={bIndex}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ListSection({ title, items }) {
  return (
    <div className="list-section-container">
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Portfolio() {
  const experienceItems = [
    {
      role: 'Software Developer',
      description: 'Amdocs (Jan 2025 - Present)',
      bullets: [
        'Develop and enhance Service Order Communication System (SOCS) applications supporting AT&T telecommunications operations.',
        'Independently designed and delivered the POTS Suspension Project, introducing manual order creation capabilities within SOCS.',
        'Developed DB2 subroutines, COBOL IMS modules and JCL components from scratch, integrating DB2 and Assembler routines for end-to-end order processing.',
        'Utilize GitHub Copilot for legacy COBOL analysis, impact assessment, debugging and development productivity.',
        'Contributed to SOCS Hardening initiatives and resolved critical production issues.',
      ],
    },
    {
      role: 'Application Developer',
      description: 'IBM India Pvt Ltd (Sep 2023 - Jul 2024)',
      bullets: [
        'Developed and enhanced Inquiry Tracking (IQT), an IMS-based healthcare claims finalization application.',
        'Designed and implemented Claim Reinstatement BPM functionality from scratch.',
        'Developed COBOL, JCL, DB2 and IMS DB components for healthcare workflows.',
        'Worked on Auto Letter projects and batch processing support.',
      ],
    },
    {
      role: 'Software Engineer',
      description: 'Carelon Global Solutions (Jul 2021 - Aug 2023)',
      bullets: [
        'Enhanced Inquiry Tracking applications for Elevance Health.',
        'Worked on Auto Letter and Batch Letter projects, and participated in DLI-to-BMP conversion initiatives.',
        'Automated report extraction from Power BI and Excel dashboards using Python.',
      ],
    },
  ];

  const educationItems = [
    {
      role: 'Bachelor of Technology - Electronics & Communication Engineering',
      description: 'JNTUK | CGPA: 8.48',
    },
  ];

  const featuredProject = [
    'Built a full-stack Car Dealership Website using Django, React, Node.js, MongoDB, Docker and Kubernetes.',
    'Implemented user authentication, dealership management and review workflows.',
    'Developed REST APIs and Node.js microservices, integrating sentiment analysis services and MongoDB databases.',
    'Containerized services with Docker, deployed on Kubernetes, and implemented CI/CD with automated testing pipelines.',
  ];

  const keyAchievements = [
    'Delivered the POTS Suspension Project as an Individual Contributor and successfully deployed it to production.',
    'Recognized during Townhall for contribution to the SOCS Hardening Project.',
    'Received a Spot Award from Amdocs management for exceptional contribution.',
    'Received multiple client and peer appreciation emails for project delivery.',
    'Shining Star Award - Claims IT Stellar Awards.',
    'Outstanding Contribution Award - Inspire High Performance Culture.',
  ];

  return (
    <div className="portfolio-page">
      <Navbar />
      <div className="portfolio-container">
        <Section
          title="Work Experience"
          items={experienceItems}
          image={Experience}
          alt="Work Experience"
        />
        <Section
          title="Education"
          items={educationItems}
          image={Education}
          alt="Education"
        />
        <ListSection title="Featured Project: Car Dealership Website" items={featuredProject} />
        <ListSection title="Key Achievements" items={keyAchievements} />
      </div>
    </div>
  );
}

export default Portfolio;
