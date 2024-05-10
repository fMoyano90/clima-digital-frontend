import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeOne from "./Pages/HomeOne/HomeOne/HomeOne";
import HomeTwo from "./Pages/HomeTwo/HomeTwo/HomeTwo";
import HomeThree from "./Pages/HomeThree/HomeThree/HomeThree";
import HomeFour from "./Pages/HomeFour/HomeFour/HomeFour";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import ServiceSingle from "./Pages/ServiceSingle/ServiceSingle";
import Portfolio from "./Pages/Portfolio/Portfolio";
import PortfolioSingle from "./Pages/PortfolioSingle/PortfolioSingle";
import TeamSingle from "./Pages/TeamSingle/TeamSingle";
import Contact from "./Pages/Contact/Contact";
import BlogRightSidebar from "./Pages/BlogRightSidebar/BlogRightSidebar";
import BlogLeftSidebar from "./Pages/BlogLeftSidebar/BlogLeftSidebar";
import BlogFullwidth from "./Pages/BlogFullwidth/BlogFullwidth";
import BlogSingle from "./Pages/BlogSingle/BlogSingle";
import BlogSingleLeft from "./Pages/BlogSingleLeft/BlogSingleLeft";
import BlogSingleFullwidth from "./Pages/BlogSingleFullwidth/BlogSingleFullwidth";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeOne />} />
          <Route path='/home-two' element={<HomeTwo />} />
          <Route path='/home-three' element={<HomeThree />} />
          <Route path='/home-four' element={<HomeFour />} />
          <Route path='/nosotros' element={<About />} />
          <Route path='/servicios' element={<Services />} />
          <Route path='/service-single' element={<ServiceSingle />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio-single' element={<PortfolioSingle />} />
          <Route path='/team-single' element={<TeamSingle />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/blog' element={<BlogRightSidebar />} />
          <Route path='/blog-left-sidebar' element={<BlogLeftSidebar />} />
          <Route path='/blog-fullwidth' element={<BlogFullwidth />} />
          <Route path='/blog-single' element={<BlogSingle />} />
          <Route
            path='/blog-single-left-sidebar'
            element={<BlogSingleLeft />}
          />
          <Route
            path='/blog-single-fullwidth'
            element={<BlogSingleFullwidth />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
