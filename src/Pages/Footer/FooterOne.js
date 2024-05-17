import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";

const FooterOne = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    const url = `https://wa.me/56974690241?text=${encodeURIComponent(
      "Hola, estoy interesado en un servicio."
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <footer className='footer-section'>
        <div className='upper-footer'>
          <div className='container'>
            <div className='row'>
              <div className='col col-lg-3 col-md-6 col-sm-12 col-12'>
                <div className='widget about-widget'>
                  <div className='logo widget-title mb-2'>
                    <Link to='/'>
                      <img src={Logo} alt='' />
                    </Link>
                  </div>
                  <div className='widget social-widget p-2'>
                    <ul>
                      <li>
                        <Link to='/'>
                          <i className='ti-linkedin'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='/'>
                          <i className='ti-instagram'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col col-xl-3 col-lg-2 col-md-6 col-sm-12 col-12'>
                <div className='widget link-widget'>
                  <div className='widget-title'>
                    <h3>Nuestros servicios</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to='/'>Tiendas Online</Link>
                    </li>
                    <li>
                      <Link to='/'>Desarrollo Web</Link>
                    </li>
                    <li>
                      <Link to='/'>Diseño UX/UI</Link>
                    </li>
                    <li>
                      <Link to='/'>Marketing Digital</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col col-lg-3 col-md-6 col-sm-12 col-12'>
                <div className='widget contact-widget'>
                  <div className='widget-title'>
                    <h3>Contacto</h3>
                  </div>
                  <div className='contact-ft'>
                    <ul>
                      <li onClick={handleClick}>
                        <i className='icon-Group-7042'></i>+569 7469 0241
                      </li>
                      <li>
                        <i className='icon-Group-7043'></i>
                        contacto@climadigital.cl
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className='col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'>
                <div className='widget subscribe'>
                  <div className='widget-title'>
                    <h3>Suscribete a nuestro blog</h3>
                  </div>
                  <form
                    action='contact'
                    method='post'
                    className='subscribe-form'
                    onSubmit={handleSubmit}
                  >
                    <div className='form-field'>
                      <input
                        type='email'
                        placeholder='Escribe tú e-mail'
                        id='email'
                        required
                      />
                      <button type='submit'>
                        <i className='icon-flyer'></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lower-footer'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col col-lg-6 col-12'>
                <div className='copy-right'>
                  <p className='copyright'>
                    {" "}
                    &copy; 2024 <Link to='/'>Clima Digital</Link>, Todos los
                    derechos reservados.
                  </p>
                </div>
              </div>
              <div className='col col-lg-6 col-12'>
                <ul className='lower-footer-link'>
                  <li>
                    <Link to='/login'>Acceso Administrador</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
