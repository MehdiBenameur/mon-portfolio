import React from 'react';
import { FaUniversity, FaCalendar, FaAward } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="section" style={{background: '#f8f9fa'}}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-header">
                <FaUniversity className="timeline-icon" />
                <h3>École Polytechnique de Sousse</h3>
                <span className="timeline-date">
                  <FaCalendar /> 2021 – Present
                </span>
              </div>
              <p className="timeline-subtitle">Software Engineering Program</p>
              <div className="timeline-badge">
                <FaAward /> Ranked first in class
              </div>
              <p className="timeline-description">
                Specialized in modern web technologies, software architecture, and fullstack development.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-header">
                <FaUniversity className="timeline-icon" />
                <h3>Lycée Pilote de Sousse</h3>
                <span className="timeline-date">
                  <FaCalendar /> 2019 – 2021
                </span>
              </div>
              <p className="timeline-subtitle">Baccalaureate in Science</p>
              <div className="timeline-badge">
                <FaAward /> Excellent mention
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .education-timeline {
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-item {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 3rem;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--secondary);
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          left: -6px;
          top: 0;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--secondary);
        }

        .timeline-content {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .timeline-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .timeline-icon {
          color: var(--secondary);
          font-size: 1.2rem;
        }

        .timeline-header h3 {
          margin: 0;
          color: var(--primary);
        }

        .timeline-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .timeline-subtitle {
          font-weight: bold;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        .timeline-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--light);
          color: var(--primary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .timeline-description {
          color: var(--text);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .timeline-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;