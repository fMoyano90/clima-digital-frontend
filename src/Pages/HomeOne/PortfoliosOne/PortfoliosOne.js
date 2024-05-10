import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/service/service-1.jpg";
import img2 from "../../../assets/images/service/service-2.jpg";
import img3 from "../../../assets/images/service/service-3.jpg";
import img4 from "../../../assets/images/service/service-4.jpg";
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
            <div className='col-xl-7 col-lg-4 col-12'>
              <div className='ch-top-btn'>
                <Link to='/service' className='ch-btn-style-1 ch-btn-animated'>
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='row align-items-center'>
          <div className='col-xl-5 col-lg-5 col-12'>
            <div className='ch-service-left-wrapper'>
              <div className='service-image-group'>
                <div className='service-image active'>
                  <img className='imageParallax' src={img1} alt='' />
                </div>
                <div className='service-image'>
                  <img className='imageParallax' src={img2} alt='' />
                </div>
                <div className='service-image'>
                  <img className='imageParallax' src={img3} alt='' />
                </div>
                <div className='service-image'>
                  <img className='imageParallax' src={img4} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-7 col-lg-7 col-12'>
            <div className='ch-service-right-wrap'>
              <Link to='/service-single' className='item active'>
                <div className='item-left'>
                  <span>01</span>
                  <h2>Innovación</h2>
                </div>
                <i className='icon-arrow'></i>
              </Link>
              <Link to='/service-single' className='item'>
                <div className='item-left'>
                  <span>02</span>
                  <h2>Calidad</h2>
                </div>
                <i className='icon-arrow'></i>
              </Link>
              <Link to='/service-single' className='item'>
                <div className='item-left'>
                  <span>03</span>
                  <h2>Integridad</h2>
                </div>
                <i className='icon-arrow'></i>
              </Link>
              <Link to='/service-single' className='item'>
                <div className='item-left'>
                  <span>04</span>
                  <h2>Colaboración</h2>
                </div>
                <i className='icon-arrow'></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfoliosOne;
