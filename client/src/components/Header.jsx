import "./styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Assembly Syndicate</div>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Properties</a>
        <a href="#">Investors</a>
        <a href="#">Dealers</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;