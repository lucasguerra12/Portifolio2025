import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-container">
      <div className="contact-wrapper">

        <div className="contact-intro">
          <h2 className="contact-title">
            TEM UM PROJETO EM MENTE?
          </h2>
          <p className="contact-description">
            Se tem uma ideia para um website, um e-commerce ou uma aplicação,
            não hesite em falar comigo. 
            Preencha o formulário ao lado e vamos transformar essa ideia em realidade.
          </p>
        </div>

        <div className="contact-form-container">
          <h3>ENTRE EM CONTATO</h3>
          
          <form 
            className="contact-form" 
            action="httpsU_SEU_ENDPOINT_DE_FORMULARIO" 
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Seu Nome *</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Seu Email *</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Sua Mensagem *</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="contact-submit-btn">
              Enviar Mensagem
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;