import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import news1 from "../../../assets/images/blog/blog-8.jpg";
import news2 from "../../../assets/images/blog/blog-9.jpg";
import news3 from "../../../assets/images/blog/blog-10.jpg";
import WOW from 'wowjs';

const BlogFour = () => {
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])

    const blogData = [
      {
        id: 1,
        title: 'Startups and established can businesses',
        date: 'October 19, 2024',
        author: ' John Duo',
        image: news1,
        button_text: 'Read More',
        href: '/blog-details',
        time: '1200ms',
      },
      {
        id: 2,
        title: 'Startups and established can businesses',
        date: 'October 25, 2024',
        author: 'Robert Lee',
        image: news2,
        button_text: 'Read More',
        href: '/blog-single',
        time: '1400ms',
      },
      {
        id: 3,
        title: 'Startups and established can businesses',
        date: 'October 25, 2024',
        author: 'Robert Lee',
        image: news3,
        button_text: 'Read More',
        href: '/blog-single',
        time: '1600ms',
      },
      
    ];
    return (

        <section className="ch-blog-area-s2 ptb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-12">
                        <div className="ch-top-title-s2">
                            <span>OUR LATEST BLOG</span>
                            <h2 className="site-split-text ch-split-in-up">Showcase your talent <small>with</small> our Latest portfolio</h2>
                        </div>
                    </div>
                </div>
                <div className="blog-items">
                    <div className="row">
                        {blogData.map((item, id)=>(
                            <div className="col-xl-4 col-lg-12 col-md-12 col-12" key={id}>
                                <div className="blog-item wow fadeInUp" data-wow-duration={item.time} >
                                    <div className="blog-img-left">
                                        <div className="blog-img">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <ul>
                                            <li><i className="icon-user"></i> {item.author}</li>
                                            <li><i className="icon-calender"></i>{item.date}</li>
                                        </ul>
                                        <h2><Link to={item.href}>{item.title}</Link>
                                        </h2>
                                        <Link to={item.href} className="ch-btn-style-3 ch-btn-animated">{item.button_text}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
        </section>

    );
};

export default BlogFour;