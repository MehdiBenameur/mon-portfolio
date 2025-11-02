import React from 'react';
import { FaCode } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="logo">
          <FaCode className="logo-icon" />
          <span>Mehdi Ben Ameur</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <style jsx>{`
        .header {
          background: var(--primary);
          color: white;
          padding: 1rem 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }
        
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          font-weight: bold;
        }
        
        .logo-icon {
          color: var(--secondary);
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        
        .nav-links a {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .nav-links a:hover {
          color: var(--secondary);
        }
        
        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;