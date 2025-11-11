import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Marquee from './components/Marquee';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <Header />
      
      {/* 2. Adicione o Hero aqui */}
      <Hero />
      <Marquee />
      <AboutMe />

      {/* O <main> que tínhamos pode ser removido ou ficar abaixo do Hero */}
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <p>(Restante do site em construção...)</p>
      </main>
    </div>
  );
}

export default App;