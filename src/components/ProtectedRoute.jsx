import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const PrivateRoute = ({ children }) => {
  const { token } = useUser();
  return token ? children : <Navigate to="/login" replace />;
};

export const PublicRoute = ({ children }) => {
  const { token } = useUser();
  return token ? <Navigate to="/" replace /> : children;
};
