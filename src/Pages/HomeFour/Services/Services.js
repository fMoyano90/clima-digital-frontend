import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

const Services = () => {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])

    const servicesData = [
      {
        id: 1,
        title: 'UI / UX Design',
        description: 'Portfolio is a collection of works that showcases an individuals',
        icon: 'icon-sicon6',
        href: '/service-single',
        time: '1000ms',
      },
      {
        id: 2,
        title: 'E-commerce Solutions',
        description: 'Portfolio is a collection of works that showcases an individuals',
        icon: 'icon-angle4',
        href: '/service-single',
        time: '1200ms',
      },
      {
        id: 3,
        title: 'SEO and Digital Advertising',
        description: 'Portfolio is a collection of works that showcases an individuals',
        icon: 'icon-vec2',
        href: '/service-single',
        time: '1400ms',
      },
      {
        id: 4,
        title: 'Web Development Wizardry',
        description: 'Portfolio is a collection of works that showcases an individuals',
        icon: 'icon-angle2',
        href: '/service-single',
        time: '1600ms',
      },
    ];
    return (

        <section className="benefit-area ptb-120">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="ch-top-title-s2">
                            <span>Our benifits</span>
                            <h2 className="site-split-text ch-split-in-up">Where creativity <small>meets</small>
                                success through thee portfolios</h2>
                        </div>
                    </div>
                </div>
                <div className="benefit-wrap">
                    <div className="row">
                        {servicesData.map((item, id)=>(
                            <div className="col col-xl-3 col-lg-6 col-md-6 col-12" key={id}>
                                <div className="benefit-item wow fadeInUp" data-wow-duration={item.time}>
                                    <div className="benefit-text">
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

export default Services;