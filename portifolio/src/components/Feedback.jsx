import React, { useState } from 'react';
import './Feedback.css';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import viniciusPhoto from '../assets/vinicius-paz.jpg';
import pedroPhoto from '../assets/pedro-vaz.jpg';
import helpneiLogo from '../assets/helpnei-logo.jpg';

const feedbackData = [
  {
    id: 1,
    rating: 5,
    text: "Tive a honra de ser o cliente de um desses projetos e acompanhar de perto o desenvolvimento de uma solução construída com seriedade, criatividade e colaboração genuína.",
    name: 'Vinicius Paz',
    location: 'Empresa Helpnei',
    image: viniciusPhoto,
    platformLogo: helpneiLogo
  },
  {
    id: 2,
    rating: 5,
    text: "Conheci o Lucas durante a faculdade e, desde o início, sua curiosidade e inteligência se destacaram. Ele possui uma incrível facilidade para aprender, além de sempre demonstrar otimismo e perseverança ao encarar atividades desafiadoras. Lucas também se destaca por sua habilidade em construir relacionamentos e se conectar com pessoas de diferentes perfis, o que o torna um profissional ainda mais completo.",
    name: 'Pedro Vaz',
    location: 'Colega de Faculdade',
    image: pedroPhoto,
    platformLogo: null
  }
];

function renderStars(rating) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar key={i} className={i < rating ? 'star-filled' : 'star-empty'} />
    );
  }
  return stars;
}

function Feedback() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current === feedbackData.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? feedbackData.length - 1 : current - 1));
  };
  
  const activeFeedback = feedbackData[activeIndex];

  return (
    <section className="feedback-container">
      <div className="feedback-wrapper">

        <div className="feedback-intro">
          <div className="feedback-metric">
            <FaStar className="metric-star" />
            <span>– 97.6% de Satisfação</span>
          </div>
          <h2 className="feedback-title">
            DEPOIMENTOS DE CLIENTES E COLEGAS <span className="highlight-green">REAIS</span>.
          </h2>
          <p className="feedback-subtitle">
            Confira algumas das avaliações que recebi. Pessoas que trabalham e estudaram comigo ficam muito satisfeitas com o resultado.
          </p>
        </div>

        <div className="feedback-slider-area">
          <button className="slider-arrow arrow-left" onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          
          <div className="feedback-card">
            <span className="clapping-hands">👏</span>
            <div className="feedback-rating">
              {renderStars(activeFeedback.rating)}
            </div>
            
            <p className="feedback-text">"{activeFeedback.text}"</p>
            
            <div className="feedback-customer">
              <img 
                src={activeFeedback.image} 
                alt={activeFeedback.name} 
                className="customer-photo" 
              />
              <div className="customer-details">
                <span className="customer-name">{activeFeedback.name.toUpperCase()}</span>
                <span className="customer-location">{activeFeedback.location}</span>
              </div>
            </div>

            {activeFeedback.platformLogo && (
              <img 
                src={activeFeedback.platformLogo} 
                alt="Plataforma" 
                className="platform-logo" 
              />
            )}
          </div>
          
          <button className="slider-arrow arrow-right" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}

export default Feedback;