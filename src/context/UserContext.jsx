import { createContext, useContext, useState } from "react";
import { API_URL } from "../utils/constants";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");

  const login = async (userEmail, password) => {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error al iniciar sesión.");
    setToken(data.token);
    setEmail(data.email);
    return data;
  };

  const register = async (userEmail, password) => {
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error al registrarse.");
    setToken(data.token);
    setEmail(data.email);
    return data;
  };

  const logout = () => {
    setToken(null);
    setEmail("");
  };

  const getProfile = async () => {
    const res = await fetch(`${API_URL}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error al obtener perfil.");
    return data;
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
