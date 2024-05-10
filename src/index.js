import React, { useEffect } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'swiper/css';
import "swiper/css/pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import './assets/sass/Style.scss';
import MousePointer from './Pages/MousePointer';
import ScrollTop from './Pages/ScrollTop/ScrollTop';


const RootComponent = () => {

  useEffect(() => {
    const handlePreloader = () => {
      if ($('.preloader').length) {
        $('.preloader').delay(100).fadeOut(500, function () {

        });
      }
    };

    handlePreloader();
  }, []); 

  useEffect(() => {
    const btnHoverAll = document.querySelectorAll(".ch-btn-animated");

    if (btnHoverAll) {
      btnHoverAll.forEach(btn => {
        const newSpan = document.createElement("span");
        btn.appendChild(newSpan);
        btn.addEventListener('mouseenter', handleMouseEnter);
        btn.addEventListener('mouseleave', handleMouseLeave);
      });
    }

    return () => {
      btnHoverAll.forEach(btn => {
        btn.removeEventListener('mouseenter', handleMouseEnter);
        btn.removeEventListener('mouseleave', handleMouseLeave);
      });
    }
  }, []);

  const handleMouseEnter = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;

    e.currentTarget.querySelector('span').style.top = y + 'px';
    e.currentTarget.querySelector('span').style.left = x + 'px';
  };

  const handleMouseLeave = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;

    e.currentTarget.querySelector('span').style.top = y + 'px';
    e.currentTarget.querySelector('span').style.left = x + 'px';
  };

  return (
    <>
      <div className="page-wrap">
        <MousePointer />
        <div className="preloader">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <React.StrictMode>
            <App />
        </React.StrictMode>
        <ScrollTop />
        <div className="mouse-circle-mover"></div>
        <div className="mouse-circle-mover-follow"></div>
        
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
reportWebVitals();
