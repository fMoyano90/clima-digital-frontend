import React, { useEffect, useState } from "react";
import { pageTitle } from "../PageTitle";
import BreadCrumb from "../BreadCrumb";
import HeaderOne from "../Header/HeaderOne";
import FooterTwo from "../Footer/FooterTwo";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import axios from "axios";

import img1 from "../../assets/images/service-single/single.jpg";
import "./ServiceSingle.css";

const Services = () => {
  pageTitle("Services");

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interestService: "",
    message: "",
    contactPreference: "",
    preferredContactTime: "",
    referralSource: "",
    contactStatus: "NEW",
    internalNotes: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3001/v1/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(formData),
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setSuccessMessage("¡Gracias! Mensaje Enviado");
        setErrorMessage("");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          interestService: "",
          message: "",
          contactPreference: "",
          preferredContactTime: "",
          referralSource: "",
          contactStatus: "NEW",
          internalNotes: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(
          "Ocurrió un error al enviar tu solicitud. Por favor intenta más tarde."
        );
        setSuccessMessage("");
        setLoading(false);
      });
  };

  return (
    <>
      <HeaderOne />
      <BreadCrumb />

      <div className='service-single-page ptb-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-12'>
              <div className='serice-details'>
                <div className='details-img'>
                  <img src={img1} alt='' />
                </div>
                <div className='details-text'>
                  <h2>Future of your made insurance business</h2>
                  <p>
                    Aliquam eros posuer loborti viverra laoree ullamcorper
                    posuere viverra ero justo, posuere lobo viverra laoreet
                    augue mattis fermentum ullamcAliquam eros posuer loborti
                    viverra laoree ullamcorper posuere viverra ero justo,
                    posuere lobo viverra laoreet augue mattis fermentum
                    ullamcorper viverraorper viverra
                  </p>
                  <div className='details-items'>
                    <div className='row'>
                      <div className='col-lg-3 col-md-6 col-12'>
                        <h3>
                          <i className='ti-check'></i> Comprehensive
                        </h3>
                        <p>Will be distrol acte bioiiy desig is fact that</p>
                      </div>
                      <div className='col-lg-3 col-md-6 col-12'>
                        <h3>
                          <i className='ti-check'></i> Holistic Risk
                        </h3>
                        <p>Will be distrol acte bioiiy desig is fact that</p>
                      </div>
                      <div className='col-lg-3 col-md-6 col-12'>
                        <h3>
                          <i className='ti-check'></i> Comprehensive
                        </h3>
                        <p>Will be distrol acte bioiiy desig is fact that</p>
                      </div>
                      <div className='col-lg-3 col-md-6 col-12'>
                        <h3>
                          <i className='ti-check'></i> Holistic Risk
                        </h3>
                        <p>Will be distrol acte bioiiy desig is fact that</p>
                      </div>
                    </div>
                  </div>
                  <p>
                    Aliquam eros justo, posuere loborti viverra laorko matti
                    ullamcor posuere viverra .Aliquam erosto, posuere lobortis
                    non viverra laoreet augue mis fermentum ullamcorper viverra
                    lao Aliquam eros justo, posuere loborti viverra laoreet
                    matti ullamcorper posuere viverra .Aliquam eros justo,
                    posuere lobortis non, viverra laoreet{" "}
                  </p>
                </div>
                <div className='service-area'>
                  <div className='service-wrap'>
                    <div className='row'>
                      <div className='col col-lg-6 col-md-6 col-12'>
                        <div
                          className='service-item wow fadeInUp'
                          data-wow-duration='1000ms'
                        >
                          <div className='service-text'>
                            <h3>
                              <Link to='/service-single'>Personal Chef</Link>
                            </h3>
                            <p>
                              A Portfolio is a collection of works that is to
                              showcases for an individual's peoples
                            </p>
                            <Link to='/service-single' className='read-more'>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='col col-lg-6 col-md-6 col-12'>
                        <div
                          className='service-item wow fadeInUp active'
                          data-wow-duration='1200ms'
                        >
                          <div className='service-text'>
                            <h3>
                              <Link to='/service-single'>Web Development</Link>
                            </h3>
                            <p>
                              A Portfolio is a collection of works that is to
                              showcases for an individual's peoples
                            </p>
                            <Link to='/service-single' className='read-more'>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='col col-lg-6 col-md-6 col-12'>
                        <div
                          className='service-item wow fadeInUp'
                          data-wow-duration='1400ms'
                        >
                          <div className='service-text'>
                            <h3>
                              <Link to='/service-single'>
                                Digital Marketing
                              </Link>
                            </h3>
                            <p>
                              A Portfolio is a collection of works that is to
                              showcases for an individual's peoples
                            </p>
                            <Link to='/service-single' className='read-more'>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='col col-lg-6 col-md-6 col-12'>
                        <div
                          className='service-item wow fadeInUp'
                          data-wow-duration='1600ms'
                        >
                          <div className='service-text'>
                            <h3>
                              <Link to='/service-single'>
                                E-commerce Solutions
                              </Link>
                            </h3>
                            <p>
                              A Portfolio is a collection of works that is to
                              showcases for an individual's peoples
                            </p>
                            <Link to='/service-single' className='read-more'>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='service-sidebar'>
                <div className='widget info-widget'>
                  <h3>Comienza hoy y automatiza tus procesos</h3>
                  <form method='post' onSubmit={SubmitHandler}>
                    <div className='form-field'>
                      <div className='form-field'>
                        <label>Nombre</label>
                        <input
                          type='text'
                          className='form-control'
                          name='name'
                          id='name'
                          placeholder='Tú Nombre'
                          autoComplete='name'
                          onChange={handleChange}
                          value={formData.name}
                        />
                      </div>
                      <div className='form-field'>
                        <label>Empresa</label>
                        <input
                          type='text'
                          className='form-control'
                          name='company'
                          id='company'
                          placeholder='Nombre Empresa'
                          onChange={handleChange}
                          value={formData.company}
                        />
                      </div>
                      <div className='form-field'>
                        <label>Teléfono</label>
                        <input
                          type='text'
                          className='form-control'
                          name='phone'
                          id='phone'
                          placeholder='Teléfono de Contacto'
                          onChange={handleChange}
                          value={formData.phone}
                        />
                      </div>
                      <div className='form-field'>
                        <label>Email</label>
                        <input
                          type='email'
                          className='form-control'
                          name='email'
                          id='email'
                          placeholder='Email de Contacto'
                          onChange={handleChange}
                          value={formData.email}
                        />
                      </div>
                      <div className='form-field'>
                        <label>Servicio de Interés</label>
                        <select
                          name='interestService'
                          className='form-control'
                          onChange={handleChange}
                          value={formData.interestService}
                        >
                          <option disabled='disabled' value=''>
                            Selecciona una opción
                          </option>
                          <option value='Tiendas virtuales'>
                            Tiendas virtuales
                          </option>
                          <option value='Plataformas de Agendamiento Online'>
                            Plataformas de Agendamiento Online
                          </option>
                          <option value='Sitios de Presencia en Línea'>
                            Sitios de Presencia en Línea
                          </option>
                          <option value='Sistemas de Gestión Empresarial'>
                            Sistemas de Gestión Empresarial
                          </option>
                          <option value='Aplicaciones Móviles'>
                            Aplicaciones Móviles
                          </option>
                          <option value='Chatbots y Asistentes Virtuales'>
                            Chatbots y Asistentes Virtuales
                          </option>
                          <option value='Integraciones Personalizadas y APIs'>
                            Integraciones Personalizadas y APIs
                          </option>
                          <option value='Marketing Digital'>
                            Marketing Digital
                          </option>
                          <option value='Social Media'>Social Media</option>
                        </select>
                      </div>
                      <div className='form-field pt-4'>
                        <label>Medio de Contacto Preferido</label>
                        <select
                          name='contactPreference'
                          className='form-control'
                          onChange={handleChange}
                          value={formData.contactPreference}
                        >
                          <option disabled='disabled' value=''>
                            Selecciona una opción
                          </option>
                          <option value='Llamada telefónica'>
                            Llamada telefónica
                          </option>
                          <option value='WhatsApp'>WhatsApp</option>
                          <option value='Email'>Email</option>
                        </select>
                      </div>
                      <div className='form-field pt-4'>
                        <label>Horario Preferido</label>
                        <select
                          name='preferredContactTime'
                          className='form-control'
                          onChange={handleChange}
                          value={formData.preferredContactTime}
                        >
                          <option disabled='disabled' value=''>
                            Selecciona una opción
                          </option>
                          <option value='8:00 - 12:00'>8:00 - 12:00</option>
                          <option value='12:00 - 16:00'>12:00 - 16:00</option>
                          <option value='16:00 - 20:00'>16:00 - 20:00</option>
                        </select>
                      </div>
                      <div className='form-field pt-4'>
                        <label>¿Como supiste de nosotros?</label>
                        <select
                          name='referralSource'
                          className='form-control'
                          onChange={handleChange}
                          value={formData.referralSource}
                        >
                          <option disabled='disabled' value=''>
                            Selecciona una opción
                          </option>
                          <option value='Google'>Google</option>
                          <option value='Instagram'>Instagram</option>
                          <option value='LinkedIn'>LinkedIn</option>
                          <option value='Evento'>Evento</option>
                          <option value='Ejecutivo de ventas'>
                            Ejecutivo de ventas
                          </option>
                          <option value='Un amigo'>Un amigo</option>
                        </select>
                      </div>
                      <div className='col-md-12 col-12 form-field pt-4'>
                        <textarea
                          rows={5}
                          className='form-control'
                          name='message'
                          id='message'
                          placeholder='Cuéntanos un poco sobre tu idea o requerimiento'
                          onChange={handleChange}
                          value={formData.message}
                        ></textarea>
                      </div>
                      <p>
                        <small>
                          * Dentro de las próximas 24 horas nos pondremos en
                          contacto contigo según las preferencias indicadas.
                        </small>
                      </p>
                      <button type='submit' className='ch-btn-style-2'>
                        {loading ? (
                          <i className='ti-reload'></i>
                        ) : (
                          "Agendar Reunión Ahora"
                        )}
                      </button>
                      <div className='clearfix error-handling-messages'>
                        {successMessage && (
                          <div id='success'>{successMessage}</div>
                        )}
                        {errorMessage && <div id='error'>{errorMessage}</div>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className='row pt-2'>
                <div className='col-md-6'>
                  <a
                    href='https://wa.me/56974690241'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button
                      className='w-100 btn-wsp'
                      style={{ cursor: "pointer" }}
                    >
                      WhatsApp
                    </button>
                  </a>
                </div>
                <div className='col-md-6'>
                  <a href='tel:+56974690241'>
                    <button
                      className='w-100 btn-call'
                      style={{ cursor: "pointer" }}
                    >
                      LLámanos
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
};

export default Services;
