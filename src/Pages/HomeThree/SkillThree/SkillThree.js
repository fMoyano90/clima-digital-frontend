import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

const SkillThree = () => {
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
  

  return (

    <section className="ch-skill-area ptb-120">
        <div className="container">
            <div className="ch-title-wrap">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-8 col-12">
                        <div className="ch-top-title">
                            <span>My Skills</span>
                            <h2 className="site-split-text ch-split-in-right">Crafting portfolios that inspire
                                to goood success</h2>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-4 col-12">
                        <div className="ch-top-btn">
                            <Link to="service.html" className="ch-btn-style-1 ch-btn-animated">See More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skill-wrap">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="skill-card wow fadeInUp" data-wow-duration="1000ms">
                            <div className="skill-icon">
                                <i className="icon-mission"></i>
                            </div>
                            <div className="skill-text">
                                <h3>Strategic Solutions</h3>
                                <p>Tailored digital strategies to align with your business goals, leveraging
                                    the latest technologies to maximize.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="skill-card wow fadeInUp" data-wow-duration="1200ms">
                            <div className="skill-icon">
                                <i className="icon-creative"></i>
                            </div>
                            <div className="skill-text">
                                <h3>Creative Design</h3>
                                <p>Innovative and visually appealing designs that resonate with your brand
                                    identity, enhancing user engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="skill-card wow fadeInUp" data-wow-duration="1400ms">
                            <div className="skill-icon">
                                <i className="icon-web-development-1"></i>
                            </div>
                            <div className="skill-text">
                                <h3>User-Centric Develop</h3>
                                <p>Development processes centered around user experience, resulting in
                                    seamless and intuitive websites & digital platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="skill-card wow fadeInUp" data-wow-duration="1000ms">
                            <div className="skill-icon">
                                <i className="icon-multi-device"></i>
                            </div>
                            <div className="skill-text">
                                <h3>Multi Compatibility</h3>
                                <p>Responsive design and development to ensure a consistent & user-friendly
                                    experience across devices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="skill-card wow fadeInUp" data-wow-duration="1200ms">
                            <div className="skill-icon">
                                <i className="icon-network"></i>
                            </div>
                            <div className="skill-text">
                                <h3>Marketing Integration</h3>
                                <p>Integrated strategies for search engine optimization (SEO) and digital
                                    marketing, enhancing online visibility.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="skill-card wow fadeInUp" data-wow-duration="1400ms">
                            <div className="skill-icon">
                                <i className="icon-security"></i>
                            </div>
                            <div className="skill-text">
                                <h3>Security & Compliance</h3>
                                <p>Robust security measures to protect digital assets & ensure compliance
                                    with industry standards and regulations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="shape">
            <svg xmlns="http://www.w3.org/2000/svg" width="582" height="743" viewBox="0 0 582 743"
                fill="none">
                <g filter="url(#filter0_f_153_2418)">
                    <circle cx="371" cy="371.223" r="71" fill="#E9D275" />
                </g>
                <defs>
                    <filter id="filter0_f_153_2418" x="0" y="0.222656" width="742" height="742"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_153_2418" />
                    </filter>
                </defs>
            </svg>
        </div>
    </section>
  
  );
};

export default SkillThree;
