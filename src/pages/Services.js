import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../component/Footer";
import Hero2 from "../component/Hero2";
import Navbar from "../component/Navbar";
import Craft from "../component/Craft";

const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [homeLanguage, setHomeLanguage] = useState("");
  const getLanguage = (language) => {
    setHomeLanguage(language);
  };

  let name = "Services";

  if (homeLanguage === "fr") {
    name = "Services";
  } else if (homeLanguage === "ar") {
    name = "خدماتنا";
  }
  return (
    <>
      <div className="container">
        <Navbar getLanguage={getLanguage}></Navbar>
      </div>
      <Hero2
        homeLanguage={homeLanguage}
        name={name}
        src="./images/about.svg"
      ></Hero2>
      <section id="services" className="services mb-5">
        {/* <!-- ======= Services Section ======= --> */}
        <div className="container " data-aos="fade-up">
          <header className="section-header">
            <h2 className="text-center fs-1 fw-bold my-4">Our Services</h2>
          </header>

          <div className="row gy-4">
            <div className="col-12" data-aos="fade-up" data-aos-delay="200">
              <div className="service-box blue row">
                <div className="col-4">
                  <img src="images/website.svg" alt="full stack" />
                </div>
                <div className="col-8">
                  <h3>Full-Stack Web Development Services</h3>
                  <p className="lh-lg text-left">
                    This is perhaps the most common service in web development
                    because of its holistic approach. Unlike super-specialized
                    developers, full-stack engineers have the expertise required
                    to develop both the front and back end of web applications
                    using the most effective programming languages and
                    technologies for each case.
                  </p>
                  <p className="lh-lg text-left">
                    Of course, this means that full-stack developers are some of
                    the most experienced and talented engineers you can find.
                    Today, the full-stack approach is often used for projects
                    that require end-to-end or full-cycle management, regardless
                    of size or complexity. Some of the most popular “stacks”
                    (a.k.a. technologies) are:
                  </p>
                  <ul className="text-left text-muted">
                    <li>
                      MEAN Stack: MongoDB, Express, AngularJS, and Node.js.
                    </li>
                    <li>MERN Stack: MongoDB, Express, ReactJS, and Node.js</li>
                    <li>
                      Django Stack: Django, Python, and MySQL as Database.
                    </li>
                    <li>LAMP Stack: Linux, Apache, MySQL, and PHP.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12" data-aos="fade-up" data-aos-delay="300">
              <div className="service-box orange row">
                <div className="col-8 ">
                  <h3>Ecommerce Applications</h3>
                  <p className="lh-lg text-left me-5">
                    We entered a whole new era of ecommerce in 2020. The online
                    sales environment is gaining relevance by the second, and it
                    shows. As more and more consumers transfer their shopping
                    habits to the digital realm, companies continue to put their
                    efforts into developing attractive and engaging ecommerce
                    sites that drive conversions.
                  </p>
                  <p className="lh-lg text-left me-5">
                    Proper ecommerce development requires using the right
                    strategy and technology stack for the project. If the
                    project isn’t starting from scratch, companies are often
                    interested in adding new features, increasing site
                    optimization, integrating cloud services, or developing ERP
                    systems.
                  </p>
                </div>
                <div className="col-4">
                  <img src="images/retail.svg" alt="full stack" />
                </div>
              </div>
            </div>

            <div className="col-12" data-aos="fade-up" data-aos-delay="400">
              <div className="service-box green row">
                <div className="col-4">
                  <img src="images/web-application.svg" alt="web app" />
                </div>
                <div className="col-8">
                  <h3>Custom Web Applications</h3>
                  <p className="lh-lg text-left">
                    Unbeknown to most, websites and web applications are not the
                    same thing. However, from the client’s perspective, these
                    differences aren’t always relevant to achieve their goals.
                    All you need to know is that web apps are software elements
                    that run on a web server. They are designed to communicate
                    with other elements and enhance the user experience of your
                    website.
                  </p>
                  <p className="lh-lg text-left">
                    In a lot of projects, developing custom web applications is
                    all that is needed. Custom web applications are easier to
                    mold to the project’s requirements since they don’t have to
                    deal with all the compatibility issues of mobile app
                    development. If you want to learn more, this article
                    explains the differences between websites and web
                    applications more clearly.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12" data-aos="fade-up" data-aos-delay="500">
              <div className="service-box red row">
                <div className="col-8 ">
                  <h3>Content Management Systems</h3>
                  <p className="lh-lg text-left me-5">
                    A Content Management System (CMS) makes your website’s
                    content easier to manage. This is one of the most requested
                    web development services because of how relevant
                    high-quality content has become. Although there are some
                    very popular CMS services out there (like WordPress or
                    Joomla), most companies these days need custom solutions
                    that allow them to make the best of their content every
                    time.
                  </p>
                  <p className="lh-lg text-left me-5">
                    CMS services are often requested by companies looking for a
                    change in website functionality in the form of:
                  </p>
                  <ul className="text-left text-muted">
                    <li>Supporting new design elements.</li>
                    <li>Reducing maintenance costs.</li>
                    <li>Increasing platform speed.</li>
                    <li>Migrating to self-hosted services.</li>
                    <li>Upgrading current technologies.</li>
                  </ul>
                </div>
                <div className="col-4">
                  <img src="images/retail.svg" alt="full stack" />
                </div>
              </div>
            </div>

            <div className="col-12" data-aos="fade-up" data-aos-delay="600">
              <div className="service-box purple row">
                <div className="col-4">
                  <img src="images/web-application.svg" alt="web app" />
                </div>
                <div className="col-8">
                  <h3>QA & Testing</h3>
                  <p className="lh-lg text-left">
                    If one thing is clear about today’s web software market is
                    that Quality Assurance is nothing to skimp on. With so many
                    companies launching their web-based offerings due to the
                    high demand for digital alternatives, customers are looking
                    for value more than ever. Most of the time, you only get one
                    chance to provide an intuitive and pleasant experience.
                  </p>
                  <p className="lh-lg text-left">
                    All web development services must come bundled with some
                    form of QA & Testing to guarantee the adequate functionality
                    of the software. In the end, QA is all about creating the
                    best possible product for your customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12" data-aos="fade-up" data-aos-delay="700">
              <div className="service-box pink row">
                <div className="col-8 ">
                  <h3>Web Support and Maintenance</h3>
                  <p className="lh-lg text-left me-5">
                    A few years ago, it was fairly common for businesses to use
                    web development services with a short-term perspective. This
                    made a lot harder to keep the web applications free of
                    errors and updated to their latest versions. What’s more, it
                    also made their websites more vulnerable to cyberattacks and
                    other malicious threats.
                  </p>
                  <p className="lh-lg text-left me-5">
                    Luckily, that isn’t the case anymore. Modern web support and
                    maintenance services can be offered in three forms:
                  </p>
                  <ul className="text-left text-muted">
                    <li className="mb-3">
                      Monitoring: Experts monitor your infrastructure 24/7,
                      investigate problems, and quickly escalate issues based on
                      predetermined procedures.
                    </li>
                    <li className="mb-3">
                      Remediation: Includes full monitoring plus issue
                      resolution handled by senior engineers capable of solving
                      problems ranging from minor to catastrophic.
                    </li>
                    <li className="mb-3">
                      Management: This service offers complete infrastructure
                      management from problem resolution to daily maintenance –
                      delivering the complete function of a dedicated web
                      operations team.
                    </li>
                  </ul>
                </div>
                <div className="col-4">
                  <img src="images/saas.svg" alt="full stack" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Services Section --> */}
      </section>
      <Craft homeLanguage={homeLanguage}></Craft>
      <Footer homeLanguage={homeLanguage}></Footer>
    </>
  );
};

export default Services;
