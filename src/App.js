import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeOne from "./Pages/Home/HomeOne/HomeOne";
import About from "./Pages/About/About";
import WebSites from "./Pages/Products/WebSites";
import ServiceTwo from "./Pages/Products/OnlineStores";
import ServiceThree from "./Pages/Products/WebSystems";
import ServiceFour from "./Pages/Products/MobileApps";
import Contact from "./Pages/Contact/Contact";
// import BlogRightSidebar from "./Pages/BlogRightSidebar/BlogRightSidebar";
// import BlogSingle from "./Pages/BlogSingle/BlogSingle";
import Login from "./Pages/Login/Login";
import AdminLayout from "./Pages/Admin/Admin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeOne />} />
          <Route path='/nosotros' element={<About />} />
          {/* <Route path='/servicios' element={<Services />} /> */}
          <Route path='/servicio/sitios-web-profesionales' element={<WebSites />} />
          <Route path='/servicio/tiendas-online' element={<ServiceTwo />} />
          <Route path='/servicio/sistemas-gestion' element={<ServiceThree />} />
          <Route path='/servicio/apps-moviles' element={<ServiceFour/>} />
          <Route path='/contacto' element={<Contact />} />
          {/* <Route path='/blog' element={<BlogRightSidebar />} /> */}
          {/* <Route path='/blog-single' element={<BlogSingle />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/admin/*' element={<AdminLayout />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
