import React, { useEffect, useState } from "react";
import { pageTitle } from "../PageTitle";
import BreadCrumb from "../BreadCrumb";
import HeaderOne from "../Header/HeaderOne";
import FooterTwo from "../Footer/FooterTwo";
import WOW from "wowjs";
import axios from "axios";

import img1 from "../../assets/images/thermometer-01.svg";
import "./ServiceSingle.css";

const Services = () => {
  pageTitle("Servicios");

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
      url: "http://clima-digital-bff-0c8760dd7b54.herokuapp.com/v1/contact",
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
            <div className='col-lg-7 col-12'>
              <div className='serice-details'>
                {/*     <div className='details-img'>
                  <img src={img1} alt='' />
                </div> */}
                <div className='details-text'>
                  <h2>Desarrollo de Apps Android e iOS</h2>
                  <p>
                    Creamos aplicaciones que aprovechan al máximo las
                    características y capacidades de cada plataforma. Nuestras
                    apps están diseñadas para ofrecer un rendimiento óptimo y
                    una experiencia de usuario fluida.
                  </p>
                  <div className='details-items'>
                    <div className='row'>
                      <div className='col-12 card-xl-services'>
                        <h3>
                          <img src={img1} alt='' /> Integración con Sistemas
                          Existentes
                        </h3>
                        <p>
                          Conectamos tus aplicaciones móviles con tus sistemas y
                          plataformas existentes, asegurando una sincronización
                          perfecta y un flujo de información continuo. Esto
                          incluye la integración con bases de datos, CRM, ERP y
                          más.
                        </p>
                        <ul>
                          <li>Sincronización en Tiempo Real</li>
                          <li>Flujo de Trabajo Eficiente</li>
                          <li>Seguridad de Datos</li>
                          <li>Compatibilidad y Escalabilidad</li>
                        </ul>
                      </div>
                      <div className='col-12 card-xl-services'>
                        <h3>
                          <img src={img1} alt='' /> Funcionalidades
                          Personalizadas
                        </h3>
                        <p>
                          Desarrollamos funcionalidades específicas para tus
                          aplicaciones móviles, adaptadas a las necesidades y
                          objetivos de tu negocio. Ya sea que necesites
                          características avanzadas como geolocalización,
                          comercio electrónico, o interacción en tiempo real,
                          tenemos la solución adecuada para ti.
                        </p>
                        <ul>
                          <li>Características Avanzadas</li>
                          <li>Personalización Completa</li>
                          <li>Mejora de la Experiencia del Usuario</li>
                          <li>Monetización Efectiva</li>
                        </ul>
                      </div>
                      <div className='col-12 card-xl-services'>
                        <h3>
                          <img src={img1} alt='' /> Disponibilidad en Tiendas
                          (Google Play y Apple Store)
                        </h3>
                        <p>
                          Facilita a tus clientes la posibilidad de agendar
                          citas y consultas a través de formularios en línea.
                          Implementamos sistemas de agendamiento eficientes y
                          fáciles de usar.
                        </p>
                        <ul>
                          <li>
                            Publicación en Google Play Store y Apple App Store
                          </li>
                          <li>Optimización de Fichas de App</li>
                          <li>Cumplimiento de Normativas</li>
                          <li>Actualizaciones y Mantenimiento</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 offset-lg-1'>
              <div className='service-sidebar'>
                <div className='widget info-widget'>
                  <h3>
                    Optimiza tus Procesos Internos con Nuestras Soluciones
                  </h3>
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
                      <div className='col-md-12 col-12 form-field pt-4'>
                        <textarea
                          rows={5}
                          className='form-control'
                          name='message'
                          id='message'
                          placeholder='Cuéntanos sobre tu meta o desafío'
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
                          "Agendar Reunión"
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
                      Hablemos
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
