import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../../assets/images/project/project-8.jpg";
import img2 from "../../../assets/images/project/project-9.jpg";
import img3 from "../../../assets/images/project/project-10.jpg";
import img4 from "../../../assets/images/project/project-11.jpg";
import WOW from 'wowjs';

const Portfolios = () => {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])

    return (
        <>
            <section className="ch-portfolio-area three ptb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="ch-top-title-s2">
                                <span>Latest Portfolio</span>
                                <h2 className="site-split-text ch-split-in-up">Crafting visual legacies through digital
                                    artistry for real results.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="portfolio-item wow fadeInUp" data-wow-duration="1200ms">
                                    <div className="portfolio-img">
                                        <img className="imageParallax4" src={img1} alt="" />
                                        <div className="portfolio-heading">
                                            <h2><Link to="portfolio-single.html">Captivating portfolios design</Link></h2>
                                        </div>
                                    </div>
                                    <div className="portfolio-text">
                                        <span>Development</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="portfolio-item wow fadeInUp" data-wow-duration="1200ms">
                                    <div className="portfolio-img">
                                        <img className="imageParallax" src={img2} alt="" />
                                        <div className="portfolio-heading">
                                            <h2><Link to="portfolio-single.html">Explore the art of portfolios</Link></h2>
                                        </div>
                                    </div>
                                    <div className="portfolio-text">
                                        <span>Design</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="portfolio-item wow fadeInUp" data-wow-duration="1200ms">
                                    <div className="portfolio-img">
                                        <img className="imageParallax4" src={img3} alt="" />
                                        <div className="portfolio-heading">
                                            <h2><Link to="portfolio-single.html">leave a lasting impression </Link></h2>
                                        </div>
                                    </div>
                                    <div className="portfolio-text">
                                        <span>Social Marketing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="portfolio-item wow fadeInUp" data-wow-duration="1200ms">
                                    <div className="portfolio-img">
                                        <img className="imageParallax" src={img4} alt="" />
                                        <div className="portfolio-heading">
                                            <h2><Link to="portfolio-single.html">brand with a stunning portfolio</Link>
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="portfolio-text">
                                        <span>SEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolios;
