import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import img1 from "../../../assets/images/website-01.svg";
import img2 from "../../../assets/images/e-commerce-01.svg";
import img3 from "../../../assets/images/management-system-01.svg";
import img4 from "../../../assets/images/app-mobile-01.svg";
import "./Service.css";

const Service = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  const servicesData = [
    {
      id: 1,
      title: "Sitios Web Profesionales",
      description:
        "Desarrollamos sitios web a medida, optimizados y responsivos que representan la identidad de tu marca y ofrecen una experiencia de usuario excepcional.",
      icon: "icon-sicon1",
      href: "/service-single",
      time: "1000ms",
      img: img1,
    },
    {
      id: 2,
      title: "Tiendas Online",
      description:
        "Creamos plataformas de ecommerce que no solo son visualmente atractivas, sino también altamente funcionales y seguras, facilitando la gestión y el crecimiento de tu tienda online.",
      icon: "icon-sicon2",
      href: "/service-single",
      time: "1200ms",
      img: img2,
    },
    {
      id: 3,
      title: "Sistemas de Gestión",
      description:
        "Optimiza tus procesos empresariales con nuestros sistemas de gestión personalizados. Simplifica la administración de recursos y mejora la eficiencia operativa de tu negocio.",
      icon: "icon-sicon3",
      href: "/service-single",
      time: "1400ms",
      img: img3,
    },
    {
      id: 4,
      title: "Apps Móviles",
      description:
        "Desarrollamos aplicaciones móviles innovadoras que ofrecen una experiencia de usuario excepcional. Nuestras apps están diseñadas para impulsar la interacción y satisfacer las necesidades de tus clientes.",
      icon: "icon-sicon4",
      href: "/service-single",
      time: "1000ms",
      img: img4,
    },
  ];
  return (
    <section className='service-area ptb-120'>
      <div className='container'>
        <div className='service-wrap'>
          <span>DESTACADOS</span>
          <h2 className='site-split-text ch-split-in-right pb-5'>
            Servicios Que Te Llevaran a las Nubes ☁️
          </h2>
          <div className='row'>
            {servicesData.map((item, id) => (
              <div className='col col-lg-3 col-md-6 col-12' key={id}>
                <div
                  className='service-item wow fadeInUp'
                  data-wow-duration={item.time}
                >
                  <div className='service-text'>
                    <div class='icon-img'>
                      <img src={item.img} alt='' />
                    </div>
                    <h3>
                      <Link to={item.href}>{item.title}</Link>
                    </h3>
                    <p>{item.description}</p>
                    <Link to={item.href} className='read-more'>
                      Descubre más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
