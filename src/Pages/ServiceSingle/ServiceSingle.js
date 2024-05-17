import React, { useEffect } from 'react';
import { pageTitle } from '../PageTitle';
import BreadCrumb  from '../BreadCrumb';
import HeaderOne from '../Header/HeaderOne';
import FooterTwo from '../Footer/FooterTwo';
import { Link } from "react-router-dom";
import WOW from 'wowjs';

import img1 from "../../assets/images/service-single/single.jpg";

const Services = () => {
      pageTitle('Services');

      useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])

      const SubmitHandler = (e) => {
        e.preventDefault()
    }

  return (
    
    <>
        <HeaderOne></HeaderOne>
        <BreadCrumb></BreadCrumb>

        <div className="service-single-page ptb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="serice-details">
                            <div className="details-img">
                                <img src={img1} alt="" />
                            </div>
                            <div className="details-text">
                                <h2>Future of your made insurance business</h2>
                                <p>Aliquam eros posuer loborti viverra laoree ullamcorper posuere viverra ero
                                    justo, posuere lobo viverra laoreet augue mattis fermentum ullamcAliquam
                                    eros posuer loborti viverra laoree ullamcorper posuere viverra ero justo,
                                    posuere lobo viverra laoreet augue mattis fermentum ullamcorper viverraorper
                                    viverra</p>
                                <div className="details-items">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <h3><i className="ti-check"></i> Comprehensive</h3>
                                            <p>Will be distrol acte bioiiy desig is fact that</p>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <h3><i className="ti-check"></i> Holistic Risk</h3>
                                            <p>Will be distrol acte bioiiy desig is fact that</p>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <h3><i className="ti-check"></i> Comprehensive</h3>
                                            <p>Will be distrol acte bioiiy desig is fact that</p>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <h3><i className="ti-check"></i> Holistic Risk</h3>
                                            <p>Will be distrol acte bioiiy desig is fact that</p>
                                        </div>
                                    </div>
                                </div>
                                <p>Aliquam eros justo, posuere loborti viverra laorko matti ullamcor posuere
                                    viverra .Aliquam erosto, posuere lobortis non viverra laoreet augue mis
                                    fermentum ullamcorper viverra lao Aliquam eros justo, posuere loborti
                                    viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                                    posuere lobortis non, viverra laoreet </p>
                            </div>
                            <div className="service-area">
                                <div className="service-wrap">
                                    <div className="row">
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="service-item wow fadeInUp" data-wow-duration="1000ms">
                                                <div className="service-text">
                                                    <h3><Link to="/service-single">Personal Chef</Link></h3>
                                                    <p>A Portfolio is a collection of works that is to showcases for an individual's peoples</p>
                                                    <Link to="/service-single" className="read-more">Read
                                                        More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="service-item wow fadeInUp active"
                                                data-wow-duration="1200ms">
                                                <div className="service-text">
                                                    <h3><Link to="/service-single">Web Development</Link>
                                                    </h3>
                                                    <p>A Portfolio is a collection of works that is to showcases for an individual's peoples</p>
                                                    <Link to="/service-single" className="read-more">Read
                                                        More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="service-item wow fadeInUp" data-wow-duration="1400ms">
                                                <div className="service-text">
                                                    <h3><Link to="/service-single">Digital Marketing</Link>
                                                    </h3>
                                                    <p>A Portfolio is a collection of works that is to showcases for an individual's peoples</p>
                                                    <Link to="/service-single" className="read-more">Read
                                                        More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="service-item wow fadeInUp" data-wow-duration="1600ms">
                                                <div className="service-text">
                                                    <h3><Link to="/service-single">E-commerce
                                                            Solutions</Link></h3>
                                                    <p>A Portfolio is a collection of works that is to showcases for an individual's peoples</p>
                                                    <Link to="/service-single" className="read-more">Read
                                                        More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-sidebar">
                            <div className="widget category-widget">
                                <h3>Category</h3>
                                    <ul>
                                    <li><Link to="#">Professional Liability</Link></li>
                                    <li><Link to="#">Employment Practices</Link></li>
                                    <li><Link to="#">Errors and Omissions (E&O)</Link></li>
                                    <li><Link to="#">Labratory</Link></li>
                                    <li><Link to="#">Eider Services</Link></li>
                                    </ul> 
                            </div>
                            <div className="widget info-widget">
                                <h3>Information</h3>
                                <form method="post" onSubmit={SubmitHandler}>
                                    <div className="form-field">
                                        <input type="text" placeholder="Full name" />
                                        <input type="text" placeholder="Phone nubmer" />
                                        <button>Submit Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <FooterTwo></FooterTwo>
    </>
  );
};

export default Services;