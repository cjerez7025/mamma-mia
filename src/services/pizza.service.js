import { API_URL } from "../utils/constants";

export const getPizzas = async () => {
  const res = await fetch(`${API_URL}/api/pizzas`);
  if (!res.ok) throw new Error("Error al cargar las pizzas.");
  return res.json();
};

export const getPizza = async (id) => {
  const res = await fetch(`${API_URL}/api/pizzas/${id}`);
  if (!res.ok) throw new Error("Pizza no encontrada.");
  return res.json();
};
