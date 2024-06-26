import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import backgroundVideo from "../../../assets/images/213616_small.mp4"; // Asegúrate de que la ruta sea correcta

const styles = {
  subTitulo: {
    color: "#fff !important",
  },
};

const BannerOne = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const y = e.pageY - e.currentTarget.offsetTop;
      e.currentTarget.querySelector("span").style.top = y + "px";
    };

    const handleMouseLeave = (e) => {
      const x = e.pageX - e.currentTarget.offsetLeft;
      e.currentTarget.querySelector("span").style.left = x + "px";
    };

    const btnHoverAll = document.querySelectorAll(".ch-btn-animated");

    if (btnHoverAll) {
      btnHoverAll.forEach((btn) => {
        if (!btn.querySelector("span")) {
          const newSpan = document.createElement("span");
          btn.appendChild(newSpan);
        }
        btn.addEventListener("mouseenter", handleMouseEnter);
        btn.addEventListener("mouseleave", handleMouseLeave);
      });
    }

    return () => {
      btnHoverAll.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <section className='ch-main-hero'>
      <div className='video-background'>
        <video autoPlay muted loop>
          <source src={backgroundVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='container'>
        <div className='ch-main-hero-wrap'>
          <div className='row align-items-center'>
            <div className='col-xl-10 col-lg-10 col-12'>
              <div className='ch-main-hero-text'>
                <h2 className='site-split-text ch-split-in-left'>
                  Brilla en el Firmamento Digital
                </h2>
                <h3
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  Transformamos tu visión en realidad con soluciones digitales
                  innovadoras
                </h3>
                <p className='wow fadeInUp' data-wow-duration='1400ms'>
                  No dejes que las nubes oscurezcan tu camino. Contáctanos hoy y
                  descubre cómo podemos ayudarte a alcanzar tus objetivos
                  digitales con claridad y confianza.
                </p>
                <div
                  className='hero-btn wow fadeInUp'
                  data-wow-duration='1600ms'
                >
                  <Link to='/about' className='ch-btn-style-2'>
                    Comencemos Ahora
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='poligon-wrap wow zoomIn' data-wow-duration='1200ms'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='198'
              height='198'
              viewBox='0 0 198 198'
              fill='none'
            >
              <path
                d='M98.5 7L177.741 52.75V144.25L98.5 190L19.2587 144.25V52.75L98.5 7Z'
                fill='#FFCA28'
              />
              <path
                d='M94.9946 2.3125C95.1327 2.55165 95.4385 2.63358 95.6776 2.49551L99 0.57735L102.322 2.49551C102.562 2.63358 102.867 2.55165 103.005 2.3125L109.284 5.9375C109.146 6.17665 109.228 6.48244 109.467 6.62051L116.612 10.7455C116.851 10.8836 117.157 10.8016 117.295 10.5625L123.573 14.1875C123.435 14.4266 123.517 14.7324 123.756 14.8705L130.901 18.9955C131.14 19.1336 131.446 19.0516 131.584 18.8125L137.863 22.4375C137.725 22.6766 137.807 22.9824 138.046 23.1205L145.191 27.2455C145.43 27.3836 145.736 27.3016 145.874 27.0625L152.152 30.6875C152.014 30.9266 152.096 31.2324 152.335 31.3705L159.48 35.4955C159.719 35.6336 160.025 35.5516 160.163 35.3125L166.442 38.9375C166.304 39.1766 166.386 39.4824 166.625 39.6205L173.769 43.7455C174.009 43.8836 174.314 43.8016 174.452 43.5625L180.731 47.1875C180.593 47.4266 180.675 47.7324 180.914 47.8705L184.237 49.7887V53.625C184.237 53.9011 184.46 54.125 184.737 54.125V61.375C184.46 61.375 184.237 61.5989 184.237 61.875V70.125C184.237 70.4011 184.46 70.625 184.737 70.625V77.875C184.46 77.875 184.237 78.0989 184.237 78.375V86.625C184.237 86.9011 184.46 87.125 184.737 87.125V94.375C184.46 94.375 184.237 94.5989 184.237 94.875V103.125C184.237 103.401 184.46 103.625 184.737 103.625V110.875C184.46 110.875 184.237 111.099 184.237 111.375V119.625C184.237 119.901 184.46 120.125 184.737 120.125V127.375C184.46 127.375 184.237 127.599 184.237 127.875V136.125C184.237 136.401 184.46 136.625 184.737 136.625V143.875C184.46 143.875 184.237 144.099 184.237 144.375V148.211L180.914 150.129C180.675 150.268 180.593 150.573 180.731 150.812L174.452 154.438C174.314 154.198 174.009 154.116 173.769 154.254L166.625 158.379C166.386 158.518 166.304 158.823 166.442 159.062L160.163 162.688C160.025 162.448 159.719 162.366 159.48 162.504L152.335 166.629C152.096 166.768 152.014 167.073 152.152 167.312L145.874 170.938C145.736 170.698 145.43 170.616 145.191 170.754L138.046 174.879C137.807 175.018 137.725 175.323 137.863 175.562L131.584 179.188C131.446 178.948 131.14 178.866 130.901 179.004L123.756 183.129C123.517 183.268 123.435 183.573 123.573 183.812L117.295 187.438C117.157 187.198 116.851 187.116 116.612 187.254L109.467 191.379C109.228 191.518 109.146 191.823 109.284 192.062L103.005 195.688C102.867 195.448 102.562 195.366 102.322 195.504L99 197.423L95.6776 195.504C95.4385 195.366 95.1327 195.448 94.9946 195.688L88.716 192.062C88.854 191.823 88.7721 191.518 88.5329 191.379L81.3882 187.254C81.1491 187.116 80.8433 187.198 80.7052 187.438L74.4265 183.812C74.5646 183.573 74.4827 183.268 74.2435 183.129L67.0988 179.004C66.8597 178.866 66.5539 178.948 66.4158 179.188L60.1371 175.562C60.2752 175.323 60.1932 175.018 59.9541 174.879L52.8094 170.754C52.5702 170.616 52.2645 170.698 52.1264 170.938L45.8477 167.312C45.9858 167.073 45.9038 166.768 45.6647 166.629L38.52 162.504C38.2808 162.366 37.975 162.448 37.837 162.688L31.5583 159.062C31.6963 158.823 31.6144 158.518 31.3753 158.379L24.2306 154.254C23.9914 154.116 23.6856 154.198 23.5475 154.438L17.2689 150.812C17.4069 150.573 17.325 150.268 17.0858 150.129L13.7635 148.211V144.375C13.7635 144.099 13.5396 143.875 13.2635 143.875V136.625C13.5396 136.625 13.7635 136.401 13.7635 136.125V127.875C13.7635 127.599 13.5396 127.375 13.2635 127.375V120.125C13.5396 120.125 13.7635 119.901 13.7635 119.625V111.375C13.7635 111.099 13.5396 110.875 13.2635 110.875V103.625C13.5396 103.625 13.7635 103.401 13.7635 103.125V94.875C13.7635 94.5989 13.5396 94.375 13.2635 94.375V87.125C13.5396 87.125 13.7635 86.9011 13.7635 86.625V78.375C13.7635 78.0989 13.5396 77.875 13.2635 77.875V70.625C13.5396 70.625 13.7635 70.4011 13.7635 70.125V61.875C13.7635 61.5989 13.5396 61.375 13.2635 61.375V54.125C13.5396 54.125 13.7635 53.9011 13.7635 53.625V49.7887L17.0858 47.8705C17.325 47.7324 17.4069 47.4266 17.2689 47.1875L23.5475 43.5625C23.6856 43.8016 23.9914 43.8836 24.2306 43.7455L31.3753 39.6205C31.6144 39.4824 31.6963 39.1766 31.5583 38.9375L37.837 35.3125C37.975 35.5516 38.2808 35.6336 38.52 35.4955L45.6647 31.3705C45.9038 31.2324 45.9858 30.9266 45.8477 30.6875L52.1264 27.0625C52.2644 27.3016 52.5702 27.3836 52.8094 27.2455L59.9541 23.1205C60.1932 22.9824 60.2752 22.6766 60.1371 22.4375L66.4158 18.8125C66.5539 19.0516 66.8597 19.1336 67.0988 18.9955L74.2435 14.8705C74.4827 14.7324 74.5646 14.4266 74.4265 14.1875L80.7052 10.5625C80.8433 10.8016 81.1491 10.8836 81.3882 10.7455L88.5329 6.62051C88.7721 6.48244 88.854 6.17665 88.716 5.9375L94.9946 2.3125Z'
                stroke='#FFCA28'
                stroke-linecap='round'
                stroke-dasharray='8 8'
              />
            </svg>
            <div className='poligon-text'>
              <i className='icon-Group'></i>
              <div className='poligon-text-right'>
                <h3>10+</h3>
                <span>Años de experiencia</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
