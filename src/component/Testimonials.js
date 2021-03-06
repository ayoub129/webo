import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper } from "swiper/react/swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import SwiperCore, { Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay]);
const Testimonials = ({ homeLanguage }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {homeLanguage === "en" ? (
        <section className="bg-violet ">
          <div className="container text-white d-flex">
            <div className=" w-md-25"></div>
            <div className="p-5 text-center w-100 w-lg-50 text-dark  ">
              <h2 className="fs-1 fw-bold">Our Clients Speak</h2>
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
                          Incredible Experience
                        </h5>
                        <div className="d-flex">
                          <div className="w-15"></div>
                          <p className="card-text w-70">
                            Your team is always available, we are very satisfied
                            with your online store. thank you
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
                          Responsive , Security And UX
                        </h5>
                        <div className="d-flex">
                          <div className="w-15"></div>
                          <p className="card-text w-70">
                            We are very satisfied with your team, the design is
                            very beautiful, the site is fast, flexible and
                            secure. Thank you WEBO
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
                          Custome Application
                        </h5>
                        <div className="d-flex">
                          <div className="w-15"></div>
                          <p className="card-text w-70">
                            Your real estate application is very complete, made
                            many tasks easier for me, easily allows me to manage
                            rents and generate e-receipts
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
      ) : homeLanguage === "fr" ? (
        <section className="bg-violet ">
          <div className="container text-white d-flex">
            <div className="w-md-25"></div>
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
                          Exp??rience incroyable
                        </h5>
                        <div className="d-flex">
                          <div className="w-15"></div>
                          <p className="card-text w-70">
                            Votre ??quipe est toujours disponible, nous sommes
                            tr??s satisfait de votre boutique en ligne. Merci
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
                          R??actif, S??curit?? Et UX
                        </h5>
                        <div className="d-flex">
                          <div className="w-15"></div>
                          <p className="card-text w-70">
                            Nous sommes tr??s satisfaits de votre ??quipe, la
                            conception est tr??s beau, le site est rapide,
                            flexible et s??curise. Merci WEBO
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
                          Application personnalis??e
                        </h5>
                        <div className="d-flex">
                          <div className="w-15"></div>
                          <p className="card-text w-70">
                            Votre application immobili??re est tr??s compl??te, m'a
                            facilit?? beaucoup de taches, me permet facilement de
                            g??rer les loy??s et de g??n??rer les e-quittances
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
            <div className="w-25"></div>
          </div>
        </section>
      ) : (
        <section className="bg-violet ">
          <div className="container text-white d-flex">
            <div className="w-md-25"></div>
            <div className="p-5 text-center w-lg-50 w-100 text-dark  ">
              <h2 className="fs-1 fw-bold">?????????????? ??????????????</h2>
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
                        <h5 className="card-title fw-bold mb-3 fs-3">
                          ?????????? ???? ????????
                        </h5>
                        <div className="d-flex">
                          <div className="w-15"></div>
                          <p className="card-text w-70 fs-5">
                            ?????????? ???????? ???????????? ?? ?????? ?????????? ???????? ???? ?????????? ??????
                            ????????????????. ??????????
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
                          <p className="mb-0 fs-5">???????? ????????????</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card h-240">
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3 fs-3">
                          ???????? ?????????????????? ?????????????? ???????????? ????????????????
                        </h5>
                        <div className="d-flex">
                          <div className="w-15"></div>
                          <p className="card-text w-70 fs-5">
                            ?????? ?????????? ???????? ???? ?????????? ?? ?????????????? ???????? ?????? ????????????
                            ???????? ?? ?????? ?? ????????. ???????? ???? ????????
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
                          <p className="mb-0 fs-5">?????????? ??????????</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card h-240">
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3 fs-3">
                          ?????????? ????????
                        </h5>
                        <div className="d-flex">
                          <div className="w-15"></div>
                          <p className="card-text w-70 fs-5">
                            ???????????? ?????????????? ?????????? ???????????? ?? ???????? ???????????? ???? ????????????
                            ?? ?????????? ???? ???????????? ?????????? ?????????????????? ???????????? ??????????????
                            ??????????????????{" "}
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
                          <p className="mb-0 fs-5">???????? ????????????</p>
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
      )}
    </>
  );
};

export default Testimonials;
