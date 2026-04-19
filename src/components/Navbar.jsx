import { Navbar, Nav, Container } from "react-bootstrap";
import { formatPrice } from "../utils/formatPrice";

const NavBar = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand href="#home">🍕 Pizzería Mamma Mia!</Navbar.Brand>

        <Nav className="me-auto">
          {/* Home: siempre visible, no depende del token */}
          <Nav.Link href="#home">🍕 Home</Nav.Link>

          {/* Con token true: muestra Profile y Logout */}
          {token && <Nav.Link href="#profile">🔓 Profile</Nav.Link>}
          {token && <Nav.Link href="#logout">🔒 Logout</Nav.Link>}

          {/* Con token false: muestra Login y Register */}
          {!token && <Nav.Link href="#login">🔐 Login</Nav.Link>}
          {!token && <Nav.Link href="#register">🔐 Register</Nav.Link>}
        </Nav>

        {/* Total: siempre visible, no depende del token */}
        <Nav>
          <Nav.Link href="#total">
            🛒 Total: ${formatPrice(total)}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
