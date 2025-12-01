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
    description: 'Desenvolvi uma loja de roupas em WordPress. (Em andamento)',
    tags: ['React', 'TypeScript', 'Node.js'],
    imageMain: hakaMainImage,
    imageOverlay: hakaOverlayImage,
    link: '#',
    semester: 'Projeto Freelance',
    partner: '',
    problem: 'O mercado de moda digital exige plataformas que unam identidade visual forte com alta performance. O desafio principal era criar uma loja virtual que não fosse apenas um catálogo estático, mas uma experiência de marca imersiva, capaz de reter a atenção do cliente e converter visitas em vendas.',
    solution: 'Desenvolvimento de um e-commerce personalizado utilizando React no front-end para garantir interações fluidas e Node.js no back-end. A solução foca na experiência do usuário (UX/UI), com carregamento rápido e design responsivo que destaca os produtos de forma elegante.',
    contributions: 'Atuei como desenvolvedor Full Stack, responsabilizando-me tanto pela criação dos componentes visuais quanto pela integração com a lógica de negócios. Implementei o sistema de vitrine e garanti a fidelidade do design proposto.',
    hardSkillsText: 'React (Faço com autonomia), TypeScript (Faço com autonomia), Node.js (Faço com autonomia), CSS3 (Faço com autonomia), Git (Faço com autonomia)',
    softSkills: 'Criatividade: Proposição de layouts inovadores para a vitrine.\nAutonomia: Tomada de decisões técnicas sobre a arquitetura do projeto.\nGestão de Tempo: Organização para entrega das funcionalidades dentro do cronograma.',
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
    tags: ['React', 'TypeScript', 'Firebase'],
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
    id: 4, 
    title: 'Synex', 
    description: 'Landing page corporativa moderna. (Em andamento)', 
    tags: ['JavaScript', 'HTML', 'CSS'], 
    imageMain: synex10, 
    imageOverlay: synex20, 
    link: '#',
    semester: 'Projeto Pessoal',
    partner: '',
    problem: 'Muitas empresas de tecnologia enfrentam dificuldade em comunicar seus valores e serviços de forma clara e atrativa. O desafio era criar uma interface que transmitisse modernidade, inovação e profissionalismo logo no primeiro acesso do usuário.',
    solution: 'Criação de uma Landing Page de alta conversão, com design limpo, tipografia moderna e animações sutis. A página foi otimizada para carregamento rápido e construída com HTML semântico e CSS moderno para garantir acessibilidade e SEO.',
    contributions: 'Fui responsável por todo o desenvolvimento Front-end, desde a estruturação do HTML até a estilização avançada com CSS e interatividades com JavaScript.',
    hardSkillsText: 'JavaScript (Faço com autonomia), HTML5 (Faço com autonomia), CSS3 (Faço com autonomia), Responsividade (Faço com autonomia)',
    softSkills: 'Atenção aos Detalhes: Foco no refinamento visual e pixel-perfect.\nOrganização: Estruturação limpa dos arquivos de código.\nFoco no Cliente: Orientação do design para a melhor apresentação da marca.',
  },
  {
    id: 5, 
    title: 'World Beauty - Fatec', 
    description: 'Sistema de gestão para salões de beleza.', 
    tags: ['PHP', 'Laravel', 'Bootstrap'], 
    imageMain: wb10, 
    imageOverlay: wb20, 
    link: 'https://github.com/lucasguerra12/WB',
    semester: 'Projeto Acadêmico',
    partner: '',
    problem: 'Pequenos e médios salões de beleza frequentemente sofrem com a gestão manual de agendamentos e cadastros, o que leva a erros, conflitos de horário e dificuldade em fidelizar clientes.',
    solution: 'Desenvolvimento de um sistema web completo para gerenciamento de salão. A aplicação permite o agendamento de serviços, cadastro de clientes e profissionais, e visualização de histórico, centralizando toda a operação do negócio.',
    contributions: 'Participei da estruturação do back-end utilizando o framework Laravel, criando as rotas e controladores necessários, além de auxiliar na construção das views com Bootstrap.',
    hardSkillsText: 'PHP (Faço com ajuda), Laravel (Faço com ajuda), Bootstrap (Faço com autonomia), MySQL (Faço com ajuda), MVC (Faço com autonomia)',
    softSkills: 'Trabalho em Equipe: Divisão eficiente de tarefas no desenvolvimento.\nResolução de Problemas: Implementação de lógica para evitar conflitos de agenda.\nComprometimento: Entrega das funcionalidades essenciais do sistema.',
  },
  {
    id: 6, 
    title: 'Aerocode', 
    description: 'Dashboard de gestão para aviação.', 
    tags: ['Python', 'Django'], 
    imageMain: aero10, 
    imageOverlay: aero20, 
    link: 'https://github.com/lucasguerra12/AV3',
    semester: 'Projeto Pessoal',
    partner: '',
    problem: 'A gestão de dados operacionais na aviação é complexa e exige precisão. O desafio era criar uma ferramenta que permitisse visualizar e gerenciar informações de frota e voos de maneira centralizada e intuitiva, substituindo planilhas manuais.',
    solution: 'Desenvolvimento de um Dashboard administrativo robusto utilizando Django. O sistema oferece painéis visuais para monitoramento de métricas, cadastro de aeronaves e controle de operações, facilitando a tomada de decisão.',
    contributions: 'Desenvolvi a lógica do servidor utilizando Python e Django, criando os modelos de dados e as interfaces de administração para o gerenciamento das informações.',
    hardSkillsText: 'Python (Faço com autonomia), Django (Faço com autonomia), HTML/CSS (Faço com autonomia), SQLite (Faço com autonomia)',
    softSkills: 'Pensamento Analítico: Estruturação dos modelos de dados de aviação.\nProatividade: Busca por documentação e melhores práticas do framework.\nOrganização: Manutenção de um código limpo e escalável.',
  },
  {
    id: 7, 
    title: 'Dunkel Company', 
    description: 'E-commerce com tema Dark Mode. (Em andamento)', 
    tags: ['React', 'Node.js'], 
    imageMain: dunkel10, 
    imageOverlay: dunkel20, 
    link: '#',
    semester: 'Projeto Pessoal',
    partner: '',
    problem: 'Marcas de nicho necessitam de uma identidade visual única que se destaque dos concorrentes. O desafio era construir um e-commerce que fugisse do padrão visual comum, oferecendo uma imersão completa no conceito "Dark" da marca.',
    solution: 'Implementação de uma plataforma de e-commerce com tema escuro nativo (Dark Mode), focada em estética e fluidez. O design foi pensado para destacar produtos em ambientes de baixo contraste, com navegação intuitiva em dispositivos móveis.',
    contributions: 'Liderei o desenvolvimento da interface em React, focando na implementação do Design System e na integração dos componentes com a API de produtos.',
    hardSkillsText: 'React (Faço com autonomia), Node.js (Faço com ajuda), CSS3/Styled Components (Faço com autonomia), JavaScript (Faço com autonomia)',
    softSkills: 'Adaptação: Ajuste rápido a requisitos estéticos específicos.\nComunicação: Alinhamento visual constante para manter a identidade da marca.\nCriatividade: Implementação de micro-interações para melhorar a UX.',
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
    problem: 'O desafio proposto consistia em resolver uma necessidade recorrente de equipes e profissionais individuais: a dificuldade de organizar tarefas de forma colaborativa e visual, o que impactava a produtividade e o acompanhamento de prazos.',
    solution: 'A solução desenvolvida foi o GSW Task Manager, uma aplicação web colaborativa que permite aos usuários criar, gerenciar e acompanhar tarefas em tempo real. O sistema conta com organização por quadros, prioridades e status, facilitando o fluxo de trabalho.',
    contributions: 'Atuei como backend Java e após muitos erros e aprendizados comecei a entender como uma linguagem robusta funciona. Fui responsável pela criação de endpoints REST e pela integração com o banco de dados.',
    hardSkillsText: 'HTML5 (Faço com autonomia), CSS3 (Faço com autonomia), JavaScript (Faço com autonomia), TypeScript (Faço com autonomia), React (Faço com autonomia), Node.js (Faço com ajuda), Java (Spring) (Faço com ajuda), MongoDB (Faço com ajuda), Git/GitHub (Faço com autonomia), Jira (Faço com autonomia), Figma (Faço com autonomia)',
    softSkills: 'Colaboração: Trabalhei em conjunto com o time de backend e frontend para integração da API.\nComunicação: Mantive alinhamento constante com o Product Owner sobre as regras de negócio.\nProatividade: Sugeri melhorias no design da sidebar e na usabilidade do sistema.Devo destacar que durante esse projeto,enfrentamos diversas dificuldades que poderiam ser evitada caso tivessemos levados com mais profissionalismo,como a questao de gerir a equipe scrum e todos seus processos,deixar de lado amizade e coisas do tipo,cobrar com mais rigorosidade e com menos intervalos para erros.',
  },
  {
    id: 9, 
    title: 'Pratik', 
    description: 'App para conectar clientes e prestadores. (Em andamento)', 
    tags: ['Vue.js', 'Node.js'], 
    imageMain: pratik10, 
    imageOverlay: pratik20, 
    link: '#',
    semester: 'Projeto Pessoal',
    partner: '',
    problem: 'Encontrar prestadores de serviço qualificados de forma rápida e segura é uma dificuldade comum. O desafio era criar uma plataforma que servisse como um elo confiável entre quem precisa de um serviço e quem o oferece.',
    solution: 'Desenvolvimento de uma aplicação web que facilita a conexão entre clientes e profissionais. O sistema conta com busca por categoria, perfis de prestadores e interface simplificada para solicitação de serviços.',
    contributions: 'Trabalhei no front-end utilizando Vue.js, focando na criação de componentes reutilizáveis e na construção de uma interface de usuário intuitiva e amigável.',
    hardSkillsText: 'Vue.js (Faço com autonomia), Node.js (Faço com ajuda), JavaScript (Faço com autonomia), API Rest (Faço com autonomia)',
    softSkills: 'Empatia: Foco total na usabilidade para usuários leigos.\nResiliência: Aprendizado rápido de um novo framework (Vue.js) durante o projeto.\nOrganização: Manutenção de código limpo e bem documentado.',
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
              {activeProject.imageOverlay && (
                <img src={activeProject.imageOverlay} alt={`${activeProject.title} - Detalhe`} className="project-image-overlay" />
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