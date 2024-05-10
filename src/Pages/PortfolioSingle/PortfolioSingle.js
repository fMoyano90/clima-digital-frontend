import React from 'react';
import { pageTitle } from '../PageTitle';
import BreadCrumb  from '../BreadCrumb';
import HeaderTwo from '../Header/HeaderTwo';
import FooterTwo from '../Footer/FooterTwo';

import img1 from "../../assets/images/portfolio-single/img-1.jpg";
import img2 from "../../assets/images/portfolio-single/img-2.jpg";
import img3 from "../../assets/images/portfolio-single/img-3.jpg";


const Services = () => {
      pageTitle('Portfolio Single');

    
  return (
    
    <>
        <HeaderTwo></HeaderTwo>
        <BreadCrumb></BreadCrumb>
       
        <div className="portfolio-single ptb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="portfolio-details">
                            <h2>Building communities through real estate design a Transforming spaces enriching
                                lives</h2>
                            <p>Aliquam eros justo, posuere loborti vive rr laoreet matti ullamc orper posu ere
                                viverra .Aliquam eros justo, posuere loborti, vive rra laoreet augue mattis
                                fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti
                                viverra laoreet mat ullamcorper posue Aliquam eros justo, posre lobortis non
                                laoreet augue mattis fermentum laoreet augue mattis fermentum ullamcorper
                                viverra </p>
                            <div className="details-img">
                                <img src={img1} alt="" />
                            </div>
                            <div className="details-text">
                                <h2>Comprehensive</h2>
                                <p>Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu
                                    ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet
                                    augue s ferentum ullamcorper viverra laoreet Aliquam eros justo, posuere
                                    loborti viverra laoreet mat ullamcorper posue loborti viveAliquam eros
                                    justo, posuere loborti vive rra laoreet </p>
                                <p>Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu
                                    ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet
                                    augue s ferAliquam eros justo, posuere loborti vive rra laoreet matti ullamc
                                    orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra
                                    laoreet augue s ferentum ullamcorper </p>
                                <div className="details-items">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <img src={img2} alt="" />
                                            <h4>quam facilis omnis</h4>
                                            <p>Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
                                                orper posu ere viverra .Aliquam eros justo, posuere lobortis
                                                non, vive rra laoreet augue s ferentum ullamcorper viverra
                                                laoreet Aliquam</p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <img src={img3} alt="" />
                                            <h4>mollitia consectetur fugiat</h4>
                                            <p>Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
                                                orper posu ere viverra .Aliquam eros justo, posuere lobortis
                                                non, vive rra laoreet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-sidebar">
                            <div className="details-widget">
                                <div className="details-widget-item">
                                    <span>Client</span>
                                    <h4>Sandi leo rakiul</h4>
                                </div>
                                <div className="details-widget-item">
                                    <span>150000  USD</span>
                                    <h4>Consulation real estate </h4>
                                </div>
                                <div className="details-widget-item">
                                    <span>Category</span>
                                    <h4>Planing, Real Estate</h4>
                                </div>
                                <div className="details-widget-item">
                                    <span>Date</span>
                                    <h4>November 19, 2022</h4>
                                </div>
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