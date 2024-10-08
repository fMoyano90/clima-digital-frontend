import React, { useEffect, useState } from "react";
import { pageTitle } from "../PageTitle";
import BreadCrumb from "../BreadCrumb";
import HeaderOne from "../Header/HeaderOne";
import FooterTwo from "../Footer/FooterTwo";
import WOW from "wowjs";
import { submitContactForm } from "../../services/contact.service";

import img1 from "../../assets/images/thermometer-01.svg";
import "./ProductSingle.css";

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

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const responseData = await submitContactForm(formData);
      console.log(JSON.stringify(responseData));
      setSuccessMessage('¡Gracias! Mensaje Enviado');
      setErrorMessage('');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        interestService: '',
        message: '',
        contactPreference: '',
        preferredContactTime: '',
        referralSource: '',
        contactStatus: 'NEW',
        internalNotes: '',
      });
    } catch (error) {
      console.error(error);
      setErrorMessage(
        'Ocurrió un error al enviar tu solicitud. Por favor intenta más tarde.'
      );
      setSuccessMessage('');
    } finally {
      setLoading(false);
    }
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
                  <h2>Diseño y desarrollo de Sitios Web</h2>
                  <p>
                    En Clima Digital, ofrecemos soluciones integrales de diseño
                    y desarrollo de sitios web. Nos enfocamos en crear sitios
                    web personalizados, optimizados y responsivos que reflejen
                    la identidad de tu marca y proporcionen una experiencia de
                    usuario excepcional.
                  </p>
                  <div className='details-items'>
                    <div className='row'>
                      <div className='col-12 card-xl-services'>
                        <h3>
                          <img src={img1} alt='' /> Presencia Online
                        </h3>
                        <p>
                          Asegura que tu negocio esté visible y accesible.
                          Diseñamos y desarrollamos sitios web completos que
                          representan tu marca de manera efectiva y profesional.
                        </p>
                        <ul>
                          <li>Visibilidad Global</li>
                          <li>Diseño Responsivo</li>
                          <li>Carga Rápida</li>
                          <li>Seguridad</li>
                        </ul>
                      </div>
                      <div className='col-12 card-xl-services'>
                        <h3>
                          <img src={img1} alt='' /> Blogs
                        </h3>
                        <p>
                          Crea y administra un blog para compartir contenido
                          valioso con tu audiencia. Diseñamos plataformas de
                          blogs que son fáciles de usar y atractivas para tus
                          lectores.
                        </p>
                        <ul>
                          <li>Fácil Publicación</li>
                          <li>Aumento del Tráfico</li>
                          <li>Compromiso del Usuario</li>
                          <li>Compartibilidad</li>
                        </ul>
                      </div>
                      <div className='col-12 card-xl-services'>
                        <h3>
                          <img src={img1} alt='' /> Agendamientos por
                          formularios
                        </h3>
                        <p>
                          Facilita a tus clientes la posibilidad de agendar
                          citas y consultas a través de formularios en línea.
                          Implementamos sistemas de agendamiento eficientes y
                          fáciles de usar.
                        </p>
                        <ul>
                          <li>Gestión Eficiente</li>
                          <li>Disponibilidad 24/7</li>
                          <li>Notificaciones Automáticas</li>
                          <li>Integración con Calendarios</li>
                          <li>Análisis y Reportes</li>
                        </ul>
                      </div>
                      <div className='col-12 card-xl-services'>
                        <h3>
                          <img src={img1} alt='' /> Pagos por transferencia
                        </h3>
                        <p>
                          Integra sistemas de pago por transferencias bancarias
                          directamente en tu sitio web. Proporcionamos
                          soluciones seguras y confiables para gestionar las
                          transacciones de tus clientes.
                        </p>
                        <ul>
                          <li>Seguridad</li>
                          <li>Conveniencia</li>
                          <li>Registro de Pagos</li>
                          <li>Automatización</li>
                        </ul>
                      </div>
                      <div className='col-12 card-xl-services'>
                        <h3>
                          <img src={img1} alt='' /> Landing Pages
                        </h3>
                        <p>
                          Crea landing pages efectivas para campañas
                          específicas. Diseñamos páginas de aterrizaje
                          optimizadas para convertir visitantes en clientes.
                        </p>
                        <ul>
                          <li>Altas Conversiones</li>
                          <li>Personalización</li>
                          <li>Análisis y Reportes</li>
                          <li>Carga Rápida</li>
                          <li>Integración con CRM y Email Marketing</li>
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
                    href='https://wa.me/56983093727'
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
                  <a href='tel:+56983093727'>
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
