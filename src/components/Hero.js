import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Photo de profil */}
          <div className="profile-image-container">
            <div className="profile-image">
              <img 
                src="/profile.png" 
                alt="Mohamed Mehdi Ben Ameur"
                className="profile-img"
              />
              <div className="image-border"></div>
              <div className="image-glow"></div>
            </div>
          </div>
          
          {/* Contenu texte */}
          <div className="hero-text">
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
      </div>
      
      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%);
          color: white;
          padding: 150px 0 100px;
          text-align: center;
          margin-top: 60px;
          position: relative;
          overflow: hidden;
        }
        
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }
        
        .profile-image-container {
          position: relative;
          z-index: 2;
        }
        
        .profile-image {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto;
        }
        
        .profile-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--secondary);
          position: relative;
          z-index: 3;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        .profile-img:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(52, 152, 219, 0.4);
        }
        
        .image-border {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 2px solid var(--secondary);
          border-radius: 50%;
          animation: rotate 10s linear infinite;
          opacity: 0.7;
        }
        
        .image-glow {
          position: absolute;
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
          background: linear-gradient(45deg, var(--secondary), transparent);
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(10px);
          animation: pulse 2s ease-in-out infinite alternate;
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.2; transform: scale(1); }
          100% { opacity: 0.4; transform: scale(1.1); }
        }
        
        .hero-text {
          max-width: 600px;
        }
        
        .hero-text h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #fff, var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-text h2 {
          font-size: 1.8rem;
          color: var(--secondary);
          margin-bottom: 1.5rem;
        }
        
        .hero-text p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .btn-outline {
          background: transparent;
          border: 2px solid var(--secondary);
        }
        
        .btn-outline:hover {
          background: var(--secondary);
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        
        .social-links a {
          color: white;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }
        
        .social-links a:hover {
          color: var(--secondary);
          background: rgba(255,255,255,0.2);
          transform: translateY(-3px);
        }
        
        @media (max-width: 768px) {
          .hero-content {
            gap: 2rem;
          }
          
          .profile-image {
            width: 150px;
            height: 150px;
          }
          
          .hero-text h1 {
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