import React, { useRef, useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../components/ui/DarkModeContext";
import { useLanguage } from "../../components/ui/LanguageContext";
import "./Nav.css";

function Nav() {
  const menuMobileRef = useRef(null);
  const navbarRef = useRef(null);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { currentLanguage, languageOptions, setLanguage, t } = useLanguage();
  const navMenuRef = useRef(null); // Ref para o elemento <nav>
  const languageMenuRef = useRef(null);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const navLinks = navMenuRef.current?.querySelectorAll("a");
    const sections = document.querySelectorAll("section[id]");
    const header = navbarRef.current;
    if (!navLinks?.length || !sections.length || !header) return undefined;

    const linkMap = new Map();
    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href.startsWith("#")) {
        linkMap.set(href.slice(1), link);
      }
    });

    const setActive = (id) => {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = linkMap.get(id);
      if (activeLink) activeLink.classList.add("active");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: `-${header.offsetHeight}px 0px -55% 0px`,
        threshold: [0.15, 0.35, 0.55, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!languageMenuRef.current?.contains(event.target)) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header" ref={navbarRef}>
      <h1>
        <a href="#home" aria-label={t("nav.brandAriaLabel")}>
          Enzo Valençuela
        </a>
      </h1>
      <div className="menu" ref={menuMobileRef}>
        <nav
          className="nav-menu"
          ref={navMenuRef}
          aria-label={t("nav.mainNavigation")}
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
        <div className="lang-switch" ref={languageMenuRef}>
          <button
            className="lang-current"
            type="button"
            onClick={() => setIsLanguageMenuOpen((current) => !current)}
            aria-label={t("nav.openLanguageMenu")}
            aria-expanded={isLanguageMenuOpen}
            aria-haspopup="menu"
          >
            {currentLanguage.icon ? (
              <img
                src={currentLanguage.icon}
                alt={currentLanguage.label}
                className="lang-flag-img"
                width={20}
                height={14}
                loading="lazy"
              />
            ) : (
              <span className="lang-current-flag">{currentLanguage.flag}</span>
            )}
            <span className={`lang-current-arrow ${isLanguageMenuOpen ? "open" : ""}`}>
              ▾
            </span>
          </button>

          {isLanguageMenuOpen ? (
            <div className="lang-menu" role="menu" aria-label={t("nav.languageMenu")}>
              {languageOptions
                .filter((option) => option.code !== currentLanguage.code)
                .map((option) => (
                  <button
                    key={option.code}
                    className="lang-menu-item"
                    type="button"
                    onClick={() => {
                      setLanguage(option.code);
                      setIsLanguageMenuOpen(false);
                    }}
                    role="menuitem"
                    title={option.label}
                  >
                    {option.icon ? (
                      <img
                        src={option.icon}
                        alt={option.label}
                        className="lang-flag-img"
                        width={20}
                        height={14}
                        loading="lazy"
                      />
                    ) : (
                      <span className="lang-current-flag">{option.flag}</span>
                    )}
                    <span>{option.label}</span>
                  </button>
                ))}
            </div>
          ) : null}
        </div>

        <label className="btn">
          <input
            type="checkbox"
            id="dark-mode-toggle"
            checked={darkMode}
            onChange={toggleDarkMode}
            aria-label={t("nav.darkMode")}
          />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
}

export default Nav;
