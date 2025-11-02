import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Mohamed Mehdi Ben Ameur</h1>
          <h2>Software Engineering Student</h2>
          <p>Passionate about building impactful digital solutions through modern web technologies</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/MehdiBenameur" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/mohamed-mehdi-ben-ameur" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:mohamedmehdi.benameur@polytechnicien.tn">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
          color: white;
          padding: 150px 0 100px;
          text-align: center;
          margin-top: 60px;
        }
        
        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }
        
        .hero-content h2 {
          font-size: 1.8rem;
          color: var(--secondary);
          margin-bottom: 1.5rem;
        }
        
        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
        }
        
        .btn-outline {
          background: transparent;
          border: 2px solid var(--secondary);
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        
        .social-links a {
          color: white;
          font-size: 1.5rem;
          transition: color 0.3s ease;
        }
        
        .social-links a:hover {
          color: var(--secondary);
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;