import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { email, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Container className="py-5 d-flex flex-column align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="fw-bold mb-4 text-center">Mi Perfil</h2>
        <p className="text-center mb-1">
          <strong>Email:</strong>
        </p>
        <p className="text-center text-muted mb-4">{email}</p>
        <Button variant="danger" onClick={handleLogout} className="w-100">
          Cerrar Sesión
        </Button>
      </div>
    </Container>
  );
};

export default Profile;
