import React, { useEffect } from "react";
import { pageTitle } from "../PageTitle";
import BreadCrumb from "../BreadCrumb";
import HeaderOne from "../Header/HeaderOne";
import FooterTwo from "../Footer/FooterTwo";
import { Link } from "react-router-dom";
import WOW from "wowjs";

const Services = () => {
  pageTitle("Services");

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <HeaderOne></HeaderOne>
      <BreadCrumb></BreadCrumb>

      <div className='service-page'>
        <section className='service-area ptb-120'>
          <div className='container'>
            <div className='service-wrap'>
              <div className='row'>
                <div className='col col-lg-4 col-md-6 col-12'>
                  <div
                    className='service-item wow fadeInUp'
                    data-wow-duration='1000ms'
                  >
                    <div className='service-text'>
                      <div className='icon'>
                        <i className='icon-design'></i>
                      </div>
                      <h3>
                        <Link to='/service-single'>Personal Chef</Link>
                      </h3>
                      <p>
                        Purus velit aenean quis habitant eros the a bibendum
                        aenean quis habit aeros who ath bibendum
                      </p>
                      <Link to='/service-single' className='read-more'>
                        Leer Más
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col col-lg-4 col-md-6 col-12'>
                  <div
                    className='service-item wow fadeInUp active'
                    data-wow-duration='1200ms'
                  >
                    <div className='service-text'>
                      <div className='icon'>
                        <i className='icon-creative'></i>
                      </div>
                      <h3>
                        <Link to='/service-single'>Web Development</Link>
                      </h3>
                      <p>
                        Purus velit aenean quis habitant eros the a bibendum
                        aenean quis habit aeros who ath bibendum
                      </p>
                      <Link to='/service-single' className='read-more'>
                        Leer Más
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col col-lg-4 col-md-6 col-12'>
                  <div
                    className='service-item wow fadeInUp'
                    data-wow-duration='1400ms'
                  >
                    <div className='service-text'>
                      <div className='icon'>
                        <i className='icon-network'></i>
                      </div>
                      <h3>
                        <Link to='/service-single'>Digital Marketing</Link>
                      </h3>
                      <p>
                        Purus velit aenean quis habitant eros the a bibendum
                        aenean quis habit aeros who ath bibendum
                      </p>
                      <Link to='/service-single' className='read-more'>
                        Leer Más
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col col-lg-4 col-md-6 col-12'>
                  <div
                    className='service-item wow fadeInUp'
                    data-wow-duration='1600ms'
                  >
                    <div className='service-text'>
                      <div className='icon'>
                        <i className='icon-angle'></i>
                      </div>
                      <h3>
                        <Link to='/service-single'>E-commerce Solutions</Link>
                      </h3>
                      <p>
                        Purus velit aenean quis habitant eros the a bibendum
                        aenean quis habit aeros who ath bibendum
                      </p>
                      <Link to='/service-single' className='read-more'>
                        Leer Más
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col col-lg-4 col-md-6 col-12'>
                  <div
                    className='service-item wow fadeInUp active'
                    data-wow-duration='1800ms'
                  >
                    <div className='service-text'>
                      <div className='icon'>
                        <i className='icon-vec2'></i>
                      </div>
                      <h3>
                        <Link to='/service-single'>
                          {" "}
                          SEO and Digital Advertising
                        </Link>
                      </h3>
                      <p>
                        Purus velit aenean quis habitant eros the a bibendum
                        aenean quis habit aeros who ath bibendum
                      </p>
                      <Link to='/service-single' className='read-more'>
                        Leer Más
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col col-lg-4 col-md-6 col-12'>
                  <div
                    className='service-item wow fadeInUp'
                    data-wow-duration='2000ms'
                  >
                    <div className='service-text'>
                      <div className='icon'>
                        <i className='icon-angle4'></i>
                      </div>
                      <h3>
                        <Link to='/service-single'>
                          Web Development Wizardry
                        </Link>
                      </h3>
                      <p>
                        Purus velit aenean quis habitant eros the a bibendum
                        aenean quis habit aeros who ath bibendum
                      </p>
                      <Link to='/service-single' className='read-more'>
                        Leer Más
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col col-lg-4 col-md-6 col-12'>
                  <div
                    className='service-item wow fadeInUp'
                    data-wow-duration='1600ms'
                  >
                    <div className='service-text'>
                      <div className='icon'>
                        <i className='icon-angle'></i>
                      </div>
                      <h3>
                        <Link to='/service-single'>E-commerce Solutions</Link>
                      </h3>
                      <p>
                        Purus velit aenean quis habitant eros the a bibendum
                        aenean quis habit aeros who ath bibendum
                      </p>
                      <Link to='/service-single' className='read-more'>
                        Leer Más
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col col-lg-4 col-md-6 col-12'>
                  <div
                    className='service-item wow fadeInUp active'
                    data-wow-duration='1800ms'
                  >
                    <div className='service-text'>
                      <div className='icon'>
                        <i className='icon-vec2'></i>
                      </div>
                      <h3>
                        <Link to='/service-single'>
                          {" "}
                          SEO and Digital Advertising
                        </Link>
                      </h3>
                      <p>
                        Purus velit aenean quis habitant eros the a bibendum
                        aenean quis habit aeros who ath bibendum
                      </p>
                      <Link to='/service-single' className='read-more'>
                        Leer Más
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col col-lg-4 col-md-6 col-12'>
                  <div
                    className='service-item wow fadeInUp'
                    data-wow-duration='2000ms'
                  >
                    <div className='service-text'>
                      <div className='icon'>
                        <i className='icon-angle4'></i>
                      </div>
                      <h3>
                        <Link to='/service-single'>
                          Web Development Wizardry
                        </Link>
                      </h3>
                      <p>
                        Purus velit aenean quis habitant eros the a bibendum
                        aenean quis habit aeros who ath bibendum
                      </p>
                      <Link to='/service-single' className='read-more'>
                        Leer Más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterTwo></FooterTwo>
    </>
  );
};

export default Services;
