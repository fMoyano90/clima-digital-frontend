import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { Home, Portfolio, Services, News } from "./Menu";
import DropDown from "./DropDown";
import Logo from "../../assets/images/logo2.png";
import wsp from "../../assets/images/whatsapp.svg";

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const handleClick = () => {
    const url = `https://wa.me/56974690241?text=${encodeURIComponent(
      "Hola, estoy interesado en un servicio."
    )}`;
    window.open(url, "_blank");
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cp-header-area cp-header-style-1 ${
          variant ? variant : ""
        } header__sticky ${isSticky ? "fixed-header" : ""}`}
      >
        <div id='cp-header-sticky' className='menu-area'>
          <div className='container'>
            <div className='second-menu'>
              <div className='row align-items-center'>
                <div className='col-xl-2 col-lg-2 col-md-5 col-5'>
                  <div className='logo pt-1'>
                    <Link to='/'>
                      <img src={Logo} alt='' title='' />
                    </Link>
                  </div>
                </div>
                <div className='col-xl-7 col-lg-7 col-md-1 col-1 text-right text-xl-right'>
                  <div className='main-menu'>
                    <nav id='mobile-menuss'>
                      <ul className='nav'>
                        <li className='has-submenu'>
                          <NavLink to='/'>Inicio</NavLink>
                        </li>
                        <li>
                          <NavLink to='/nosotros'>Nosotros</NavLink>
                        </li>
                        <li className='has-submenu'>
                          <NavLink>Servicios</NavLink>
                          <DropDown>
                            <ul className='sub-menu'>
                              <NavLink to='/servicio/sitios-web-profesionales'>
                                Sitios Web Profesionales
                              </NavLink>
                              <NavLink to='/servicio/tiendas-online'>
                                Tiendas Online
                              </NavLink>
                              <NavLink to='/servicio/sistemas-gestion'>
                                Sistemas de Gestión
                              </NavLink>
                              <NavLink to='/servicio/apps-moviles'>
                                Apps Móviles
                              </NavLink>
                            </ul>
                          </DropDown>
                        </li>
                        {/* <li className='has-submenu'>
                          <NavLink to='/blog'>Blog</NavLink>
                        </li> */}
                        <li>
                          <NavLink to='/contacto'>Contacto</NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-3 col-3 text-left'>
                  <div className='cp-header-area-right'>
                    <Link onClick={handleClick} className='call-btn'>
                      <div class='whatsapp-icon'>
                        <svg
                          version='1.1'
                          xmlns='http://www.w3.org/2000/svg'
                          width='25'
                          height='25'
                          viewBox='0 0 32 32'
                          fill='currentColor'
                        >
                          <path d='M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z'></path>
                        </svg>
                      </div>
                      WhatsApp
                    </Link>
                  </div>
                </div>
                <div className='col-3'>
                  <div className='main-menu'>
                    <div
                      className={
                        mobileToggle ? "mobile-menu-visible" : "mobile-menus"
                      }
                    >
                      <div
                        className='mobile-nav-toggler'
                        onClick={() => setMobileToggle(!mobileToggle)}
                      >
                        <i className='icon-bar'></i>
                        <i className='icon-bar'></i>
                        <i className='icon-bar'></i>
                      </div>
                      <div className='mobile-menu'>
                        <div className='menu-backdrop'></div>
                        <div
                          className='close-btn'
                          onClick={() => setMobileToggle(!mobileToggle)}
                        >
                          <i className='icon-fa-times'>X</i>
                        </div>

                        <nav className='menu-box'>
                          <div className='nav-logo'>
                            <Link to='/'>
                              <img src={Logo} alt='' title='' />
                            </Link>
                          </div>
                          <div className='menu-outer'>
                            <div
                              className='collapse navbar-collapse show clearfix'
                              id='navbarSupportedContent'
                            >
                              <ul className='navigation clearfix home-menu'>
                                <li>
                                  <NavLink to='/'>Inicio</NavLink>
                                </li>
                                <li>
                                  <NavLink to='/about'>Nosotros</NavLink>
                                </li>
                                <li>
                                  <NavLink to='/services'>Servicios</NavLink>
                                </li>
                                {/*                         <li className='dropdown'>
                                  <NavLink to='/portfolio'>Portfolio</NavLink>
                                  <DropDown>
                                    <ul>
                                      <Portfolio />
                                    </ul>
                                  </DropDown>
                                </li> */}
                                <li>
                                  <NavLink to='/blog'>Blog</NavLink>
                                </li>
                                <li>
                                  <NavLink to='/contact'>Contacto</NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='contact-info'>
                            <h4>Contact Info</h4>
                            <ul>
                              <li>Chicago 12, Melborne City, USA</li>
                              <li>
                                <Link to='tel:+8801682648101'>
                                  +88 01682648101
                                </Link>
                              </li>
                              <li>
                                <Link to='mailto:info@example.com'>
                                  info@example.com
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
