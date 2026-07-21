import "./styles/PropertyCard.css";

function PropertyCard({
  image,
  title,
  location,
  price,
  type,
  verified,
}) {
  return (
    <div className="property-card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>📍 {location}</p>

      <p>💰 {price}</p>

      <p>🏷️ {type}</p>

      {verified ? (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ✅ Verified Property
        </p>
      ) : (
        <p style={{ color: "gray" }}>
          ⏳ Verification Pending
        </p>
      )}

      <button>View Details</button>
    </div>
  );
}

export default PropertyCard;