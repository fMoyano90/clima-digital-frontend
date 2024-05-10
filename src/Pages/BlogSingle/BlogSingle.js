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

const BlogSingle = () => {
      pageTitle('Blog Single');

      const SubmitHandler = (e) => {
        e.preventDefault()
    }

  return (
    
    <>
        <HeaderTwo></HeaderTwo>
        <BreadCrumb></BreadCrumb>
       
        <section class="blog-single-page-area ptb-120">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-8 col-md-12 col-12">
                        <div class="blog-single-wrap">
                            <div class="blog-single-text">
                                <div class="blog-img">
                                    <img src={img1} alt="" />
                                    <ul>
                                        <li>By Stanio lainto</li>
                                        <li><i class="ti-tag"></i> Web design</li>
                                        <li><i class="ti-comments"></i> Comments (05)</li>
                                    </ul>
                                    <div class="date"><span>21 September 2022 </span></div>
                                </div>
                            </div>
                            <div class="blog-single-text-wrap">
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
                            <div class="detail-img">
                                <div class="row">
                                    <div class="col-lg-8 col-md-6 col-12">
                                        <p>Ished fact that a reader will be distrol acted bioii the.ished fact
                                            th reader will besi distrol ac laoreet Aliquam fact that a reader
                                            will be distrol acted Aliquam posuere loborti viverra laoreet</p>
                                        <p>Aliquam eros justo, posuere loborti viverra laoreet matt design the
                                            ullamcorper posuere viverra .Aliquam eros justo posuere inni
                                            lobortis non, viverra laoreet augue mattis</p>
                                        <p>Aliquam eros justo, posuere loborti viverra laoreet matti design an
                                            the ullamcorper posuere viverra .Aliquam eros</p>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <img src={img2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="more-posts">
                                <div class="previous-post">
                                    <Link to="/blog-single">
                                        <span class="post-control-link">Previous Post</span>
                                        <span class="post-name">Insure your peace of mind.</span>
                                    </Link>
                                </div>
                                <div class="next-post">
                                    <Link to="/blog-left-sidebar">
                                        <span class="post-control-link">Next Post</span>
                                        <span class="post-name">Coverage you can count on</span>
                                    </Link>
                                </div>
                            </div>

                            <div class="tag-share clearfix">
                                <div class="tag">
                                    <ul>
                                        <li><Link to="#"><strong>Keyword:</strong></Link></li>
                                        <li><Link to="#">Interiour</Link></li>
                                        <li><Link to="#">Ux design</Link></li>
                                        <li><Link to="#">Graphics</Link></li>
                                    </ul>
                                </div>
                                <div class="share">
                                    <ul>
                                        <li><Link to="#"><i class="ti-facebook"></i></Link></li>
                                        <li><Link to="#"><i class="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="#"><i class="ti-linkedin"></i></Link></li>
                                        <li><Link to="#"><i class="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="comments-area">
                                <div class="comments-section">
                                    <h3 class="comments-title">5 Comments</h3>
                                    <ol class="comments">
                                        <li class="comment even thread-even depth-1" id="comment-1">
                                            <div id="div-comment-1">
                                                <div class="comment-theme">
                                                    <div class="comment-image"><img src="assets/images/blog-single/author1.png" alt="" /></div>
                                                </div>
                                                <div class="comment-main-area">
                                                    <div class="comment-wrapper">
                                                        <div class="comments-meta">
                                                            <h4>fazil Tora <span class="comments-date">September 16, 2023</span></h4>
                                                        </div>
                                                        <div class="comment-area">
                                                            <p>Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet Aliquam fact that a reader will be distrol acted Aliquam eros justo.</p>
                                                            <div class="comments-reply">
                                                                <Link class="comment-reply-link" to="#"><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="comment">
                                            <div>
                                                <div class="comment-theme">
                                                    <div class="comment-image"><img src="assets/images/blog-single/author2.png" alt="" /></div>
                                                </div>
                                                <div class="comment-main-area">
                                                    <div class="comment-wrapper">
                                                        <div class="comments-meta">
                                                            <h4>kawa <span class="comments-date">says Oct 15, 2020 at 11:00am</span></h4>
                                                        </div>
                                                        <div class="comment-area">
                                                            <p>When Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back</p>
                                                            <div class="comments-reply">
                                                                <Link  class="comment-reply-link" to="#"><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div> 
                            <div class="comment-respond">
                                <div class="comment-respond-inner">
                                    <h3 class="comment-reply-title">Leave a comment</h3>
                                    <p>By using form u agree with the message sorage, you can BlogSingle us directly now
                                    </p>
                                    <form class="comment-form" method="post" onSubmit={SubmitHandler}>
                                        <div class="form-inputs">
                                            <div class="form-field">
                                                <label>Your Name</label>
                                                <input type="text" placeholder="Name" />
                                            </div>
                                            <div class="form-textarea">
                                                <label>Message</label>
                                                <textarea id="comment" placeholder="Message here"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-submit">
                                            <input id="submit" value="Send Message" type="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-8 col-12">
                        <div class="blog-sidebar">
                            <div class="search-widget">
                                <form method="post" onSubmit={SubmitHandler}>
                                    <div>
                                        <input type="text" class="form-control" placeholder="Search Here" />
                                        <button type="submit"><i class="ti-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div class="category-widget widget">
                                <h3>Category</h3>
                                <ul>
                                    <li><Link to="/blog-single"><span><i class="icon-arrow"></i>Creative
                                                Design Solutions</span> (3)</Link></li>
                                    <li><Link to="/blog-single"><span><i class="icon-arrow"></i>Web
                                                Development Wizardry</span> (1)</Link></li>
                                    <li><Link to="/blog-single"><span><i class="icon-arrow"></i>Content
                                                Creation and Strategy</span> (4)</Link></li>
                                    <li><Link to="/blog-single"><span><i class="icon-arrow"></i>UI/UX Design
                                                Innovation</span> (4)</Link></li>
                                </ul>
                            </div>
                            <div class="recent-post widget">
                                <h3>Recent Posts</h3>
                                <div class="post">
                                    <div class="post-img">
                                        <img src={img4} alt="" />
                                    </div>
                                    <div class="post-content">
                                        <ul>
                                            <li><i class="ti-folder"></i></li>
                                            <li>Category</li>
                                        </ul>
                                        <h4><Link to="/blog-single">A picture is worth standard and stand us
                                                return loram</Link></h4>
                                    </div>
                                </div>
                                <div class="post">
                                    <div class="post-img">
                                        <img src={img5} alt="" />
                                    </div>
                                    <div class="post-content">
                                        <ul>
                                            <li><i class="ti-folder"></i></li>
                                            <li>Category</li>
                                        </ul>
                                        <h4><Link to="/blog-single">the regular hardster standard and stand
                                                us return loram</Link></h4>
                                    </div>
                                </div>
                                <div class="post">
                                    <div class="post-img">
                                        <img src={img6} alt="" />
                                    </div>
                                    <div class="post-content">
                                        <ul>
                                            <li><i class="ti-folder"></i></li>
                                            <li>Category</li>
                                        </ul>
                                        <h4><Link to="/blog-single">A picture is worth standard and stand us
                                                return loram</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="widget about-widget">
                                <h3>About Me</h3>
                                <div class="img-holder">
                                    <img src={img7} alt="" />
                                </div>
                                <h4>fazil Tora smarle</h4>
                                <p>Aliquam eros justo, posuere loborti viverra ullamcorper posuere viverra
                                    .Aliquam eros justo, posuere </p>
                                <div class="social">
                                    <ul class="clearfix">
                                        <li><Link to="#"><i class="ti-facebook"></i></Link></li>
                                        <li><Link to="#"><i class="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="#"><i class="ti-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="tag-widget widget">
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
                </div>
            </div>
        </section>
      
        <FooterTwo></FooterTwo>
    </>
  );
};

export default BlogSingle;