import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Fractional CTO',
      description: 'Strategic help to improve your team, processes, architecture, and infrastructure. Get advice on tech stack, board advisory, or developer advocacy.',
      icon: '🧠'
    },
    {
      id: 2,
      title: 'Prototyping',
      description: 'Bootstrapped application with minimal functionality serving as a Proof-of-Concept to validate your idea quickly.',
      icon: '🔍'
    },
    {
      id: 3,
      title: 'MVP Development',
      description: 'Fully operational application ready for customer testing. Production movement - hosting setup, best practices of availability and observability.',
      icon: '🚀'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
