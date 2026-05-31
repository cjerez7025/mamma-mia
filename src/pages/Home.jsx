import { useState, useEffect } from "react";
import { Spinner, Container } from "react-bootstrap";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { getPizzas } from "../services/pizza.service";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPizzas()
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <Header />

      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">Nuestras Pizzas</h2>

        {loading && (
          <div className="text-center py-5">
            <Spinner animation="border" variant="dark" />
            <p className="mt-3 text-muted">Cargando pizzas...</p>
          </div>
        )}

        {error && (
          <p className="text-center text-muted">
            No se pudo cargar el menú. ¿Está el backend corriendo?
          </p>
        )}

        {!loading && !error && (
          <div className="row g-4 justify-content-center">
            {pizzas.map((pizza) => (
              <div key={pizza.id} className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                <CardPizza
                  id={pizza.id}
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={pizza.img}
                />
              </div>
            ))}
          </div>
        )}
      </Container>
    </main>
  );
};

export default Home;
