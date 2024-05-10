import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../../assets/images/hero/man3.png";
import img2 from "../../../assets/images/hero/man-back-bg.png";
import img3 from "../../../assets/images/hero/line-shape.png";
import WOW from 'wowjs';
import ModalVideo from 'react-modal-video'; 

const BannerOne = () => {
    const [isOpen, setOpen] = useState(false)
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

    <section className="ch-main-hero-s4">
        <div className="container">
            <div className="ch-main-hero-wrap">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-12">
                        <div className="ch-main-hero-text">
                            <h2 className="site-split-text ch-split-in-left">Transforming Ideas into Results
                            </h2>
                            <div className="hero-btn wow fadeInUp" data-wow-duration="1600ms">
                                <Link to="/service" className="ch-btn-style-1 ch-btn-animated">Our
                                    Services</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-8">
                        <div className="right-image">
                            <div className="right-image-mask wow fadeInRightSlow" data-wow-duration="1000ms">
                                <div className="h-img wow fadeInRightSlow" data-wow-duration="2000ms">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="back-bg"><img src={img2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4">
                        <div className="right-rating wow fadeInDown" data-wow-duration="2000ms">
                            <span>TOP RATED ON CLUTCH</span>
                            <h3>9.8 <small>Rating</small></h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit</p>
                        </div>
                        <div className="video-wrap wow fadeInUp" data-wow-duration="2000ms">
                            <div className="video-btns">
                                <React.Fragment>
                                    <ModalVideo
                                        channel="youtube"
                                        youtube={{ mute: 0, autoplay: 0 }}
                                        isOpen={isOpen}
                                        videoId="L61p2uyiMSo"
                                        onClose={() => setOpen(false)} 
                                    />
                                    <button className="btn-primary" onClick={() => setOpen(true)}>
                                        <div className="video-btn"></div>
                                    </button>
                                </React.Fragment>
                            </div>
                            <span>WachVedio</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-text wow fadeInUp" data-wow-duration="2000ms">
                <h2>Corporate</h2>
            </div>
        </div>
        <div className="line-shape">
            <img src={img3} alt="" />
        </div>
    </section>
  
  );
};

export default BannerOne;
