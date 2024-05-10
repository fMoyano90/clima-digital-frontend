import React, {useEffect} from 'react';
import CountUp from 'react-countup';
import WOW from 'wowjs';

const FunfactThree = () => {
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
  

  return (

  
        <div className="funfact-area ptb-120 pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="info wow fadeInUp" data-wow-duration="1000ms">
                            <p>Winning award</p>
                            <h3><CountUp className="odometer" start={0} end={200} />+</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="info wow fadeInUp" data-wow-duration="1200ms">
                            <p>Total Project</p>
                            <h3><CountUp className="odometer" start={0} end={650} />+</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="info wow fadeInUp" data-wow-duration="1400ms">
                            <p>Happy Clients</p>
                            <h3><CountUp className="odometer" start={0} end={120} />+</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="info wow fadeInUp" data-wow-duration="1400ms">
                            <p>Clients Review</p>
                            <h3><CountUp className="odometer" start={0} end={210} />+</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
  
  );
};

export default FunfactThree;
