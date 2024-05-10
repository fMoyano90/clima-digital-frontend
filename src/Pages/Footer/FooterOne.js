import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";

const FooterOne = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
                  <div className='widget social-widget p-0'>
                    <ul>
                      <li>
                        <Link to='/'>
                          <i className='ti-facebook'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='/'>
                          <i className='ti-instagram'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='/'>
                          <i className='ti-twitter-alt'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='/'>
                          <i className='ti-pinterest'></i>
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
                      <li>
                        <i className='icon-Group-7042'></i>+569 9555 0129
                      </li>
                      <li>
                        <i className='icon-Group-7043'></i>
                        contacto@innovatec.com
                      </li>
                      <li>
                        <i className='icon-Group-7044'></i>Yerbas Buenas #153,
                        Los Andes
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
                    &copy; 2024 <Link to='/'>InnovaTec</Link>, Todos los
                    derechos reservados.
                  </p>
                </div>
              </div>
              <div className='col col-lg-6 col-12'>
                <ul className='lower-footer-link'>
                  <li>
                    <Link to='/'>Términos y condiciones</Link>
                  </li>
                  <li>
                    <Link to='/'>Política de Privacidad</Link>
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
