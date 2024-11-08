import React from "react";
import "./footer.css"; // Certifique-se de criar ou atualizar este arquivo para os novos estilos

const Footer = () => {
  const portfolioLink = "https://portfolio-ryann.netlify.app/"; // Substitua pelo seu link de portfólio

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Seu Nome</h2> {/* Coloque seu nome ou o nome do seu portfólio */}
        </div>
        <nav className="footer-nav">
          <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
            Visite meu portfólio
          </a>
          <span>|</span>
          <a href="/contato">Contato</a>{" "}
          {/* Adicione mais links conforme necessário */}
        </nav>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
