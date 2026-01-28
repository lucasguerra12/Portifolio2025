import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';

import hakaMainImage from '../assets/haka-main.png';
import hakaOverlayImage from '../assets/haka-overlay.png';

import byte10 from '../assets/byte10.png';
import byte20 from '../assets/byte20.png';

import helpnei10 from '../assets/helpnei10.png';
import helpnei20 from '../assets/helpnei20.png';

import vitrine10 from '../assets/vitrine10.png';
import vitrine20 from '../assets/vitrine20.png';

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

    githubLink: null,
    liveLink: null,

    semester: 'Projeto Freelance',
    partner: 'Cliente Particular',
    problem:
      'O mercado de moda digital exige plataformas que unam identidade visual forte com alta performance. O desafio principal era criar uma loja virtual que não fosse apenas um catálogo estático, mas uma experiência de marca imersiva, capaz de reter a atenção do cliente e converter visitas em vendas, superando a concorrência genérica.',
    solution:
      'Desenvolvimento de uma Aplicação Web de e-commerce personalizada. A solução foca na experiência do usuário (UX/UI), utilizando React para criar uma interface fluida e responsiva. O sistema integra vitrines dinâmicas inspiradas em grandes players do mercado, garantindo carregamento rápido e navegação intuitiva tanto em desktop quanto mobile.',
    contributions:
      'Atuei como Desenvolvedor Full Stack autônomo. Minha contribuição abrangeu desde a concepção visual até a implementação lógica. Fui responsável por traduzir os requisitos do cliente em componentes React reutilizáveis e por estruturar a navegação do site, garantindo que a identidade da marca fosse preservada em cada interação do usuário.',
    hardSkillsText:
      'React (Faço com autonomia), TypeScript (Faço com autonomia), Node.js (Faço com autonomia), CSS3 (Faço com autonomia), Git (Faço com autonomia), Figma (Faço com autonomia)',
    softSkills:
      'Visão de Negócio e Criatividade: Para definir o layout, não parti do zero; utilizei técnicas de benchmarking analisando e-commerces de sucesso no nicho de moda. Adaptei essas referências visuais para criar uma solução que fosse ao mesmo tempo inovadora e familiar para o usuário, aumentando o potencial de conversão.',
  },
  {
    id: 2,
    title: 'Byte - Fatec',
    description:
      'Um website informativo que centraliza e organiza dados sobre a atuação de vereadores da Câmara Municipal de SJC.',
    tags: ['Python', 'Flask', 'MySQL'],
    imageMain: byte10,
    imageOverlay: byte20,

    githubLink: 'https://github.com/Byte-Team-Fatec/Byte_Team-API-1-',
    liveLink: null,

    semester: 'Primeiro Semestre',
    partner: 'Fatec (Prof. Jean e Masanori)',
    problem:
      'O problema central identificado foi a dificuldade de acesso e compreensão dos dados legislativos disponibilizados pela Câmara Municipal de São José dos Campos. As informações sobre a atuação dos vereadores estavam dispersas em portais de difícil navegação, dificultando o acompanhamento e a fiscalização por parte da população e dos eleitores.',
    solution:
      'A equipe desenvolveu uma Aplicação Web informativa que centraliza e organiza os dados referentes aos vereadores. O sistema permite que qualquer cidadão visualize rapidamente indicadores de produtividade, como presenças, faltas e proposições apresentadas, promovendo a transparência pública de forma acessível e visual.',
    contributions:
      'Atuei como Product Owner (PO). Minha principal contribuição foi a gestão do backlog no Jira e a mediação entre os requisitos acadêmicos e a capacidade de entrega do time. Sendo um projeto de primeiro semestre, fui responsável por organizar as tarefas de forma a garantir que a equipe conseguisse aprender as tecnologias e, simultaneamente, entregar um produto funcional.',
    hardSkillsText:
      'HTML5 (Faço com autonomia), CSS3 (Faço com autonomia), JavaScript (Faço com autonomia), Python (Faço com ajuda), Flask (Faço com ajuda), MySQL (Faço com ajuda), Figma (Faço com autonomia), Jira (Faço com autonomia), Git (Faço com autonomia)',
    softSkills:
      'Liderança e Empatia: O maior desafio foi conciliar a curva de aprendizado de uma equipe iniciante com a necessidade de uma entrega profissional. Exerci liderança ao adaptar o escopo das sprints à realidade técnica do time, mantendo a motivação e garantindo que o aprendizado ocorresse em paralelo ao desenvolvimento, sem comprometer a qualidade final.',
  },
  {
    id: 3,
    title: 'Debuggers - Helpnei',
    description:
      'Uma plataforma digital para divulgar e valorizar empresas patrocinadoras do programa Helpnei.',
    tags: ['React', 'TypeScript', 'Firebase'],
    imageMain: helpnei10,
    imageOverlay: helpnei20,

    githubLink: 'https://github.com/matheuskarnas/API-2',
    liveLink: null,

    semester: 'Segundo Semestre',
    partner: 'Helpnei',
    problem:
      'O principal desafio identificado foi a falta de uma plataforma digital moderna e centralizada que conseguisse divulgar e valorizar as empresas patrocinadoras do programa Helpnei. A ausência dessa ferramenta dificultava a visibilidade dos parceiros e a atração de novos apoios para a causa social.',
    solution:
      'Desenvolvimento de uma Aplicação Web interativa e responsiva (SPA). O sistema oferece um mapa dinâmico para localização dos parceiros e páginas de perfil para cada empresa. A solução modernizou a forma como o Helpnei expõe seus patrocinadores, agregando valor à marca e facilitando o acesso dos usuários.',
    contributions:
      'Atuei como Desenvolvedor Front-end, utilizando React e TypeScript. Minha contribuição crucial foi na implementação da lógica de formulários e tratamento de dados. Identifiquei a necessidade de sanitizar e formatar rigorosamente os dados no cliente antes do envio para a API, garantindo que informações como endereços e contatos fossem armazenadas corretamente no banco.',
    hardSkillsText:
      'React (Faço com autonomia), TypeScript (Faço com autonomia), Vite (Faço com autonomia), Supabase (Faço com ajuda), Vercel (Faço com autonomia), Integração de APIs (Faço com autonomia)',
    softSkills:
      'Pensamento Analítico e Resolução de Problemas: Durante o desenvolvimento, notei que dados brutos inseridos pelos usuários poderiam quebrar a integração. Analisei o fluxo de dados e implementei validadores e formatadores no Front-end preventivamente, evitando retrabalho e garantindo a consistência das informações enviadas ao Back-end.',
  },

  // ✅ VITRINE INTELIGENTE como 4º projeto
  {
    id: 4,
    title: 'Vitrine Inteligente',
    description:
      'Micro-SaaS para ajudar pequenos empreendedores a criarem uma vitrine digital com imagens e apresentação de produtos.',
    tags: ['React', 'TypeScript', 'Node.js', 'Supabase'],
    imageMain: vitrine10,
    imageOverlay: vitrine20,

    githubLink: 'https://github.com/ThOMaZMe11o/micro-saas-image-generate',
    liveLink: 'https://vitrineinteligente.com',

    semester: 'Projeto Pessoal',
    partner: 'Cliente / demanda real',
    problem:
      'Pequenos empreendedores precisam de uma vitrine visual forte para vender mais, mas muitas vezes não têm estrutura para produções profissionais ou uma solução simples para organizar e publicar com qualidade.',
    solution:
      'Criamos uma aplicação web para centralizar a criação/organização da vitrine e facilitar a apresentação dos produtos, com uma stack moderna e integração completa com serviços gerenciados.',
    contributions:
      'Desenvolvi a integração e funcionalidades principais junto do meu parceiro, atuando na estruturação do fluxo da aplicação e na integração com Supabase.',
    hardSkillsText:
      'React (Faço com autonomia), TypeScript (Faço com autonomia), Node.js (Faço com autonomia), Supabase (Faço com autonomia)',
    softSkills:
      'Foco em valor real: decisões técnicas guiadas por simplicidade, experiência do usuário e entrega de impacto para o negócio.',
  },

  {
    id: 5,
    title: 'Synex',
    description: 'Landing page corporativa moderna. (Em andamento)',
    tags: ['JavaScript', 'HTML', 'CSS'],
    imageMain: synex10,
    imageOverlay: synex20,

    githubLink: null,
    liveLink: 'https://synex-site.vercel.app',

    semester: 'Projeto Pessoal',
    partner: '',
    problem:
      'Muitas empresas de tecnologia enfrentam dificuldade em comunicar seus valores e serviços de forma clara e atrativa. O desafio era criar uma interface que transmitisse modernidade, inovação e profissionalismo logo no primeiro acesso do usuário.',
    solution:
      'Criação de uma Landing Page Web de alta conversão, com design limpo, tipografia moderna e animações sutis. A página foi otimizada para carregamento rápido e construída com HTML semântico e CSS moderno para garantir acessibilidade e SEO.',
    contributions:
      'Fui responsável por todo o desenvolvimento Front-end, desde a estruturação do HTML até a estilização avançada com CSS e interatividades com JavaScript.',
    hardSkillsText:
      'JavaScript (Faço com autonomia), HTML5 (Faço com autonomia), CSS3 (Faço com autonomia), Responsividade (Faço com autonomia)',
    softSkills:
      'Atenção aos Detalhes: Foco no refinamento visual e pixel-perfect.\nOrganização: Estruturação limpa dos arquivos de código.\nFoco no Cliente: Orientação do design para a melhor apresentação da marca.',
  },
  {
    id: 6,
    title: 'World Beauty - Fatec',
    description: 'Sistema de gestão para salões de beleza.',
    tags: ['Typescript', 'React'],
    imageMain: wb10,
    imageOverlay: wb20,

    githubLink: 'https://github.com/lucasguerra12/WB',
    liveLink: null,

    semester: 'Projeto Acadêmico',
    partner: '',
    problem:
      'Pequenos e médios salões de beleza frequentemente sofrem com a gestão manual de agendamentos e cadastros, o que leva a erros, conflitos de horário e dificuldade em fidelizar clientes.',
    solution:
      'Desenvolvimento de um Sistema Web completo para gerenciamento de salão. A aplicação permite o agendamento de serviços, cadastro de clientes e profissionais, e visualização de histórico, centralizando toda a operação do negócio.',
    contributions:
      'Participei da estruturação do back-end utilizando o framework Laravel, criando as rotas e controladores necessários, além de auxiliar na construção das views com Bootstrap.',
    hardSkillsText:
      'PHP (Faço com ajuda), Laravel (Faço com ajuda), Bootstrap (Faço com autonomia), MySQL (Faço com ajuda), MVC (Faço com autonomia)',
    softSkills:
      'Trabalho em Equipe: Divisão eficiente de tarefas no desenvolvimento.\nResolução de Problemas: Implementação de lógica para evitar conflitos de agenda.\nComprometimento: Entrega das funcionalidades essenciais do sistema.',
  },
  {
    id: 7,
    title: 'Aerocode',
    description: 'Dashboard de gestão para aviação.',
    tags: ['Typescript', 'React'],
    imageMain: aero10,
    imageOverlay: aero20,

    githubLink: 'https://github.com/lucasguerra12/AV3',
    liveLink: null,

    semester: 'Projeto Pessoal',
    partner: '',
    problem:
      'A gestão de dados operacionais na aviação é complexa e exige precisão. O desafio era criar uma ferramenta que permitisse visualizar e gerenciar informações de frota e voos de maneira centralizada e intuitiva, substituindo planilhas manuais.',
    solution:
      'Desenvolvimento de um Dashboard Web administrativo robusto utilizando Django. O sistema oferece painéis visuais para monitoramento de métricas, cadastro de aeronaves e controle de operações, facilitando a tomada de decisão.',
    contributions:
      'Desenvolvi a lógica do servidor utilizando Python e Django, criando os modelos de dados e as interfaces de administração para o gerenciamento das informações.',
    hardSkillsText:
      'Python (Faço com autonomia), Django (Faço com autonomia), HTML/CSS (Faço com autonomia), SQLite (Faço com autonomia)',
    softSkills:
      'Pensamento Analítico: Estruturação dos modelos de dados de aviação.\nProatividade: Busca por documentação e melhores práticas do framework.\nOrganização: Manutenção de um código limpo e escalável.',
  },
  {
    id: 8,
    title: 'Dunkel Company',
    description: 'E-commerce com tema Dark Mode. (Em andamento)',
    tags: ['React', 'Node.js'],
    imageMain: dunkel10,
    imageOverlay: dunkel20,

    githubLink: null,
    liveLink: null,

    semester: 'Projeto Pessoal',
    partner: '',
    problem:
      'Marcas de nicho necessitam de uma identidade visual única que se destaque dos concorrentes. O desafio era construir um e-commerce que fugisse do padrão visual comum, oferecendo uma imersão completa no conceito "Dark" da marca.',
    solution:
      'Implementação de uma Plataforma Web de e-commerce com tema escuro nativo (Dark Mode), focada em estética e fluidez. O design foi pensado para destacar produtos em ambientes de baixo contraste, com navegação intuitiva em dispositivos móveis.',
    contributions:
      'Liderei o desenvolvimento da interface em React, focando na implementação do Design System e na integração dos componentes com a API de produtos.',
    hardSkillsText:
      'React (Faço com autonomia), Node.js (Faço com ajuda), CSS3/Styled Components (Faço com autonomia), JavaScript (Faço com autonomia)',
    softSkills:
      'Adaptação: Ajuste rápido a requisitos estéticos específicos.\nComunicação: Alinhamento visual constante para manter a identidade da marca.\nCriatividade: Implementação de micro-interações para melhorar a UX.',
  },
  {
    id: 9,
    title: 'FASTTASK - Debuggers',
    description: 'Aplicação web colaborativa para gerenciamento de tarefas em equipe.',
    tags: ['React', 'Java', 'Spring'],
    imageMain: fast10,
    imageOverlay: fast20,

    githubLink: 'https://github.com/debuggersFatec/API-3',
    liveLink: null,

    semester: 'Terceiro Semestre',
    partner: 'GSW',
    problem:
      'O desafio proposto consistia em resolver uma necessidade recorrente de equipes e profissionais individuais: a dificuldade de organizar tarefas de forma colaborativa e visual. A falta de ferramentas integradas impactava a produtividade e dificultava o acompanhamento de prazos e metas em tempo real.',
    solution:
      'A solução desenvolvida foi o GSW Task Manager, uma Aplicação Web colaborativa baseada na metodologia Kanban. O sistema permite criar, gerenciar e acompanhar tarefas em tempo real, organizando fluxos de trabalho através de quadros, colunas de status e prioridades, centralizando a comunicação da equipe.',
    contributions:
      'Atuei como Desenvolvedor Back-end (Java/Spring). Fui responsável pela criação de endpoints RESTful seguros e pela integração com o banco de dados. Além da codificação, minha contribuição fundamental foi na postura profissional adotada diante das dificuldades de gestão da equipe, garantindo que os conflitos internos não impedissem a entrega técnica.',
    hardSkillsText:
      'HTML5 (Faço com autonomia), CSS3 (Faço com autonomia), JavaScript (Faço com autonomia), TypeScript (Faço com autonomia), React (Faço com autonomia), Node.js (Faço com ajuda), Java (Spring) (Faço com ajuda), MongoDB (Faço com ajuda), Git (Faço com autonomia), Jira (Faço com autonomia)',
    softSkills:
      'Inteligência Emocional e Resiliência: Durante o projeto, o time enfrentou desafios significativos de gestão devido à mistura de relações pessoais com profissionais. Utilizei minha inteligência emocional para separar amizade de trabalho, mantendo o rigor nos processos do Scrum e o foco nas entregas, o que foi vital para contornar as instabilidades do grupo e finalizar o projeto.',
  },
  {
    id: 10,
    title: 'Pratik',
    description: 'App para conectar clientes e prestadores. (Em andamento)',
    tags: ['Vue.js', 'Node.js'],
    imageMain: pratik10,
    imageOverlay: pratik20,

    githubLink: null,
    liveLink: null,

    semester: 'Projeto Pessoal',
    partner: '',
    problem:
      'Encontrar prestadores de serviço qualificados de forma rápida e segura é uma dificuldade comum. O desafio era criar uma plataforma que servisse como um elo confiável entre quem precisa de um serviço e quem o oferece.',
    solution:
      'Desenvolvimento de uma Aplicação Web (PWA) que facilita a conexão entre clientes e profissionais. O sistema conta com busca por categoria, perfis de prestadores e interface simplificada para solicitação de serviços.',
    contributions:
      'Trabalhei no front-end utilizando Vue.js, focando na criação de componentes reutilizáveis e na construção de uma interface de usuário intuitiva e amigável.',
    hardSkillsText:
      'Vue.js (Faço com autonomia), Node.js (Faço com ajuda), JavaScript (Faço com autonomia), API Rest (Faço com autonomia)',
    softSkills:
      'Empatia: Foco total na usabilidade para usuários leigos.\nResiliência: Aprendizado rápido de um novo framework (Vue.js) durante o projeto.\nOrganização: Manutenção de código limpo e bem documentado.',
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

  const hasAnyLink = Boolean(activeProject.liveLink || activeProject.githubLink);

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
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-desktop-actions">
                {activeProject.liveLink && (
                  <a
                    href={activeProject.liveLink}
                    className="project-button-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver ao vivo
                  </a>
                )}

                {activeProject.githubLink && (
                  <a
                    href={activeProject.githubLink}
                    className="project-button-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}

                {!hasAnyLink && (
                  <span style={{ opacity: 0.7, fontSize: '0.95rem' }}>
                    Links em breve
                  </span>
                )}

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
                {activeProject.liveLink && (
                  <a
                    href={activeProject.liveLink}
                    className="project-button-mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver ao vivo
                  </a>
                )}

                {activeProject.githubLink && (
                  <a
                    href={activeProject.githubLink}
                    className="project-button-mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}

                {!hasAnyLink && (
                  <span style={{ opacity: 0.7, fontSize: '0.95rem' }}>
                    Links em breve
                  </span>
                )}

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
              <img
                src={activeProject.imageMain}
                alt={`${activeProject.title} - Tela principal`}
                className="project-image-main"
              />
              {activeProject.imageOverlay && (
                <img
                  src={activeProject.imageOverlay}
                  alt={`${activeProject.title} - Detalhe`}
                  className="project-image-overlay"
                />
              )}
            </div>
          </div>

          <div className="project-pagination">
            {projectsData.map((project, index) => (
              <button
                key={project.id}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}

export default Projects;
