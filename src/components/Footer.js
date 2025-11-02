import React from 'react';
import { FaHeart, FaCode, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              Made with <FaHeart className="heart" /> by Mohamed Mehdi Ben Ameur
            </p>
            <p className="footer-subtitle">
              <FaCode /> Software Engineering Student
            </p>
          </div>
          
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <button className="scroll-to-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Mohamed Mehdi Ben Ameur. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--header-bg);
          color: white;
          padding: 3rem 0 1rem;
          margin-top: 2rem;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-text p {
          margin: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .heart {
          color: var(--accent);
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .footer-subtitle {
          color: var(--secondary);
          font-weight: 500;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--secondary);
        }

        .scroll-to-top {
          background: var(--secondary);
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

        .scroll-to-top:hover {
          background: var(--accent);
          transform: translateY(-3px);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-links {
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;