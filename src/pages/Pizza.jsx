import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { formatPrice } from "../utils/formatPrice";
import fallbackImg from "../assets/Header.jpg";

const pizzas = {
  p001: {
    name: "Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    description: "Clásica pizza napolitana con los mejores ingredientes frescos.",
  },
  p002: {
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
    description: "Una explosión de quesos seleccionados de España.",
  },
  p003: {
    name: "Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
    description: "La favorita de todos con abundante pepperoni.",
  },
};

const Pizza = () => {
  const { id } = useParams();
  const pizza = pizzas[id];

  if (!pizza) {
    return (
      <Container className="py-5 text-center">
        <h2>Pizza no encontrada</h2>
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
          <p className="text-muted">{pizza.description}</p>
          <p className="small text-muted">
            <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
          </p>
          <p className="fs-5 fw-bold">Precio: ${formatPrice(pizza.price)}</p>
          <Button variant="dark">Añadir al carrito 🛒</Button>
        </div>
      </div>
    </Container>
  );
};

export default Pizza;
