import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "white" }}>
          VASS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="justify-content-end fullscreen-navbar-collapse"
        >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: "white" }}>
              Casos de éxito
            </Nav.Link>
            <NavDropdown
              title={<span style={{ color: "white" }}>Mercados</span>} 
              id="navbarScrollingDropdown"
              className="d-flex custom-dropdown"
              style={{ backgroundColor: "black" }}
            >
              <Nav className="me-auto">
                <NavDropdown.Item style={{ color: "white" }}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item style={{ color: "white" }}>
                  Another action
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>
            <NavDropdown
              title={<span style={{ color: "white" }}>Paises</span>}
              id="navbarScrollingDropdown"
              className="d-flex custom-dropdown"
              style={{ backgroundColor: "black" }} 
            >
              <Nav className="me-auto">
                <NavDropdown.Item style={{ color: "white" }}>
                  Chile
                </NavDropdown.Item>
                <NavDropdown.Item style={{ color: "white" }}>
                  Colombia
                </NavDropdown.Item>
                <NavDropdown.Item style={{ color: "white" }}>
                  México
                </NavDropdown.Item>
                <NavDropdown.Item style={{ color: "white" }}>
                  Perú
                </NavDropdown.Item>
                <NavDropdown.Item style={{ color: "white" }}>
                  Reino Unido
                </NavDropdown.Item>
                <NavDropdown.Item style={{ color: "white" }}>
                  Benelux
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>
            <NavDropdown
              title={<span style={{ color: "white" }}>Somos VASS</span>}
              id="navbarScrollingDropdown"
              className="d-flex custom-dropdown"
              style={{ backgroundColor: "black" }} 
            >
              <Nav className="me-auto">
                <NavDropdown.Item style={{ color: "white" }}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item style={{ color: "white" }}>
                  Another action
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>
            <NavDropdown
              title={<span style={{ color: "white" }}>Cómo lo hacemos</span>}
              id="navbarScrollingDropdown"
              className="d-flex custom-dropdown"
              style={{ backgroundColor: "black" }} 
            >
              <Nav className="me-auto">
                <NavDropdown.Item style={{ color: "white" }}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item style={{ color: "white" }}>
                  Another action
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>
            <Nav.Link href="#action1" style={{ color: "white" }}>
              Insights
            </Nav.Link>
            <Nav.Link href="#action1" style={{ color: "white" }}>
              Noticias
            </Nav.Link>
            <Nav.Link href="#action1" style={{ color: "white" }}>
              VASS Research
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
