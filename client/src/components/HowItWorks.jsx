import "./styles/HowItWorks.css";

function HowItWorks() {
  const steps = [
    "Register",
    "Select Service",
    "Upload Documents",
    "Lead Assignment",
    "Work Started",
    "Track Progress",
    "Payment",
    "Review",
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>

      <div className="steps">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-number">{index + 1}</div>
            <h3>{step}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;