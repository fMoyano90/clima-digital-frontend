import React from 'react';
import { pageTitle } from '../PageTitle';
import BreadCrumb  from '../BreadCrumb';
import HeaderTwo from '../Header/HeaderTwo';
import FooterTwo from '../Footer/FooterTwo';
import { Link } from "react-router-dom";

import img1 from "../../assets/images/blog/blog-11.jpg";
import img2 from "../../assets/images/blog/blog-12.jpg";
import img3 from "../../assets/images/blog/blog-13.jpg";

const BlogFullwidth = () => {
      pageTitle('Blog Fullwidth');

  return (
    
    <>
        <HeaderTwo></HeaderTwo>
        <BreadCrumb></BreadCrumb>
       
        <section className="blog-page-area blog-page-full ptb-120">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12 col-md-12 col-12">
                        <div className="blog-page-left">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={img1} alt="" />
                                    <ul>
                                        <li><i className="ti-tag"></i> Web design</li>
                                        <li><i className="ti-comments"></i> Comments (05)</li>
                                    </ul>
                                </div>
                                <div className="blog-content">
                                    <h2><Link to="/blog-single">Elevate your brand with a the stunning portfolio</Link></h2>
                                    <p>Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper</p>
                                    <Link  className="ch-btn-style-3 ch-btn-animated" to="/blog-single">Read More</Link>
                                </div>
                            </div>
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={img2} alt="" />
                                    <ul>
                                        <li><i className="ti-tag"></i> Web design</li>
                                        <li><i className="ti-comments"></i> Comments (05)</li>
                                    </ul>
                                </div>
                                <div className="blog-content">
                                    <h2><Link to="/blog-single">Crafting portfolios that inspire success</Link></h2>
                                    <p>Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper</p>
                                    <Link  className="ch-btn-style-3 ch-btn-animated" to="/blog-single">Read More</Link>
                                </div>
                            </div>
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={img3} alt="" />
                                    <ul>
                                        <li><i className="ti-tag"></i> Web design</li>
                                        <li><i className="ti-comments"></i> Comments (05)</li>
                                    </ul>
                                </div>
                                <div className="blog-content">
                                    <h2><Link to="/blog-single">Stand out from the crowd with a professional portfolio</Link></h2>
                                    <p>Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper</p>
                                    <Link  className="ch-btn-style-3 ch-btn-animated" to="/blog-single">Read More</Link>
                                </div>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-center">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to="#" aria-label="Previous">
                                            <i className="ti-arrow-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to="#">1</Link></li>
                                    <li><Link to="#">2</Link></li>
                                    <li><Link to="#">3</Link></li>
                                    <li>
                                        <Link to="#" aria-label="Next">
                                            <i className="ti-arrow-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <FooterTwo></FooterTwo>
    </>
  );
};

export default BlogFullwidth;