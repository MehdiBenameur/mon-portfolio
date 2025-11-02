import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Animation au scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observer tous les éléments avec des classes d'animation
    const animatedElements = document.querySelectorAll('.section-title, .card, .fade-in, .slide-in-left, .slide-in-right, .skill-category, .leadership-card');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <ParticlesBackground />
        <Header />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;