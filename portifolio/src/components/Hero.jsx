// src/components/Hero.jsx

import React from 'react';
import './Hero.css'; // Importa o CSS

// 1. Agora só importamos UMA imagem
import minhaFotoCompleta from '../assets/foto10.png';

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-wrapper">
        
        {/* Coluna 1: Conteúdo de Texto (igual) */}
        <div className="hero-content">
          <p className="hero-intro">Bem-vindo, aqui é meu web portifolio</p>
          
          <h1 className="hero-title">
            Olá, sou o <span className="highlight-green">Lucas Guerra</span> a Back-end developer
          </h1>

          <p className="hero-description">
            Desenvolvedor full stack apaixonado por criar soluções que unem tecnologia e praticidade.
            Transformo ideias em aplicações funcionais e modernas, com foco em performance e usabilidade.
            Trabalho com Java, Spring, React, TypeScript e Node.js, desenvolvendo sistemas completos do back ao front.
            Sempre em busca de novos desafios e aprendizado constante no mundo do desenvolvimento.
          </p>

          <button className="hero-button">
            Meus Projetos
          </button>
        </div>

        {/* Coluna 2: Imagem (MUITO MAIS SIMPLES) */}
        <div className="hero-image-container">
          {/* 2. Apenas UMA imagem é usada */}
          <img 
            src={minhaFotoCompleta} 
            alt="Lucas Guerra - Full Stack Developer" 
            className="hero-image-complete" 
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;