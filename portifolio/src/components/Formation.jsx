import React from 'react';
import './Formation.css';

const timelineData = [
  {
    date: '2024 - Atual',
    title: 'Tecnologo em Desenvolvimento de Software Multiplataforma',
    institution: 'FATEC - São José dos Campos'
  },
  {
    date: '2024',
    title: 'ESCOLA DE INOVADORES',
    institution: 'INOVA Escola de Inovadores Fatec'
  },
  {
    date: '2024',
    title: 'CURSO DE FRONT-END',
    institution: 'ORIGAMID Cursos de Front End'
  },
  {
    date: '2024',
    title: 'CURSO DE JAVASCRIPT',
    institution: 'EBAC Escola Britânica de Artes Criativas & Tecnologia'
  },
  {
    date: '2022 - 2024',
    title: 'Tecnologo em Analise e Desenvolvimento de Sistemas',
    institution: 'UNIP - Universidade Paulista'
  }
];

function Formation() {
  return (
    <section className="formation-container">
      <div className="formation-wrapper">

        <div className="formation-header">
          <h2 className="formation-title">Minha Trajetória</h2>
          <p className="formation-intro">
            Desenvolvedor Fullstack com experiência em projetos
            acadêmicos e freelancers, utilizando TypeScript, Node.js, React
            e Python. Foco em integração de sistemas e desenvolvimento de
            interfaces modernas. Buscando oportunidade para aplicar
            minhas habilidades em ambientes colaborativos e inovadores.
          </p>
        </div>

        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">{item.date}</span>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-institution">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Formation;