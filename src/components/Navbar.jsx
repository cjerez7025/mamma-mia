import { Navbar, Nav, Container } from "react-bootstrap";
import { formatPrice } from "../utils/formatPrice";

const NavBar = ({ page, onLogout, onGoLogin, onGoRegister, onGoHome }) => {
  const total = 25000;
  const token = page === "home"; // logueado si está en home

  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand style={{ cursor: "pointer" }} onClick={onGoHome}>
          🍕 Pizzería Mamma Mia!
        </Navbar.Brand>

        <Nav className="me-auto">
          {/* Home: siempre visible */}
          <Nav.Link onClick={onGoHome}>🍕 Home</Nav.Link>

          {/* Con token: Profile y Logout */}
          {token && <Nav.Link onClick={onGoHome}>🔓 Profile</Nav.Link>}
          {token && <Nav.Link onClick={onLogout}>🔒 Logout</Nav.Link>}

          {/* Sin token: Login y Register */}
          {!token && <Nav.Link onClick={onGoLogin}>🔐 Login</Nav.Link>}
          {!token && <Nav.Link onClick={onGoRegister}>🔐 Register</Nav.Link>}
        </Nav>

        {/* Total: siempre visible */}
        <Nav>
          <Nav.Link>🛒 Total: ${formatPrice(total)}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
