import "./styles/FAQ.css";

function FAQ() {
  const faqs = [
    {
      question: "How do I register on Assembly Syndicate?",
      answer: "Click the Register button, fill in your details and create your account.",
    },
    {
      question: "Are all properties verified?",
      answer: "Verified properties display a verification badge after document checks.",
    },
    {
      question: "Can I list my property for sale?",
      answer: "Yes. After logging in, you can post your property with complete details.",
    },
    {
      question: "Do you provide legal and documentation support?",
      answer: "Yes. We assist with registry, mutation, land records and other documentation services.",
    },
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-card" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;