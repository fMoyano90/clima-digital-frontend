import React from 'react';

const NewsletterThree = () => {
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

  return (

    <section className="ch-newsletter-area">
        <div className="container">
            <div className="ch-newsletter-wrap">
                <h2>Explore the art of portfolios</h2>
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="newsletter-form">
                            <form method="post" onSubmit={SubmitHandler}>
                                <div className="form-field">
                                    <input type="email" placeholder="Your e-mail address" id="semail"  required="" />
                                    <button type="submit">Subscribe Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
  );
};

export default NewsletterThree;
