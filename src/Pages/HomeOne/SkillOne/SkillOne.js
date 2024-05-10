import React, { useEffect } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import WOW from "wowjs";

const SkillOne = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <section className='ch-skill-area ptb-120'>
      <div className='container'>
        <div className='funfact-area ptb-120 pt-0'>
          <div className='row align-items-center'>
            <div className='col-lg-3 col-md-6 col-12'>
              <div className='info wow fadeInUp' data-wow-duration='1000ms'>
                <p>Premios Obtenidos</p>
                <h3>
                  <CountUp className='odometer' start={0} end={200} />+
                </h3>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12'>
              <div className='info wow fadeInUp' data-wow-duration='1200ms'>
                <p>Proyectos Terminados</p>
                <h3>
                  <CountUp className='odometer' start={0} end={650} />+
                </h3>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12'>
              <div className='info wow fadeInUp' data-wow-duration='1400ms'>
                <p>Clientes Felices</p>
                <h3>
                  <CountUp className='odometer' start={0} end={120} />+
                </h3>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12'>
              <div className='info wow fadeInUp' data-wow-duration='1400ms'>
                <p>Reseñas de Clientes</p>
                <h3>
                  <CountUp className='odometer' start={0} end={210} />+
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className='ch-title-wrap'>
          <div className='row justify-content-center'>
            <div className='col-xl-5 col-lg-8 col-12'>
              <div className='ch-top-title'>
                <span>Otros Servicios</span>
                <h2 className='site-split-text ch-split-in-right'>
                  Inspirados para conseguir buenos resultados
                </h2>
              </div>
            </div>
            <div className='col-xl-7 col-lg-4 col-12'>
              {/*   <div className='ch-top-btn'>
                <Link to='/service' className='ch-btn-style-1 ch-btn-animated'>
                  See More
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div className='skill-wrap'>
          <div className='row align-items-center'>
            <div className='col-lg-4 col-md-6 col-12'>
              <div
                className='skill-card wow fadeInUp'
                data-wow-duration='1000ms'
              >
                <div className='skill-icon'>
                  <i className='icon-wordpress-logo'></i>
                </div>
                <div className='skill-text'>
                  <h3>Personalización UX/UI</h3>
                  <p>
                    Nulla vitae ex nunc.quis purus convallis, fermentum me
                    volutpat, sodales purus. Nunc quis mauris
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              <div
                className='skill-card wow fadeInUp'
                data-wow-duration='1200ms'
              >
                <div className='skill-icon'>
                  <i className='icon-Java-logo'></i>
                </div>
                <div className='skill-text'>
                  <h3>Integraciones de Terceros</h3>
                  <p>
                    Nulla vitae ex nunc.quis purus convallis, fermentum me
                    volutpat, sodales purus. Nunc quis mauris
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              <div
                className='skill-card wow fadeInUp'
                data-wow-duration='1400ms'
              >
                <div className='skill-icon'>
                  <i className='icon-php-logo'></i>
                </div>
                <div className='skill-text'>
                  <h3>Desarrollo Continuo</h3>
                  <p>
                    Nulla vitae ex nunc.quis purus convallis, fermentum me
                    volutpat, sodales purus. Nunc quis mauris
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              <div
                className='skill-card wow fadeInUp'
                data-wow-duration='1000ms'
              >
                <div className='skill-icon'>
                  <i className='icon-Adobe-Illustrator-logo'></i>
                </div>
                <div className='skill-text'>
                  <h3>Documentación Técnica</h3>
                  <p>
                    Nulla vitae ex nunc.quis purus convallis, fermentum me
                    volutpat, sodales purus. Nunc quis mauris
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              <div
                className='skill-card wow fadeInUp'
                data-wow-duration='1200ms'
              >
                <div className='skill-icon'>
                  <i className='icon-Adobe-XD-logo'></i>
                </div>
                <div className='skill-text'>
                  <h3>Asesorías y Formación</h3>
                  <p>
                    Nulla vitae ex nunc.quis purus convallis, fermentum me
                    volutpat, sodales purus. Nunc quis mauris
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              <div
                className='skill-card wow fadeInUp'
                data-wow-duration='1400ms'
              >
                <div className='skill-icon'>
                  <i className='icon-Figma-logo'></i>
                </div>
                <div className='skill-text'>
                  <h3>Soporte y Mantención</h3>
                  <p>
                    Nulla vitae ex nunc.quis purus convallis, fermentum me
                    volutpat, sodales purus. Nunc quis mauris
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillOne;
