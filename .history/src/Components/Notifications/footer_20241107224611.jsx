import React from "react";
import "./notification.css";
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
  const portfolioLink = "https://portfolio-ryann.netlify.app/";

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Ryan Marinho</h2>
        </div>
        <nav className="footer-nav">
          <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="portfolio-icon" />{" "}
            <span className="portfolio-text">Visite meu portfólio</span>
          </a>
        </nav>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/ryan-marinho-861120211/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/ryanmarinhodev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
        <p className="footer-note">
          Estou empolgado para contribuir com vocês, Supremo!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
