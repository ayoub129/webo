import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Tech = ({ homeLanguage }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section>
      <h2 className="text-center fs-1 fw-bold">
        MASTERED <span className="text-violet">TECHNOLOGIES</span>
      </h2>
      <div className="row mt-5 align-items-center">
        <div className="col-4 mt-5" data-aos="fade-down" data-aos-delay="200">
          <div class="card  border-0 text-white">
            <img
              src="images/node.svg"
              class="card-img p-5 h-100 "
              alt="node.js"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://nodejs.org/en/" className="text-violet">
                  Node.js®
                </a>{" "}
                is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5" data-aos="fade-down" data-aos-delay="400">
          <div class="card  border-0 text-white">
            <img src="images/php.svg" class="card-img p-5 h-100 " alt="php" />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://www.php.net/" className="text-violet">
                  PHP
                </a>{" "}
                is a popular general-purpose scripting language that is
                especially suited to web development.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5" data-aos="fade-down" data-aos-delay="600">
          <div class="card  border-0 text-white">
            <img
              src="images/python.svg"
              class="card-img p-5 h-100 "
              alt="python"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://www.python.org/" className="text-violet">
                  Python
                </a>{" "}
                is an interpreted, object-oriented, high-level programming
                language with dynamic semantics.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5" data-aos="fade-down" data-aos-delay="800">
          <div class="card  border-0 text-white">
            <img
              src="images/vue.svg"
              class="card-img p-5 h-100 "
              alt="vue.js"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://vuejs.org/" className="text-violet">
                  Vue.js
                </a>{" "}
                is an open-source Model–view–viewmodel JavaScript framework for
                building user interfaces and single-page applications.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5" data-aos="fade-down" data-aos-delay="1000">
          <div class="card  border-0 text-white">
            <img src="images/es.svg" class="card-img p-5 h-100 " alt="ES6.js" />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources"
                  className="text-violet"
                >
                  ECMAScript
                </a>{" "}
                is a standardized version of JavaScript. ECMAScript 2015 (called
                ES6) added a lot of new features to JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5" data-aos="fade-down" data-aos-delay="1200">
          {" "}
          <div class="card  border-0 text-white">
            <img
              src="images/react.svg"
              class="card-img p-5 h-100 "
              alt="react.js"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://reactjs.org/" className="text-violet">
                  React
                </a>{" "}
                is a JavaScript library for building user interfaces.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5" data-aos="fade-down" data-aos-delay="1400">
          <div class="card  border-0 text-white">
            <img
              src="images/wordpress.svg"
              class="card-img p-5 h-100 "
              alt="wordpress"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://wordpress.org/" className="text-violet">
                  Wordpress
                </a>{" "}
                is a content management system based on PHP.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5" data-aos="fade-down" data-aos-delay="1600">
          <div class="card  border-0 text-white">
            <img
              src="images/bigcommerce.svg"
              class="card-img p-5 h-100 "
              alt="BigCommerce"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://www.bigcommerce.com/" className="text-violet">
                  BigCommerce
                </a>{" "}
                is a Software-as-a-service e-commerce platform.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5" data-aos="fade-down" data-aos-delay="1800">
          <div class="card  border-0 text-white">
            <img
              src="images/shopify.svg"
              class="card-img p-5 h-100 "
              alt="node.js"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://www.shopify.com/" className="text-violet">
                  Shopify
                </a>{" "}
                is an e-commerce platform for online stores.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5" data-aos="fade-down" data-aos-delay="2000">
          <div class="card  border-0 text-white">
            <img
              src="images/figma.svg"
              class="card-img p-5 h-100 "
              alt="figma"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://www.figma.com/" className="text-violet">
                  Figma
                </a>{" "}
                is a collaborative interface design tool.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5" data-aos="fade-down" data-aos-delay="2200">
          <div class="card  border-0 text-white">
            <img src="images/pwa.svg" class="card-img p-5 h-100 " alt="PWA" />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <span className="text-violet">PWA</span> are a type of
                application software delivered through the web, built using
                common web technologies including HTML, CSS and JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 mt-5" data-aos="fade-down" data-aos-delay="2400">
          <div class="card  border-0 text-white">
            <img
              src="images/contenstack.svg"
              class="card-img p-5 h-100 "
              alt="contenstack"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                API-based, headless content management platform. .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
