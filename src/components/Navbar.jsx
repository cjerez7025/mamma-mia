import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const { total } = useCart();

  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🍕 Pizzería Mamma Mia!
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
          <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
          <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
          <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link as={Link} to="/cart">
            {`🛒 Total: $${formatPrice(total)}`}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
