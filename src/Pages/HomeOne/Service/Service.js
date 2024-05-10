import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";

const Service = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  const servicesData = [
    {
      id: 1,
      title: "Tiendas Virtuales",
      description:
        "Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean",
      icon: "icon-sicon1",
      href: "/service-single",
      time: "1000ms",
    },
    {
      id: 2,
      title: "Plataformas de Reserva",
      description:
        "Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean",
      icon: "icon-sicon2",
      href: "/service-single",
      time: "1200ms",
    },
    {
      id: 3,
      title: "Desarrollos Personalizados",
      description:
        "Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean",
      icon: "icon-sicon3",
      href: "/service-single",
      time: "1400ms",
    },
    {
      id: 1,
      title: "Mantenimiento y Soporte",
      description:
        "Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean",
      icon: "icon-sicon4",
      href: "/service-single",
      time: "1000ms",
    },
    {
      id: 2,
      title: "Diseño UI / UX",
      description:
        "Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean",
      icon: "icon-sicon5",
      href: "/service-single",
      time: "1200ms",
    },
    {
      id: 3,
      title: "Marketing Digital",
      description:
        "Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean",
      icon: "icon-sicon6",
      href: "/service-single",
      time: "1400ms",
    },
  ];
  return (
    <section className='service-area ptb-120'>
      <div className='container'>
        <div className='service-wrap'>
          <div className='row'>
            {servicesData.map((item, id) => (
              <div className='col col-lg-4 col-md-6 col-12' key={id}>
                <div
                  className='service-item wow fadeInUp'
                  data-wow-duration={item.time}
                >
                  <div className='service-text'>
                    <div className='icon'>
                      <i className={item.icon}></i>
                    </div>
                    <h3>
                      <Link to={item.href}>{item.title}</Link>
                    </h3>
                    <p>{item.description}</p>
                    <Link to={item.href} className='read-more'>
                      Leer más
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
