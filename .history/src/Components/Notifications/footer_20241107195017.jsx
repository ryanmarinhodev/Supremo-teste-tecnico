import React from "react";
import "./notification.css"; // Certifique-se de criar este arquivo para estilos

const Footer = () => {
  const portfolioLink = "https://portfolio-ryann.netlify.app/";

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Desenvolvido por Ryan |{" "}
          <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
            Visite meu portfólio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
