import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const NavBar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🍕 Pizzería Mamma Mia!
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
          {token ? (
            <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
              <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>
            </>
          )}
        </Nav>

        <Nav className="align-items-center gap-2">
          <Nav.Link as={Link} to="/cart">
            {`🛒 Total: $${formatPrice(total)}`}
          </Nav.Link>
          {token && (
            <Button variant="outline-light" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
