import React, { useEffect } from "react";
import WOW from "wowjs";
import img from "../../../assets/images/adaptation.svg";
import img1 from "../../../assets/images/scalability.svg";
import img2 from "../../../assets/images/transparency.svg";
import img3 from "../../../assets/images/scrum.svg";
import img4 from "../../../assets/images/ai.svg";
import img5 from "../../../assets/images/support.svg";

const SkillOne = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <section className='ch-skill-area ptb-120'>
      <div className='container'>
        <div className='ch-title-wrap'>
          <div className='row justify-content-center'>
            <div className='col-xl-5 col-lg-8 col-12'>
              <div className='ch-top-title'>
                <span className="why">¿Por qué elegirnos?</span>
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
            <div className='col-xl-4 col-lg-6 col-12'>
              <div
                className='skill-card wow fadeInUp'
                data-wow-duration='1000ms'
              >
                <div className='skill-icon'>
                  <img src={img} alt='' />
                </div>
                <div className='skill-text'>
                  <h3>Adaptabilidad Personalizada</h3>
                  <p>
                    Nos ajustamos a las necesidades específicas de cada cliente,
                    ofreciendo soluciones a medida que evolucionan con tu
                    negocio.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-12'>
              <div
                className='skill-card wow fadeInUp'
                data-wow-duration='1200ms'
              >
                <div className='skill-icon'>
                  <img src={img1} alt='' />
                </div>
                <div className='skill-text'>
                  <h3>Escalabilidad Garantizada</h3>
                  <p>
                    Nuestras soluciones están diseñadas para crecer contigo,
                    permitiendo expansiones y mejoras sin problemas a medida que
                    tu negocio se desarrolla.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-12'>
              <div
                className='skill-card wow fadeInUp'
                data-wow-duration='1400ms'
              >
                <div className='skill-icon'>
                  <img src={img2} alt='' />
                </div>
                <div className='skill-text'>
                  <h3>Transparencia Total</h3>
                  <p>
                    Mantenemos un proceso transparente donde el cliente
                    participa activamente en cada etapa del desarrollo,
                    asegurando que el producto final cumpla con sus
                    expectativas.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-12'>
              <div
                className='skill-card wow fadeInUp'
                data-wow-duration='1000ms'
              >
                <div className='skill-icon'>
                  <img src={img3} alt='' />
                </div>
                <div className='skill-text'>
                  <h3>Metodologías Ágiles</h3>
                  <p>
                    Utilizamos metodologías ágiles para garantizar entregas
                    rápidas y eficientes, permitiendo ajustes continuos y
                    mejorando la colaboración entre nuestro equipo y el cliente.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-12'>
              <div
                className='skill-card wow fadeInUp'
                data-wow-duration='1200ms'
              >
                <div className='skill-icon'>
                  <img src={img4} alt='' />
                </div>
                <div className='skill-text'>
                  <h3>Innovación con IA</h3>
                  <p>
                    Incorporamos inteligencia artificial en nuestros procesos
                    para optimizar el desarrollo, mejorar la calidad y ofrecer
                    soluciones innovadoras y competitivas.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-12'>
              <div
                className='skill-card wow fadeInUp'
                data-wow-duration='1400ms'
              >
                <div className='skill-icon'>
                  <img src={img5} alt='' />
                </div>
                <div className='skill-text'>
                  <h3>Soporte Continuo</h3>
                  <p>
                    Ofrecemos soporte y mantenimiento constantes, asegurándonos
                    de que tus soluciones digitales se mantengan actualizadas y
                    funcionando de manera óptima en todo momento.
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
