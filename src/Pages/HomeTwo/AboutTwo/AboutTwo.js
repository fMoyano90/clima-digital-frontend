import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../../assets/images/about/about-3.jpg";
import img2 from "../../../assets/images/about/about-5.jpg";
import img3 from "../../../assets/images/about/shape-2.png";
import img4 from "../../../assets/images/about/shape-1.png";
import img5 from "../../../assets/images/about/about-4.jpg";
import WOW from 'wowjs';

const AboutTwo = () => {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (

    <section className="about-area-s2 ptb-120">
        <div className="container">
            <div className="about-wrap">
                <div className="row align-items-center">
                    <div className="col col-lg-6 col-md-12 col-12">
                        <div className="about-left-item  wow fadeInLeftSlow" data-wow-duration="1400ms">
                            <div className="about-left-img">
                                <img src={img1} alt="" />
                                <div className="left-inner-img">
                                    <img src={img2} alt="" />
                                    <div className="left-top-right-shape">
                                        <img src={img3} alt="" />
                                    </div>
                                </div>
                                <div className="left-top-shape">
                                    <img src={img4} alt="" />
                                </div>
                                <div className="exprience-wrap wow fadeInUp" data-wow-duration="1600ms">
                                    <div className="exprience-inner">
                                        <p>15<span>Years Of experience</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-right-img">
                                <div className="left-img wow fadeInRightSlow" data-wow-duration="1800ms">
                                    <img src={img5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-12 col-12">
                        <div className="about-right-item wow fadeInRightSlow" data-wow-duration="1400ms">
                            <div className="about-right-text">
                                <span>ABOUT US</span>
                                <h2 className="site-split-text ch-split-in-right">Elevate your <small>brand</small> with a the stunning portfolio</h2>
                                <p>In embracing frontier science, our objective is to contribute to
                                    advancements that directly benefit humanity, aligning our talents with a
                                    purpose-driven of
                                    commitment to create tangible, positive outcomes.</p>
                                <Link to="/about" className="ch-btn-style-3 ch-btn-animated">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
  );
};

export default AboutTwo;
