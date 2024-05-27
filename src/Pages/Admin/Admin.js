import React, { useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import ContactsList from "./Components/ContactsList";
import { FaAddressBook, FaSignOutAlt } from "react-icons/fa";
import Logo from "../../assets/images/logo2.png";
// import PostsList from "./Components/PostsList";
// import AddPost from "./Components/AddPost";
// import EditPost from "./Components/EditPost";
import ContactDetail from "./Components/ContactDetail";
import EditContact from "./Components/EditContact";

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/admin") {
      navigate("/admin/contacts");
    }
  }, [location.pathname, navigate]);

  return (
    <Container fluid>
      <Row>
        <Col md={1} className='bg-light sidebar vh-100'>
          <img src={Logo} alt='' title='' className='mt-3' />
          <p className='text-center'>Administrador</p>
          <Nav defaultActiveKey='/admin/contacts' className='flex-column'>
            <Nav.Link
              as={Link}
              to='/admin/contacts'
              active={location.pathname === "/admin/contacts"}
            >
              <FaAddressBook className='me-2' />
              Contactos
            </Nav.Link>
            {/* <Nav.Link as={Link} to='/admin/posts'>
              <FaBlog className='me-2' />
              Posts
            </Nav.Link> */}
            <hr />
            <Nav.Link as={Link} to='/'>
              <FaSignOutAlt className='me-2' />
              Salir
            </Nav.Link>
          </Nav>
        </Col>
        <Col md={11} className='main-content'>
          <Routes>
            <Route path='/contacts' element={<ContactsList />} />
            <Route path='/contact/:id' element={<ContactDetail />} />
            <Route path='/edit-contact/:id' element={<EditContact />} />
            {/* <Route path='/posts' element={<PostsList />} />
            <Route path='/add-post' element={<AddPost />} />
            <Route path='/edit-post/:id' element={<EditPost />} /> */}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLayout;
