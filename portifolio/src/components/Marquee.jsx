import React from 'react';
import './Marquee.css';
import { FaJava, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiSpring, SiTypescript, SiJavascript, SiPostgresql, SiHtml5, SiCss3 } from 'react-icons/si';

function Marquee() {
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

  const marqueeContent = [...items, ...items].map((item, index) => (
    <div key={index} className="marquee-item">
      {item}
    </div>
  ));

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