import React from "react";
import "./Footer.css";
import { useLanguage } from "@/components/ui/LanguageContext";

function Footer() {
  const year = new Date().getFullYear();
  const { copy } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <p className="footer-text">
            {copy.footer.text}
          </p>
          <p className="footer-quote">
            "{copy.footer.quote}"
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/enzovalencuela"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={copy.footer.githubAria}
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/enzo-silva10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={copy.footer.linkedinAria}
          >
            LinkedIn
          </a>

          <a
            href="mailto:esilvavlencuela@gmail.com"
            aria-label={copy.footer.emailAria}
          >
            Email
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Enzo Valençuela. {copy.footer.rights}</p>
      </div>
    </footer>
  );
}

export default Footer;
