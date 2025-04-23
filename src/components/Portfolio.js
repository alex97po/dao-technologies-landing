import React, { useState, useEffect, useRef } from 'react';
import '../styles/Portfolio.css';

// Helper function to format project descriptions
const formatProjectDescription = (description) => {
  // Split the description into lines
  const lines = description.split('\n');
  
  // Format the first line (title) with a special class
  let formattedDescription = [<p key="title" className="project-title-line">{lines[0]}</p>];
  
  // Process the rest of the lines
  let currentParagraph = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this line contains technologies
    if (line.startsWith('Technologies:')) {
      // If we have accumulated text, add it as a paragraph
      if (currentParagraph.length > 0) {
        formattedDescription.push(
          <p key={`p-${i}`}>{currentParagraph.join('\n')}</p>
        );
        currentParagraph = [];
      }
      
      // Process technologies
      const techPart = line.split('Technologies:')[1].trim();
      const technologies = techPart.split(',').map(tech => tech.trim());
      
      formattedDescription.push(
        <div key="tech-container" className="technologies-container">
          <span className="technologies-label">Technologies:</span>
          <div className="technology-tags">
            {technologies.map((tech, index) => (
              <span key={`tech-${index}`} className="technology-tag">{tech}</span>
            ))}
          </div>
        </div>
      );
    } else if (line.trim() === '') {
      // Empty line - if we have accumulated text, add it as a paragraph
      if (currentParagraph.length > 0) {
        formattedDescription.push(
          <p key={`p-${i}`}>{currentParagraph.join('\n')}</p>
        );
        currentParagraph = [];
      }
    } else {
      // Regular line - add to current paragraph
      currentParagraph.push(line);
    }
  }
  
  // Add any remaining paragraph
  if (currentParagraph.length > 0) {
    formattedDescription.push(
      <p key="p-last">{currentParagraph.join('\n')}</p>
    );
  }
  
  return formattedDescription;
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Define project data
  const projects = [
    {
      id: 1,
      name: 'PostPulse',
      description: `Social media planner app.

User sign up / sign in via Magic Link (passwordlesss).
Social media account enrollment via OAuth 2.0 flow.
Optional content generation via OpenAI. Publishing via social media platform APIs.
Subscription management via Stripe integration.

From idea to production in 2 weeks. Infrastructure cost under $20 per month.

Technologies: Java, Spring Boot, PostgreSQL, React, Grafana, Amazon S3, OpenAI API`,
      coverImage: require('../assets/images/postpulse/cover.png'),
      gallery: [
        require('../assets/images/postpulse/postpulse1.png'),
        require('../assets/images/postpulse/postpulse2.png'),
        require('../assets/images/postpulse/postpulse3.png'),
        require('../assets/images/postpulse/postpulse4.png'),
        require('../assets/images/postpulse/postpulse5.png'),
        require('../assets/images/postpulse/postpulse6.png')
      ]
    },
    {
      id: 2,
      name: 'UDrivo',
      description: `Multi-sided platform for car owners and service providers (garages, cash washes, tow trucks, etc.).

MVP consisted of landing page, car owner onboarding and service booking, business onboarding and backoffice management. 
Prepared fully operational MVP (from idea to production) for submission to the UAE incubators (Mubadala, Hub71) in 3 months.

Technologies: Java, Spring Boot, Apache Kafka, React, Node.js, MongoDB, PostgreSQL, Amazon Web Services, Google Maps API`,
      coverImage: require('../assets/images/udrivo/cover.jpg'),
      gallery: [
        require('../assets/images/udrivo/Business Sign In And See Appointment.jpg'),
        require('../assets/images/udrivo/Customer Sign up and Booking FULL-2.jpg'),
        require('../assets/images/udrivo/Customer Sign up and Booking FULL-3.jpg'),
        require('../assets/images/udrivo/Customer Sign up and Booking FULL-4.jpg'),
        require('../assets/images/udrivo/Customer Sign up and Booking FULL-5.jpg')
      ]
    },
    {
      id: 3,
      name: 'Preffero',
      description: `Mobile app to save and recollect user preferences. 

User can add items manually or scan barcode (AI recognition was under development as well). 
User can search for items in global databases to check reviews for items. 
Application could be used as wishlist, shopping list, engagement platform and many more.

Technologies: Java, Spring Boot, Apache Kafka, MongoDB, Flutter, Elasticsearch, Kubernetes`,
      coverImage: require('../assets/images/preffero/cover.png'),
      gallery: [
        require('../assets/images/preffero/Slide 3.png'),
        require('../assets/images/preffero/Slide 5.png'),
        require('../assets/images/preffero/Slide 6-1.png'),
        require('../assets/images/preffero/Slide 6-2.png'),
        require('../assets/images/preffero/Slide 6-3.png'),
        require('../assets/images/preffero/Slide 6-4.png'),
        require('../assets/images/preffero/Slide 7-1.png'),
        require('../assets/images/preffero/Slide 7-2.png'),
        require('../assets/images/preffero/Slide 7-3.png'),
        require('../assets/images/preffero/Slide 9-1.png'),
        require('../assets/images/preffero/Slide 9-2.png'),
        require('../assets/images/preffero/Slide 14.png')
      ]
    },
    {
      id: 4,
      name: 'Grace',
      description: `Accounting system supporting the latest Ukrainian legislation for SME
Desktop application consisted of the following features:
- goods catalogue management
- counterparties management
- goods inflow and outlow management
- payments and invoices management
- tax reporting and bookkeeping 
- staff and salary management

Technologies: JavaFX, Spring Boot, MySQL, CircleCI`,
      coverImage: require('../assets/images/grace/cover.jpg'),
      gallery: [
        require('../assets/images/grace/2025-04-22 13.58.31.jpg'),
        require('../assets/images/grace/2025-04-22 14.00.40.jpg'),
        require('../assets/images/grace/2025-04-22 14.00.58.jpg')
      ]
    }
  ];

  // Refs for touch events
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (selectedProject && !isPaused) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => 
          prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
        );
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [selectedProject, isPaused]);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    setCurrentSlide(0);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const nextSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
      // Pause auto-play temporarily when user interacts
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds
    }
  };

  const prevSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
      // Pause auto-play temporarily when user interacts
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds
    }
  };

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left, go to next slide
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right, go to previous slide
      prevSlide();
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        
        <div className="portfolio-grid">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="portfolio-item"
              onClick={() => openProjectDetails(project)}
            >
              <div className="portfolio-image">
                <img src={project.coverImage} alt={project.name} />
              </div>
              <h3 className="portfolio-title">{project.name}</h3>
            </div>
          ))}
        </div>
        
        {selectedProject && (
          <div className="project-modal">
            <div className="modal-content">
              <button className="close-button" onClick={closeProjectDetails}>×</button>
              <h3 className="modal-title">{selectedProject.name}</h3>
              <div className="modal-description">
                {formatProjectDescription(selectedProject.description)}
              </div>
              
              <div className="slideshow">
                <button className="slide-arrow prev-arrow" onClick={prevSlide}>&#10094;</button>
                <button className="slide-arrow next-arrow" onClick={nextSlide}>&#10095;</button>
                
                <div 
                  className="carousel" 
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {selectedProject.gallery.map((image, index) => (
                    <div key={index} className="slide">
                      <img 
                        src={image} 
                        alt={`${selectedProject.name} slide ${index + 1}`} 
                      />
                      <div className="slide-counter">
                        {index + 1} / {selectedProject.gallery.length}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="carousel-dots">
                  {selectedProject.gallery.map((_, index) => (
                    <div 
                      key={index} 
                      className={`dot ${currentSlide === index ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
