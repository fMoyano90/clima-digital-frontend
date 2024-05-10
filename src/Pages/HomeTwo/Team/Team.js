import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import authorImg1 from "../../../assets/images/team/team-1.jpg";
import authorImg2 from "../../../assets/images/team/team-2.jpg";
import authorImg3 from "../../../assets/images/team/team-3.jpg";
import WOW from 'wowjs';

const Team = () => {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])

  return (

    <section className="team-area ptb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="ch-top-title-s2">
                        <span>Latesr portfolio</span>
                        <h2 className="site-split-text ch-split-in-up">Stand out <small>from the</small> crowd professional portfolio</h2>
                    </div>
                </div>
            </div>
            <div className="team-wrap">
                <div className="row">
                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                        <div className="team-item wow fadeInUp" data-wow-duration="1000ms">
                            <div className="team-img">
                                <img src={authorImg1} alt="" />
                            </div>
                            <div className="team-text">
                                <h3><Link to="/team-single">Leslie Alexander</Link></h3>
                                <span>Founder</span>
                            </div>
                        </div>
                    </div>
                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                        <div className="team-item wow fadeInUp" data-wow-duration="1200ms">
                            <div className="team-img">
                                <img src={authorImg2} alt="" />
                            </div>
                            <div className="team-text">
                                <h3><Link to="/team-single">Bessie Cooper</Link></h3>
                                <span>CEO & Founder</span>
                            </div>
                        </div>
                    </div>
                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                        <div className="team-item wow fadeInUp" data-wow-duration="1400ms">
                            <div className="team-img">
                                <img src={authorImg3} alt="" />
                            </div>
                            <div className="team-text">
                                <h3><Link to="/team-single">Devis Cooper</Link></h3>
                                <span>SEO and Digital</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Team;
