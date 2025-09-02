import React, { useRef, useContext, useEffect } from "react";
import { DarkModeContext } from "../../components/ui/DarkModeContext";
import "./Nav.css";

function Nav() {
  const menuMobileRef = useRef(null);
  const navbarRef = useRef(null);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
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
        <a href="/">Meu Portifólio</a>
      </h1>
      <div className="menu" ref={menuMobileRef}>
        <nav className="nav-menu" ref={navMenuRef}>
          <a href="#home">Início</a>
          <a href="#about">Sobre</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>

      <label className="btn">
        <input
          type="checkbox"
          id="dark-mode-toggle"
          checked={darkMode}
          onClick={toggleDarkMode}
        />
        <span className="slider"></span>
      </label>
    </header>
  );
}

export default Nav;
