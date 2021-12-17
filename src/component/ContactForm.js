import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="container mb-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-9 col-12">
            <h2 className="fs-2 fw-bold mt-5">Avez-vous un projet en tête ?</h2>
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
                  required
                  type="text"
                  className="form-control"
                  placeholder="Nom"
                  name="Name"
                />
              </div>
              <div className="col-sm-6">
                <input
                  required
                  type="text"
                  className="form-control"
                  name="Pays"
                  placeholder="Contry Name"
                />
              </div>
              <div className="col-sm-6">
                <input
                  required
                  type="email"
                  className="form-control"
                  name="Email"
                  placeholder="E-mail"
                />
              </div>
              <div className="col-sm-6">
                <input
                  required
                  type="text"
                  className="form-control"
                  name="Phone"
                  placeholder="Numéro de téléphone"
                />
              </div>
              <div className="col-12">
                <select required name="subject" className="form-select">
                  <option defaultValue>Sujet</option>
                  <option>Landing Page</option>
                  <option>SiteWeb design</option>
                  <option>Wordpress Blog</option>
                  <option>Woocomerce SiteWeb</option>
                  <option>Commerce électronique (MERN)</option>
                  <option>Gestion de Stock</option>
                  <option>Portfolio's</option>
                  <option>personnalisé</option>
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
                  envoyer
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-3 my-5">
            <h3 className="fs-3 fw-bold">Contact Nous</h3>
            <div className="pt-1 bg-dark w-25 mb-5"></div>
            <div className="d-flex align-items-center mb-2">
              <i className="fas fa-map-marker text-violet"></i>
              <p className="ms-2 mb-0">Tanger , Morocco</p>
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
    </>
  );
};

export default ContactForm;
