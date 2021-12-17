import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsFilter from "./ProjectsFilter";

const Projects = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section id="portfolio" className="portfolio mb-5">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <header className="section-header ">
            <h2 className="fw-bold text-uppercase">Projets</h2>
            <p className="fs-5 mb-5">Consultez nos derniers travaux</p>
          </header>
          <ProjectsFilter></ProjectsFilter>
        </div>
      </section>
    </>
  );
};

export default Projects;
