// src/components/Header.jsx

// 1. Importe o 'useState' do React
import React, { useState } from 'react';
import './Header.css'; 

function Header() {
  
  // 2. Crie a variável de estado para o menu móvel
  // Começa como 'false' (fechado)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 3. Crie as funções que vão lidar com os cliques (Handlers)

  // Esta função inverte o estado do menu móvel
  const handleMobileMenuToggle = () => {
    // setIsMobileMenuOpen(true); // Isto apenas abriria
    // setIsMobileMenuOpen(false); // Isto apenas fecharia
    setIsMobileMenuOpen( !isMobileMenuOpen ); // Isto inverte (toggle)
  };

  // Esta função cuidará do menu de idiomas (futuramente)
  const handleLangToggle = () => {
    // Por agora, vamos apenas mostrar no console que funciona
    console.log("Botão de Idioma clicado!"); 
    // O próximo passo aqui seria usar 'useState' para mostrar o dropdown
  };

  // Esta função cuidará do tema (futuramente)
  const handleThemeToggle = () => {
    // Por agora, vamos apenas mostrar no console que funciona
    console.log("Botão de Tema clicado!");
    // O próximo passo aqui seria usar 'useState' e Context API para trocar o tema
  };


  return (
    // O 'header-container' agora precisa de 'relative' 
    // para que o menu móvel possa se posicionar
    <header className="header-container">
      
      <div className="header-wrapper">

        {/* --- Barra de Navegação (Desktop) --- */}
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

        {/* --- Controlos (Desktop) --- */}
        <div className="controls-container">
          {/* 4. Adicione os 'onClick' handlers aos botões */}
          <div className="lang-switcher" onClick={handleLangToggle}>
            <span>PT - BR</span>
            <span>&#9660;</span> 
          </div>
          <div className="theme-toggle" onClick={handleThemeToggle}>
            <span>&#9728;</span> 
          </div>
        </div>

        {/* --- Botão Hambúrguer (Mobile) --- */}
        {/* 4. Adicione o 'onClick' handler ao hambúrguer */}
        <button className="hamburger-menu" onClick={handleMobileMenuToggle}>
          &#9776; 
        </button>

      </div>

      {/* 5. RENDERIZAÇÃO CONDICIONAL 
        Esta é a mágica do React:
        O <nav> abaixo só vai existir no HTML se 'isMobileMenuOpen' for 'true'.
      */}
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