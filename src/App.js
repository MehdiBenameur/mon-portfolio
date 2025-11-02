import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './styles/App.css';
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
  return (
    <ThemeProvider>
      <div className="App">
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