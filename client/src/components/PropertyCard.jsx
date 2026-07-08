import "./styles/PropertyCard.css";

function PropertyCard() {
  return (
    <div className="property-card">
      <img
        src="https://picsum.photos/400/250?random=1"
        alt="Property"
      />

      <h3>Luxury Villa</h3>

      <p>📍 Jaipur, Rajasthan</p>

      <p>💰 Starting Bid: ₹75,00,000</p>

      <button>View Details</button>
    </div>
  );
}

export default PropertyCard;