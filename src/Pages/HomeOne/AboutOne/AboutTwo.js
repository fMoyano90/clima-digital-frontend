import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/cafe-398x453.png";
import img2 from "../../../assets/images/clima-255x174.png";
import img3 from "../../../assets/images/about/shape-2.png";
import img4 from "../../../assets/images/about/shape-1.png";
import img5 from "../../../assets/images/work-187x196.jpg";
import WOW from "wowjs";

const AboutTwo = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <section className='about-area-s2 ptb-120'>
      <div className='container'>
        <div className='about-wrap'>
          <div className='row align-items-center'>
            <div className='col col-lg-6 col-md-12 col-12'>
              <div
                className='about-left-item  wow fadeInLeftSlow'
                data-wow-duration='1400ms'
              >
                <div className='about-left-img'>
                  <img src={img1} alt='' />
                  <div className='left-inner-img'>
                    <img src={img2} alt='' />
                    <div className='left-top-right-shape'>
                      <img src={img3} alt='' />
                    </div>
                  </div>
                  <div className='left-top-shape'>
                    <img src={img4} alt='' />
                  </div>
                  <div
                    className='exprience-wrap wow fadeInUp'
                    data-wow-duration='1600ms'
                  >
                    <div className='exprience-inner'>
                      <p>
                        <span>Soluciones de calidad garantizada</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='about-right-img'>
                  <div
                    className='left-img wow fadeInRightSlow'
                    data-wow-duration='1800ms'
                  >
                    <img src={img5} alt='' />
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
                  <span>Resultados Tangibles y Sostenibles</span>
                  <h2 className='site-split-text ch-split-in-right'>
                    Tu <small>éxito</small> es nuestra prioridad
                  </h2>
                  <p>
                    Nos comprometemos a entregar resultados que no solo cumplen,
                    sino que superan las expectativas de nuestros clientes.
                    Nuestra trayectoria de éxito y las relaciones a largo plazo
                    con nuestros clientes son testimonio de nuestra dedicación y
                    profesionalismo.
                  </p>
                  <Link to='/contacto' className='ch-btn-style-3 ch-btn-animated'>
                    Hablemos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
