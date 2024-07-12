import React from 'react';
import { pageTitle } from '../PageTitle';
import BreadCrumb  from '../BreadCrumb';
import HeaderTwo from '../Header/HeaderTwo';
import FooterTwo from '../Footer/FooterTwo';
import { Link } from "react-router-dom";

import img1 from "../../assets/images/blog-single/img-1.jpg";
import img2 from "../../assets/images/blog-single/img-2.jpg";
import img4 from "../../assets/images/recent-post/img-1.jpg";
import img5 from "../../assets/images/recent-post/img-2.jpg";
import img6 from "../../assets/images/recent-post/img-3.jpg";
import img7 from "../../assets/images/blog/about.png";

const BlogSingleLeft = () => {
      pageTitle('Blog Single Left');

      const SubmitHandler = (e) => {
        e.preventDefault()
    }

  return (
    
    <>
        <HeaderTwo></HeaderTwo>
        <BreadCrumb></BreadCrumb>
       
        <section className"blog-single-page-area ptb-120">
            <div className"container">
                <div className"row">
                    <div className"col-lg-4 col-md-8 col-12">
                        <div className"blog-sidebar">
                            <div className"search-widget">
                                <form method="post" onSubmit={SubmitHandler}>
                                    <div>
                                        <input type="text" className"form-control" placeholder="Search Here" />
                                        <button type="submit"><i className"ti-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div className"category-widget widget">
                                <h3>Category</h3>
                                <ul>
                                    <li><Link to="/blog-single"><span><i className"icon-arrow"></i>Creative
                                                Design Solutions</span> (3)</Link></li>
                                    <li><Link to="/blog-single"><span><i className"icon-arrow"></i>Web
                                                Development Wizardry</span> (1)</Link></li>
                                    <li><Link to="/blog-single"><span><i className"icon-arrow"></i>Content
                                                Creation and Strategy</span> (4)</Link></li>
                                    <li><Link to="/blog-single"><span><i className"icon-arrow"></i>UI/UX Design
                                                Innovation</span> (4)</Link></li>
                                </ul>
                            </div>
                            <div className"recent-post widget">
                                <h3>Recent Posts</h3>
                                <div className"post">
                                    <div className"post-img">
                                        <img src={img4} alt="" />
                                    </div>
                                    <div className"post-content">
                                        <ul>
                                            <li><i className"ti-folder"></i></li>
                                            <li>Category</li>
                                        </ul>
                                        <h4><Link to="/blog-single">A picture is worth standard and stand us
                                                return loram</Link></h4>
                                    </div>
                                </div>
                                <div className"post">
                                    <div className"post-img">
                                        <img src={img5} alt="" />
                                    </div>
                                    <div className"post-content">
                                        <ul>
                                            <li><i className"ti-folder"></i></li>
                                            <li>Category</li>
                                        </ul>
                                        <h4><Link to="/blog-single">the regular hardster standard and stand
                                                us return loram</Link></h4>
                                    </div>
                                </div>
                                <div className"post">
                                    <div className"post-img">
                                        <img src={img6} alt="" />
                                    </div>
                                    <div className"post-content">
                                        <ul>
                                            <li><i className"ti-folder"></i></li>
                                            <li>Category</li>
                                        </ul>
                                        <h4><Link to="/blog-single">A picture is worth standard and stand us
                                                return loram</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className"widget about-widget">
                                <h3>About Me</h3>
                                <div className"img-holder">
                                    <img src={img7} alt="" />
                                </div>
                                <h4>fazil Tora smarle</h4>
                                <p>Aliquam eros justo, posuere loborti viverra ullamcorper posuere viverra
                                    .Aliquam eros justo, posuere </p>
                                <div className"social">
                                    <ul className"clearfix">
                                        <li><Link to="#"><i className"ti-facebook"></i></Link></li>
                                        <li><Link to="#"><i className"ti-twitter-alt"></i></Link></li>
                                        <li><Link to="#"><i className"ti-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className"tag-widget widget">
                                <h3>Popular Tags</h3>
                                <ul>
                                    <li><Link to="/blog-single">All Project</Link></li>
                                    <li><Link to="/blog-single">Architecher</Link></li>
                                    <li><Link to="/blog-single">Graphics</Link></li>
                                    <li><Link to="/blog-single">Interiour</Link></li>
                                    <li><Link to="/blog-single">Starts</Link></li>
                                    <li><Link to="/blog-single">Start shape</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className"col col-lg-8 col-md-12 col-12">
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

export default BlogSingleLeft;