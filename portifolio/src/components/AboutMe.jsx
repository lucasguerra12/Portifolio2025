import React from 'react';
import './AboutMe.css';
import aboutMePhoto from '../assets/foto20.png';

function AboutMe() {
  const idade = 21; 
  
  return (
    <section className="about-container" id="about">
      <div className="about-wrapper">
        <div className="about-image-container">
          <img 
            src={aboutMePhoto} 
            alt="Lucas Guerra" 
            className="about-photo" 
          />
        </div>

        <div className="about-content">
          <span className="about-tag">SOBRE MIM</span>
          
          <h2 className="about-title">
            Lucas Guerra, {idade} anos
          </h2>
          
          <h3 className="about-subtitle">
            Desenvolvedor Full Stack
          </h3>
          
          <div className="about-description">
            <p>
              <strong>Histórico e Motivação:</strong> Sempre fui apaixonado por tecnologia. Essa curiosidade me levou à <strong>Fatec São José dos Campos</strong>, onde ingressei no curso de Desenvolvimento de Software Multiplataforma buscando uma base sólida e prática para minha carreira.
            </p>
            <br />
            <p>
              <strong>Trajetória Profissional:</strong> Atualmente, possuo experiência prática através de projetos acadêmicos robustos e trabalhos como freelancer, focando em soluções completas (Back-end e Front-end). Estou em busca de novas oportunidades formais para aplicar meus conhecimentos em React, Node.js e Java.
            </p>
            <br />
            <p>
              Sou um profissional focado, detalhista e persistente. Valorizo o trabalho em equipe, a comunicação clara e a entrega de resultados de qualidade.
            </p>
          </div>

          <div className="about-stats-container">
            <div className="stat-card">
              <span className="stat-number">+10</span>
              <p className="stat-description">Tecnologias dominadas</p>
            </div>
            
            <div className="stat-card">
              <span className="stat-number">1,5</span>
              <p className="stat-description">Anos de prática</p>
            </div>

            <div className="stat-card">
              <span className="stat-number">+10</span>
              <p className="stat-description">Projetos Acadêmicos</p>
            </div>
          </div>

          <a href="#formation" className="about-learn-more">
            VER MINHA FORMAÇÃO
          </a>
        </div>
        
      </div>
    </section>
  );
}

export default AboutMe;