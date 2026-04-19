import headerImg from "../assets/Header.jpg";

const Header = () => {
  return (
    <header
      className="header-hero d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "280px",
        width: "100%",
      }}
    >
      <div className="px-3">
        <h1 className="display-4 fw-bold mb-2">¡Pizzería Mamma Mia!</h1>
        <p className="lead mb-0">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </header>
  );
};

export default Header;
