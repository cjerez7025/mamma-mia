import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Button, Spinner } from "react-bootstrap";
import { formatPrice } from "../utils/formatPrice";
import fallbackImg from "../assets/Header.jpg";
import { useCart } from "../context/CartContext";
import { getPizza } from "../services/pizza.service";

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getPizza(id)
      .then((data) => {
        setPizza(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="dark" />
        <p className="mt-3 text-muted">Cargando pizza...</p>
      </Container>
    );
  }

  if (error || !pizza) {
    return (
      <Container className="py-5 text-center">
        <h2>Pizza no encontrada</h2>
        <p className="text-muted">No se pudo cargar la información.</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <img
            src={pizza.img}
            alt={`Pizza ${pizza.name}`}
            className="img-fluid rounded shadow mb-4 w-100"
            style={{ maxHeight: "350px", objectFit: "cover" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImg;
            }}
          />
          <h2 className="fw-bold mb-2">Pizza {pizza.name}</h2>
          <p className="text-muted">{pizza.desc}</p>
          <p className="small text-muted">
            <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
          </p>
          <p className="fs-5 fw-bold">{`Precio: $${formatPrice(pizza.price)}`}</p>
          <Button
            variant="dark"
            onClick={() => addToCart({ id: pizza.id, name: pizza.name, price: pizza.price, img: pizza.img, ingredients: pizza.ingredients })}
          >
            Añadir al carrito 🛒
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Pizza;
