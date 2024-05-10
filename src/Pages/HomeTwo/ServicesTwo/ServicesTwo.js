import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

const ServicesTwo = () => {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    const servicesData = [
      {
        id: 1,
        title: 'Website Development',
        description: 'Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean',
        icon: 'icon-angle',
        href: '/service-single',
        time: '1000ms',
      },
      {
        id: 2,
        title: 'UI/UX Designing',
        description: 'Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean',
        icon: 'icon-design',
        href: '/service-single',
        time: '1200ms',
      },
      {
        id: 3,
        title: 'Social Media Management Pro',
        description: 'Purus velit aenean quis habitant eros the a bibendum aenean quis habit aeros who ath bibendumPurus velit aenean',
        icon: 'icon-angle2',
        href: '/service-single',
        time: '1400ms',
      },
    ];
    return (
        
        <section className="service-area-s2 ptb-120">
            <div className="container">
                <div className="service-wrap">
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
    );
};

export default ServicesTwo;