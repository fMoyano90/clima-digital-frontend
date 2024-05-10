import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../../assets/images/hero/star1.png";
import img2 from "../../../assets/images/hero/hero.jpg";
import img3 from "../../../assets/images/hero/2star.png";
import img4 from "../../../assets/images/hero/star.png";
import img5 from "../../../assets/images/hero/lines.png";
import img6 from "../../../assets/images/hero/dot1.png";
import img7 from "../../../assets/images/hero/dot1.png";
import WOW from 'wowjs';

const BannerThree = () => {
      useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])

      useEffect(() => {
        const handleMouseEnter = (e) => {
          const y = e.pageY - e.currentTarget.offsetTop;
          e.currentTarget.querySelector('span').style.top = y + 'px';
        };
    
        const handleMouseLeave = (e) => {
          const x = e.pageX - e.currentTarget.offsetLeft;
          e.currentTarget.querySelector('span').style.left = x + 'px';
        };
    
        const btnHoverAll = document.querySelectorAll(".ch-btn-animated");
    
        if (btnHoverAll) {
          btnHoverAll.forEach(btn => {
            // Check if there's already a span tag, if not, create one
            if (!btn.querySelector('span')) {
              const newSpan = document.createElement("span");
              btn.appendChild(newSpan);
            }
            btn.addEventListener('mouseenter', handleMouseEnter);
            btn.addEventListener('mouseleave', handleMouseLeave);
          });
        }
    
        return () => {
          btnHoverAll.forEach(btn => {
            btn.removeEventListener('mouseenter', handleMouseEnter);
            btn.removeEventListener('mouseleave', handleMouseLeave);
          });
        };
      }, []);

  return (
    <>
        <section className="ch-main-hero-s3">
            <div className="container">
                <div className="ch-main-hero-wrap">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12 col-12">
                            <div className="ch-main-hero-text">
                                <span className="title-sub">We Are Digital Agency</span>
                                <h2 className="site-split-text ch-split-in-left">Top-Tier Innovative Digital
                                    <small>Agency <i><img src={img1} alt="" /></i></small>
                                </h2>
                                <div className="hero-img">
                                    <img className="imageParallax" src={img2} alt="" />
                                    <div className="star2">
                                        <img src={img3} alt="" />
                                    </div>
                                    <div className="hero-btn">
                                        <Link to="/service" className="ch-btn-style-1 ch-btn-animated">Read
                                            More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rotate-star">
                <img src={img4} alt="" />
            </div>
            <div className="line-shape">
                <img src={img5} alt="" />
            </div>
            <div className="dot-shape-1">
                <img src={img6} alt="" />
            </div>
            <div className="dot-shape-2">
                <img src={img7} alt="" />
            </div>
        </section>
    </>
  );
};

export default BannerThree;
