import "./styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      {/* Logo */}
      <Link to="/" className="logo">
        <span className="logo-main">Assembly</span>
        <span className="logo-sub"> Syndicate</span>
      </Link>

      {/* Navigation */}
      <nav className="navbar">

        <Link to="/">Home</Link>

        <a href="#services">Services</a>

        <Link to="/properties">Properties</Link>

        <a href="#professionals">Professionals</a>

        <a href="#about">About</a>

        <a href="#contact">Contact</a>

      </nav>

      {/* Buttons */}
      <div className="header-buttons">

      

        <button className="login-btn">
          Login
        </button>

        <button className="register-btn">
          Register
        </button>

      </div>

    </header>
  );
}

export default Header;