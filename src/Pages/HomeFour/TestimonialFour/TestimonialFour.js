import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from "../../../assets/images/testimonial/img-1.jpg";
import img2 from "../../../assets/images/testimonial/img-2.jpg";
import img3 from "../../../assets/images/testimonial/img-3.jpg";

const TestimonialFour = () => {
 
  const options = {
    autoplay: true,
    smartSpeed: 2000,
    margin: 5,
    loop: true,
    items: 2,
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
                            <h2 className="site-split-text ch-split-in-right">your talent with our Latest
                                portfolio</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <ReactOwlCarousel className="testimonial-items testimonial-active-s2 owl-carousel" {...options}>
                        <div className="testimonial-item">
                            <div className="testimonial-text">
                                <ul>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                    <li><i className="ti-star"></i></li>
                                </ul>
                                <p>I recently attended their workshop, and it was a transformative experience. The content was engaging, the presenters were knowledgeable and were passionate I recently attended their workshop, and it was a transformative experienc The content was engaging the presenters 
                                </p>
                                <div className="testimonial-info">
                                    <div className="testimonial-avatar">
                                        <img src={img1} alt="" />
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
                                    <li><span><i className="ti-star"></i></span></li>
                                </ul>
                                <p>I recently attended their workshop, and it was a transformative experience. The content was engaging, the presenters were knowledgeable and were passionate I recently attended their workshop, and it was a transformative experienc The content was engaging the presenters 
                                </p>
                                <div className="testimonial-info">
                                    <div className="testimonial-avatar">
                                        <img src={img2} alt="" />
                                    </div>
                                    <div className="testimonial-text-btm">
                                        <h3>Robert William</h3>
                                        <span>UX/UI Designer</span>
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
                                    <li><span><i className="ti-star"></i></span></li>
                                </ul>
                                <p>I recently attended their workshop, and it was a transformative experience. The content was engaging, the presenters were knowledgeable and were passionate I recently attended their workshop, and it was a transformative experienc The content was engaging the presenters 
                                </p>
                                <div className="testimonial-info">
                                    <div className="testimonial-avatar">
                                        <img src={img3} alt="" />
                                    </div>
                                    <div className="testimonial-text-btm">
                                        <h3>Takla Bishu</h3>
                                        <span>CSE Engineer</span>
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
                                    <li><span><i className="ti-star"></i></span></li>
                                </ul>
                                <p>I recently attended their workshop, and it was a transformative experience. The content was engaging, the presenters were knowledgeable and were passionate I recently attended their workshop, and it was a transformative experienc The content was engaging the presenters 
                                </p>
                                <div className="testimonial-info">
                                    <div className="testimonial-avatar">
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className="testimonial-text-btm">
                                        <h3>Robert William</h3>
                                        <span>UX/UI Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TestimonialFour;
