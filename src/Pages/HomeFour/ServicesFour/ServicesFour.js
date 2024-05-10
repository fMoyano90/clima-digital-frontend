import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

const ServicesFour = () => {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    const servicesData = [
      {
        id: 1,
        title: 'Creative Design Solutions',
        description: 'Portfolio is a collection of works that showcases the a individuals design is good',
        icon: 'icon-angle',
        href: '/service-single',
        time: '1000ms',
      },
      {
        id: 2,
        title: 'Content Creation and Strategy',
        description: 'Portfolio is a collection of works that showcases the a individuals design is good',
        icon: 'icon-design',
        href: '/service-single',
        time: '1200ms',
      },
      {
        id: 3,
        title: 'Social Media Management Pro',
        description: 'Portfolio is a collection of works that showcases the a individuals design is good',
        icon: 'icon-angle2',
        href: '/service-single',
        time: '1400ms',
      },
    ];
    return (

        <section className="service-area style-3 ptb-120 pt-0">
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

export default ServicesFour;