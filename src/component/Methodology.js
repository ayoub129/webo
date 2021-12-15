import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Methodology = ({ homeLanguage }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section>
      <h1 className="text-center lh-base mb-3 fs-1 fw-bold ">
        Custom Software Development <br /> Methodologies
      </h1>
      <p className="text-center text-muted w-80 mx-auto">
        All of our custom software application development services follow our
        Design Thinking mindset. Every single person in our company follows
        these principles and applies them to their daily work. To learn more,
        take a look at our Software Development Methodologies.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-4" data-aos="fade-up" data-aos-delay="200">
            <div
              class="card p-4 border-0 text-center"
              style={{ width: "100%" }}
            >
              <img
                src="images/icn-agile.svg"
                class="card-img-top w-50 mx-auto hv-scale"
                alt="agile"
              />
              <div class="card-body">
                <h5 class="card-title fw-bold">Agile</h5>
                <p class="card-text">
                  This is our standard practice for services-oriented projects,
                  code, and design deliverables. In Agile, client involvement
                  and the flexibility to adapt to changing conditions are
                  essential.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4" data-aos="fade-up" data-aos-delay="400">
            <div
              class="card p-4 border-0 text-center"
              style={{ width: "100%" }}
            >
              <img
                src="images/icn-lean.svg"
                class="card-img-top w-40 mx-auto hv-scale"
                alt="agile"
              />
              <div class="card-body">
                <h5 class="card-title fw-bold">Lean</h5>
                <p class="card-text">
                  Lean-oriented teams deliver complex projects on tight
                  schedules. Our Lean Engineers work as efficiently as possible
                  and are experts at avoiding resource waste.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4" data-aos="fade-up" data-aos-delay="600">
            <div
              class="card p-4 border-0 text-center"
              style={{ width: "100%" }}
            >
              <img
                src="images/icn-devops-color-circle-blue.svg"
                class="card-img-top w-50 mx-auto hv-scale"
                alt="agile"
              />
              <div class="card-body">
                <h5 class="card-title fw-bold">DevOps</h5>
                <p class="card-text">
                  What can be measured can be improved. Our cross-functional
                  development teams keep a close eye on every relevant KPI while
                  also embracing innovation and transparency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4" data-aos="fade-up" data-aos-delay="800">
            <div
              class="card p-4 border-0 text-center"
              style={{ width: "100%" }}
            >
              <img
                src="images/icn-waterfall.svg"
                class="card-img-top w-50 mx-auto hv-scale"
                alt="agile"
              />
              <div class="card-body">
                <h5 class="card-title fw-bold">Waterfall</h5>
                <p class="card-text">
                  It’s a highly-structured methodology that is most suitable for
                  projects that require high-quality standards through a more
                  rigorous and timely organization.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4" data-aos="fade-up" data-aos-delay="1000">
            <div
              class="card p-4 border-0 text-center"
              style={{ width: "100%" }}
            >
              <img
                src="images/icn-scrum.svg"
                class="card-img-top w-50 mx-auto hv-scale"
                alt="agile"
              />
              <div class="card-body">
                <h5 class="card-title fw-bold">Scrum</h5>
                <p class="card-text">
                  Every development team is led by a certified Scrum Master, who
                  is in charge of prioritizing tasks, dividing responsibilities
                  efficiently, and time-boxing every element.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4" data-aos="fade-up" data-aos-delay="1200">
            <div
              class="card p-4 border-0 text-center"
              style={{ width: "100%" }}
            >
              <img
                src="images/icn-prototype-color-line.svg"
                class="card-img-top w-50 mx-auto hv-scale"
                alt="agile"
              />
              <div class="card-body">
                <h5 class="card-title fw-bold">Prototype</h5>
                <p class="card-text">
                  The Prototype method prioritizes user involvement and feedback
                  to create products with great interaction, excellent
                  interface, and a frictionless user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
