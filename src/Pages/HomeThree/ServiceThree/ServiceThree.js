import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

const ServiceThree = () => {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    const servicesData = [
      {
        id: 1,
        title: 'UI / UX Design',
        description: 'Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean',
        icon: 'icon-sicon1',
        href: '/service-single',
        time: '1000ms',
      },
      {
        id: 2,
        title: 'Web Development',
        description: 'Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean',
        icon: 'icon-sicon2',
        href: '/service-single',
        time: '1200ms',
      },
      {
        id: 3,
        title: 'Digital Marketing',
        description: 'Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean',
        icon: 'icon-sicon3',
        href: '/service-single',
        time: '1400ms',
      },
    ];
    return (
        <>
        <section className="service-area ptb-120">
            <div className="container">
                <div className="service-wrap">
                    <div className="ch-title-wrap">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-12">
                                <div className="ch-top-title">
                                    <span>Our Services</span>
                                    <h2 className="site-split-text ch-split-in-right">Compelling portfolios that
                                        leave a lasting impact.</h2>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4 col-12">
                                <div className="ch-top-btn">
                                    <Link to="/service" className="ch-btn-style-1 ch-btn-animated">See More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {servicesData.map((item, id)=>(
                            <div className="col col-lg-4 col-md-6 col-12" key={id}>
                                <div className="service-item wow fadeInUp" data-wow-duration={item.time}>
                                    <div className="service-text">
                                        <div className="icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <h3><Link to={item.href}>{item.title}</Link></h3>
                                        <p>{item.description}</p>
                                        <Link to={item.href} className="read-more">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default ServiceThree;