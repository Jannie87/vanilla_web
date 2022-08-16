import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ color: "whitesmoke", fontSize: "1.5rem" }}
          >
            Start
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#services"
              style={{ color: "whitesmoke", fontSize: "1.2rem" }}
            >
              Tjänster
            </Nav.Link>
            <Nav.Link
              href="#contact"
              style={{ color: "whitesmoke", fontSize: "1.2rem" }}
            >
              Kontakt
            </Nav.Link>
            <Nav.Link
              href="#about"
              style={{ color: "whitesmoke", fontSize: "1.2rem" }}
            >
              Om
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
