import PropertyCard from "./PropertyCard";
import "./styles/PropertySection.css";

function PropertySection() {
  const properties = [
    {
      image: "https://picsum.photos/400/250?random=1",
      title: "Luxury Villa",
      location: "Jaipur, Rajasthan",
      price: "₹75,00,000",
      type: "Buy",
      verified: true,
    },
    {
      image: "https://picsum.photos/400/250?random=2",
      title: "Industrial Land",
      location: "Amer, Rajasthan",
      price: "₹3,00,00,000",
      type: "Investment",
      verified: true,
    },
    {
      image: "https://picsum.photos/400/250?random=3",
      title: "Premium Residential Plot",
      location: "Shahpura, Rajasthan",
      price: "₹90,00,000",
      type: "Sell",
      verified: false,
    },
  ];

  return (
    <section className="property-section" id="properties">
      <h2>Featured Properties</h2>

      <p className="property-subtitle">
        Explore verified properties available for Buy, Sell and Investment.
      </p>

      <div className="property-grid">
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            image={property.image}
            title={property.title}
            location={property.location}
            price={property.price}
            type={property.type}
            verified={property.verified}
          />
        ))}
      </div>
    </section>
  );
}

export default PropertySection;