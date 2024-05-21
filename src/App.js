import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeOne from "./Pages/HomeOne/HomeOne/HomeOne";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import ServiceSingle from "./Pages/ServiceSingle/ServiceSingle";
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
          <Route path='/servicios' element={<Services />} />
          <Route path='/service-single' element={<ServiceSingle />} />
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
