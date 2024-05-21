import React, { useEffect } from "react";
import { pageTitle } from "../PageTitle";
import BreadCrumb from "../BreadCrumb";
import HeaderOne from "../Header/HeaderOne";
import FooterTwo from "../Footer/FooterTwo";
import { Link } from "react-router-dom";
import WOW from "wowjs";

import img1 from "../../assets/images/service-single/single.jpg";
import "./ServiceSingle.css";

const Services = () => {
  pageTitle("Services");

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <HeaderOne></HeaderOne>
      <BreadCrumb></BreadCrumb>

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
                      <div class='form-field'>
                        <label>Nombre</label>
                        <input
                          type='text'
                          class='form-control'
                          name='name'
                          id='name'
                          placeholder='Tú Nombre'
                          autocomplete='name'
                        />
                      </div>
                      <div class='form-field'>
                        <label>Empresa</label>
                        <input
                          type='email'
                          class='form-control'
                          name='email'
                          id='email'
                          placeholder='Nombre Empresa'
                        />
                      </div>
                      <div class='form-field'>
                        <label>Teléfono</label>
                        <input
                          type='text'
                          class='form-control'
                          name='phone'
                          id='phone'
                          placeholder='Teléfono de Contacto'
                        />
                      </div>
                      <div class='form-field'>
                        <label>Email</label>
                        <input
                          type='email'
                          class='form-control'
                          name='email'
                          id='email'
                          placeholder='Email de Contacto'
                        />
                      </div>
                      <div class='form-field'>
                        <label>Servicio de Interés</label>
                        <select name='subject' class='form-control'>
                          <option disabled='disabled' selected=''>
                            Selecciona una opción
                          </option>
                          <option>Tiendas virtuales</option>
                          <option>Plataformas de Agendamiento Online</option>
                          <option>Sitios de Presencia en Línea</option>
                          <option>Sistemas de Gestión Empresarial</option>
                          <option>Aplicaciones Móviles</option>
                          <option>Chatbots y Asistentes Virtuales</option>
                          <option>Integraciones Personalizadas y APIs</option>
                          <option>Marketing Digital</option>
                          <option>Social Media</option>
                        </select>
                      </div>
                      <div class='form-field pt-4'>
                        <label>Medio de Contacto Preferido</label>
                        <select name='subject' class='form-control'>
                          <option disabled='disabled' selected=''>
                            Selecciona una opción
                          </option>
                          <option>Llamada telefónica</option>
                          <option>WhatsApp</option>
                          <option>Email</option>
                        </select>
                      </div>
                      <div class='form-field pt-4'>
                        <label>Horario Preferido</label>
                        <select name='subject' class='form-control'>
                          <option disabled='disabled' selected=''>
                            Selecciona una opción
                          </option>
                          <option>8:00 - 12:00</option>
                          <option>12:00 - 16:00</option>
                          <option>16:00 - 20:00</option>
                        </select>
                      </div>
                      <div class='form-field pt-4'>
                        <label>¿Como supiste de nosotros?</label>
                        <select name='subject' class='form-control'>
                          <option disabled='disabled' selected=''>
                            Selecciona una opción
                          </option>
                          <option>Google</option>
                          <option>Instagram</option>
                          <option>LinkedIn</option>
                          <option>Evento</option>
                          <option>Ejecutivo de ventas</option>
                          <option>Un amigo</option>
                        </select>
                      </div>
                      <div class='col-md-12 col-12 form-field pt-4'>
                        <textarea
                          rows={5}
                          class='form-control'
                          name='note'
                          id='note'
                          placeholder='Cuéntanos un poco sobre tu idea o requerimiento'
                        ></textarea>
                      </div>
                      <p>
                        <small>
                          * Dentro de las próximas 24 horas nos pondremos en
                          contacto contigo según las preferencias indicadas.
                        </small>
                      </p>
                      <button>Agendar Reunión AHora</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='row pt-2'>
                <div className='col-md-6'>
                  <button className='w-100 btn-wsp'>WhatsApp</button>
                </div>
                <div className='col-md-6'>
                  <button className='w-100 btn-call'>LLámanos</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterTwo></FooterTwo>
    </>
  );
};

export default Services;
