import React, { useRef, useContext, useEffect } from "react";
import { DarkModeContext } from "../../components/ui/DarkModeContext";
import { LanguageContext } from "../../components/ui/LanguageContext";
import "./Nav.css";

function Nav() {
  const menuMobileRef = useRef(null);
  const navbarRef = useRef(null);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { language, setLanguage, t } = useContext(LanguageContext);
  const navMenuRef = useRef(null); // Ref para o elemento <nav>

  useEffect(() => {
    const navLinks = navMenuRef.current.querySelectorAll("a");
    const sections = document.querySelectorAll("section");
    const header = navbarRef.current;

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - header.clientHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.href.includes(current)) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Limpeza do listener quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // O array vazio [] garante que o efeito só rode na montagem do componente

  return (
    <header className="header" ref={navbarRef}>
      <h1>
        <a href="#home" aria-label="Ir para o início do portfólio de Enzo Valençuela">
          Enzo Valençuela
        </a>
      </h1>
      <div className="menu" ref={menuMobileRef}>
        <nav
          className="nav-menu"
          ref={navMenuRef}
          aria-label="Navegação principal do portfólio"
        >
          <a href="#home">{t("nav.home")}</a>
          <a href="#about">{t("nav.about")}</a>
          <a href="#skills">{t("nav.skills")}</a>
          <a href="#projects">{t("nav.projects")}</a>
          <a href="#experience">{t("nav.experience")}</a>
          <a href="#contact">{t("nav.contact")}</a>
        </nav>
      </div>

      <div className="nav-controls">
        <div className="lang-switch">
          <button 
            className={`lang-btn ${language === "pt" ? "active" : ""}`} 
            onClick={() => setLanguage("pt")}
            title="Português"
          >
            🇧🇷
          </button>
          <button 
            className={`lang-btn ${language === "en" ? "active" : ""}`} 
            onClick={() => setLanguage("en")}
            title="English"
          >
            🇺🇸
          </button>
          <button 
            className={`lang-btn ${language === "es" ? "active" : ""}`} 
            onClick={() => setLanguage("es")}
            title="Español"
          >
            🇪🇸
          </button>
        </div>

        <label className="btn">
          <input
            type="checkbox"
            id="dark-mode-toggle"
            checked={darkMode}
            onChange={toggleDarkMode}
            aria-label="Alternar modo escuro"
          />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
}

export default Nav;
