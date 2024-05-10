import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../../assets/images/service/service-5.jpg";
import img2 from "../../../assets/images/service/service-6.jpg";
import img3 from "../../../assets/images/service/service-7.jpg";
import img4 from "../../../assets/images/service/service-8.jpg";

const PortfoliosThree = () => {

    useEffect(() => {
        const rightItems = document.querySelectorAll('.ch-service-right-wrap .item');
        const leftItems = document.querySelectorAll('.service-image-group .service-image');

        const handleHover = (index) => {
            rightItems.forEach((item, i) => {
                item.classList.remove('active');
                if (i === index) item.classList.add('active');
            });
            leftItems.forEach((item, i) => {
                item.classList.remove('active');
                if (i === index) item.classList.add('active');
            });
        };

        const mouseEnterHandler = (index) => {
            handleHover(index);
        };

        rightItems.forEach((rightItem, index) => {
            rightItem.addEventListener('mouseenter', () => mouseEnterHandler(index));
        });

        return () => {
            rightItems.forEach((rightItem, index) => {
                rightItem.removeEventListener('mouseenter', () => mouseEnterHandler(index));
            });
        };
    }, []); 

    return (
        <section className="ch-service-area ptb-120">
            <div className="container">
                <div className="ch-title-wrap">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-8 col-12">
                            <div className="ch-top-title">
                                <span>LATEST PROJECTS</span>
                                <h2 className="site-split-text ch-split-in-right">Exemplify excellence through Projects.</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-4 col-12">
                            <div className="ch-top-btn">
                                <p>We specialize in crafting visually appealing interfaces with a focus on user-centric design. Explore my projects to see how I transform ideas into seamless, engaging experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-7 col-12">
                        <div className="ch-service-right-wrap">
                            <Link to="/service-single" className="item active">
                                <div className="item-left">
                                    <span>01</span>
                                    <h2>Creative Design Solutions</h2>
                                </div>
                                <i className="icon-arrow"></i>
                            </Link>
                            <Link to="/service-single" className="item">
                                <div className="item-left">
                                    <span>02</span>
                                    <h2>Branding and Identity Mastery</h2>
                                </div>
                                <i className="icon-arrow"></i>
                            </Link>
                            <Link to="/service-single" className="item">
                                <div className="item-left">
                                    <span>03</span>
                                    <h2>Photography and Videography</h2>
                                </div>
                                <i className="icon-arrow"></i>
                            </Link>
                            <Link to="/service-single" className="item">
                                <div className="item-left">
                                    <span>04</span>
                                    <h2>UI/UX Design Innovation</h2>
                                </div>
                                <i className="icon-arrow"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 col-12">
                        <div className="ch-service-left-wrapper">
                            <div className="service-image-group">
                                <div className="service-image active">
                                    <img className="imageParallax" src={img1} alt="" />
                                </div>
                                <div className="service-image">
                                    <img className="imageParallax" src={img2} alt="" />
                                </div>
                                <div className="service-image">
                                    <img className="imageParallax" src={img3} alt="" />
                                </div>
                                <div className="service-image">
                                    <img className="imageParallax" src={img4} alt="" />
                                </div>
                            </div>
                            <div className="ch-service-text-right">
                                <i className="icon-design"></i>
                                <div className="ch-service-rtext">
                                    <h3>Solutions that Inspire</h3>
                                    <p>Improving your business's online presence can be achievedfri</p>
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

export default PortfoliosThree;
