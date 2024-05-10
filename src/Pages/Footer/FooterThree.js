import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo-3.png";

const FooterThree = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
      };

    return (
        <>
            <footer className="footer-section">
                <div className="upper-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget about-widget">
                                    <div className="logo widget-title">
                                        <Link to="/"><img src={Logo} alt="" /></Link>
                                    </div>
                                    <p>Lorem Ipsum is simply is dumiomy is text Lorem Ipsum is simply</p>
                                    <div className="widget social-widget p-0">
                                        <ul>
                                            <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                            <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/"><i className="ti-pinterest"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-xl-3 col-lg-2 col-md-6 col-sm-12 col-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Our Services</h3>
                                    </div>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/">Services</Link></li>
                                        <li><Link to="/">Portfolio</Link></li>
                                        <li><Link to="/">Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget contact-widget">
                                    <div className="widget-title">
                                        <h3>Address</h3>
                                    </div>
                                    <div className="contact-ft">
                                        <ul>
                                            <li><i className="icon-Group-7042"></i>(629) 555-0129</li>
                                            <li><i className="icon-Group-7043"></i>info@example.com</li>
                                            <li><i className="icon-Group-7044"></i>6391 Elgin St. Celina, 10299</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget subscribe">
                                    <div className="widget-title">
                                        <h3>Get Free Estimate</h3>
                                    </div>
                                    <form action="contact" method="post" className="subscribe-form" onSubmit={handleSubmit}>
                                        <div className="form-field">
                                            <input type="email" placeholder="Your e-mail address" id="email"
                                                required />
                                            <button type="submit"><i className="icon-flyer"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="lower-footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col col-lg-6 col-12">
                                <div className="copy-right">
                                    <p className="copyright"> &copy; 2024 <Link to="/">DesignCurved</Link>, All
                                        Rights
                                        Reserved.</p>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-12">
                                <ul className="lower-footer-link">
                                    <li><Link to="/">Trams & Condition</Link></li>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                    <li><Link to="/">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterThree;