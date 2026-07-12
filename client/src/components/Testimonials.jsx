import "./styles/Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      city: "Jaipur",
      review:
        "Assembly Syndicate made my property purchase simple and transparent.",
    },
    {
      name: "Neha Verma",
      city: "Ajmer",
      review:
        "The documentation support was fast and professional.",
    },
    {
      name: "Amit Singh",
      city: "Udaipur",
      review:
        "Verified property listings gave me complete confidence.",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{item.review}"</p>

            <h3>{item.name}</h3>

            <span>{item.city}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;