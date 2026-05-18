import { Container } from "react-bootstrap";

const Cart = () => {
  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4">🛒 Mi Carrito</h2>
      <p className="text-muted">Tu carrito está vacío por ahora.</p>
    </Container>
  );
};

export default Cart;
