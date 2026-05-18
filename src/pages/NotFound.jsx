import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="py-5 text-center">
      <div style={{ fontSize: "6rem" }}>🍕</div>
      <h1 className="display-4 fw-bold mt-3">404</h1>
      <h2 className="mb-3">¡Página no encontrada!</h2>
      <p className="text-muted mb-4">
        Parece que esta pizza no está en nuestro menú...
      </p>
      <Link to="/" className="btn btn-dark btn-lg">
        Volver al inicio
      </Link>
    </Container>
  );
};

export default NotFound;
