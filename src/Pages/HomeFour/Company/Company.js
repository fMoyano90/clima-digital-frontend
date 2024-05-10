import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => {

  return (

    <section className="company-area ptb-120">
        <div className="container">
            <div className="company-wrap">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="ch-top-title-s3">
                            <span>Welcome Our Company</span>
                            <h2 className="site-split-text ch-split-in-right">Crafting portfolios that <small>inspire</small> to goood success</h2>
                            <p>Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus volutpat,
                                sodales purus. Nunc quis mauris et eros vulputNulla vitae ex nunc. Morbi
                                quis purus convallis, fermentum metus</p>
                            <Link to="/portfolio" className="ch-btn-style-1 ch-btn-animated">View now</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Link to="#" className="comapny-item">
                            <div className="comapny-item-info">
                                <h4>Unleashing creativity through portfolios</h4>
                                <span>Awards &nbsp; 2016</span>
                            </div>
                            <small>
                                <i className="icon-arrow"></i>
                            </small>
                        </Link>
                        <Link to="#" className="comapny-item">
                            <div className="comapny-item-info">
                                <h4>Unleashing Defending your world</h4>
                                <span>Awards &nbsp; 2020</span>
                            </div>
                            <small>
                                <i className="icon-arrow"></i>
                            </small>
                        </Link>
                        <Link to="#" className="comapny-item">
                            <div className="comapny-item-info">
                                <h4>Safety you can trust</h4>
                                <span>Awards &nbsp; 2016</span>
                            </div>
                            <small>
                                <i className="icon-arrow"></i>
                            </small>
                        </Link>
                        <Link to="#" className="comapny-item">
                            <div className="comapny-item-info">
                                <h4>Keeping you OK every step of the way</h4>
                                <span>Awards &nbsp; 2022</span>
                            </div>
                            <small>
                                <i className="icon-arrow"></i>
                            </small>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
  );
};

export default Company;
