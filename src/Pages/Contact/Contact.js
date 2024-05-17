import React from "react";
import { pageTitle } from "../PageTitle";
import BreadCrumb from "../BreadCrumb";
import HeaderOne from "../Header/HeaderOne";
import FooterTwo from "../Footer/FooterTwo";
import { FaWhatsapp } from "react-icons/fa"

const Contact = () => {
  pageTitle("Contacto");

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <HeaderOne></HeaderOne>
      <BreadCrumb></BreadCrumb>

      <section class='contact-pg-section section-padding'>
        <div class='container'>
          <div class='row'>
            <div class='col col-lg-5 col-12'>
              <div class='contact-title'>
                <div class='ch-top-title-s3'>
                  <span>CONTÁCTENOS</span>
                  <h2 class='site-split-text ch-split-in-right'>
                    Elevate your brand with a the
                  </h2>
                  <p>
                    ished fact that a reader will be distrol acted bioiiy desig
                    ished fact that a reader will acted ished fact that a reader
                    will be distrol acted{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class='col col-lg-7 col-12'>
              <div class='contact-form-area'>
                <form method='post' onSubmit={SubmitHandler}>
                  <div class='row'>
                    <div class='col-md-6 col-12 form-field'>
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
                    <div class='col-md-6 col-12 form-field'>
                      <label>Empresa</label>
                      <input
                        type='email'
                        class='form-control'
                        name='email'
                        id='email'
                        placeholder='Nombre Empresa'
                      />
                    </div>
                    <div class='col-md-6 col-12 form-field'>
                      <label>Teléfono</label>
                      <input
                        type='text'
                        class='form-control'
                        name='phone'
                        id='phone'
                        placeholder='Teléfono de Contacto'
                      />
                    </div>
                    <div class='col-md-6 col-12 form-field'>
                      <label>Email</label>
                      <input
                        type='email'
                        class='form-control'
                        name='email'
                        id='email'
                        placeholder='Email de Contacto'
                      />
                    </div>
                    <div class='col-md-6 col-12 form-field'>
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
                    <div class='col-md-6 col-12 form-field'>
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
                    <div class='col-md-6 col-12 form-field'>
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
                    <div class='col-md-6 col-12 form-field'>
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
                    <div class='col-md-12 col-12 form-field'>
                      <textarea
                        class='form-control'
                        name='note'
                        id='note'
                        placeholder='Cuéntanos un poco sobre tu idea o requerimiento'
                      ></textarea>
                    </div>
                    <div class='col-md-12 col-12'>
                      <div class='submit-area'>
                        <button type='submit' class='ch-btn-style-2'>
                          <span>Agendar Reunión Ahora</span>
                        </button>
                        <div id='loader'>
                          <i class='ti-reload'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='clearfix error-handling-messages'>
                    <div id='success'>¡Gracias! Mensaje Enviado</div>
                    <div id='error'>
                      {" "}
                      Ocurrió un error al enviar tu solicitud. Por favor intenta más tarde.{" "}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class='office-info ptb-120'>
            <div class='row'>
              <div class='col col-xl-4 col-lg-6 col-md-6 col-12'>
                <div class='office-info-item'>
                  <div class='office-info-icon'>
                    <div class='icon'>
                      <FaWhatsapp class="fa-icon"/>
                    </div>
                  </div>
                  <div class='office-info-text'>
                    <h2>WhatsApp</h2>
                    <p>Hablemos Ahora</p>
                  </div>
                </div>
              </div>
              <div class='col col-xl-4 col-lg-6 col-md-6 col-12'>
                <div class='office-info-item'>
                  <div class='office-info-icon'>
                    <div class='icon'>
                      <i class='icon-Group-7043'></i>
                    </div>
                  </div>
                  <div class='office-info-text'>
                    <h2>E-mail</h2>
                    <p>contacto@climadigital.cl</p>
                  </div>
                </div>
              </div>
              <div class='col col-xl-4 col-lg-6 col-md-6 col-12'>
                <div class='office-info-item'>
                  <div class='office-info-icon'>
                    <div class='icon'>
                      <i class='icon-Group-7042'></i>
                    </div>
                  </div>
                  <div class='office-info-text'>
                    <h2>LLámanos</h2>
                    <p>+569 7469 0241</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterTwo></FooterTwo>
    </>
  );
};

export default Contact;
