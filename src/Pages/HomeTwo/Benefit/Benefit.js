import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

const Benefit = () => {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    
    return (
        
        <section className="benefit-area ptb-120">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="ch-top-title-s2">
                            <span>Our benifits</span>
                            <h2 className="site-split-text ch-split-in-up">Where creativity <small>meets</small> success through thee portfolios</h2>
                        </div>
                    </div>
                </div>
                <div className="benefit-wrap">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="benefit-item wow fadeInUp" data-wow-duration="1000ms">
                                <div className="benefit-text">
                                    <div className="icon">
                                        <i className="icon-sicon6"></i>
                                    </div>
                                    <h3><Link to="service-single">UI / UX Design</Link></h3>
                                    <p> Portfolio is a collection of works that showcases an individual's</p>
                                    <Link to="/service-single" className="read-more">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="benefit-item wow fadeInUp" data-wow-duration="1200ms">
                                <div className="benefit-text">
                                    <div className="icon">
                                        <i className="icon-angle4"></i>
                                    </div>
                                    <h3><Link to="/service-single">E-commerce Solutions</Link></h3>
                                    <p> Portfolio is a collection of works that showcases an individual's</p>
                                    <Link to="/service-single" className="read-more">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="benefit-item wow fadeInUp" data-wow-duration="1400ms">
                                <div className="benefit-text">
                                    <div className="icon">
                                        <i className="icon-vec2"></i>
                                    </div>
                                    <h3><Link to="/service-single">SEO and Digital Advertising</Link></h3>
                                    <p> Portfolio is a collection of works that showcases an individual's</p>
                                    <Link to="/service-single" className="read-more">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="benefit-item wow fadeInUp" data-wow-duration="1600ms">
                                <div className="benefit-text">
                                    <div className="icon">
                                        <i className="icon-angle2"></i>
                                    </div>
                                    <h3><Link to="/service-single">Web Development Wizardry</Link></h3>
                                    <p> Portfolio is a collection of works that showcases an individual's</p>
                                    <Link to="/service-single" className="read-more">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefit;