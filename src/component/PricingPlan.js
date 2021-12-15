import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PricingPlan = ({ homeLanguage }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {homeLanguage === "en" ? (
        <section className="container mb-5">
          <div
            className="
        d-flex
        align-items-center
        flex-column
        justify-content-center
        mt-5
        text-center
      "
          >
            <p>Pricing Plan</p>
            <h2 className="fs-1 fw-bold">
              Choose The Best Deal For Your
              <span className="text-violet"> Business</span>
            </h2>
            <div className="w-25 pt-1 bg-violet mt-5"></div>
          </div>
          <div className="row align-items-center justify-content-between mt-5">
            <div
              className="col-md-3 col-sm-6 col-12 mb-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="card text-center p-3">
                <div className="card-body">
                  <h5
                    className="
                card-title
                text-uppercase
                fw-bold
                letter-spacing
                text-muted
                mb-2
              "
                  >
                    Starter
                  </h5>
                  <h6 className="card-subtitle fs-2 fw-bold mb-4">$129.99</h6>
                  <p className="card-text mb-1">5 Website Page</p>
                  <p className="card-text mb-1">Contact Form</p>
                  <p className="card-text mb-1">Mobile-Optimized</p>
                  <p className="card-text mb-1">Wordpress Sites</p>
                  <p class="card-text text-secondary mb-1">Advanced SEO</p>
                  <p class="card-text text-secondary mb-1">
                    Fast Indexing on Google
                  </p>
                  <p class="card-text text-secondary mb-1">Custom Content</p>
                  <p class="card-text text-secondary mb-1">Support 24/7</p>
                  <p class="card-text text-secondary mb-1">2 APIs Integation</p>
                  <p class="card-text text-secondary mb-1">Online Stores</p>
                  <p class="card-text text-secondary mb-4">Web application</p>
                  <button className="btn btn-violet">Select Plan</button>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-12 mb-5"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="card text-center p-3">
                <div className="card-body">
                  <h5
                    className="
                card-title
                text-uppercase
                fw-bold
                letter-spacing
                text-muted
                mb-2
              "
                  >
                    Premium
                  </h5>
                  <h6 className="card-subtitle fs-2 fw-bold mb-4">$650.00</h6>
                  <p className="card-text mb-1">Up To 20 website pages</p>
                  <p className="card-text mb-1">Contact Form</p>
                  <p className="card-text mb-1">Mobile-Optimized</p>
                  <p className="card-text mb-1">Wordpress Sites</p>
                  <p class="card-text  mb-1">Advanced SEO</p>
                  <p class="card-text  mb-1">Fast Indexing on Google</p>
                  <p class="card-text  mb-1">Custom Content</p>
                  <p class="card-text text-secondary mb-1">Support 24/7</p>
                  <p class="card-text text-secondary mb-1">2 APIs Integation</p>
                  <p class="card-text text-secondary mb-1">Online Stores</p>
                  <p class="card-text text-secondary mb-4">Web application</p>
                  <button className="btn btn-violet">Select Plan</button>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-12 mb-5"
              data-aos="zoom-out"
              data-aos-duration="2000"
            >
              <div className="card text-center p-2">
                <div className="card-body">
                  <h5
                    className="
                    card-title
                    text-uppercase
                    fw-bold
                    letter-spacing
                    text-muted
                    mb-2
                  "
                  >
                    Business
                  </h5>
                  <h6 className="card-subtitle fs-2 fw-bold mb-4">on Devis</h6>
                  <p className="card-text mb-1">Up To 40 website pages</p>
                  <p className="card-text mb-1">Contact Form</p>
                  <p className="card-text mb-1">Mobile-Optimized</p>
                  <p className="card-text mb-1">Wordpress Sites</p>
                  <p class="card-text  mb-1">Advanced SEO</p>
                  <p class="card-text  mb-1">Fast Indexing on Google</p>
                  <p class="card-text  mb-1">Custom Content</p>
                  <p class="card-text  mb-1">Support 24/7</p>
                  <p class="card-text  mb-1">2 APIs Integation</p>
                  <p class="card-text text-secondary mb-1">Online Stores</p>
                  <p class="card-text text-secondary mb-4">Web application</p>
                  <button className="btn btn-violet">Select Plan</button>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-12 mb-5"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="card text-center p-2">
                <div className="card-body">
                  <h5
                    className="
                card-title
                text-uppercase
                fw-bold
                letter-spacing
                text-muted
                mb-2
              "
                  >
                    E-commerce
                  </h5>
                  <h6 className="card-subtitle fs-2 fw-bold mb-4">on Devis</h6>
                  <p className="card-text mb-1">Unlimited website pages</p>
                  <p className="card-text mb-1">Contact Form</p>
                  <p className="card-text mb-1">Mobile-Optimized</p>
                  <p className="card-text mb-1">Wordpress Sites</p>
                  <p class="card-text  mb-1">Advanced SEO</p>
                  <p class="card-text  mb-1">Fast Indexing on Google</p>
                  <p class="card-text  mb-1">Custom Content</p>
                  <p class="card-text  mb-1">Support 24/7</p>
                  <p class="card-text  mb-1">Unlimited APIs Integation</p>
                  <p class="card-text  mb-1">Online Stores</p>
                  <p class="card-text  mb-4">Web application</p>
                  <button className="btn btn-violet">Select Plan</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : homeLanguage === "fr" ? (
        <section className="container mb-5">
          <div
            className="
        d-flex
        align-items-center
        flex-column
        justify-content-center
        mt-5
        text-center
      "
          >
            <p>Plan tarifaire</p>
            <h2 className="fs-1 fw-bold">
              Choisissez la meilleure offre pour votre
              <span className="text-violet">Entreprise</span>
            </h2>
            <div className="w-25 pt-1 bg-violet mt-5"></div>
          </div>
          <div className="row align-items-center justify-content-between mt-5">
            <div
              className="col-md-4 col-sm-6 col-12 mb-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="card text-center p-3">
                <div className="card-body">
                  <h5
                    className="
                card-title
                text-uppercase
                fw-bold
                letter-spacing
                text-muted
                mb-2
              "
                  >
                    démarrage
                  </h5>
                  <h6 className="card-subtitle fs-2 fw-bold mb-4">$ 50.00</h6>
                  <p className="card-text mb-1">5 pages du site Web</p>
                  <p className="card-text mb-1">Formulaire de contact</p>
                  <p className="card-text mb-1">Référencement avancé</p>
                  <p className="card-text mb-4">Optimisé pour les mobiles</p>
                  <button className="btn btn-violet">
                    Sélectionnez le plan
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 col-12 mb-5"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="card text-center p-3">
                <div className="card-body">
                  <h5
                    className="
                card-title
                text-uppercase
                fw-bold
                letter-spacing
                text-muted
                mb-2
              "
                  >
                    Prime
                  </h5>
                  <h6 className="card-subtitle fs-2 fw-bold mb-4">$ 250.00</h6>
                  <p className="card-text mb-1">
                    Caractéristiques du plan de démarrage
                  </p>
                  <p className="card-text mb-1">Jusqu'à 30 pages de site Web</p>
                  <p className="card-text mb-1">Sites WordPress</p>
                  <p className="card-text mb-1">Indexation rapide sur Google</p>
                  <p className="card-text mb-1">Contenu personnalisé</p>
                  <p className="card-text mb-1">Intégration de 2 API</p>
                  <p className="card-text mb-4">Assistance 24h/24 et 7j/7</p>
                  <button className="btn btn-violet">
                    Sélectionnez le plan
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 col-12 mb-5"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="card text-center p-2">
                <div className="card-body">
                  <h5
                    className="
                card-title
                text-uppercase
                fw-bold
                letter-spacing
                text-muted
                mb-2
              "
                  >
                    Entreprise
                  </h5>
                  <h6 className="card-subtitle fs-2 fw-bold mb-4">
                    Personnalisé
                  </h6>
                  <p className="card-text mb-1">
                    Caractéristiques du forfait Premium
                  </p>
                  <p className="card-text mb-1">Pages de site Web illimitées</p>
                  <p className="card-text mb-1">magasins en ligne</p>
                  <p className="card-text mb-1">application Web</p>
                  <p className="card-text mb-4">Intégration d'API illimitées</p>
                  <button className="btn btn-violet">
                    Sélectionnez le plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="container mb-5 rtl">
          <div
            className="
        d-flex
        align-items-center
        flex-column
        justify-content-center
        mt-5
        text-center
      "
          >
            <p>خطة التسعير</p>
            <h2 className="fs-1 fw-bold">
              اختر أفضل صفقة ل<span className="text-violet">عملك</span>
            </h2>
            <div className="w-25 pt-1 bg-violet mt-5"></div>
          </div>
          <div className="row align-items-center justify-content-between mt-5">
            <div
              className="col-md-4 col-sm-6 col-12 mb-5"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="card text-center p-3">
                <div className="card-body">
                  <h5
                    className="
                card-title
                text-uppercase
                fw-bold
                letter-spacing
                text-muted
                mb-2
              "
                  >
                    بداية
                  </h5>
                  <h6 className="card-subtitle fs-2 fw-bold mb-4">$ 50.00</h6>
                  <p className="card-text mb-1">5 صفحات لموقعك</p>
                  <p className="card-text mb-1">نموذج الاتصال</p>
                  <p className="card-text mb-1">تحسين محركات البحث المتقدم</p>
                  <p className="card-text mb-4">محسن للجوال</p>
                  <button className="btn btn-violet">اختر الخطة</button>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 col-12 mb-5"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="card text-center p-3">
                <div className="card-body">
                  <h5
                    className="
                card-title
                text-uppercase
                fw-bold
                letter-spacing
                text-muted
                mb-2
              "
                  >
                    Premium
                  </h5>
                  <h6 className="card-subtitle fs-2 fw-bold mb-4">$ 250.00</h6>
                  <p className="card-text mb-1">ميزات خطة المبتدئين</p>
                  <p className="card-text mb-1">ما يصل إلى 30 صفحة موقع</p>
                  <p className="card-text mb-1">مواقع Wordpress</p>
                  <p className="card-text mb-1">فهرسة سريعة على جوجل</p>
                  <p className="card-text mb-1">محتوى مخصص</p>
                  <p className="card-text mb-1">
                    2 تكامل واجهات برمجة التطبيقات
                  </p>
                  <p className="card-text mb-4">دعم 24/7</p>
                  <button className="btn btn-violet">اختر الخطة</button>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 col-12 mb-5"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="card text-center p-2">
                <div className="card-body">
                  <h5
                    className="
                card-title
                text-uppercase
                fw-bold
                letter-spacing
                text-muted
                mb-2
              "
                  >
                    عمل
                  </h5>
                  <h6 className="card-subtitle fs-2 fw-bold mb-4">مخصص</h6>
                  <p className="card-text mb-1">ميزات الخطة المميزة</p>
                  <p className="card-text mb-1">صفحات موقع غير محدودة</p>
                  <p className="card-text mb-1">محلات نشطة</p>
                  <p className="card-text mb-1">تطبيق الويب</p>
                  <p className="card-text mb-4">
                    تكامل غير محدود لواجهات برمجة التطبيقات
                  </p>
                  <button className="btn btn-violet">اختر الخطة</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PricingPlan;
