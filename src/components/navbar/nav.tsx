import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./nav.css";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="mb-3 custom-color">
        <Container fluid>
          <Navbar.Brand
            style={{ fontSize: "27px", color: "white", marginLeft: "2rem" }}
          >
            TKD-Club
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbar-expand-lg"
            placement="end"
            className="custom-color"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbar-expand-lg"
                style={{ fontSize: "27px", color: "white" }}
              >
                TKD-Club
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/team">Team</Nav.Link>
                <Nav.Link href="/alumni">Alumni</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
