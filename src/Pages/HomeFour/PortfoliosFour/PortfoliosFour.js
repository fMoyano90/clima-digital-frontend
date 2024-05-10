import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img2 from "../../../assets/images/project/project-5.jpg";
import img3 from "../../../assets/images/project/project-6.jpg";
import img4 from "../../../assets/images/project/project-7.jpg";

const PortfoliosFour = () => {

    useEffect(() => {
        const rightItems = document.querySelectorAll('.ch-service-right-wrap .item');
        const leftItems = document.querySelectorAll('.service-image-group .service-image');
    
        const handleHover = (index) => {
          rightItems.forEach((item, i) => {
            item.classNameList.remove('active');
            if (i === index) item.classNameList.add('active');
          });
          leftItems.forEach((item, i) => {
            item.classNameList.remove('active');
            if (i === index) item.classNameList.add('active');
          });
        };
    
        rightItems.forEach((rightItem, index) => {
          rightItem.addEventListener('mouseenter', () => handleHover(index));
        });
    
        return () => {
          rightItems.forEach((rightItem, index) => {
            rightItem.removeEventListener('mouseenter', () => handleHover(index));
          });
        };
      }, []); 
      
  
  return (

    <section className="ch-portfolio-area-s2 ptb-120">
        <div className="container">
            <div className="ch-title-wrap">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-8 col-12">
                        <div className="ch-top-title">
                            <span>Latesr portfolio</span>
                            <h2 className="site-split-text ch-split-in-right">Showcase your talent
                                <small>with</small> our Latest portfolio</h2>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-4 col-12">
                        <div className="ch-top-btn">
                            <Link to="/portfolio" className="ch-btn-style-1 ch-btn-animated">See More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="porfolio-wrap">
                <div className="porfolio-item wow fadeInUp" data-wow-duration="1000ms">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-6 col-12 order-lg-1 order-2">
                            <div className="porfolio-text">
                                <span><i>01</i></span>
                                <Link to="/portfolio-single">portfolio benefit my caree</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 order-lg-2 order-1">
                            <div className="porfolio-img">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 col-12 order-lg-3 order-3">
                            <div className="porfolio-des">
                                <p>Corporate restructuring refers to the process of reorCorporate
                                    restructuring refers to the process of reorganizing a man ompanyganizing
                                    a man company</p>
                                <Link to="/portfolio-single" className="read-more">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="porfolio-item wow fadeInUp" data-wow-duration="1200ms">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-6 col-12 order-lg-1 order-2">
                            <div className="porfolio-text">
                                <span><i>02</i></span>
                                <Link to="/portfolio-single">Branding and Identity Mastery</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 order-lg-2 order-1">
                            <div className="porfolio-img">
                                <img src={img3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 col-12 order-lg-3 order-3">
                            <div className="porfolio-des">
                                <p>Corporate restructuring refers to the process of reorCorporate
                                    restructuring refers to the process of reorganizing a man ompanyganizing
                                    a man company</p>
                                <Link to="/portfolio-single" className="read-more">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="porfolio-item wow fadeInUp" data-wow-duration="1400ms">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-6 col-12 order-lg-1 order-2">
                            <div className="porfolio-text">
                                <span><i>03</i></span>
                                <Link to="/portfolio-single">Unveiling the power of portfolios</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 order-lg-2 order-1">
                            <div className="porfolio-img">
                                <img src={img4} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 col-12 order-lg-3 order-3">
                            <div className="porfolio-des">
                                <p>Corporate restructuring refers to the process of reorCorporate
                                    restructuring refers to the process of reorganizing a man ompanyganizing
                                    a man company</p>
                                <Link to="/portfolio-single" className="read-more">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
  );
};

export default PortfoliosFour;
