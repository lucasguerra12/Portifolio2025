import React, { useState } from 'react';
import './Header.css'; 

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLangToggle = () => {
    console.log("Botão de Idioma clicado!"); 
  };

  const handleThemeToggle = () => {
    console.log("Botão de Tema clicado!");
  };

  return (
    <header className="header-container">
      <div className="header-wrapper">
        <div className="nav-bar">
          <nav className="nav-links">
            <a href="#formation">FORMATION</a>
            <a href="#home">HOME</a>
            <a href="#contact">CONTACT</a>
            <a href="#about">ABOUT</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#embreve" className="em-breve">EM BREVE</a>
          </nav>
        </div>

        <div className="controls-container">
          <div className="lang-switcher" onClick={handleLangToggle}>
            <span>PT - BR</span>
            <span>&#9660;</span> 
          </div>
          <div className="theme-toggle" onClick={handleThemeToggle}>
            <span>&#9728;</span> 
          </div>
        </div>

        <button className="hamburger-menu" onClick={handleMobileMenuToggle}>
          &#9776; 
        </button>

      </div>

      {isMobileMenuOpen && (
        <nav className="mobile-menu">
          <a href="#formation" onClick={handleMobileMenuToggle}>FORMATION</a>
          <a href="#home" onClick={handleMobileMenuToggle}>HOME</a>
          <a href="#contact" onClick={handleMobileMenuToggle}>CONTACT</a>
          <a href="#about" onClick={handleMobileMenuToggle}>ABOUT</a>
          <a href="#experience" onClick={handleMobileMenuToggle}>EXPERIENCE</a>
          <a href="#embreve" className="em-breve-mobile" onClick={handleMobileMenuToggle}>EM BREVE</a>
        </nav>
      )}

    </header>
  );
}

export default Header;