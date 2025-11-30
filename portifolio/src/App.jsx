import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AboutMe from './components/AboutMe';
import Formation from './components/Formation'; // Movido para cima
import Skills from './components/Skills';
import Projects from './components/Projects'; 
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer'; 

function App() {
  return (
    <div>
      <Header />
      
      <div id="home">
        <Hero />
      </div>
      
      <Marquee />
      
      <div id="about">
        <AboutMe />
      </div>
      
      <div id="formation">
        <Formation />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <Marquee />

      <div id="projects">
        <Projects />
      </div>

      <Marquee />
      
      <Feedback />
      
      <Marquee />
      
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;