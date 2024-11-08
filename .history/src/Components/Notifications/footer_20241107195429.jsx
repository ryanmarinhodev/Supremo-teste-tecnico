import React from "react";
import "./notification.css";

const Footer = () => {
  const portfolioLink = "https://portfolio-ryann.netlify.app/";

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>by Ryan Marinho</h2>{" "}
        </div>
        <nav className="footer-nav">
          <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
            Visite meu portfólio
          </a>
          <span>|</span>
          <a href="/contato">Contato</a>{" "}
        </nav>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
