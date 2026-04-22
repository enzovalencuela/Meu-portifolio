import React, { useEffect } from "react";

function upsertMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  const [attrName, attrValue] = attribute;
  element.setAttribute(attrName, attrValue);
  element.setAttribute("content", value);
}

function upsertLink(selector, rel, href) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  element.setAttribute("rel", rel);
  element.setAttribute("href", href);
}

function Seo({ title, description, canonical, image, jsonLd }) {
  useEffect(() => {
    const previousTitle = document.title;
    const jsonLdElement = document.createElement("script");

    document.title = title;

    upsertMeta('meta[name="description"]', ["name", "description"], description);
    upsertMeta('meta[property="og:title"]', ["property", "og:title"], title);
    upsertMeta(
      'meta[property="og:description"]',
      ["property", "og:description"],
      description,
    );
    upsertMeta('meta[property="og:url"]', ["property", "og:url"], canonical);
    upsertMeta('meta[property="og:image"]', ["property", "og:image"], image);
    upsertMeta('meta[name="twitter:title"]', ["name", "twitter:title"], title);
    upsertMeta(
      'meta[name="twitter:description"]',
      ["name", "twitter:description"],
      description,
    );
    upsertMeta('meta[name="twitter:image"]', ["name", "twitter:image"], image);
    upsertLink('link[rel="canonical"]', "canonical", canonical);

    if (jsonLd) {
      jsonLdElement.type = "application/ld+json";
      jsonLdElement.setAttribute("data-page-seo", "true");
      jsonLdElement.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(jsonLdElement);
    }

    return () => {
      document.title = previousTitle;

      if (jsonLd) {
        jsonLdElement.remove();
      }
    };
  }, [canonical, description, image, jsonLd, title]);

  return null;
}

export default Seo;
