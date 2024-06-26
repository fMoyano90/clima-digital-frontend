import React, { useEffect } from "react";
import CountUp from "react-countup";
import BannerBg from "../../../assets/images/about/arrow-shape.png";
import AboutUs from "../../../assets/images/about/about-1.jpg";
import img2 from "../../../assets/images/about/about-2.jpg";
import WOW from "wowjs";

const About = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <section className='about-area ptb-120'>
      <div className='container'>
        <div className='about-wrap'>
          <div className='row'>
            <div className='col col-lg-6 col-md-12 col-12'>
              <div
                className='about-left-item wow fadeInLeftSlow'
                data-wow-duration='1400ms'
              >
                <div className='about-left-top'>
                  <div
                    className='left-arrow wow fadeInRightSlow'
                    data-wow-duration='1800ms'
                  >
                    <img src={BannerBg} alt='' />
                  </div>
                  <div className='right-img'>
                    <img src={AboutUs} alt='' />
                  </div>
                  <div className='icon'>
                    <i className='icon-Global-connection---Free-networking-icons-2-1'></i>
                  </div>
                </div>
                <div className='about-left-bottom'>
                  <div
                    className='left-img wow fadeInLeftSlow'
                    data-wow-duration='1600ms'
                  >
                    <img src={img2} alt='' />
                  </div>
                  <div className='right-text'>
                    <i className='icon-medal'></i>
                    <div className='experience-text-right'>
                      <h3>
                        <CountUp start={0} end={250} />
                        <span>+</span>
                      </h3>
                      <span>Proyectos Completados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col col-lg-6 col-md-12 col-12'>
              <div
                className='about-right-item wow fadeInRightSlow'
                data-wow-duration='1400ms'
              >
                <div className='about-right-text'>
                  <span>SOBRE NOSOTROS</span>
                  <h2 className='site-split-text ch-split-in-right'>
                    Innovando juntos,
                    <br /> creando el mañana
                  </h2>
                  <p>
                    Somos una empresa apasionada por empoderar a empresas y
                    emprendedores con soluciones digitales personalizadas.
                    Inyectamos creatividad e ingenio en cada proyecto para
                    impulsar el crecimiento y éxito de nuestros clientes en el
                    cambiante panorama digital.
                  </p>
                  <div className='about-features-wrap'>
                    <div className='row'>
                      <div className='col-lg-6 col-sm-6 col-12'>
                        <div
                          className='about-features-item wow fadeInUp'
                          data-wow-duration='1600ms'
                        >
                          <i className='icon-sicon4'></i>
                          <h4>Soluciones Personalizadas</h4>
                        </div>
                      </div>
                      <div className='col-lg-6 col-sm-6 col-12'>
                        <div
                          className='about-features-item wow fadeInUp'
                          data-wow-duration='1800ms'
                        >
                          <i className='icon-sicon6'></i>
                          <h4>Diseños innovadores</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
