import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import imgs1 from "../../../assets/images/project/project-1.jpg";
import imgs2 from "../../../assets/images/project/project-2.jpg";
import imgs3 from "../../../assets/images/project/project-3.jpg";
import imgs4 from "../../../assets/images/project/project-4.jpg";
import WOW from 'wowjs';

const ServiceTwo = () => {
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    const servicesData = [
      {
        id: 1,
        title: 'Captivating Portfolios Design',
        subtitle: 'Graphic Design',
        imgs: imgs1,
        href: '/portfolio-single',
      },
      {
        id: 2,
        title: 'Explore The Art Of Portfolios',
        subtitle: 'UI/UX Design',
        imgs: imgs2,
        href: '/portfolio-single',
      },
      {
        id: 3,
        title: 'Leave A Lasting Impression',
        subtitle: 'Website Development',
        imgs: imgs3,
        href: '/portfolio-single',
      },
      {
        id: 4,
        title: 'Brand With A Stunning Portfolio',
        subtitle: 'Design',
        imgs: imgs4,
        href: '/portfolio-single',
      },
      
    ];
    return (

        <section className="ch-portfolio-area ptb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="ch-top-title-s2">
                            <span>Latest service</span>
                            <h2 className="site-split-text ch-split-in-up">Showcasing excellence through portfolios</h2>
                        </div>
                    </div>
                </div>
                <div className="portfolio-wrap">
                    <div className="row">
                        {servicesData.map((item, id)=>(
                            <div className="col-lg-6 col-md-6 col-12" key={id}>
                                <div className="portfolio-item wow fadeInUp" data-wow-duration="1200ms">
                                    <div className="portfolio-img">
                                        <img className="imageParallax4" src={item.imgs} alt="" />
                                    </div>
                                    <div className="portfolio-text">
                                        <span>{item.subtitle}</span>
                                        <h2><Link to={item.href}>{item.title}</Link></h2>
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

export default ServiceTwo;