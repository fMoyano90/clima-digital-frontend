import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../../assets/images/about/about-8.jpg";
import WOW from 'wowjs';

const AboutFour = () => {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (

    <section className="about-area-s2 style-3 ptb-120">
        <div className="container">
            <div className="about-wrap">
                <div className="row align-items-center">
                    <div className="col col-lg-6 col-md-12 col-12">
                        <div className="about-left-item  wow fadeInLeftSlow" data-wow-duration="1400ms">
                            <div className="about-left-img">
                                <img className="imageParallax" src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-12 col-12">
                        <div className="about-right-item wow fadeInRightSlow" data-wow-duration="1400ms">
                            <div className="about-right-text">
                                <span>ABOUT US</span>
                                <h2 className="site-split-text ch-split-in-right">Elevate your
                                    <small>brand</small> with a the stunning portfolio.</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sociis tempus
                                    magna vel, duis tincidunt fusce aenean lacus integer velit phasellus
                                    imperdiet senectus, vestibulum r
                                    primis eleifend vehicula eros hac posuere placeraa.</p>
                                <Link to="about" className="ch-btn-style-3 ch-btn-animated">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
  );
};

export default AboutFour;
