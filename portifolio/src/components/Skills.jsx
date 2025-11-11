import React from 'react';
import './Skills.css'; 

import { FaJava, FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiSpring, SiTypescript, SiJavascript, SiMongodb, SiMysql, SiHtml5, SiCss3 } from 'react-icons/si';

const mainSkills = [
  { icon: <FaReact />, name: 'React' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiSpring />, name: 'Spring' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiCss3 />, name: 'CSS3' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiMongodb />, name: 'MongoDB' },
];


function Skills() {
  return (
    <section className="skills-container">
      <div className="skills-wrapper">
        <div className="skills-header">
          <h2 className="skills-title">Principais Conhecimentos</h2>
          <p className="skills-subtitle">
            Estas são as tecnologias que mais utilizei nos meus projetos, 
            cumprindo o requisito da Fatec. 
          </p>
        </div>

        <div className="skills-grid">
          {mainSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Skills;