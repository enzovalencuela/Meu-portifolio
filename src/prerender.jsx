import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "@/components/ui/provider";
import AppShell from "./AppShell";
import { buildHeadElements, getSeoByPath } from "./lib/seo";
import { projectsWithSlug } from "./pages/Projects/ProjectsData";

export async function prerender({ url }) {
  const html = renderToString(
    <React.StrictMode>
      <Provider>
        <MemoryRouter initialEntries={[url]}>
          <AppShell />
        </MemoryRouter>
      </Provider>
    </React.StrictMode>,
  );

  const seo = getSeoByPath(url);

  return {
    html,
    links: new Set([
      "/",
      ...projectsWithSlug.map((project) => `/projetos/${project.slug}`),
    ]),
    head: {
      lang: "pt-BR",
      title: seo.title,
      elements: new Set(buildHeadElements(seo)),
    },
  };
}
