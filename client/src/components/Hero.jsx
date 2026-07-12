import "./styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Property Buy • Sell • Investment
        </h1>

        <h2>
          Assembly Syndicate
        </h2>

        <p>
          One trusted platform for Property Exchange, Survey, Documentation,
          Dispute Support and Verified Professionals.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Register Now</button>

          <button className="secondary-btn">
            Explore Services
          </button>
        </div>

      </div>

      <div className="hero-image-container">
        <img
          src="/property-banner.jpg"
          alt="Assembly Syndicate"
          className="hero-image"
        />
      </div>

    </section>
  );
}