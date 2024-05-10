import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, Portfolio, Services, News } from "./Menu";
import DropDown from "./DropDown";
import Logo from "../../assets/images/logo.png";

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
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
        className={`cp-header-area cp-header-style-2 ${
          variant ? variant : ""
        } header__sticky ${isSticky ? "fixed-header" : ""}`}
      >
        <div id='cp-header-sticky' className='menu-area'>
          <div className='container'>
            <div className='second-menu'>
              <div className='row align-items-center'>
                <div className='col-xl-2 col-lg-2 col-md-5 col-4'>
                  <div className='logo'>
                    <Link to='/'>
                      <img src={Logo} alt='logo' height='100' />
                    </Link>
                  </div>
                </div>
                <div className='col-xl-7 col-lg-7 col-md-1 col-1 text-right text-xl-right'>
                  <div className='main-menu'>
                    <nav id='mobile-menuss'>
                      <ul className='nav'>
                        <li className='has-submenu'>
                          <NavLink to='/'>Inicio</NavLink>
                          <DropDown>
                            <ul className='sub-menu'>
                              <Home />
                            </ul>
                          </DropDown>
                        </li>
                        <li>
                          <NavLink to='/about'>About</NavLink>
                        </li>
                        <li className='has-submenu'>
                          <NavLink to='/services'>Services</NavLink>
                          <DropDown>
                            <ul className='sub-menu'>
                              <Services />
                            </ul>
                          </DropDown>
                        </li>
                        <li className='has-submenu'>
                          <NavLink to='/portfolio'>Portfolio</NavLink>
                          <DropDown>
                            <ul className='sub-menu'>
                              <Portfolio />
                            </ul>
                          </DropDown>
                        </li>
                        <li className='has-submenu'>
                          <NavLink to='/blog'>Blog</NavLink>
                          <DropDown>
                            <ul className='sub-menu'>
                              <News />
                            </ul>
                          </DropDown>
                        </li>
                        <li>
                          <NavLink to='/contact'>Contact</NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 col-5 text-left'>
                  <div className='cp-header-area-right'>
                    <Link to='/about' className='ch-btn-style-2'>
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
                <div className='col-2'>
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
                                <li className='dropdown'>
                                  <NavLink to='/'>Home</NavLink>
                                  <DropDown>
                                    <ul>
                                      <Home />
                                    </ul>
                                  </DropDown>
                                </li>
                                <li>
                                  <NavLink to='/about'>About</NavLink>
                                </li>
                                <li className='dropdown'>
                                  <NavLink to='/services'>Services</NavLink>
                                  <DropDown>
                                    <ul>
                                      <Services />
                                    </ul>
                                  </DropDown>
                                </li>
                                <li className='dropdown'>
                                  <NavLink to='/portfolio'>Portfolio</NavLink>
                                  <DropDown>
                                    <ul>
                                      <Portfolio />
                                    </ul>
                                  </DropDown>
                                </li>
                                <li className='dropdown'>
                                  <NavLink to='/blog'>Blog</NavLink>
                                  <DropDown>
                                    <ul>
                                      <News />
                                    </ul>
                                  </DropDown>
                                </li>
                                <li>
                                  <NavLink to='/contact'>Contact</NavLink>
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
