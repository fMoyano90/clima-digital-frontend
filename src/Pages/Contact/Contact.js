import React, { useState } from "react";
import { pageTitle } from "../PageTitle";
import BreadCrumb from "../BreadCrumb";
import HeaderOne from "../Header/HeaderOne";
import FooterTwo from "../Footer/FooterTwo";
import { FaWhatsapp } from "react-icons/fa";
import { submitContactForm } from "../../services/contact.service";

const Contact = () => {
  pageTitle("Contacto");

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

      <section className='contact-pg-section section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-5 col-12'>
              <div className='contact-title'>
                <div className='ch-top-title-s3'>
                  <span className='testimonial'>CONTÁCTENOS</span>
                  <h2 className='site-split-text ch-split-in-right testimonial'>
                    Impulsa tu negocio con soluciones tecnológicas innovadoras
                  </h2>
                  <p>
                    En nuestra agencia de desarrollo de software, nos
                    especializamos en convertir tus ideas en soluciones
                    tecnológicas efectivas. Desde tiendas en línea y sistemas de
                    gestión hasta aplicaciones móviles y soluciones a medida,
                    contamos con la experiencia para potenciar tu negocio.
                    Completa el formulario y comencemos a trabajar juntos en tu
                    proyecto.
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
                    <div className='col-md-12 col-12 form-field'>
                      <textarea
                        className='form-control'
                        name='message'
                        id='note'
                        placeholder='Cuéntanos sobre tu meta o desafío'
                        onChange={handleChange}
                        value={formData.message}
                      ></textarea>
                    </div>
                    <div className='col-md-12 col-12'>
                      <div className='submit-area'>
                        <button type='submit' className='ch-btn-style-2'>
                          <span>Agendar Reunión</span>
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
          <div className='office-info ptb-120'>
            <div className='row'>
              <div className='col col-xl-4 col-lg-4 col-md-6 col-12'>
                <div className='office-info-item' style={{ cursor: "pointer" }}>
                  <a
                    href='https://wa.me/56983093727'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='office-info-icon'>
                      <div className='icon'>
                        <FaWhatsapp className='fa-icon' style={{ display:'inline' }} />
                      </div>
                    </div>
                    <div className='office-info-text'>
                      <h2>WhatsApp</h2>
                      <p>Hablemos Ahora</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col col-xl-4 col-lg-4 col-md-6 col-12'>
                <div className='office-info-item' style={{ cursor: "pointer" }}>
                  <a href='mailto:contacto@climadigital.cl'>
                    <div className='office-info-icon'>
                      <div className='icon'>
                        <i className='icon-Group-7043'></i>
                      </div>
                    </div>
                    <div className='office-info-text'>
                      <h2>E-mail</h2>
                      <p>contacto@climadigital.cl</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col col-xl-4 col-lg-4 col-md-6 col-12'>
                <div className='office-info-item' style={{ cursor: "pointer" }}>
                  <a href='tel:+56983093727'>
                    <div className='office-info-icon'>
                      <div className='icon'>
                        <i className='icon-Group-7042'></i>
                      </div>
                    </div>
                    <div className='office-info-text'>
                      <h2>Hablemos</h2>
                      <p>+569 8309 3727</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterTwo />
    </>
  );
};

export default Contact;
