import "./styles/WhyChooseUs.css";

function WhyChooseUs() {
  const reasons = [
    "Verified Property Listings",
    "Trusted Dealers Network",
    "Secure Documentation",
    "Open Market Bidding",
    "Professional Survey Services",
    "Expert Legal Assistance",
  ];

  return (
    <section className="why-section">
      <h2>Why Choose Assembly Syndicate?</h2>

      <div className="why-grid">
        {reasons.map((item, index) => (
          <div className="why-card" key={index}>
            ✅ {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;