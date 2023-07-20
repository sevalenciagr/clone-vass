import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">VASS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Casos de éxito</Nav.Link>
              <NavDropdown
                title="Mercados"
                id="navbarScrollingDropdown"
                className="d-flex"
              >
                <Nav className="me-auto">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                </Nav>
              </NavDropdown>
              <NavDropdown
                title="Países"
                id="navbarScrollingDropdown"
                className="d-flex"
              >
                <Nav className="me-auto">
                  <NavDropdown.Item>Chile</NavDropdown.Item>
                  <NavDropdown.Item>Colombia</NavDropdown.Item>
                  <NavDropdown.Item>México</NavDropdown.Item>
                  <NavDropdown.Item>Perú</NavDropdown.Item>
                  <NavDropdown.Item>Reino Unido</NavDropdown.Item>
                  <NavDropdown.Item>Benelux</NavDropdown.Item>
                </Nav>
              </NavDropdown>
              <NavDropdown
                title="Somos VASS"
                id="navbarScrollingDropdown"
                className="d-flex"
              >
                <Nav className="me-auto">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                </Nav>
              </NavDropdown>
              <NavDropdown
                title="Cómo lo hacemos"
                id="navbarScrollingDropdown"
                className="d-flex"
              >
                <Nav className="me-auto">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                </Nav>
              </NavDropdown>
              <Nav.Link href="#action1">Insights</Nav.Link>
              <Nav.Link href="#action1">Noticias</Nav.Link>
              <Nav.Link href="#action1">VASS Research</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
