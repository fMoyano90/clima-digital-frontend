import React from 'react';
import { pageTitle } from '../PageTitle';
import BreadCrumb  from '../BreadCrumb';
import HeaderTwo from '../Header/HeaderTwo';
import FooterTwo from '../Footer/FooterTwo';
import { Link } from "react-router-dom";

import img1 from "../../assets/images/team/team-1.jpg";

const TeamSingle = () => {
      pageTitle('Team Single');

      const SubmitHandler = (e) => {
        e.preventDefault()
    }

  return (
    
    <>
        <HeaderTwo></HeaderTwo>
        <BreadCrumb></BreadCrumb>

        <section className="team-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-4 col-12">
                        <div className="team-single-sidebar">
                            <div className="widget team-widget">
                                <div className="img-holder">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="team-title">
                                    <h2>Jhon Michel</h2>
                                    <span>Founder</span>
                                </div>
                            </div>
                            <div className="widget contact-widget">
                                <h3>Contact info</h3>
                                <ul>
                                    <li><span>Phone: </span>+1234 - 0006514654</li>
                                    <li><span>Email: </span>Support@emailhub.net.com</li>
                                    <li><span>Address: </span>Dhaka 102, utl 1216, road 45</li>
                                    <li><span>Office hour: </span>10am - 5pm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-8 col-12">
                        <div className="team-single-content">
                            <h2>Personal Info</h2>
                            <div className="table-responsive info-table">
                                <table className="table">
                                    <colgroup>
                                        <col className="first-col" />
                                        <col className="sec-col" />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td>Position</td>
                                            <td>Team Leader</td>
                                        </tr>
                                        <tr>
                                            <td>Location</td>
                                            <td>Dhaka 102, utl 1216, road 45</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>+1234 - 0006514654</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>user@email.com</td>
                                        </tr>
                                        <tr>
                                            <td>Social</td>
                                            <td>
                                                <ul>
                                                    <li><Link to="#"><i className="ti-facebook"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-twitter-alt"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-linkedin"></i></Link></li>
                                                    <li><Link to="#"><i className="ti-pinterest"></i></Link></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Languages</td>
                                            <td>English(fluent), Greek, Chinese.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h3>Overview</h3>
                            <p>
                                Prior to joining Netflix in 2008, Anna was senior vice president of consumer
                                electronics products for Macrovision Solutions Corp. (later renamed to Rovi
                                Corporation) and previously held positions at digital entertainment software
                                provider, Mediabolic Inc., Red Hat Network, the provider of Linux and Open
                                Source technology, and online vendor Wine joining Netflix in 2008, Anna was senior vice president of consumer
                                electronics products for Macrovision Solutions Corp. (later renamed to Rovi
                                Corporation) and previously held positions at digital entertainment software
                                provider, Mediabolic Inc., Red Hat Network, the provider of Linux and Open
                                Source technology, and online vendor Wine.
                            </p>
                            <div className="contact">
                                <h3>Contact with me</h3>
                                <div className="contact-form">
                                    <form method="post" onSubmit={SubmitHandler}>
                                        <div className="half-col">
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div className="half-col">
                                            <input type="email" className="form-control" placeholder="Your Email" />
                                        </div>
                                        <div>
                                            <textarea className="form-control" placeholder="Message..."></textarea>
                                        </div>
                                        <div className="submit-btn-wrapper">
                                            <button type="button" className="ch-btn-style-3 ch-btn-animated">Appointment</button>
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

export default TeamSingle;