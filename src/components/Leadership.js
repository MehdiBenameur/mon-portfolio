import React from 'react';
import { FaUsers, FaUserTie, FaHandsHelping, FaHeart } from 'react-icons/fa';

const Leadership = () => {
  const leaderships = [
    {
      role: "Chair – IEEE Computer Society",
      organization: "École Polytechnique de Sousse",
      period: "2023 – Present",
      description: "Organized and led technical workshops (Web Dev, AI, Cybersecurity) and IEEE events such as TechX Congress. Mentored junior members.",
      icon: <FaUserTie />
    },
    {
      role: "Mentor",
      organization: "Tunisian National Children's Organization",
      period: "2019 – Present",
      description: "Organized educational and creative workshops to foster teamwork among youth.",
      icon: <FaUsers />
    },
    {
      role: "Volunteer",
      organization: "Tunisian Red Crescent",
      period: "2018 – 2019",
      description: "Participated in community service and humanitarian projects.",
      icon: <FaHeart />
    }
  ];

  return (
    <section id="leadership" className="section">
      <div className="container">
        <h2 className="section-title">Leadership & Volunteering</h2>
        <div className="leadership-grid">
          {leaderships.map((item, index) => (
            <div key={index} className="leadership-card slide-in-left">
              <div className="leadership-icon">
                {item.icon}
              </div>
              <div className="leadership-content">
                <h3>{item.role}</h3>
                <div className="leadership-org">{item.organization}</div>
                <div className="leadership-period">{item.period}</div>
                <p className="leadership-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .leadership-card {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px var(--shadow);
          display: flex;
          gap: 1.5rem;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateX(-50px);
        }

        .leadership-card.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .leadership-card:hover {
          transform: translateY(-5px) translateX(0);
          box-shadow: 0 10px 30px var(--shadow);
        }

        .leadership-icon {
          color: var(--secondary);
          font-size: 2rem;
          flex-shrink: 0;
        }

        .leadership-content h3 {
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }

        .leadership-org {
          color: var(--secondary);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .leadership-period {
          color: var(--text-light);
          font-size: 0.9rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .leadership-description {
          line-height: 1.6;
          color: var(--text);
        }

        @media (max-width: 768px) {
          .leadership-grid {
            grid-template-columns: 1fr;
          }
          
          .leadership-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Leadership;