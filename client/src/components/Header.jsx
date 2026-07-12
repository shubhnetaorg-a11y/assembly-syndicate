import "./styles/Header.css";

function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <span className="logo-main">Assembly</span>
        <span className="logo-sub"> Syndicate</span>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#services">Services</a>
        <a href="#properties">Properties</a>
        <a href="#professionals">Professionals</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Buttons */}
      <div className="header-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </header>
  );
}

export default Header;