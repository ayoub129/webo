import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Why = ({ homeLanguage }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {homeLanguage === "en" ? (
        <section className="container">
          <div className="row mt-5 align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                src="./images/projet1.jpg"
                alt="about"
                className="img-fluid"
              />
            </div>
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h2 className="fs-2 fw-bold">WHY WEBO ?</h2>
              <h4 className="fs-4 my-3">
                multiple talents, for a unique solution!
              </h4>
              <p className="text-muted lh-lg w-75">
                We support clients from strategic framing to operational
                deployment, including project management. Our common goal: to
                transform investments and expectations into operational added
                value. Our team of engineers are researchers in new
                technologies, we build your project step by step and we better
                solutions because quite simply your project is also the image of
                our company
              </p>
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            <div
              className="col-lg-6 d-lg-none d-block"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                src="./images/projet4.jpg"
                alt="about 2"
                className="img-fluid"
              />
            </div>
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2 className="fs-2 fw-bold">OUR MISSION</h2>
              <h4 className="fs-4 my-3">
                innovate and create value for your projects.
              </h4>
              <p className="text-muted lh-lg">
                WEBO is a company of experts in web architectures and software
                solutions. Our agency specializes in the design and development
                of websites, e-commerce platforms, specific software and
                specific web applications. Thanks to continuous investments in
                technology watch, WEBO anticipates trends, chooses and controls
                products as early as possible to provide its customers with
                efficient and secure web and software solutions.
              </p>
            </div>
            <div
              className="col-lg-6 d-lg-block d-none"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img
                src="./images/projet4.jpg"
                alt="about 2"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row my-5 align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img src="./images/computer.jpg" alt="" className="img-fluid" />
            </div>
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h2 className="fs-2 fw-bold">WHAT DO YOU GET?</h2>
              <h4 className="fs-4 my-3">Let’s meet your challenges.</h4>
              <p className="text-muted lh-lg">
                Increase in traffic on your e-commerce platform, increase the
                loyalty of your audiences with adapted content, develop the
                efficiency of collaborative spaces, optimize knowledge sharing,
                increase the turnover generated on the web, strengthen your
                digital identity on all support, facilitation of the management
                of your activities using relevant KPIs, successful deployment of
                a new tool, etc.
              </p>
            </div>
          </div>
        </section>
      ) : homeLanguage === "fr" ? (
        <section className="container">
          <div className="row mt-5 align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                src="./images/projet1.jpg"
                alt="about"
                className="img-fluid"
              />
            </div>
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h2 className="fs-2 fw-bold">POURQUOI WEBO ?</h2>
              <h4 className="fs-4 my-3">
                de multiples talents, pour une solution unique !
              </h4>
              <p className="text-muted lh-lg w-75">
                Nous accompagnons nos clients du cadrage stratégique à
                l'opérationnel déploiement, y compris la gestion de projet.
                Notre objectif commun : transformer les investissements et les
                attentes en ajouts opérationnels valeur. Notre équipe
                d'ingénieurs sont des chercheurs en nouvelles technologies, nous
                construisons votre projet étape par étape et nous solutions car
                tout simplement votre projet est aussi l'image de notre
                compagnie
              </p>
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            <div
              className="col-lg-6 d-lg-none d-block"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                src="./images/projet4.jpg"
                alt="about 2"
                className="img-fluid"
              />
            </div>
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2 className="fs-2 fw-bold">NOTRE MISSION</h2>
              <h4 className="fs-4 my-3">
                innovez et créez de la valeur pour vos projets.
              </h4>
              <p className="text-muted lh-lg">
                WEBO est une société d'experts en architectures web et logiciels
                solutions. Notre agence est spécialisée dans la conception et le
                développement de sites Web, de plateformes de commerce
                électronique, de logiciels spécifiques et applications Web
                spécifiques. Grâce à des investissements continus dans veille
                technologique, WEBO anticipe les tendances, choisit et contrôle
                produits le plus tôt possible pour fournir à ses clients des
                solutions web et logicielles efficaces et sécurisées.
              </p>
            </div>
            <div
              className="col-lg-6 d-lg-block d-none"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img
                src="./images/projet4.jpg"
                alt="about 2"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row my-5 align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img src="./images/computer.jpg" alt="" className="img-fluid" />
            </div>
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h2 className="fs-2 fw-bold">QU'EST CE QUE TU OBTIENS?</h2>
              <h4 className="fs-4 my-3">Relevons vos défis.</h4>
              <p className="text-muted lh-lg">
                Augmentation du trafic sur votre plateforme e-commerce,
                augmentez le fidéliser vos audiences avec des contenus adaptés,
                développer la efficacité des espaces collaboratifs, optimiser le
                partage des connaissances, augmenter le chiffre d'affaires
                généré sur le web, renforcer votre identité numérique sur tous
                les supports, facilitation de la gestion de vos activités à
                l'aide de KPI pertinents, déploiement réussi de un nouvel outil,
                etc.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="container rtl">
          <div className="row mt-5 align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img
                src="./images/projet1.jpg"
                alt="about"
                className="img-fluid"
              />
            </div>
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2 className="fs-2 fw-bold"> لماذا ويبو ؟ </h2>
              <h4 className="fs-4 my-3"> مواهب متعددة لحل فريد !</h4>
              <p className="text-muted lh-lg w-75 fs-5">
                نحن ندعم العملاء من الإطار الاستراتيجي إلى النشر التشغيلي ، بما
                في ذلك إدارة المشروع. هدفنا المشترك: تحويل الاستثمارات والتوقعات
                إلى عملية مضافة القيمة. لدينا فريق من المهندسين الباحثين في جديد
                التقنيات ، نحن نبني مشروعك خطوة بخطوة ونحن أفضل الحلول لأن
                مشروعك ببساطة هو صورة لـشركتنا
              </p>
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            <div
              className="col-lg-6 d-lg-none d-block"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img
                src="./images/projet4.jpg"
                alt="about 2"
                className="img-fluid"
              />
            </div>
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h2 className="fs-2 fw-bold">مهمتنا</h2>
              <h4 className="fs-4 my-3">ابتكر واخلق قيمة لمشاريعك.</h4>
              <p className="text-muted lh-lg fs-5">
                ويبو هي شركة خبراء في معماريات الويب والبرمجيات . وكالتنا متخصصة
                في تصميم و تطوير مواقع الويب ومنصات التجارة الإلكترونية وبرامج
                محددة و تطبيقات ويب محددة. بفضل الاستثمارات المستمرة في
                التكنولوجيا ، ويبو تتوقع الاتجاهات والاختيارات والضوابط في أقرب
                وقت ممكن لتزويد عملائها بها مع حلول ويب وبرامج فعالة وآمنة.
              </p>
            </div>
            <div
              className="col-lg-6 d-lg-block d-none"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                src="./images/projet4.jpg"
                alt="about 2"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row my-5 align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img src="./images/computer.jpg" alt="" className="img-fluid" />
            </div>
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2 className="fs-2 fw-bold">على ماذا تحصل ؟</h2>
              <h4 className="fs-4 my-3">دعونا نواجه التحديات الخاصة بك.</h4>
              <p className="text-muted lh-lg fs-5">
                زيادة حركة المرور على منصة التجارة الإلكترونية الخاصة بك ،
                وزيادة ولاء جمهورك بالمحتوى الملائم ، قم بتطوير كفاءة المساحات
                التعاونية ، وتحسين مشاركة المعرفة ، زيادة حجم التداول المتولد
                على الويب ، وتعزيز الهوية الرقمية الخاصة بك وتسهيل ادارة أنشطتك
                باستخدام مؤشرات الأداء الرئيسية ذات الصلة ، والنشر الناجح لأداة
                جديدة ، إلخ.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Why;
