import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactHome = () => {
  useEffect(() => {
    const rightItems = document.querySelectorAll(
      ".ch-service-right-wrap .item"
    );
    const leftItems = document.querySelectorAll(
      ".service-image-group .service-image"
    );

    const handleHover = (index) => {
      rightItems.forEach((item, i) => {
        item.classList.remove("active");
        if (i === index) item.classList.add("active");
      });
      leftItems.forEach((item, i) => {
        item.classList.remove("active");
        if (i === index) item.classList.add("active");
      });
    };

    rightItems.forEach((rightItem, index) => {
      rightItem.addEventListener("mouseenter", () => handleHover(index));
    });

    return () => {
      rightItems.forEach((rightItem, index) => {
        rightItem.removeEventListener("mouseenter", () => handleHover(index));
      });
    };
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
    <section className='ch-service-area ptb-120'>
      <section className='contact-pg-section contact-home'>
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-5 col-12'>
              <div className='contact-title'>
                <div className='ch-top-title-s3'>
                  <span>CONTÁCTENOS</span>
                  <h2 className='site-split-text ch-split-in-right'>
                    Elevate your brand with a the
                  </h2>
                  <p>
                    ished fact that a reader will be distrol acted bioiiy desig
                    ished fact that a reader will acted ished fact that a reader
                    will be distrol acted
                  </p>
                </div>
              </div>
            </div>
            <div className='col col-lg-7 col-12'>
              <div className='contact-form-area'>
                <form method='post' onSubmit={SubmitHandler}>
                  <div className='row'>
                    <div className='col-md-6 col-12 form-field'>
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
                    <div className='col-md-6 col-12 form-field'>
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
                    <div className='col-md-6 col-12 form-field'>
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
                    <div className='col-md-6 col-12 form-field'>
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
                    <div className='col-md-6 col-12 form-field'>
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
                    <div className='col-md-6 col-12 form-field'>
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
                    <div className='col-md-6 col-12 form-field'>
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
                    <div className='col-md-6 col-12 form-field'>
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
                    <div className='col-md-12 col-12 form-field'>
                      <textarea
                        className='form-control'
                        name='message'
                        id='note'
                        placeholder='Cuéntanos un poco sobre tu idea o requerimiento'
                        onChange={handleChange}
                        value={formData.message}
                      ></textarea>
                    </div>
                    <div className='col-md-12 col-12'>
                      <div className='submit-area'>
                        <button type='submit' className='ch-btn-style-2'>
                          <span>Agendar Reunión Ahora</span>
                        </button>
                        {loading && (
                          <div id='loader'>
                            <i className='ti-reload'></i>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='clearfix error-handling-messages'>
                    {successMessage && <div id='success'>{successMessage}</div>}
                    {errorMessage && <div id='error'>{errorMessage}</div>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactHome;
