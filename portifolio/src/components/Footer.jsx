import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        
        <div className="footer-copyright">
          © 2025 Lucas Fernando Guerra. Todos os direitos reservados.
        </div>

        <div className="footer-socials">
          <a 
            href="https://github.com/lucasguerra12" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/lucas-guerra000" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:lucasguerrawr2004@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;