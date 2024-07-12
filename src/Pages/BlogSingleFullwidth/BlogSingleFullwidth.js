import React from 'react';
import { pageTitle } from '../PageTitle';
import BreadCrumb  from '../BreadCrumb';
import HeaderTwo from '../Header/HeaderTwo';
import FooterTwo from '../Footer/FooterTwo';
import { Link } from "react-router-dom";

import img1 from "../../assets/images/blog-single/img-1.jpg";
import img2 from "../../assets/images/blog-single/img-2.jpg";

const BlogSingleFullwidth = () => {
      pageTitle('BlogSingleFullwidth');

      const SubmitHandler = (e) => {
        e.preventDefault()
    }

  return (
    
    <>
        <HeaderTwo></HeaderTwo>
        <BreadCrumb></BreadCrumb>
       
        <section className"blog-single-page-area full-width ptb-120">
            <div className"container">
                <div className"row">
                    <div className"col col-lg-12 col-md-12 col-12">
                        <div className"blog-single-wrap">
                            <div className"blog-single-text">
                                <div className"blog-img">
                                    <img src={img1} alt="" />
                                    <ul>
                                        <li>By Stanio lainto</li>
                                        <li><i className"ti-tag"></i> Web design</li>
                                        <li><i className"ti-comments"></i> Comments (05)</li>
                                    </ul>
                                    <div className"date"><span>21 September 2022 </span></div>
                                </div>
                            </div>
                            <div className"blog-single-text-wrap">
                                <h2>Elevate your brand with a the stunning portfolio</h2>
                                <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                                    viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis
                                    fermentum ullamcorper viverra laoreet Aliquam </p>
                                <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                                    viverra .Aliquam eros justoposuere lobortis non, viverra laoreet augue
                                    mattis fermentum ullamcorper viverra laore Aliquam eros justo posuere desig
                                    loborti viverra laoreet matti ullamcorper posuere viverra </p>
                            </div>
                            <blockquote>
                                Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                                viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis
                                fermentum ullamcorper viverra laoreet.
                                <span>- Mark wood</span>
                            </blockquote>
                            <h2>Showcase your talent with our portfolio</h2>
                            <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                                viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis
                                fermentum ullamcorper viverra laoreet Aliquam eros </p>
                            <div className"detail-img">
                                <div className"row">
                                    <div className"col-lg-8 col-md-6 col-12">
                                        <p>Ished fact that a reader will be distrol acted bioii the.ished fact
                                            th reader will besi distrol ac laoreet Aliquam fact that a reader
                                            will be distrol acted Aliquam posuere loborti viverra laoreet</p>
                                        <p>Aliquam eros justo, posuere loborti viverra laoreet matt design the
                                            ullamcorper posuere viverra .Aliquam eros justo posuere inni
                                            lobortis non, viverra laoreet augue mattis</p>
                                        <p>Aliquam eros justo, posuere loborti viverra laoreet matti design an
                                            the ullamcorper posuere viverra .Aliquam eros</p>
                                    </div>
                                    <div className"col-lg-4 col-md-6 col-12">
                                        <img src={img2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className"more-posts">
                                <div className"previous-post">
                                    <Link to="/blog-single">
                                        <span className"post-control-link">Previous Post</span>
                                        <span className"post-name">Insure your peace of mind.</span>
                                    </Link>
                                </div>
                                <div className"next-post">
                                    <Link to="/blog-left-sidebar">
                                        <span className"post-control-link">Next Post</span>
                                        <span className"post-name">Coverage you can count on</span>
                                    </Link>
                                </div>
                            </div>

                            <div className"tag-share clearfix">
                                <div className"tag">
                                    <ul>
                                        <li><Link to="#"><strong>Keyword:</strong></Link></li>
                                        <li><Link to="#">Interiour</Link></li>
                                        <li><Link to="#">Ux design</Link></li>
                                        <li><Link to="#">Graphics</Link></li>
                                    </ul>
                                </div>
                                <div className"share">
                                    <ul>
                                        <li><Link to="#"><i className"ti-facebook"></i></Link></li>
                                        <li><Link to="#"><i className"ti-twitter-alt"></i></Link></li>
                                        <li><Link to="#"><i className"ti-linkedin"></i></Link></li>
                                        <li><Link to="#"><i className"ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className"comments-area">
                                <div className"comments-section">
                                    <h3 className"comments-title">5 Comments</h3>
                                    <ol className"comments">
                                        <li className"comment even thread-even depth-1" id="comment-1">
                                            <div id="div-comment-1">
                                                <div className"comment-theme">
                                                    <div className"comment-image"><img src="assets/images/blog-single/author1.png" alt="" /></div>
                                                </div>
                                                <div className"comment-main-area">
                                                    <div className"comment-wrapper">
                                                        <div className"comments-meta">
                                                            <h4>fazil Tora <span className"comments-date">September 16, 2023</span></h4>
                                                        </div>
                                                        <div className"comment-area">
                                                            <p>Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet Aliquam fact that a reader will be distrol acted Aliquam eros justo.</p>
                                                            <div className"comments-reply">
                                                                <Link className"comment-reply-link" to="#"><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className"comment">
                                            <div>
                                                <div className"comment-theme">
                                                    <div className"comment-image"><img src="assets/images/blog-single/author2.png" alt="" /></div>
                                                </div>
                                                <div className"comment-main-area">
                                                    <div className"comment-wrapper">
                                                        <div className"comments-meta">
                                                            <h4>kawa <span className"comments-date">says Oct 15, 2020 at 11:00am</span></h4>
                                                        </div>
                                                        <div className"comment-area">
                                                            <p>When Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back</p>
                                                            <div className"comments-reply">
                                                                <Link  className"comment-reply-link" to="#"><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div> 
                            <div className"comment-respond">
                                <div className"comment-respond-inner">
                                    <h3 className"comment-reply-title">Leave a comment</h3>
                                    <p>By using form u agree with the message sorage, you can contact us directly now
                                    </p>
                                    <form className"comment-form" method="post" onSubmit={SubmitHandler}>
                                        <div className"form-inputs">
                                            <div className"form-field">
                                                <label>Your Name</label>
                                                <input type="text" placeholder="Name" />
                                            </div>
                                            <div className"form-textarea">
                                                <label>Message</label>
                                                <textarea id="comment" placeholder="Message here"></textarea>
                                            </div>
                                        </div>
                                        <div className"form-submit">
                                            <input id="submit" value="Send Message" type="submit" />
                                        </div>
                                    </form>
                                </div>
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

export default BlogSingleFullwidth;