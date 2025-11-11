// src/components/Marquee.jsx

import React from 'react';
import './Marquee.css';

// 1. Importe os ícones que vamos usar
// "Fa" = Font Awesome, "Si" = Simple Icons. Pode procurar mais em "react-icons.github.io"
import { FaJava, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiSpring, SiTypescript, SiJavascript, SiPostgresql, SiHtml5, SiCss3 } from 'react-icons/si';

function Marquee() {
  
  // 2. Criamos o nosso conteúdo (ícone + texto)
  // Usamos um <>(Fragment)</> para agrupar o ícone e o texto
  const items = [
    (<> <FaReact /> React </>),
    (<> <FaJava /> Java </>),
    (<> <SiSpring /> Spring Boot </>),
    (<> <FaNodeJs /> Node.js </>),
    (<> <SiTypescript /> TypeScript </>),
    (<> <SiJavascript /> JavaScript </>),
    (<> <SiPostgresql /> MongoDB </>),
    (<> <FaDocker /> MySQL </>),
    (<> <SiHtml5 /> HTML5 </>),
    (<> <SiCss3 /> CSS3 </>),
  ];

  // 3. O resto da lógica é a mesma (duplicar a lista)
  // Apenas mudamos 'span' para 'div' para melhor semântica
  const marqueeContent = [...items, ...items].map((item, index) => (
    <div key={index} className="marquee-item">
      {item}
    </div>
  ));

  // O JSX do return é O MESMO de antes
  return (
    <div className="marquee-section-container">
      
      <div className="marquee-band dark-band">
        <div className="marquee-content">{marqueeContent}</div>
      </div>
      
      <div className="marquee-band light-band">
        <div className="marquee-content">{marqueeContent}</div>
      </div>

    </div>
  );
}

export default Marquee;