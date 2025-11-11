import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal'; 

import hakaMainImage from '../assets/haka-main.png';
import hakaOverlayImage from '../assets/haka-overlay.png';
import byte10 from '../assets/byte10.png';
import byte20 from '../assets/byte20.png';
import helpnei10 from '../assets/helpnei10.png';
import helpnei20 from '../assets/helpnei20.png';
import synex10 from '../assets/synex10.png';
import synex20 from '../assets/synex20.png';
import wb10 from '../assets/wb10.png';
import wb20 from '../assets/wb20.png';
import aero10 from '../assets/aero10.png';
import aero20 from '../assets/aero20.png';
import dunkel10 from '../assets/dunkel10.png';
import dunkel20 from '../assets/dunkel20.png';
import fast10 from '../assets/fast10.png';
import fast20 from '../assets/fast20.png';
import pratik10 from '../assets/pratik10.png';
import pratik20 from '../assets/pratik20.png';

const projectsData = [
  {
    id: 1,
    title: 'HAKA COMPANY',
    description: 'Desenvolvi uma loja de roupas em WordPress...',
    tags: ['React', 'TypeScript', 'Node.js'],
    imageMain: hakaMainImage,
    imageOverlay: hakaOverlayImage,
    link: '#',
    semester: null, problem: null, solution: null, contributions: null, hardSkillsText: null, softSkills: null, partner: null,
  },
  {
    id: 2,
    title: 'Byte - Fatec',
    description: 'Um website informativo que centraliza e organiza dados sobre a atuação de vereadores da Câmara Municipal de SJC.',
    tags: ['Python', 'Flask', 'MySQL'],
    imageMain: byte10,
    imageOverlay: byte20,
    link: 'https://github.com/debuggersFatec/API-3',
    semester: 'Primeiro Semestre',
    partner: 'Fatec (Professor Jean e Masanori)',
    problem: 'O problema central identificado foi a dificuldade de acesso e compreensão dos dados legislativos disponibilizados pela Câmara Municipal de São José dos Campos. As informações sobre a atuação dos vereadores [...] estavam disponíveis em formato técnico e disperso...',
    solution: 'A equipe desenvolveu um website informativo e acessível que centraliza e organiza os dados referentes aos vereadores [...]. A aplicação permite que qualquer eleitor visualize rapidamente: Presenças e faltas; Proposições apresentadas; Perfil individual...',
    contributions: 'Atuei como PO nesse api, e vi como é importante os projetos serem organizados e de se utilizar uma metodologia.',
    hardSkillsText: 'HTML5 (Faço com autonomia), CSS3 (Faço com autonomia), JavaScript (Faço com autonomia), Python (Faço com ajuda), Flask (Faço com ajuda), MySQL (Faço com ajuda), JSON (Faço com autonomia), Figma (Faço com autonomia), Jira (Faço com autonomia), Git/GitHub (Faço com autonomia)',
    softSkills: 'Colaboração: Trabalhei de forma integrada...\nComunicação: Participei ativamente nas dailies...\nProatividade: Propus melhorias no layout...\nOrganização: Mantive o backlog do Jira...\nPensamento Analítico: Ajudei a validar a estrutura de dados...\nResponsabilidade: Cumpri os prazos definidos...',
  },
  {
    id: 3,
    title: 'Debuggers - Helpnei',
    description: 'Uma plataforma digital para divulgar e valorizar empresas patrocinadoras do programa Helpnei.',
    tags: ['React', 'Firebase'],
    imageMain: helpnei10,
    imageOverlay: helpnei20,
    link: 'https://github.com/matheuskarnas/API-2',
    semester: 'Segundo Semestre',
    partner: 'Helpnei',
    problem: 'O principal desafio identificado foi a falta de uma plataforma digital moderna e centralizada que conseguisse divulgar e valorizar as empresas patrocinadoras...',
    solution: 'A solução proposta foi o desenvolvimento de uma plataforma web interativa, intuitiva e responsiva...',
    contributions: 'Atuei como frontend e vi react pela primeira vez junto de typescript,e achei muito interessante a forma como tudo fica tipado',
    hardSkillsText: 'React (Faço com autonomia), TypeScript (Faço com autonomia), Vite (Faço com autonomia), Supabase (Faço com ajuda), Vercel (Faço com autonomia)',
    softSkills: 'Comunicação: Usei quando alinhei com o time...\nOrganização: Mantive o código e os commits padronizados...\nResolução de Problemas: Enfrentei desafios ao integrar o mapa...',
  },
  {
    id: 4, title: 'Synex', description: '...', tags: ['JavaScript', 'HTML', 'CSS'], imageMain: synex10, imageOverlay: synex20, link: '#',
    semester: null, problem: null, solution: null, contributions: null, hardSkillsText: null, softSkills: null, partner: null,
  },
  {
    id: 5, title: 'World Beauty - Fatec', description: '...', tags: ['PHP', 'Laravel', 'Bootstrap'], imageMain: wb10, imageOverlay: wb20, link: '#',
    semester: null, problem: null, solution: null, contributions: null, hardSkillsText: null, softSkills: null, partner: null,
  },
  {
    id: 6, title: 'Aerocode', description: '...', tags: ['Python', 'Django'], imageMain: aero10, imageOverlay: aero20, link: '#',
    semester: null, problem: null, solution: null, contributions: null, hardSkillsText: null, softSkills: null, partner: null,
  },
  {
    id: 7, title: 'Dunkel Company', description: '...', tags: ['React', 'Node.js'], imageMain: dunkel10, imageOverlay: dunkel20, link: '#',
    semester: null, problem: null, solution: null, contributions: null, hardSkillsText: null, softSkills: null, partner: null,
  },
  {
    id: 8,
    title: 'FASTTASK - Debuggers',
    description: 'Aplicação web colaborativa para gerenciamento de tarefas em equipe.',
    tags: ['React', 'Java', 'Spring'],
    imageMain: fast10,
    imageOverlay: fast20,
    link: 'https://github.com/debuggersFatec/API-3',
    semester: 'Terceiro Semestre',
    partner: 'GSW',
    problem: 'O desafio proposto consistia em resolver uma necessidade recorrente de equipes e profissionais individuais: a dificuldade de organizar tarefas...',
    solution: 'A solução desenvolvida foi o GSW Task Manager, uma aplicação web colaborativa que permite aos usuários criar, gerenciar e acompanhar tarefas...',
    contributions: 'Atuei como backend Java e após muitos erros e aprendizados comecei a entender como uma linguagem robusta funciona',
    hardSkillsText: 'HTML5 (Faço com autonomia), CSS3 (Faço com autonomia), JavaScript (Faço com autonomia), TypeScript (Faço com autonomia), React (Faço com autonomia), Node.js (Faço com ajuda), Java (Spring) (Faço com ajuda), MongoDB (Faço com ajuda), Git/GitHub (Faço com autonomia), Jira (Faço com autonomia), Figma (Faço com autonomia)',
    softSkills: 'Colaboração: Trabalhei em conjunto com o time de backend e frontend...\nComunicação: Mantive alinhamento constante com o Product Owner...\nProatividade: Sugeri melhorias no design da sidebar...',
  },
  {
    id: 9, title: 'Pratik', description: '...', tags: ['Vue.js', 'Node.js'], imageMain: pratik10, imageOverlay: pratik20, link: '#',
    semester: null, problem: null, solution: null, contributions: null, hardSkillsText: null, softSkills: null, partner: null,
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
              <img src={activeProject.imageMain} alt={`${activeProject.title} - Tela principal`} className="project-image-main" />
              <img src={activeProject.imageOverlay} alt={`${activeProject.title} - Detalhe`} className="project-image-overlay" />
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