// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects'; // Importamos os Projetos

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Marquee /> {/* Faixa 1 (Tecnologias) */}
      <AboutMe />
      
      {/* Divisor de secção + Secção de Projetos */}
      <Marquee /> {/* Faixa 2 (Divisor) */}
      <Projects />

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <p>(Restante do site em construção...)</p>
      </main>
    </div>
  );
}

export default App;