import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRobot } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "SkyHire",
      description: "AI-powered employability platform focused on the aviation sector, offering CV analysis, interview simulation, and personalized job matching using AI-driven mentorship.",
      technologies: ["MERN Stack", "AI", "Machine Learning"],
      github: "https://github.com/MehdiBenameur/SkyHire",
      demo: "#",
      icon: <FaRobot />
    },
    {
      title: "Product Store",
      description: "E-commerce web application with authentication, product management, and cart system.",
      technologies: ["MERN Stack", "React", "Node.js", "MongoDB"],
      github: "https://github.com/MehdiBenameur/Product-Store",
      demo: "#",
      icon: <FaCode />
    },
    {
      title: "Twitter Clone",
      description: "Social media clone featuring posts, likes, and authentication.",
      technologies: ["MERN Stack", "React", "Express", "MongoDB"],
      github: "https://github.com/MehdiBenameur/twitter-clone",
      demo: "#",
      icon: <FaCode />
    },
    {
      title: "Microservices-Foot",
      description: "Microservices-based backend project for football match analytics and prediction.",
      technologies: ["Microservices", "Spring Boot", "Docker"],
      github: "https://github.com/MehdiBenameur/Microservices-Foot",
      demo: "#",
      icon: <FaCode />
    }
  ];

  return (
    <section id="projects" className="section" style={{background: '#f8f9fa'}}>
      <div className="container">
        <h2 className="section-title">Academic Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
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
                  <FaGithub /> Code
                </a>
                <a href={project.demo} className="project-link">
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .project-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .project-icon {
          color: var(--secondary);
          font-size: 1.5rem;
        }

        .project-header h3 {
          margin: 0;
          color: var(--primary);
        }

        .project-description {
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: var(--text);
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--light);
          color: var(--primary);
          text-decoration: none;
          border-radius: 5px;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .project-link:hover {
          background: var(--secondary);
          color: white;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;