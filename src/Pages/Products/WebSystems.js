import React, { useEffect, useState } from "react";
import { pageTitle } from "../PageTitle";
import BreadCrumb from "../BreadCrumb";
import HeaderOne from "../Header/HeaderOne";
import FooterTwo from "../Footer/FooterTwo";
import WOW from "wowjs";
import axios from "axios";

import img1 from "../../assets/images/thermometer-01.svg";
import "./ProductSingle.css";

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
      url: "https://clima-digital-bff-0c8760dd7b54.herokuapp.com/v1/contact",
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
                 
                    adaptarse a tus objetivos empresariales.
                </div> */}
                <div className='details-text'>
                  <h2>Optimiza tus Procesos con Nuestras Soluciones</h2>
                  <p>
                    En Clima Digital, desarrollamos sistemas de gestión
                    personalizados que facilitan la administración de tu
                    negocio, mejoran la eficiencia operativa y potencian el
                    crecimiento. Entendemos que cada empresa tiene necesidades
                    únicas, por lo que nuestras soluciones están diseñadas a
                    medida para satisfacer tus requisitos específicos y
                  </p>
                  <div className='details-items'>
                    <div className='row'>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Inventario</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Relaciones con Clientes (CRM)</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Recursos Humanos</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Finanzas y Contabilidad</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Producto y Manufactura</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Ventas</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Gestión de Servicios</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Gestión Documental</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Transporte y Logística</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Calidad</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Activos</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Salud y Seguridad en el Trabajo</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Análisis y Reportes</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Contenido</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Cadena de Suministros</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Plataformas de Aprendizaje</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Eventos</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Automatización de Marketing</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Atención al Cliente</h3>
                        </div>
                      </div>
                      <div className='col-xl-4  col-md-6 col-sm-12'>
                        <div className='card-m-services'>
                          <img src={img1} alt='' />
                          <h3>Facturación y Pagos</h3>
                        </div>
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
