// src/components/Projects.jsx

import React, { useState } from 'react';
import './Projects.css';

// --- 1. IMPORTE TODAS AS SUAS IMAGENS AQUI ---

// Projeto Haka (Já tínhamos)
import hakaMainImage from '../assets/haka-main.png';
import hakaOverlayImage from '../assets/haka-overlay.png';

// Projeto Byte
import byte10 from '../assets/byte10.png';
import byte20 from '../assets/byte20.png';

// Projeto Helpnei
import helpnei10 from '../assets/helpnei10.png';
import helpnei20 from '../assets/helpnei20.png';

// Projeto Synex
import synex10 from '../assets/synex10.png';
import synex20 from '../assets/synex20.png';

// Projeto World Beauty
import wb10 from '../assets/wb10.png';
import wb20 from '../assets/wb20.png';

// Projeto Aerocode
import aero10 from '../assets/aero10.png';
import aero20 from '../assets/aero20.png';

// Projeto Dunkel
import dunkel10 from '../assets/dunkel10.png';
import dunkel20 from '../assets/dunkel20.png';

// Projeto FastTask
import fast10 from '../assets/fast10.png';
import fast20 from '../assets/fast20.png';

// Projeto Pratik
import pratik10 from '../assets/pratik10.png';
import pratik20 from '../assets/pratik20.png';


// --- 2. ESTA É A LISTA (ARRAY) DOS SEUS PROJETOS ---
// Adicionei todos os 9 projetos aqui.
// Pode agora editar a 'description', 'tags', e 'link' de cada um.
const projectsData = [
  {
    id: 1,
    title: 'HAKA COMPANY',
    description: 'Desenvolvi uma loja de roupas em WordPress com diversas funcionalidades para proporcionar uma excelente experiência de compra online, incluindo um catálogo de produtos detalhado, um carrinho de compras intuitivo e integração de pagamento segura.',
    tags: ['React', 'TypeScript', 'Node.js'], // Pode mudar estas tags
    imageMain: hakaMainImage,
    imageOverlay: hakaOverlayImage,
    link: '#' // Link para o projeto (GitHub ou site)
  },
  {
    id: 2,
    title: 'Byte - Fatec',
    description: 'PREENCHA A DESCRIÇÃO: Breve descrição do projeto Byte - Fatec.',
    tags: ['Java', 'Spring', 'MySQL'], // Mude as tags
    imageMain: byte10,
    imageOverlay: byte20,
    link: '#'
  },
  {
    id: 3,
    title: 'Debuggers - Helpnei',
    description: 'PREENCHA A DESCRIÇÃO: Breve descrição do projeto Debuggers - Helpnei.',
    tags: ['React', 'Firebase'], // Mude as tags
    imageMain: helpnei10,
    imageOverlay: helpnei20,
    link: '#'
  },
  {
    id: 4,
    title: 'Synex',
    description: 'PREENCHA A DESCRIÇÃO: Breve descrição do projeto Synex.',
    tags: ['JavaScript', 'HTML', 'CSS'], // Mude as tags
    imageMain: synex10,
    imageOverlay: synex20,
    link: '#'
  },
  {
    id: 5,
    title: 'World Beauty - Fatec',
    description: 'PREENCHA A DESCRIÇÃO: Breve descrição do projeto World Beauty.',
    tags: ['PHP', 'Laravel', 'Bootstrap'], // Mude as tags
    imageMain: wb10,
    imageOverlay: wb20,
    link: '#'
  },
  {
    id: 6,
    title: 'Aerocode',
    description: 'PREENCHA A DESCRIÇÃO: Breve descrição do projeto Aerocode.',
    tags: ['Python', 'Django'], // Mude as tags
    imageMain: aero10,
    imageOverlay: aero20,
    link: '#'
  },
  {
    id: 7,
    title: 'Dunkel Company',
    description: 'PREENCHA A DESCRIÇÃO: Breve descrição do projeto Dunkel Company.',
    tags: ['React', 'Node.js'], // Mude as tags
    imageMain: dunkel10,
    imageOverlay: dunkel20,
    link: '#'
  },
  {
    id: 8,
    title: 'FASTTASK - Debuggers',
    description: 'PREENCHA A DESCRIÇÃO: Breve descrição do projeto FASTTASK.',
    tags: ['React Native', 'Firebase'], // Mude as tags
    imageMain: fast10,
    imageOverlay: fast20,
    link: '#'
  },
  {
    id: 9,
    title: 'Pratik',
    description: 'PREENCHA A DESCRIÇÃO: Breve descrição do projeto Pratik.',
    tags: ['Vue.js', 'Node.js'], // Mude as tags
    imageMain: pratik10,
    imageOverlay: pratik20,
    link: '#'
  },
  // Pode adicionar o { id: 10, ... } aqui quando tiver mais
];


// --- 3. O RESTO DO COMPONENTE (NÃO PRECISA DE MUDAR NADA AQUI) ---

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projectsData[activeIndex];

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="projects-container">
      <div className="projects-wrapper">
        <div className="project-card-frame">
          <div className="project-card-content">
            
            <div className="project-info">
              <h2 className="project-title">{activeProject.title}</h2>
              <p className="project-description">{activeProject.description}</p>
              
              <div className="project-tags">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <a 
                href={activeProject.link} 
                className="project-button-desktop" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visitar Projeto
              </a>

              <a 
                href={activeProject.link} 
                className="project-button-mobile" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver Projeto
              </a>
            </div>

            <div className="project-images">
              <img 
                src={activeProject.imageMain} 
                alt={`${activeProject.title} - Tela principal`}
                className="project-image-main"
              />
              <img 
                src={activeProject.imageOverlay} 
                alt={`${activeProject.title} - Detalhe`}
                className="project-image-overlay"
              />
            </div>
          </div>

          <div className="project-pagination">
            {/* Isto cria os "dots" automaticamente, um para cada projeto */}
            {projectsData.map((project, index) => (
              <button
                key={project.id}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;