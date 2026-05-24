import { Container, Table, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";
import fallbackImg from "../assets/Header.jpg";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <Container className="py-5">
        <h2 className="fw-bold mb-4">🛒 Mi Carrito</h2>
        <p className="text-muted">Tu carrito está vacío por ahora.</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4">🛒 Mi Carrito</h2>

      <Table responsive bordered hover>
        <thead className="table-dark">
          <tr>
            <th>Pizza</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="align-middle">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }}
                    onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg; }}
                  />
                  <span className="fw-semibold">Pizza {item.name}</span>
                </div>
              </td>
              <td className="align-middle">{`$${formatPrice(item.price)}`}</td>
              <td className="align-middle">{item.quantity}</td>
              <td className="align-middle">{`$${formatPrice(item.price * item.quantity)}`}</td>
              <td className="align-middle">
                <div className="d-flex gap-2">
                  <Button
                    size="sm"
                    variant="outline-success"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </Button>
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="text-end mt-3">
        <h4 className="fw-bold">{`Total: $${formatPrice(total)}`}</h4>
      </div>
    </Container>
  );
};

export default Cart;
