import { projectsWithSlug } from "@/pages/Projects/ProjectsData";

export const siteUrl = "https://enzovalencuela.com";
export const defaultOgImage = `${siteUrl}/og-image.webp`;

function getTextByLanguage(value, language = "pt") {
  if (typeof value === "string") {
    return value;
  }

  return value?.[language] || value?.pt || "";
}

export function getHomeSeo(language = "pt") {
  const isEn = language === "en";

  return {
    title: isEn ? "Enzo Valençuela | Portfolio" : "Enzo Valençuela | Portfólio",
    description: isEn
      ? "Portfolio of Edilson Enzo da Silva Valençuela, Full Stack developer focusing on React, Next.js, Node.js, TypeScript, and PostgreSQL."
      : "Portfólio de Edilson Enzo da Silva Valençuela, desenvolvedor Full Stack com foco em React, Next.js, Node.js, TypeScript e PostgreSQL. Conheça meus projetos, experiência e contatos.",
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
        "Next.js",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "PostgreSQL",
        "Tailwind CSS",
        "Desenvolvimento Web",
      ],
    },
  };
}

export function getProjectsSeo(language = "pt") {
  const isEn = language === "en";
  const title = isEn
    ? "Projects | Enzo Valençuela - Full Stack Developer"
    : "Projetos | Enzo Valençuela - Desenvolvedor Full Stack";
  const description = isEn
    ? "Explore the full project portfolio of Enzo Valençuela. Full-stack apps, freelance work, and team systems."
    : "Explore o portfólio completo de projetos de Enzo Valençuela. Aplicações full-stack, trabalhos freelancers e sistemas em equipe desenvolvidos na Mega Jr.";

  return {
    title,
    description,
    canonical: `${siteUrl}/projetos`,
    image: defaultOgImage,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: isEn ? "Enzo Valençuela's Projects" : "Projetos de Enzo Valençuela",
      description,
      url: `${siteUrl}/projetos`,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: isEn ? "Home" : "Início",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: isEn ? "Projects" : "Projetos",
            item: `${siteUrl}/projetos`,
          },
        ],
      },
    },
  };
}

export function getProjectSeo(project, language = "pt") {
  if (!project) return getHomeSeo(language);

  const projectName = getTextByLanguage(project.name, language);
  const projectDescription = getTextByLanguage(project.description, language);
  const techList =
    project.stack?.map((tech) => tech.name || tech).join(", ") || "";

  const description = techList
    ? `${projectDescription} ${language === "en" ? "Key tech:" : "Tecnologias principais:"} ${techList}.`
    : projectDescription;

  let imageUrl = defaultOgImage;
  if (project.img) {
    imageUrl = project.img.startsWith("http")
      ? project.img
      : `${siteUrl}${project.img.startsWith("/") ? "" : "/"}${project.img}`;
  }

  return {
    title: `${projectName} | ${language === "en" ? "Project by Enzo Valençuela" : "Projeto de Enzo Valençuela"}`,
    description,
    canonical: `${siteUrl}/projetos/${project.slug}`,
    image: imageUrl,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: projectName,
      description: projectDescription,
      url: `${siteUrl}/projetos/${project.slug}`,
      codeRepository: project.github || undefined,
      programmingLanguage: project.stack?.map((tech) => tech.name || tech),
      author: {
        "@type": "Person",
        name: "Enzo Valençuela",
        url: siteUrl,
      },
    },
  };
}

export function getSeoByPath(pathname, language = "pt") {
  const cleanPathname =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (cleanPathname === "/" || cleanPathname === "") {
    return getHomeSeo(language);
  }

  if (cleanPathname === "/projetos") {
    return getProjectsSeo(language);
  }

  const project = projectsWithSlug.find(
    (item) => item.slug && `/projetos/${item.slug}` === cleanPathname,
  );

  if (project) {
    return getProjectSeo(project, language);
  }

  return getHomeSeo(language);
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
      props: {
        property: "og:site_name",
        content: "Portfólio de Edilson Enzo da Silva Valençuela",
      },
    },
    { type: "meta", props: { property: "og:image", content: seo.image } },
    {
      type: "meta",
      props: {
        property: "og:image:alt",
        content: "Imagem de compartilhamento do portfólio de Enzo Valençuela",
      },
    },
    {
      type: "meta",
      props: { property: "og:image:type", content: "image/webp" },
    },
    {
      type: "meta",
      props: { name: "twitter:card", content: "summary_large_image" },
    },
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
