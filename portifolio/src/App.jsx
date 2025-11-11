import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects'; 
import Feedback from './components/Feedback';
import Formation from './components/Formation'; 
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Marquee />
      <AboutMe />
      <Skills />
      <Marquee />
      <Projects />
      <Marquee />
      <Feedback />
      <Marquee />
      <Formation />
      <Marquee />
      <Contact />
      <Footer />

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <p>(Restante do site em construção...)</p>
      </main>
    </div>
  );
}

export default App;