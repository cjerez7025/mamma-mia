import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");

  const login = (newToken, userEmail) => {
    setToken(newToken);
    setEmail(userEmail);
  };

  const logout = () => {
    setToken(null);
    setEmail("");
  };

  return (
    <UserContext.Provider value={{ token, email, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
