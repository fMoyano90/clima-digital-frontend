import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/vision-01-01.svg";
import img2 from "../../../assets/images/pasion-01-01.svg";
import img3 from "../../../assets/images/innovacion-calidad-01.svg";
import img4 from "../../../assets/images/transparencia-02-01.svg";
const PortfoliosOne = () => {
  useEffect(() => {
    const rightItems = document.querySelectorAll(
      ".ch-service-right-wrap .item"
    );
    const leftItems = document.querySelectorAll(
      ".service-image-group .service-image"
    );

    const handleHover = (index) => {
      rightItems.forEach((item, i) => {
        item.classList.remove("active");
        if (i === index) item.classList.add("active");
      });
      leftItems.forEach((item, i) => {
        item.classList.remove("active");
        if (i === index) item.classList.add("active");
      });
    };

    rightItems.forEach((rightItem, index) => {
      rightItem.addEventListener("mouseenter", () => handleHover(index));
    });

    return () => {
      rightItems.forEach((rightItem, index) => {
        rightItem.removeEventListener("mouseenter", () => handleHover(index));
      });
    };
  }, []);

  return (
    <section className='ch-service-area ptb-120'>
      <div className='container'>
        <div className='ch-title-wrap'>
          <div className='row justify-content-center'>
            <div className='col-xl-5 col-lg-8 col-12'>
              <div className='ch-top-title'>
                <span>Nuestros valores</span>
                <h2 className='site-split-text ch-split-in-right'>
                  Principios que Definen Nuestra Empresa
                </h2>
              </div>
            </div>
            <div className='col-xl-7 col-lg-4 col-12'></div>
          </div>
        </div>
        <div className='row align-items-center'>
          <div className='col-xl-7 col-lg-7 col-12'>
            <div className='ch-service-right-wrap'>
              <Link to='/service-single' className='item active'>
                <div className='item-left'>
                  <span>01</span>
                  <h2>Visión</h2>
                </div>
                <i className='icon-arrow'></i>
              </Link>
              <Link to='/service-single' className='item'>
                <div className='item-left'>
                  <span>02</span>
                  <h2>Pasión</h2>
                </div>
                <i className='icon-arrow'></i>
              </Link>
              <Link to='/service-single' className='item'>
                <div className='item-left'>
                  <span>03</span>
                  <h2>Innovación y Calidad</h2>
                </div>
                <i className='icon-arrow'></i>
              </Link>
              <Link to='/service-single' className='item'>
                <div className='item-left'>
                  <span>04</span>
                  <h2>Integridad y Transparencia</h2>
                </div>
                <i className='icon-arrow'></i>
              </Link>
            </div>
          </div>
          <div className='col-xl-5 col-lg-5 col-12'>
            <div className='ch-service-left-wrapper'>
              <div className='service-image-group'>
                <div className='service-image active'>
                  <img src={img1} alt="" />
                  <p>
                    En Clima Digital, nuestra visión es ser líderes en la
                    transformación digital, ofreciendo soluciones tecnológicas
                    innovadoras y accesibles que potencien el crecimiento y
                    éxito de nuestros clientes. Nos esforzamos por anticipar las
                    tendencias del mercado y adaptarnos rápidamente a los
                    cambios para mantenernos a la vanguardia.
                  </p>
                </div>
                <div className='service-image'>
                  <img src={img2} alt="" />
                  <p>
                    Nos apasiona lo que hacemos y nos dedicamos a proporcionar
                    soluciones a nuestros clientes. Esta pasión se refleja en
                    cada proyecto que emprendemos. Además, nos esforzamos por
                    entender las necesidades y desafíos únicos de cada cliente,
                    trabajando en conjunto para así obtener los mejores
                    resultados.
                  </p>
                </div>
                <div className='service-image'>
                  <img src={img3} alt="" />
                  <p>
                    La innovación es el corazón de nuestra empresa. Nos
                    comprometemos a explorar nuevas ideas y tecnologías para
                    ofrecer soluciones de alta calidad. Cada proyecto es una
                    oportunidad para innovar y mejorar, garantizando que
                    nuestros clientes reciban productos y servicios de la más
                    alta calidad.
                  </p>
                </div>
                <div className='service-image'>
                  <img src={img4} alt="" />
                  <p>
                    Valoramos la integridad y la transparencia en todas nuestras
                    interacciones. Creemos que la confianza es la base de
                    cualquier relación exitosa, por lo que nos esforzamos por
                    ser claros, honestos y abiertos con nuestros clientes,
                    socios y equipo. Trabajamos en estrecha colaboración con
                    nuestros clientes, creando una atmósfera de sinergia y
                    cooperación para alcanzar los mejores resultados posibles.
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

export default PortfoliosOne;
