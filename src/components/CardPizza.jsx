import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import fallbackImg from "../assets/Header.jpg";
import { useCart } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useCart();
  return (
    <div className="card h-100 shadow-sm" style={{ maxWidth: "340px" }}>
      <img
        src={img}
        alt={`Pizza ${name}`}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackImg;
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold mb-2">Pizza {name}</h5>

        <p className="text-muted small mb-1 text-center">
          <em>Ingredientes:</em>
        </p>
        <p className="small text-center text-muted mb-3">
          🍕 {ingredients.join(", ")}
        </p>

        <p className="fw-bold text-center fs-6 mb-3">
          Precio: ${formatPrice(price)}
        </p>

        <div className="d-flex gap-2 justify-content-between mt-auto">
          <Link
            to={`/pizza/${id}`}
            className="btn btn-sm btn-outline-secondary flex-grow-1"
          >
            Ver Más »
          </Link>
          <button
            className="btn btn-sm btn-dark flex-grow-1"
            onClick={() => addToCart({ id, name, price, ingredients, img })}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
