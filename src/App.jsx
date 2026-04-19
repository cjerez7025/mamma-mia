import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
