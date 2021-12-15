import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import ProjectsFilter from "./ProjectsFilter";

import SwiperCore, { Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay]);

const Projects = ({ homeLanguage }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section id="portfolio" className="portfolio mb-5">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <header className="section-header ">
            <h2 className="fw-bold text-uppercase">Projects</h2>
            <p className="fs-5 mb-5">Check our latest work</p>
          </header>

          <ProjectsFilter homeLanguage={homeLanguage}></ProjectsFilter>
        </div>
      </section>
    </>
  );
};

export default Projects;
