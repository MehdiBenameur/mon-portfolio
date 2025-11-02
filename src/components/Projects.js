import React from 'react';
import { FaGithub, FaCode, FaFlask, FaDatabase, FaMicrochip } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Fuel Transactions Management",
      description: "Full web application for managing fuel operations at Ennahdafa JUDY. Features automated CSV import, transaction tracking, and interactive dashboards for real-time analytics and reporting.",
      technologies: ["Flask", "SQL Server", "Pandas", "HTML/CSS/JS", "Data Visualization"],
      github: "https://github.com/MehdiBenameur", // Lien vers ton GitHub général
      demo: "#",
      icon: <FaFlask />,
      featured: true
    },
    {
      title: "SkyHire - AI Employability Platform",
      description: "AI-powered platform for the aviation sector offering CV analysis, interview simulation, and personalized job matching with AI-driven mentorship and career guidance.",
      technologies: ["MERN Stack", "AI/ML", "OpenAI API", "React", "Node.js"],
      github: "https://github.com/MehdiBenameur/SkyHire",
      demo: "#",
      icon: <FaMicrochip />,
      featured: true
    },
    {
      title: "E-Commerce Product Store",
      description: "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Features admin dashboard for inventory management.",
      technologies: ["MERN Stack", "JWT Auth", "Redux", "Stripe API"],
      github: "https://github.com/MehdiBenameur/Product-Store",
      demo: "#",
      icon: <FaCode />,
      featured: true
    },
    {
      title: "Twitter Clone Social Platform",
      description: "Social media application replicating core Twitter features including posts, likes, comments, real-time updates, and user authentication with secure session management.",
      technologies: ["MERN Stack", "Socket.io", "JWT", "Real-time Updates"],
      github: "https://github.com/MehdiBenameur/twitter-clone",
      demo: "#",
      icon: <FaCode />,
      featured: true
    },
    {
      title: "Microservices Football Analytics",
      description: "Microservices-based backend system for football match analytics and prediction. Implements distributed architecture with independent services for data processing.",
      technologies: ["Microservices", "Spring Boot", "Docker", "REST APIs"],
      github: "https://github.com/MehdiBenameur/Microservices-Foot",
      demo: "#",
      icon: <FaDatabase />
    }, 
    {
  title: "Modern Portfolio Website",
  description: "Professional responsive portfolio with dark/light mode, animations, and particle effects. Built with React, featuring modern UI/UX design for recruiters.",
  technologies: ["React", "CSS3", "JavaScript", "React Icons", "Particles.js"],
  github: "https://github.com/MehdiBenameur/mehdi-portfolio",
  demo: "https://mehdibenameur.github.io/mehdi-portfolio",
  icon: <FaCode />,
  featured: false
}
  ];

  return (
    <section id="projects" className="section" style={{background: 'var(--bg)'}}>
      <div className="container">
        <h2 className="section-title">Projects & Portfolio</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${project.featured ? 'featured' : ''} fade-in`}
            >
              {project.featured && (
                <div className="featured-badge">
                  <span>⭐ Featured</span>
                </div>
              )}
              
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <h3>{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> Source Code
                </a>
                {/* Cache le bouton Demo pour le moment */}
                {/* <a href={project.demo} className="project-link">
                  <FaExternalLinkAlt /> Live Demo
                </a> */}
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-note">
          <p>💡 <strong>Note:</strong> Live demos coming soon! Meanwhile, check out the source code on GitHub.</p>
        </div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .project-card {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px var(--shadow);
          transition: all 0.3s ease;
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          border: 1px solid transparent;
        }

        .project-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card.featured {
          border: 2px solid var(--secondary);
          background: linear-gradient(135deg, var(--card-bg) 0%, rgba(52, 152, 219, 0.05) 100%);
        }

        .featured-badge {
          position: absolute;
          top: -10px;
          right: 20px;
          background: var(--secondary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          box-shadow: 0 3px 10px rgba(52, 152, 219, 0.3);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px var(--shadow);
        }

        .project-card.featured:hover {
          box-shadow: 0 15px 40px rgba(52, 152, 219, 0.2);
        }

        .project-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .project-icon {
          color: var(--secondary);
          font-size: 1.8rem;
          background: rgba(52, 152, 219, 0.1);
          padding: 0.8rem;
          border-radius: 12px;
        }

        .project-header h3 {
          margin: 0;
          color: var(--primary);
          font-size: 1.4rem;
        }

        .project-description {
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: var(--text);
          min-height: 80px;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: var(--light);
          color: var(--primary);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(52, 152, 219, 0.2);
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.2rem;
          background: var(--light);
          color: var(--primary);
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .project-link:hover {
          background: var(--secondary);
          color: white;
          transform: translateY(-2px);
        }

        .projects-note {
          text-align: center;
          padding: 1.5rem;
          background: var(--card-bg);
          border-radius: 10px;
          border-left: 4px solid var(--secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-note p {
          margin: 0;
          color: var(--text);
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .project-header {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
          
          .project-links {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;