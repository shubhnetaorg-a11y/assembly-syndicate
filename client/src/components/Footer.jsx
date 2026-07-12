import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>Assembly Syndicate</h2>

          <p>
            India's Trusted Property Exchange Platform for Buying,
            Selling, Investment, Survey, Documentation and
            Professional Property Services.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Properties</a>
          <a href="#">Professionals</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📍 Jaipur, Rajasthan</p>

          <p>📞 +91 8058551127</p>

          <p>✉ info@assemblysyndicate.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Assembly Syndicate. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;