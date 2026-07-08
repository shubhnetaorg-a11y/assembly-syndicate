function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "100px 20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1 style={{ fontSize: "48px", color: "#0B3D91" }}>
        Assembly Syndicate
      </h1>

      <h2>भारत का सबसे भरोसेमंद Property Exchange Platform</h2>

      <p style={{ fontSize: "20px" }}>
        जहाँ लोग नहीं, अवसर जुड़ते हैं।
      </p>

      <button
        style={{
          padding: "12px 25px",
          marginRight: "15px",
          backgroundColor: "#0B3D91",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Explore Properties
      </button>

      <button
        style={{
          padding: "12px 25px",
          backgroundColor: "#28A745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Join Now
      </button>
    </section>
  );
}

export default Hero;