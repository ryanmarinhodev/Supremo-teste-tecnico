import React from "react";
import "./notification.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const portfolioLink = "https://seuportfolio.com"; // Substitua pelo seu link de portfólio

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
        <div className="footer-social">
          <a
            href="https://linkedin.com/in/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
