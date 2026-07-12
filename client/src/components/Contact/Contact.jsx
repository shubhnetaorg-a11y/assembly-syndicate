import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>

      <p className="contact-subtitle">
        We'd love to hear from you. Get in touch with Assembly Syndicate.
      </p>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Office</h3>

          <p>📍 Jaipur, Rajasthan</p>

          <p>📞 +91 8058551127</p>

          <p>✉ info@assemblysyndicate.com</p>
        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;