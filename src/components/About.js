import React from 'react';
import { FaUser, FaGraduationCap, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Motivated and detail-oriented Software Engineering student at École Polytechnique de Sousse, 
              passionate about building impactful digital solutions through modern web technologies. 
              Ranked first in class with experience in fullstack development (MERN, Angular, Spring Boot).
            </p>
            <div className="about-features">
              <div className="feature">
                <FaCode className="feature-icon" />
                <span>Fullstack Development</span>
              </div>
              <div className="feature">
                <FaLightbulb className="feature-icon" />
                <span>Innovation & Leadership</span>
              </div>
              <div className="feature">
                <FaGraduationCap className="feature-icon" />
                <span>Academic Excellence</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>1st</h3>
              <p>Class Rank</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>2</h3>
              <p>Internships</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          color: var(--text);
        }

        .about-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--light);
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .feature:hover {
          transform: translateX(10px);
        }

        .feature-icon {
          color: var(--secondary);
          font-size: 1.2rem;
        }

        .about-stats {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .stat {
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .stat h3 {
          font-size: 2.5rem;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;