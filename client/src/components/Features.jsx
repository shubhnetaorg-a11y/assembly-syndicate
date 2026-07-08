import "./styles/Features.css";

function Features() {
  return (
    <section className="features">
      <h2>Why Choose Assembly Syndicate?</h2>

      <div className="feature-grid">
        <div className="card">
          <h3>Open Market Bidding</h3>
          <p>
            Buyers and investors can place bids openly for better price discovery.
          </p>
        </div>

        <div className="card">
          <h3>Verified Properties</h3>
          <p>
            Registry, Khasra and ownership documents verified.
          </p>
        </div>

        <div className="card">
          <h3>Trusted Network</h3>
          <p>
            Property owners, dealers and investors on one platform.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;