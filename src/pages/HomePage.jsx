import React from "react";
import Seo from "@/components/Seo";
import { getHomeSeo } from "@/lib/seo";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function HomePage() {
  const seo = getHomeSeo();

  return (
    <>
      <Seo {...seo} />

      <Nav />
      <main>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
