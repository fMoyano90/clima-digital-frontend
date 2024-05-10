import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import authorImg1 from "../../../assets/images/testimonial/img-1.jpg";

const TestimonialsSection = () => {
  const options = {
    autoplay: true,
    smartSpeed: 2000,
    margin: 5,
    loop: true,
    items: 1,
    autoplayHoverPause: true,
    dots: true,
    navText: [
      '<i className="ti-arrow-left"></i>',
      '<i className="ti-arrow-right"></i>',
    ],
    nav: true,
  };

  return (
    <section className='testimonial-section ptb-120 pt-0 mt-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12'>
            <div className='testimonial-left'>
              <div className='ch-top-title-s3'>
                <span>TESTIMONIO DE CLIENTES</span>
                <h2 className='site-split-text ch-split-in-right'>
                  TÚ ÉXITO ES NUESTRA MAYOR MOTIVACIÓN
                </h2>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <ReactOwlCarousel
              className='testimonial-items testimonial-active owl-carousel'
              {...options}
            >
              <div className='testimonial-item'>
                <div className='testimonial-text'>
                  <div className='testimonial-info'>
                    <div className='testimonial-avatar'>
                      <img src={authorImg1} alt='' />
                    </div>
                    <div className='testimonial-text-btm'>
                      <h3>Darlene Robertson</h3>
                      <span>Software Engineer</span>
                    </div>
                  </div>
                  <p>
                    Over the course of several years, I've been involved in
                    recruiting individuals within this field, and I must say,
                    the degree of professionalism exhibited by this team is
                    unparalleled. Collaborating with them truly instills
                    confidence in their ability to successfully.
                  </p>
                </div>
              </div>
              <div className='testimonial-item'>
                <div className='testimonial-text'>
                  <div className='testimonial-info'>
                    <div className='testimonial-avatar'>
                      <img src={authorImg1} alt='' />
                    </div>
                    <div className='testimonial-text-btm'>
                      <h3>Darlene Robertson</h3>
                      <span>Software Engineer</span>
                    </div>
                  </div>
                  <p>
                    Over the course of several years, I've been involved in
                    recruiting individuals within this field, and I must say,
                    the degree of professionalism exhibited by this team is
                    unparalleled. Collaborating with them truly instills
                    confidence in their ability to successfully.
                  </p>
                </div>
              </div>
              <div className='testimonial-item'>
                <div className='testimonial-text'>
                  <div className='testimonial-info'>
                    <div className='testimonial-avatar'>
                      <img src={authorImg1} alt='' />
                    </div>
                    <div className='testimonial-text-btm'>
                      <h3>Darlene Robertson</h3>
                      <span>Software Engineer</span>
                    </div>
                  </div>
                  <p>
                    Over the course of several years, I've been involved in
                    recruiting individuals within this field, and I must say,
                    the degree of professionalism exhibited by this team is
                    unparalleled. Collaborating with them truly instills
                    confidence in their ability to successfully.
                  </p>
                </div>
              </div>
            </ReactOwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
