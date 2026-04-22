import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <p className="footer-text">
            Construindo aplicações web modernas e resolvendo problemas com
            código. 👨‍💻
          </p>
          <p className="footer-quote">
            “A melhor maneira de prever o futuro é inventá-lo.”
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/enzovalencuela"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir GitHub de Enzo Valençuela"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/enzo-silva10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir LinkedIn de Enzo Valençuela"
          >
            LinkedIn
          </a>

          <a
            href="mailto:esilvavlencuela@gmail.com"
            aria-label="Enviar email para Enzo Valençuela"
          >
            Email
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Enzo Valençuela. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
