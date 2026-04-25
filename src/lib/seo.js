import { projectsWithSlug } from "@/pages/Projects/ProjectsData";

export const siteUrl = "https://enzovalencuela.com";
export const defaultOgImage = `${siteUrl}/og-image.webp`;

function getTextByLanguage(value, language = "pt") {
  if (typeof value === "string") {
    return value;
  }

  return value?.[language] || value?.pt || "";
}

export function getHomeSeo() {
  return {
    title: "Enzo Valençuela | Portifólio",
    description:
      "Portfólio de Edilson Enzo da Silva Valençuela, também conhecido como Enzo Valençuela, desenvolvedor Full Stack com foco em React, Node.js, JavaScript, TypeScript e PostgreSQL. Conheça projetos, experiência e contatos.",
    canonical: `${siteUrl}/`,
    image: defaultOgImage,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Edilson Enzo da Silva Valençuela",
      alternateName: ["Enzo Valençuela", "Edilson Enzo Valençuela"],
      url: `${siteUrl}/`,
      image: `${siteUrl}/minha_foto.webp`,
      jobTitle: "Desenvolvedor Full Stack",
      email: "mailto:esilvavlencuela@gmail.com",
      sameAs: [
        "https://github.com/enzovalencuela",
        "https://www.linkedin.com/in/enzo-silva10/",
      ],
      knowsAbout: [
        "React",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "PostgreSQL",
        "Desenvolvimento Web",
      ],
    },
  };
}

export function getProjectSeo(project, language = "pt") {
  const projectName = getTextByLanguage(project.name, language);
  const projectDescription = getTextByLanguage(project.description, language);
  const description = `${projectDescription} Tecnologias principais: ${project.stack
    .map((tech) => tech.name)
    .join(", ")}.`;

  return {
    title: `${projectName} | Projeto Full Stack de Enzo Valençuela`,
    description,
    canonical: `${siteUrl}/projetos/${project.slug}`,
    image: defaultOgImage,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: projectName,
      description: projectDescription,
      url: `${siteUrl}/projetos/${project.slug}`,
      codeRepository: project.github || undefined,
      programmingLanguage: project.stack.map((tech) => tech.name),
      author: {
        "@type": "Person",
        name: "Enzo Valençuela",
        url: siteUrl,
      },
    },
  };
}

export function getSeoByPath(pathname) {
  if (pathname === "/" || pathname === "") {
    return getHomeSeo();
  }

  const project = projectsWithSlug.find(
    (item) => `/projetos/${item.slug}` === pathname,
  );

  if (project) {
    return getProjectSeo(project);
  }

  return getHomeSeo();
}

export function buildHeadElements(seo) {
  return [
    { type: "meta", props: { name: "description", content: seo.description } },
    { type: "link", props: { rel: "canonical", href: seo.canonical } },
    { type: "meta", props: { property: "og:type", content: "website" } },
    { type: "meta", props: { property: "og:locale", content: "pt_BR" } },
    { type: "meta", props: { property: "og:title", content: seo.title } },
    {
      type: "meta",
      props: { property: "og:description", content: seo.description },
    },
    { type: "meta", props: { property: "og:url", content: seo.canonical } },
    {
      type: "meta",
      props: { property: "og:site_name", content: "Portfólio de Edilson Enzo da Silva Valençuela" },
    },
    { type: "meta", props: { property: "og:image", content: seo.image } },
    {
      type: "meta",
      props: {
        property: "og:image:alt",
        content: "Imagem de compartilhamento do portfólio de Enzo Valençuela",
      },
    },
    { type: "meta", props: { property: "og:image:type", content: "image/webp" } },
    { type: "meta", props: { name: "twitter:card", content: "summary_large_image" } },
    { type: "meta", props: { name: "twitter:title", content: seo.title } },
    {
      type: "meta",
      props: { name: "twitter:description", content: seo.description },
    },
    { type: "meta", props: { name: "twitter:image", content: seo.image } },
    {
      type: "script",
      props: {
        type: "application/ld+json",
        children: JSON.stringify(seo.jsonLd),
      },
    },
  ];
}
