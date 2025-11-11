import React from 'react';
import './AboutMe.css';
import aboutMePhoto from '../assets/foto20.png';

function AboutMe() {
  return (
    <section className="about-container">
      <div className="about-wrapper">
        <div className="about-image-container">
          <img 
            src={aboutMePhoto} 
            alt="Lucas Guerra" 
            className="about-photo" 
          />
        </div>

        <div className="about-content">
          <span className="about-tag">ABOUT ME</span>
          
          <h2 className="about-title">
            Profissional focado e Proativo
          </h2>
          
          <h3 className="about-subtitle">
            Back-end e Front-end
          </h3>
          <p className="about-description">
            Sou um profissional focado, detalhista e persistente, com facilidade para aprender e resolver problemas. Valorizo o trabalho em equipe, a comunicação clara e a busca por resultados de qualidade. Estou sempre em busca de novos desafios para crescer pessoal e profissionalmente.
          </p>

          <div className="about-stats-container">
            <div className="stat-card">
              <span className="stat-number">+10</span>
              <p className="stat-description">Tecnologias aplicadas</p>
            </div>
            
            <div className="stat-card">
              <span className="stat-number">1,5</span>
              <p className="stat-description">Anos de experiência full stack</p>
            </div>

            <div className="stat-card">
              <span className="stat-number">+10</span>
              <p className="stat-description">Projetos</p>
            </div>
          </div>

          <a href="#about-section" className="about-learn-more">
            LEARN MORE
          </a>
        </div>
        
      </div>
    </section>
  );
}

export default AboutMe;