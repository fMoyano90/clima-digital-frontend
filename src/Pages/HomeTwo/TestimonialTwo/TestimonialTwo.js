import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import authorImg1 from "../../../assets/images/testimonial/img-1.jpg";
import authorImg2 from "../../../assets/images/testimonial/shape.png";
import authorImg3 from "../../../assets/images/testimonial/right-img.jpg";


const TestimonialTwo = () => {

  const options = {
    autoplay: true,
    smartSpeed: 2000,
    margin: 5,
    loop: true,
    items: 1,
    autoplayHoverPause: true,
    dots: true,
    navText: ['<i className="ti-arrow-left"></i>', '<i className="ti-arrow-right"></i>'],
    nav: true, 
  };

  return (

    <section className="testimonial-section-s2 ptb-120">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="testimonial-left">
                        <div className="ch-top-title-s3">
                            <span>CLIENTS REVIEWS</span>
                            <h2 className="site-split-text ch-split-in-right">your talent with our Latest portfolio</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <OwlCarousel className="testimonial-items testimonial-active owl-carousel" {...options}>
                        <div className="testimonial-item">
                            <div className="testimonial-text">
                                <ul>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                </ul>
                                <p>Portfolio is a collection of works that showcases an individual's or tje
                                    man organization's skills experience and achievements. It is a powerful
                                    tool for presenting one's capabilities and impressing
                                </p>
                                <div className="testimonial-info">
                                    <div className="testimonial-avatar">
                                        <img src={authorImg1} alt="" />
                                    </div>
                                    <div className="testimonial-text-btm">
                                        <h3>Darlene Robertson</h3>
                                        <span>Software Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-text">
                                <ul>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                </ul>
                                <p>Portfolio is a collection of works that showcases an individual's or tje
                                    man organization's skills experience and achievements. It is a powerful
                                    tool for presenting one's capabilities and impressing
                                </p>
                                <div className="testimonial-info">
                                    <div className="testimonial-avatar">
                                        <img src={authorImg1} alt="" />
                                    </div>
                                    <div className="testimonial-text-btm">
                                        <h3>Darlene Robertson</h3>
                                        <span>Software Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-text">
                                <ul>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                </ul>
                                <p>Portfolio is a collection of works that showcases an individual's or tje
                                    man organization's skills experience and achievements. It is a powerful
                                    tool for presenting one's capabilities and impressing
                                </p>
                                <div className="testimonial-info">
                                    <div className="testimonial-avatar">
                                        <img src={authorImg1} alt="" />
                                    </div>
                                    <div className="testimonial-text-btm">
                                        <h3>Darlene Robertson</h3>
                                        <span>Software Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="col-lg-5">
                    <div className="testimonial-right-img">
                        <img className="imageParallax" src={authorImg3} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="right-shape">
            <img src={authorImg2} alt="" />
        </div>
        </section>
  );
};

export default TestimonialTwo;
