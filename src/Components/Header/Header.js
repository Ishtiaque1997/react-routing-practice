import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
const Header = () => {
 const style={
  marginRight:'110px'
 }
 return (
  <div>
   <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link style={style} href="#home">Home</Nav.Link>
      <Nav.Link style={style} href="/countries">Countries</Nav.Link>
      <Nav.Link style={style}href="/reviews">Reviews</Nav.Link>
      <Nav.Link style={style}href="/comments">Comments</Nav.Link>
      <Nav.Link style={style}href="/others">Others</Nav.Link>
      <Nav.Link style={style}href="/contacts">Contacts</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>
  </div>
 );
};

export default Header;