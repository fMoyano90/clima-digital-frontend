import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../../assets/images/about/about-6.jpg";
import img2 from "../../../assets/images/about/star.png";
import img3 from "../../../assets/images/about/about-7.jpg";
import WOW from 'wowjs';

const AboutThree = () => {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <>
        <section className="about-area-s2 ptb-120">
            <div className="container">
                <div className="about-wrap">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-md-12 col-12">
                            <div className="about-left-item  wow fadeInLeftSlow" data-wow-duration="1400ms">
                                <div className="about-left-img">
                                    <img className="imageParallax" src={img1} alt="" />
                                </div>
                                <div className="about-right-img">
                                    <div className="left-img wow fadeInRightSlow" data-wow-duration="1800ms">
                                        <div className="star"><img src={img2} alt="" /></div>
                                        <img className="imageParallax4" src={img3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-12 col-12">
                            <div className="about-right-item wow fadeInRightSlow" data-wow-duration="1400ms">
                                <div className="about-right-text">
                                    <span>ABOUT US</span>
                                    <h2 className="site-split-text ch-split-in-right">Enhance your brand with a
                                        captivating portfolio.</h2>
                                    <p>In embracing frontier science, our objective is to contribute to
                                        advancements that directly benefit humanity, aligning our talents with a
                                        purpose-driven of
                                        commitment to create tangible, positive outcomes.</p>
                                    <Link to="/about" className="ch-btn-style-3 ch-btn-animated">View More</Link>

                                    <div className="about-funfact wow fadeInUp" data-wow-duration="1600ms" >
                                        <div className="funfact-item">
                                            <h3>3K+</h3>
                                            <p>Winning award</p>
                                        </div>
                                        <div className="funfact-item">
                                            <h3>4+</h3>
                                            <p>Year Of Experience</p>
                                        </div>
                                    </div>
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

export default AboutThree;
