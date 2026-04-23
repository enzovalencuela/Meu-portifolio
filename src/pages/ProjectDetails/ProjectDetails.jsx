import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { getProjectSeo } from "@/lib/seo";
import Footer from "../Footer/Footer";
import { getProjectTranslation, projectsWithSlug } from "../Projects/ProjectsData";
import { useLanguage } from "@/components/ui/LanguageContext";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { language, copy, t } = useLanguage();
  const { slug } = useParams();
  const project = projectsWithSlug.find((item) => item.slug === slug);

  // Garante que, ao abrir a página de projeto, o scroll comece do topo
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const translatedProject = getProjectTranslation(project, language);
  const seo = getProjectSeo(translatedProject, language);
  const currentIndex = projectsWithSlug.findIndex((item) => item.slug === slug);
  const previousProject =
    currentIndex > 0
      ? getProjectTranslation(projectsWithSlug[currentIndex - 1], language)
      : null;
  const nextProject =
    currentIndex < projectsWithSlug.length - 1
      ? getProjectTranslation(projectsWithSlug[currentIndex + 1], language)
      : null;
  const relatedProjects = projectsWithSlug
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3)
    .map((item) => getProjectTranslation(item, language));

  return (
    <>
      <Seo {...seo} />

      <main className="project-page">
        <section className="project-shell">
          <div className="project-breadcrumbs">
            <Link className="project-back-link" to="/">
              {copy.projectDetails.portfolio}
            </Link>
            <span>/</span>
            <span>{translatedProject.name}</span>
          </div>

          <section className="project-hero-card">
            <div className="project-copy">
              <p className="project-eyebrow">{translatedProject.category}</p>
              <h1>{translatedProject.name}</h1>
              <p className="project-highlight">{translatedProject.highlight}</p>
              <p className="project-description">{translatedProject.description}</p>

              <div className="project-meta-grid">
                <div className="project-meta-item">
                  <span>{copy.projectDetails.type}</span>
                  <strong>{translatedProject.category}</strong>
                </div>
                <div className="project-meta-item">
                  <span>{copy.projectDetails.mainStack}</span>
                  <strong>{translatedProject.stack.slice(0, 3).map((tech) => tech.name).join(" • ")}</strong>
                </div>
                <div className="project-meta-item">
                  <span>{copy.projectDetails.status}</span>
                  <strong>
                    {translatedProject.deploy
                      ? copy.projectDetails.published
                      : copy.projectDetails.noPublicDeploy}
                  </strong>
                </div>
              </div>

              <div className="project-actions">
                {translatedProject.deploy ? (
                  <a
                    href={translatedProject.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-primary"
                  >
                    {copy.projectDetails.viewOnline}
                  </a>
                ) : null}

                {translatedProject.github ? (
                  <a
                    href={translatedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-secondary"
                  >
                    {copy.projectDetails.viewRepository}
                  </a>
                ) : null}

                <Link className="project-action-ghost" to="/#projects">
                  {copy.projectDetails.backToProjects}
                </Link>
              </div>
            </div>

            <div className="project-visual-column">
              <div className="project-media-card">
                <img
                  src={translatedProject.img}
                  alt={t("projectDetails.imageAlt", { name: translatedProject.name })}
                  className="project-image"
                />
              </div>

              <div className="project-tech-card">
                <p className="project-card-title">{copy.projectDetails.technologies}</p>
                <ul className="project-tech-list">
                  {translatedProject.stack.map((tech) => (
                    <li key={tech.name}>{tech.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section className="project-content-grid">
          <article className="project-section project-section-main">
            <p className="project-section-label">{copy.projectDetails.context}</p>
            <h2>{copy.projectDetails.deliveryTitle}</h2>
            <p>
              {t("projectDetails.deliveryText1", { name: translatedProject.name })}
            </p>
            <p>{copy.projectDetails.deliveryText2}</p>
          </article>

          <aside className="project-section project-section-side">
            <p className="project-section-label">{copy.projectDetails.quickSummary}</p>
            <ul className="project-summary-list">
              <li>{translatedProject.highlight}</li>
              <li>
                {translatedProject.deploy
                  ? copy.projectDetails.publicVersion
                  : copy.projectDetails.noPublicVersion}
              </li>
              <li>
                {translatedProject.github
                  ? copy.projectDetails.sourceAvailable
                  : copy.projectDetails.sourceUnavailable}
              </li>
            </ul>
          </aside>
        </section>

        <section className="project-section project-section-wide">
          <p className="project-section-label">{copy.projectDetails.approach}</p>
          <h2>{copy.projectDetails.technicalTitle}</h2>
          <div className="project-columns">
            <p>{copy.projectDetails.technicalText1}</p>
            <p>{copy.projectDetails.technicalText2}</p>
          </div>
        </section>

        <section className="project-section project-section-wide">
          <div className="project-navigation-header">
            <div>
              <p className="project-section-label">{copy.projectDetails.navigation}</p>
              <h2>{copy.projectDetails.continueExploring}</h2>
            </div>
          </div>

          <div className="project-prev-next">
            {previousProject ? (
              <Link to={`/projetos/${previousProject.slug}`} className="project-nav-card">
                <span>{copy.projectDetails.previousProject}</span>
                <strong>{previousProject.name}</strong>
              </Link>
            ) : (
              <div className="project-nav-card project-nav-card-muted">
                <span>{copy.projectDetails.previousProject}</span>
                <strong>{copy.projectDetails.startOfList}</strong>
              </div>
            )}

            {nextProject ? (
              <Link to={`/projetos/${nextProject.slug}`} className="project-nav-card">
                <span>{copy.projectDetails.nextProject}</span>
                <strong>{nextProject.name}</strong>
              </Link>
            ) : (
              <div className="project-nav-card project-nav-card-muted">
                <span>{copy.projectDetails.nextProject}</span>
                <strong>{copy.projectDetails.endOfList}</strong>
              </div>
            )}
          </div>

          <div className="project-related-grid">
            {relatedProjects.map((item) => (
              <Link key={item.slug} to={`/projetos/${item.slug}`} className="project-related-card">
                <span>{item.category}</span>
                <strong>{item.name}</strong>
                <p>{item.highlight}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProjectDetails;
