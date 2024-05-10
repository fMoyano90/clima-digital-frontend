import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import img_1 from "../../../assets/images/hero/man2.png";
import img_2 from "../../../assets/images/hero/triangle-line.png";
import WOW from 'wowjs';

const BannerTwo = () => {
      useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])

  return (
    <section className="ch-main-hero-s2">
      <div className="container">
        <div className="ch-main-hero-wrap">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="ch-main-hero-text">
                <span className="title-sub wow fadeInUp" data-wow-duration="1200ms">I’M</span>
                <h2 className="site-split-text ch-split-in-left">Robert Fox</h2>
                <p className="wow fadeInUp" data-wow-duration="1400ms">Dedicated to assisting you in
                    reaching your digital objectives, our team of experts specializes in
                    services ranging from website design and development to SEO, PPC
                    advertising.
                </p>
                <div className="hero-funfact wow fadeInUp" data-wow-duration="1600ms">
                  <div className="funfact-item">
                    <h3>200+</h3>
                    <p>Team member</p>
                  </div>
                  <div className="funfact-item">
                    <h3>20+</h3>
                    <p>Winning award</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="right-image">
                <div className="right-image-mask  wow rotateInDownRight" data-wow-duration="1000ms">
                  <div className="h-img wow fadeInUp" data-wow-duration="2000ms">
                    <img src={img_1} alt="" />
                  </div>
                </div>
                <div className="line wow rotateInDownLeft" data-wow-duration="3000ms">
                  <img src={img_2} alt="" />
                </div>
                <div className="rotate-text-wrap wow  zoomIn" data-wow-duration="1200ms">
                  <div className="rotate-text text-roted">
                    <svg width="200" height="200">
                      <path fill="white" d="M0,100a100,100 0 1,0 200,0a100,100 0 1,0 -200,0" />
                      <path fill="none" id="innerCircle" d="M10,100a90,90 0 1,0 180,0a90,90 0 1,0 -180,0" />
                      <text fill="white">
                        <textPath xlinkHref="#innerCircle" className="qr--label">
                          1997 Best Working Since
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="icon"><i className="icon-sicon6"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-link">
            <ul>
              <li className="wow fadeInRightSlow" data-wow-duration="1000ms"><Link to="/about">GRAPHIC DESIGNER</Link></li>
              <li className="wow fadeInRightSlow" data-wow-duration="1500ms"><Link to="about">WEB DESIGNER</Link></li>
              <li className="wow fadeInRightSlow" data-wow-duration="2000ms"><Link to="/about">PHOTOGRAPHER</Link></li>
              <li className="wow fadeInRightSlow" data-wow-duration="2500ms"><Link to="/about">UNLOCK ALGORITHM</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
