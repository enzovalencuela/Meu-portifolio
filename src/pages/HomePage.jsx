import React, { Suspense, lazy, useEffect, useState } from "react";
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

const FeedbackSection = lazy(() => import("./Feedbacks/FeedbackSection"));

function HomePage() {
  const seo = getHomeSeo();
  const [loadFeedbacks, setLoadFeedbacks] = useState(false);

  useEffect(() => {
    const deferLoad = () => setLoadFeedbacks(true);

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(deferLoad, { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timer = window.setTimeout(deferLoad, 1200);
    return () => window.clearTimeout(timer);
  }, []);

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
        {loadFeedbacks ? (
          <Suspense fallback={null}>
            <FeedbackSection />
          </Suspense>
        ) : null}
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
