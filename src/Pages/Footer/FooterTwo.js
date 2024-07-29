import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-white.svg";

const FooterTwo = () => {
  const handleClick = () => {
    const url = `https://wa.me/56983093727?text=${encodeURIComponent(
      "Hola, estoy interesado en un servicio."
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <footer className="footer-section style-2">
        <div className="upper-footer">
          <div className="container">
            <div className="row">
              <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="widget about-widget">
                  <div className="logo widget-title">
                    <Link to="/">
                      <img src={Logo} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="widget link-widget">
                  <div className="widget-title">
                    <h3>Servicios destacados</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/servicio/sitios-web-profesionales">
                        Sitios Web Profesionales
                      </Link>
                    </li>
                    <li>
                      <Link to="/servicio/tiendas-online">Tiendas Online</Link>
                    </li>
                    <li>
                      <Link to="/servicio/sistemas-gestion">
                        Sistemas de Gestión
                      </Link>
                    </li>
                    <li>
                      <Link to="/servicio/apps-moviles">Apps Móviles</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="widget contact-widget">
                  <div className="widget-title">
                    <h3>Contacto</h3>
                  </div>
                  <div className="contact-ft">
                    <ul>
                      <li onClick={handleClick} style={{ cursor: "pointer" }}>
                        <i className="icon-Group-7042"></i>+569 8309 3727
                      </li>
                      <li>
                        <a
                          href="mailto:contacto@climadigital.cl"
                          style={{ color: "black" }}
                        >
                          <i className="icon-Group-7043"></i>
                          contacto@climadigital.cl
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="widget subscribe">
                  <div className="widget-title">
                    <h3>Síguenos</h3>
                  </div>
                  <div className="widget social-widget p-2">
                    <ul>
                      <li className="footer-2">
                        <a
                          href="https://www.instagram.com/climadigital.cl?igsh=dWY4OTZpZ3lyOGoy"
                          target="__blank"
                        >
                          <i className="ti-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col col-lg-6 col-12">
                <div className="copy-right">
                  <p className="copyright footer-2">
                    {" "}
                    &copy; 2024 <Link to="/">Clima Digital</Link>, Todos los
                    derechos reservados.
                  </p>
                </div>
              </div>
              <div className="col col-lg-6 col-12">
                <ul className="lower-footer-link">
                  <li>
                    <Link to="/login">Acceso Administrador</Link>
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

export default FooterTwo;
