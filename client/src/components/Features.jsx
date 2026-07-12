import "./styles/Features.css";

function Features() {
  return (
    <section className="features" id="services">
      <h2>Our Core Services</h2>
      <p className="section-subtitle">
        From Property Exchange to Documentation – Everything at One Trusted Platform.
      </p>

      <div className="feature-grid">
        <div className="card">
          <h3>🏠 Property Buy • Sell • Investment</h3>
          <p>Buy, Sell and Invest in verified properties with complete transparency.</p>
        </div>

        <div className="card">
          <h3>⚖️ Property Dispute Support</h3>
          <p>Expert assistance for land disputes, legal guidance and documentation.</p>
        </div>

        <div className="card">
          <h3>📐 Survey & Demarcation</h3>
          <p>DGPS Survey, Boundary Verification and Land Measurement Services.</p>
        </div>

        <div className="card">
          <h3>📄 Documentation</h3>
          <p>Registry, Mutation, Land Records and Government Process Assistance.</p>
        </div>

        <div className="card">
          <h3>👨‍💼 Verified Professionals</h3>
          <p>Connect with Surveyors, Engineers, Architects and Legal Experts.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;