import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="mt-auto py-3">
      <Container className="justify-content-center">
        <Navbar.Brand className="text-white-50 small mb-0">
          © 2021 - Pizzería Mamma Mia! - Todos los derechos reservados
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
