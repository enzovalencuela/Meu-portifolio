import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { getProjectSeo } from "@/lib/seo";
import Footer from "../Footer/Footer";
import { projectsWithSlug } from "../Projects/ProjectsData";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { slug } = useParams();
  const project = projectsWithSlug.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const seo = getProjectSeo(project);
  const currentIndex = projectsWithSlug.findIndex((item) => item.slug === slug);
  const previousProject =
    currentIndex > 0 ? projectsWithSlug[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsWithSlug.length - 1
      ? projectsWithSlug[currentIndex + 1]
      : null;
  const relatedProjects = projectsWithSlug
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <Seo {...seo} />

      <main className="project-page">
        <section className="project-shell">
          <div className="project-breadcrumbs">
            <Link className="project-back-link" to="/">
              Portfólio
            </Link>
            <span>/</span>
            <span>{project.name}</span>
          </div>

          <section className="project-hero-card">
            <div className="project-copy">
              <p className="project-eyebrow">{project.category}</p>
              <h1>{project.name}</h1>
              <p className="project-highlight">{project.highlight}</p>
              <p className="project-description">{project.description}</p>

              <div className="project-meta-grid">
                <div className="project-meta-item">
                  <span>Tipo</span>
                  <strong>{project.category}</strong>
                </div>
                <div className="project-meta-item">
                  <span>Stack principal</span>
                  <strong>{project.stack.slice(0, 3).map((tech) => tech.name).join(" • ")}</strong>
                </div>
                <div className="project-meta-item">
                  <span>Status</span>
                  <strong>{project.deploy ? "Publicado" : "Sem deploy público"}</strong>
                </div>
              </div>

              <div className="project-actions">
                {project.deploy ? (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-primary"
                  >
                    Ver projeto online
                  </a>
                ) : null}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-secondary"
                  >
                    Ver repositório
                  </a>
                ) : null}

                <Link className="project-action-ghost" to="/#projects">
                  Voltar para projetos
                </Link>
              </div>
            </div>

            <div className="project-visual-column">
              <div className="project-media-card">
                <img
                  src={project.img}
                  alt={`Imagem de apresentação do projeto ${project.name}`}
                  className="project-image"
                />
              </div>

              <div className="project-tech-card">
                <p className="project-card-title">Tecnologias utilizadas</p>
                <ul className="project-tech-list">
                  {project.stack.map((tech) => (
                    <li key={tech.name}>{tech.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section className="project-content-grid">
          <article className="project-section project-section-main">
            <p className="project-section-label">Contexto</p>
            <h2>O que este projeto entrega</h2>
            <p>
              {project.name} foi desenvolvido com foco em resolver uma necessidade
              específica de produto, unindo interface clara, navegação objetiva e
              implementação alinhada a boas práticas de desenvolvimento web.
            </p>
            <p>
              O projeto reforça minha atuação como desenvolvedor full stack ao
              combinar experiência do usuário, organização de componentes,
              integração entre camadas da aplicação e cuidado com entrega visual.
            </p>
          </article>

          <aside className="project-section project-section-side">
            <p className="project-section-label">Resumo rápido</p>
            <ul className="project-summary-list">
              <li>{project.highlight}</li>
              <li>{project.deploy ? "Possui versão pública acessível." : "Sem versão pública no momento."}</li>
              <li>{project.github ? "Código-fonte disponível para consulta." : "Código-fonte privado ou indisponível."}</li>
            </ul>
          </aside>
        </section>

        <section className="project-section project-section-wide">
          <p className="project-section-label">Abordagem</p>
          <h2>Decisões técnicas e foco de implementação</h2>
          <div className="project-columns">
            <p>
              A construção desta solução priorizou consistência visual,
              organização técnica e uma stack coerente com o objetivo do produto.
              A seleção das tecnologias foi pensada para sustentar performance,
              manutenção e boa experiência em diferentes tamanhos de tela.
            </p>
            <p>
              Além da interface, o projeto demonstra capacidade de estruturar
              fluxos reais de uso, lidar com integrações externas quando
              necessário e transformar requisitos em entregas navegáveis e
              funcionais.
            </p>
          </div>
        </section>

        <section className="project-section project-section-wide">
          <div className="project-navigation-header">
            <div>
              <p className="project-section-label">Navegação</p>
              <h2>Continue explorando</h2>
            </div>
          </div>

          <div className="project-prev-next">
            {previousProject ? (
              <Link to={`/projetos/${previousProject.slug}`} className="project-nav-card">
                <span>Projeto anterior</span>
                <strong>{previousProject.name}</strong>
              </Link>
            ) : (
              <div className="project-nav-card project-nav-card-muted">
                <span>Projeto anterior</span>
                <strong>Início da lista</strong>
              </div>
            )}

            {nextProject ? (
              <Link to={`/projetos/${nextProject.slug}`} className="project-nav-card">
                <span>Próximo projeto</span>
                <strong>{nextProject.name}</strong>
              </Link>
            ) : (
              <div className="project-nav-card project-nav-card-muted">
                <span>Próximo projeto</span>
                <strong>Fim da lista</strong>
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
