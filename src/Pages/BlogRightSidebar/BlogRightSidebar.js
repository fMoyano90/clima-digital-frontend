import React from "react";
import { pageTitle } from "../PageTitle";
import BreadCrumb from "../BreadCrumb";
import HeaderOne from "../Header/HeaderOne";
import FooterTwo from "../Footer/FooterTwo";
import { Link } from "react-router-dom";

import img1 from "../../assets/images/blog/blog-11.jpg";
import img2 from "../../assets/images/blog/blog-12.jpg";
import img3 from "../../assets/images/blog/blog-13.jpg";
import img4 from "../../assets/images/recent-post/img-1.jpg";
import img5 from "../../assets/images/recent-post/img-2.jpg";
import img6 from "../../assets/images/recent-post/img-3.jpg";

const BlogRightSidebar = () => {
  pageTitle("Blog Right Sidebar");

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <HeaderOne></HeaderOne>
      <BreadCrumb></BreadCrumb>

      <section className='blog-page-area ptb-120'>
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-8 col-md-12 col-12'>
              <div className='blog-page-left'>
                <div className='blog-item'>
                  <div className='blog-img'>
                    <img src={img1} alt='' />
                    <ul>
                      <li>
                        <i className='ti-tag'></i> Web design
                      </li>
                      <li>
                        <i className='ti-comments'></i> (05)
                      </li>
                    </ul>
                  </div>
                  <div className='blog-content'>
                    <h2>
                      <Link to='/blog-single'>
                        Elevate your brand with a the stunning portfolio
                      </Link>
                    </h2>
                    <p>
                      Aliquam eros justo, posuere loborti viverra lao
                      ullamcorper posuere viverra .Aliquam eros justo, posuere
                      Aliquam eros justo, posuere loborti viverra laoreet matti
                      ullamcorper
                    </p>
                    <Link
                      className='ch-btn-style-3 ch-btn-animated'
                      to='/blog-single'
                    >
                      Leer Más
                    </Link>
                  </div>
                </div>
                <div className='blog-item'>
                  <div className='blog-img'>
                    <img src={img2} alt='' />
                    <ul>
                      <li>
                        <i className='ti-tag'></i> Web design
                      </li>
                      <li>
                        <i className='ti-comments'></i> (05)
                      </li>
                    </ul>
                  </div>
                  <div className='blog-content'>
                    <h2>
                      <Link to='/blog-single'>
                        Crafting portfolios that inspire success
                      </Link>
                    </h2>
                    <p>
                      Aliquam eros justo, posuere loborti viverra lao
                      ullamcorper posuere viverra .Aliquam eros justo, posuere
                      Aliquam eros justo, posuere loborti viverra laoreet matti
                      ullamcorper
                    </p>
                    <Link
                      className='ch-btn-style-3 ch-btn-animated'
                      to='/blog-single'
                    >
                      Leer Más
                    </Link>
                  </div>
                </div>
                <div className='blog-item'>
                  <div className='blog-img'>
                    <img src={img3} alt='' />
                    <ul>
                      <li>
                        <i className='ti-tag'></i> Web design
                      </li>
                      <li>
                        <i className='ti-comments'></i> (05)
                      </li>
                    </ul>
                  </div>
                  <div className='blog-content'>
                    <h2>
                      <Link to='/blog-single'>
                        Stand out from the crowd with a professional portfolio
                      </Link>
                    </h2>
                    <p>
                      Aliquam eros justo, posuere loborti viverra lao
                      ullamcorper posuere viverra .Aliquam eros justo, posuere
                      Aliquam eros justo, posuere loborti viverra laoreet matti
                      ullamcorper
                    </p>
                    <Link
                      className='ch-btn-style-3 ch-btn-animated'
                      to='/blog-single'
                    >
                      Leer Más
                    </Link>
                  </div>
                </div>
                <div className='pagination-wrapper pagination-wrapper-center'>
                  <ul className='pg-pagination'>
                    <li>
                      <Link to='#' aria-label='Previous'>
                        <i className='ti-arrow-left'></i>
                      </Link>
                    </li>
                    <li className='active'>
                      <Link to='#'>1</Link>
                    </li>
                    <li>
                      <Link to='#'>2</Link>
                    </li>
                    <li>
                      <Link to='#'>3</Link>
                    </li>
                    <li>
                      <Link to='#' aria-label='Next'>
                        <i className='ti-arrow-right'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-8 col-12'>
              <div className='blog-sidebar'>
                <div className='search-widget'>
                  <form method='post' onSubmit={SubmitHandler}>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Buscar Aquí'
                      />
                      <button type='submit'>
                        <i className='ti-search'></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className='category-widget widget'>
                  <h3>Categorías</h3>
                  <ul>
                    <li>
                      <Link to='/blog-single'>
                        <span>
                          <i className='icon-arrow'></i>Creative Design
                          Solutions
                        </span>{" "}
                        (3)
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog-single'>
                        <span>
                          <i className='icon-arrow'></i>Web Development Wizardry
                        </span>{" "}
                        (1)
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog-single'>
                        <span>
                          <i className='icon-arrow'></i>Content Creation and
                          Strategy
                        </span>{" "}
                        (4)
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog-single'>
                        <span>
                          <i className='icon-arrow'></i>UI/UX Design Innovation
                        </span>{" "}
                        (4)
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='recent-post widget'>
                  <h3>Post Recientes</h3>
                  <div className='post'>
                    <div className='post-img'>
                      <img src={img4} alt='' />
                    </div>
                    <div className='post-content'>
                      <ul>
                        <li>
                          <i className='ti-folder'></i>
                        </li>
                        <li>Categoría</li>
                      </ul>
                      <h4>
                        <Link to='/blog-single'>
                          A picture is worth standard and stand us return loram
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className='post'>
                    <div className='post-img'>
                      <img src={img5} alt='' />
                    </div>
                    <div className='post-content'>
                      <ul>
                        <li>
                          <i className='ti-folder'></i>
                        </li>
                        <li>Categoría</li>
                      </ul>
                      <h4>
                        <Link to='/blog-single'>
                          the regular hardster standard and stand us return
                          loram
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className='post'>
                    <div className='post-img'>
                      <img src={img6} alt='' />
                    </div>
                    <div className='post-content'>
                      <ul>
                        <li>
                          <i className='ti-folder'></i>
                        </li>
                        <li>Categoría</li>
                      </ul>
                      <h4>
                        <Link to='/blog-single'>
                          A picture is worth standard and stand us return loram
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
                {/*  <div className='widget about-widget'>
                  <h3>About Me</h3>
                  <div className='img-holder'>
                    <img src={img7} alt='' />
                  </div>
                  <h4>fazil Tora smarle</h4>
                  <p>
                    Aliquam eros justo, posuere loborti viverra ullamcorper
                    posuere viverra .Aliquam eros justo, posuere{" "}
                  </p>
                  <div className='social'>
                    <ul className='clearfix'>
                      <li>
                        <Link to='#'>
                          <i className='ti-facebook'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='#'>
                          <i className='ti-twitter-alt'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='#'>
                          <i className='ti-linkedin'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className='tag-widget widget'>
                  <h3>Etiquetas Populares</h3>
                  <ul>
                    <li>
                      <Link to='/blog-single'>All Project</Link>
                    </li>
                    <li>
                      <Link to='/blog-single'>Architecher</Link>
                    </li>
                    <li>
                      <Link to='/blog-single'>Graphics</Link>
                    </li>
                    <li>
                      <Link to='/blog-single'>Interiour</Link>
                    </li>
                    <li>
                      <Link to='/blog-single'>Starts</Link>
                    </li>
                    <li>
                      <Link to='/blog-single'>Start shape</Link>
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

export default BlogRightSidebar;
