import React from 'react';
import { FaCode, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="header">
      <nav className="nav container">
        <div className="logo">
          <FaCode className="logo-icon" />
          <span>Mehdi Ben Ameur</span>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#leadership">Leadership</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>
      
      <style jsx>{`
        .header {
          background: var(--header-bg);
          color: white;
          padding: 1rem 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
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
        
        .nav-right {
          display: flex;
          align-items: center;
          gap: 2rem;
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
        
        .theme-toggle {
          background: none;
          border: none;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .theme-toggle:hover {
          background: rgba(255,255,255,0.1);
          transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
          }
          
          .nav-right {
            gap: 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;