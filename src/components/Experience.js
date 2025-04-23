import React from 'react';
import '../styles/Experience.css';
import founderPhoto from '../assets/images/founder-pho.jpeg';
import mitCertificate from '../assets/images/mit-certificate.jpg';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Led by Experience</h2>
        
        <div className="experience-content">
          <div className="slogan">
            <h3>At the heart of every product is a team — and behind this team is someone who's walked the path.</h3>
          </div>
          
          <div className="experience-details">
            <div className="experience-text">
              <p>
                I'm Oleksandr Pohorelov, a former Engineering Manager and a certified specialist in Digital Transformation (MIT). 
                Over the past few years, I've led a full-stack squad of software developers to build, launch, and scale multiple 
                successful digital products.
              </p>
              <p>
                I've worked on both sides of the table — as a hands-on developer and as a leader responsible for roadmap delivery, 
                quality, and user impact. That dual perspective is what powers our MVP builds today.
              </p>
            </div>
            <div className="experience-image">
              <img src={founderPhoto} alt="Oleksandr Pohorelov" className="founder-image" />
              <img src={mitCertificate} alt="MIT Digital Transformation Certificate" className="certificate-image" />
            </div>
          </div>
          
          <div className="slogan">
            <h3>If you're looking for a partner who combines technical depth with startup pragmatism, we're ready to build with you.</h3>
          </div>
          
          <div className="experience-highlights">
            <h4>Here's what sets us apart:</h4>
            <ul>
              <li>A battle-tested team with startup execution speed</li>
              <li>Hands-on leadership that understands architecture and UX</li>
              <li>Clear communication for non-technical founders</li>
              <li>A commitment to building things that actually ship</li>
            </ul>
            <p>
              Every product in our Portfolio section was built in close collaboration with founders who started with just an idea — 
              and now run live businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
