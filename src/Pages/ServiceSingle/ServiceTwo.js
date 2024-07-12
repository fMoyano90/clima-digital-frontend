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
                  <h2>Gestión Eficiente y Ventas Seguras</h2>
                  <p>
                    En Clima Digital, nos especializamos en la creación de
                    tiendas online robustas y seguras que facilitan la gestión
                    de productos y aumentan tus ventas. Sabemos que cada negocio
                    es único, por lo que ofrecemos soluciones personalizadas
                    adaptadas a tus necesidades específicas. Nuestra experiencia
                    en comercio electrónico nos permite proporcionar plataformas
                    que no solo son visualmente atractivas, sino también
                    altamente funcionales y optimizadas para el rendimiento.
                  </p>
                  <div className='details-items'>
                    <div className='row'>
                      <div className='col-12 card-xl-services'>
                        <h3>
                          <img src={img1} alt='' /> E-Commerce
                        </h3>
                        <p>
                          Diseñamos y desarrollamos tiendas online
                          personalizadas y atractivas que reflejan la identidad
                          de tu marca y proporcionan una experiencia de compra
                          excepcional para tus clientes.
                        </p>
                        <ul>
                          <li>Diseño Atractivo y Responsivo</li>
                          <li>Interfaz Intuitiva</li>
                          <li>Gestión de Productos y Stock</li>
                          <li>Integración de Pagos Seguros</li>
                        </ul>
                      </div>
                      <div className='col-12 card-xl-services'>
                        <h3>
                          <img src={img1} alt='' /> Gestión de Reservas
                        </h3>
                        <p>
                          Facilita a tus clientes la posibilidad de agendar
                          citas y consultas a través de sistemas de reservas en
                          línea. Implementamos soluciones de gestión de reservas
                          eficientes y fáciles de usar.
                        </p>
                        <ul>
                          <li>Sistemas de Reservas Personalizados</li>
                          <li>Disponibilidad en Tiempo Real</li>
                          <li>Notificaciones y Recordatorios</li>
                          <li>Integración con Calendarios</li>
                        </ul>
                      </div>
                      <div className='col-12 card-xl-services'>
                        <h3>
                          <img src={img1} alt='' /> Sistemas de Suscripción
                        </h3>
                        <p>
                          Optimiza tus procesos empresariales con sistemas de
                          suscripción que facilitan la gestión de clientes y
                          servicios recurrentes. Proporcionamos soluciones
                          integrales para administrar suscripciones de manera
                          eficiente.
                        </p>
                        <ul>
                          <li>Gestión de Suscriptores</li>
                          <li>Facturación Automatizada</li>
                          <li>Notificaciones y Recordatorios</li>
                          <li>Escalabilidad</li>
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
