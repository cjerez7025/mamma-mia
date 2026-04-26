import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useState } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

function App() {
  // "login" | "register" | "home"
  const [page, setPage] = useState("login");

  const handleLoginSuccess = () => setPage("home");
  const handleLogout = () => setPage("login");
  const goToLogin = () => setPage("login");
  const goToRegister = () => setPage("register");
  const goToHome = () => setPage("home");

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar
        page={page}
        onLogout={handleLogout}
        onGoLogin={goToLogin}
        onGoRegister={goToRegister}
        onGoHome={goToHome}
      />

      {page === "login" && (
        <LoginPage
          onLoginSuccess={handleLoginSuccess}
          onGoRegister={goToRegister}
        />
      )}

      {page === "register" && (
        <RegisterPage
          onRegisterSuccess={goToLogin}
          onGoLogin={goToLogin}
        />
      )}

      {page === "home" && <Home />}

      <Footer />
    </div>
  );
}

export default App;
