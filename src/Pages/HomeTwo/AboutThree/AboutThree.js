import React from 'react';
import { Link } from 'react-router-dom';

const AboutThree = () => {

  return (

    <section className="about-event-area">
        <div className="container">
            <div className="event-wrap">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="ch-top-title">
                            <span>About The Event</span>
                            <h2 className="site-split-text ch-split-in-up">Captivating <small>portfolios</small> that lasting impression</h2>
                            <Link to="/project" className="ch-btn-style-2">View now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
  );
};

export default AboutThree;
