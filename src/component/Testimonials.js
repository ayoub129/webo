import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper } from "swiper/react/swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
// install Swiper modules
SwiperCore.use([Autoplay]);

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="bg-violet ">
        <div className="container text-white d-flex">
          <div className=" w-md-25"></div>
          <div className="p-5 text-center w-100 w-lg-50 text-dark  ">
            <h2 className="fs-1 fw-bold">Nos clients parlent</h2>
            {/* <!-- Swiper --> */}
            <div
              className="mt-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{ delay: 3000 }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="card h-240">
                    <div className="card-body">
                      <h5 className="card-title fw-bold mb-3">
                        Expérience incroyable
                      </h5>
                      <div className="d-flex">
                        <div className="w-15"></div>
                        <p className="card-text w-70">
                          Votre équipe est toujours disponible, nous sommes très
                          satisfait de votre boutique en ligne. Merci à vous
                        </p>
                        <div className="w-15"></div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="triangle"></div>
                  </div>
                  <div className="my-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="d-block text-white mt-2 ms-2">
                        <p className="mb-0">Mohamed Arfani</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card h-240">
                    <div className="card-body">
                      <h5 className="card-title fw-bold mb-3">
                        Réactif, Sécurité Et UX
                      </h5>
                      <div className="d-flex">
                        <div className="w-15"></div>
                        <p className="card-text w-70">
                          Nous sommes très satisfait de votre équipe, le design
                          est très beau, le site est rapide, flexible et
                          sécurisé. Merci à vous
                        </p>
                        <div className="w-15"></div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <div className="triangle"></div>
                  </div>

                  <div className="my-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="d-block text-white mt-2 ms-2">
                        <p className="mb-0">Fatima Mrini</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card h-240">
                    <div className="card-body">
                      <h5 className="card-title fw-bold mb-3">
                        Application personnalisée
                      </h5>
                      <div className="d-flex">
                        <div className="w-15"></div>
                        <p className="card-text w-70">
                          Votre application immobilière est très complète, m'a
                          facilité beaucoup de taches, me permet facilement de
                          gérer les loyés et de générer les e-quittances
                        </p>
                        <div className="w-15"></div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <div className="triangle"></div>
                  </div>

                  <div className="my-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="d-block text-white mt-2 ms-2">
                        <p className="mb-0">Ahmed Borbah</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-md-25"></div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
