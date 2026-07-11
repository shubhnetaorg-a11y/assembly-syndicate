import "./styles/PropertyCard.css";

function PropertyCard({ image, title, location, price }) {
  return (
    <div className="property-card">
      <img
        src={image}
        alt={title}
      />

      <h3>{title}</h3>

      <p>📍 {location}</p>

      <p>💰 Starting Bid: {price}</p>

      <button>View Details</button>
    </div>
  );
}

export default PropertyCard;

export default PropertyCard;