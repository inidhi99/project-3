import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="bottom">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#Explore">Explore</Nav.Link>
            <Nav.Link href="#add event">Document Trip</Nav.Link>
            <Nav.Link href="#profile">Pofile</Nav.Link>
            {/* Temporary */}
            <Link className="linkStyles" to="./pages/postForm">
              Post
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
