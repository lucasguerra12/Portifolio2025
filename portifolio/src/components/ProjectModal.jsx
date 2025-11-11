import React from 'react';
import './ProjectModal.css';
import { FaTimes, FaGithub } from 'react-icons/fa';

const HardSkillTag = ({ level, skill }) => (
  <div className="hard-skill-tag">
    <strong>{skill}</strong>
    <span>{level.replace('Faço com ', '').replace('Faço ', '')}</span>
  </div>
);

function ProjectModal({ project, onClose }) {
  const handleContentClick = (e) => e.stopPropagation();

  const parseHardSkills = (textMap) => {
    if (Array.isArray(project.hardSkills)) {
       return project.hardSkills.map((item, index) => (
         <HardSkillTag key={index} skill={item.skill} level={item.level} />
       ));
    }
    return <p>{project.hardSkills || 'N/A'}</p>;
  };

  const parseSoftSkills = (text) => {
    if (!text) return <p>N/A</p>;
    return text.split('\n').map((item, index) => {
      if (!item.trim()) return null;
      const parts = item.split(':');
      if (parts.length > 1) {
        return (
          <li key={index}>
            <strong>{parts[0]}:</strong> {parts.slice(1).join(':')}
          </li>
        );
      }
      return <li key={index}>{item}</li>;
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        
        <h2 className="modal-title">{project.title}</h2>
        <span className="modal-semester">{project.semester}</span>
        
        <div className="modal-section">
          <h3>Empresa Parceira</h3>
          <p>{project.partner}</p>
        </div>

        <div className="modal-section">
          <h3>O Problema</h3>
          <p>{project.problem}</p>
        </div>

        <div className="modal-section">
          <h3>A Solução</h3>
          <p>{project.solution}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-git-link">
            <FaGithub /> Ver Repositório no GitHub
          </a>
        </div>

        <div className="modal-section">
          <h3>Minhas Contribuições Pessoais</h3>
          <p>{project.contributions}</p>
        </div>
        
        <div className="modal-section">
          <h3>Hard Skills Aplicadas</h3>
          <div className="hard-skills-grid">
            {project.hardSkillsText}
          </div>
        </div>
        
        <div className="modal-section">
          <h3>Soft Skills (Exemplos Reais)</h3>
          <ul className="soft-skills-list">
            {parseSoftSkills(project.softSkills)}
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default ProjectModal;