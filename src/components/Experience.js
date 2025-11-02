import React from 'react';
import { FaBriefcase, FaCalendar, FaTools } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Summer Intern – Ennahdafa JUDY, Nabeul",
      period: "Summer 2023",
      description: "Fuel Transaction Management Web App - Developed a full web application for managing fuel operations, automated CSV import, and created interactive dashboards.",
      technologies: ["Flask", "SQL Server", "Pandas", "HTML/CSS/JS"]
    },
    {
      title: "Summer Intern – DM Services Informatique, Sousse",
      period: "July 2024",
      description: "Contributed to web development projects, assisted in system maintenance, and gained experience in collaborative development environments.",
      technologies: ["Web Development", "System Maintenance", "Collaborative Development"]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experiences-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <FaBriefcase className="experience-icon" />
                <div className="experience-title">
                  <h3>{exp.title}</h3>
                  <div className="experience-period">
                    <FaCalendar /> {exp.period}
                  </div>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-technologies">
                <FaTools className="tech-icon" />
                <div className="tech-tags">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experiences-grid {
          display: grid;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .experience-card {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          border-left: 4px solid var(--secondary);
        }

        .experience-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .experience-icon {
          color: var(--secondary);
          font-size: 1.5rem;
          margin-top: 0.25rem;
        }

        .experience-title h3 {
          margin: 0 0 0.5rem 0;
          color: var(--primary);
        }

        .experience-period {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .experience-description {
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: var(--text);
        }

        .experience-technologies {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .tech-icon {
          color: var(--secondary);
          margin-top: 0.25rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: var(--light);
          color: var(--primary);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .experience-header {
            flex-direction: column;
          }
          
          .experience-technologies {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;