import React from "react";

const ContactForm = ({ homeLanguage }) => {
  return (
    <>
      {homeLanguage === "en" ? (
        <section className="container mb-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-9 col-12">
              <h2 className="fs-2 fw-bold mt-5">Have A Project In Mind ?</h2>
              <div className="pt-1 bg-dark w-25 mb-3"></div>
              <p className="fs-5 text-muted mb-5">Contact Us</p>
              <form
                action="/contact"
                name="contact"
                method="post"
                className="row g-3"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="col-sm-6">
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="Name"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="Contry"
                    placeholder="Contry Name"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    required
                    type="email"
                    className="form-control"
                    name="Email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="Phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-12">
                  <select required name="subject" className="form-select">
                    <option defaultValue>Subject</option>
                    <option>Landing Page</option>
                    <option>website design</option>
                    <option>Wordpress Blog</option>
                    <option>Woocomerce Website</option>
                    <option>E-commerce (MERN)</option>
                    <option>Stock Management</option>
                    <option>Portfolio's</option>
                    <option>Custome</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    required
                    className="form-control"
                    name="description"
                    placeholder="Describe Your Project"
                    rows="5"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-raduis mb-5"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-3 my-5">
              <h3 className="fs-3 fw-bold">Contact Us</h3>
              <div className="pt-1 bg-dark w-25 mb-5"></div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-map-marker text-violet"></i>
                <p className="ms-2 mb-0">Tangier , Morocco</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-phone text-violet"></i>
                <p className="ms-2 mb-0">+212 635747467</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-globe text-violet"></i>
                <p className="ms-2 mb-0">www.webo-dev.netlify.com</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-envelope text-violet"></i>
                <p className="ms-2 mb-0">berouijilayoub@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      ) : homeLanguage === "fr" ? (
        <section className="container mb-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-9 col-12">
              <h2 className="fs-2 fw-bold mt-5">
                Avez-vous un projet en tête ?
              </h2>
              <div className="pt-1 bg-dark w-25 mb-3"></div>
              <p className="fs-5 text-muted mb-5">Contact Nous</p>
              <form
                action="/contact"
                name="contact"
                method="post"
                className="row g-3"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nom"
                    name="Name"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Contry"
                    placeholder="Nom du pays"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    className="form-control"
                    name="Email"
                    placeholder="Adresse e-mail"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Phone"
                    placeholder="Numéro de téléphone"
                    required
                  />
                </div>
                <div className="col-12">
                  <select name="subject" required className="form-select">
                    <option defaultValue>Sujet</option>
                    <option>Page de destination</option>
                    <option>conception de site Web</option>
                    <option>Blog WordPress</option>
                    <option>Site Web de woocommerce</option>
                    <option>Commerce électronique (MERN)</option>
                    <option>Gestion de stock</option>
                    <option>Portefeuilles</option>
                    <option>Personnalisé</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="Décrivez votre projet"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-raduis mb-5"
                  >
                    Soumettre
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-3 my-5">
              <h3 className="fs-3 fw-bold">Contact Nous</h3>
              <div className="pt-1 bg-dark w-25 mb-5"></div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-map-marker text-violet"></i>
                <p className="ms-2 mb-0">Tanger , Maroc</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-phone text-violet"></i>
                <p className="ms-2 mb-0">+212 635747467</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-globe text-violet"></i>
                <p className="ms-2 mb-0">www.webo-dev.netlify.com</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-envelope text-violet"></i>
                <p className="ms-2 mb-0">berouijilayoub@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="container mb-5 rtl">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-9 col-12">
              <h2 className="fs-2 fw-bold mt-5">هل لديك مشروع في الاعتبار؟</h2>
              <div className="pt-1 bg-dark w-25 mb-3"></div>
              <p className="fs-5 text-muted mb-5">اتصل بنا</p>
              <form
                action="/contact"
                name="contact"
                method="post"
                className="row g-3"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="اسم"
                    name="Name"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Contry"
                    placeholder="اسم الدولة"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    className="form-control"
                    name="Email"
                    placeholder="عنوان البريد الإلكتروني"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Phone"
                    placeholder="رقم الهاتف"
                    required
                  />
                </div>
                <div className="col-12">
                  <select name="subject" required className="form-select">
                    <option defaultValue>موضوعات</option>
                    <option>صفحة هبوط</option>
                    <option>تصميم الموقع</option>
                    <option>مدونة ووردبريس</option>
                    <option>متجر woocommerce</option>
                    <option>التجارة الإلكترونية (MERN)</option>
                    <option>إدارة المخزون</option>
                    <option>بورتفليو</option>
                    <option>Custome</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="صِف مشروعك"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-raduis mb-5"
                  >
                    إرسال
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-3 my-5">
              <h3 className="fs-3 fw-bold">اتصل بنا</h3>
              <div className="pt-1 bg-dark w-25 mb-5"></div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-map-marker text-violet"></i>
                <p className="me-2 mb-0">طنجة، المغرب</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-phone text-violet"></i>
                <p className="me-2 mb-0">+212 635747467</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-globe text-violet"></i>
                <p className="me-2 mb-0">www.webo-dev.netlify.com</p>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-envelope text-violet"></i>
                <p className="me-2 mb-0">berouijilayoub@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactForm;
