import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal'; 
import hakaMainImage from '../assets/haka-main.png';
import hakaOverlayImage from '../assets/haka-overlay.png';

const projectsData = [
  {
    id: 1,
    title: 'HAKA COMPANY',
    description: 'Desenvolvi uma loja de roupas em WordPress...',
    tags: ['React', 'TypeScript', 'Node.js'],
    imageMain: hakaMainImage, 
    imageOverlay: hakaOverlayImage,
    link: '#',
    semester: null, 
  },
  {
    id: 2,
    title: 'Byte - Fatec',
    description: 'Website informativo sobre vereadores de SJC.',
    tags: ['Python', 'Flask', 'MySQL'],
    imageMain: '/caminho/para/imagem1.png', 
    imageOverlay: '/caminho/para/imagem2.png',
    link: 'https://github.com/debuggersFatec/API-3', 
    
    semester: '1º Semestre (2023-2)', 
    partner: 'Fatec (Prof. Jean e Masanori)',
    problem: 'Dificuldade de acesso e compreensão dos dados legislativos disponibilizados pela Câmara Municipal...',
    solution: 'Website informativo que centraliza e organiza os dados referentes aos vereadores...',
    contributions: 'Atuei como Product Owner (PO), organizando o backlog e validando entregas.',
    hardSkillsText: 'HTML5 (Faço com autonomia), CSS3 (Faço com autonomia), Python (Faço com ajuda)...',
    softSkills: 'Liderança: Como PO, guiei o time nas prioridades.\nComunicação: Apresentação dos requisitos...',
  },
  {
    id: 3,
    title: 'Debuggers - Helpnei',
    description: 'Plataforma para empresas patrocinadoras.',
    tags: ['React', 'Firebase'],
    imageMain: '/caminho/para/imagem.png',
    imageOverlay: '/caminho/para/imagem.png',
    link: 'https://github.com/matheuskarnas/API-2',
    
    semester: '2º Semestre (2024-1)',
    partner: 'Helpnei',
    problem: 'Falta de uma plataforma digital moderna para divulgar patrocinadores...',
    solution: 'Plataforma web interativa com mapas e sistema de cadastro...',
    contributions: 'Desenvolvimento Front-end com React e integração com mapas.',
    hardSkillsText: 'React (Faço com autonomia), TypeScript (Faço com autonomia)...',
    softSkills: 'Trabalho em Equipe: Integração constante com o back-end...',
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const activeProject = projectsData[activeIndex];

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const openModal = (project) => {
    if (project.semester) { 
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="projects-container" id="projects">
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
              <div className="project-desktop-actions">
                <a 
                  href={activeProject.link} 
                  className="project-button-desktop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visitar Projeto
                </a>
                {activeProject.semester && (
                  <button 
                    className="project-button-details" 
                    onClick={() => openModal(activeProject)}
                  >
                    Ver Detalhes (API)
                  </button>
                )}
              </div>
              <div className="project-mobile-actions">
                <a 
                  href={activeProject.link} 
                  className="project-button-mobile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </a>
                {activeProject.semester && (
                  <button 
                    className="project-button-details-mobile" 
                    onClick={() => openModal(activeProject)}
                  >
                    Ver Detalhes (API)
                  </button>
                )}
              </div>
            </div>

            <div className="project-images">
              <img src={activeProject.imageMain} alt={activeProject.title} className="project-image-main" />
              {activeProject.imageOverlay && (
                <img src={activeProject.imageOverlay} alt="Detalhe" className="project-image-overlay" />
              )}
            </div>
          </div>

          <div className="project-pagination">
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
      
      {isModalOpen && <ProjectModal project={selectedProject} onClose={closeModal} />}
      
    </section>
  );
}

export default Projects;