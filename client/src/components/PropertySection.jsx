import PropertyCard from "./PropertyCard";

function PropertySection() {
  const properties = [
    {
      image: "https://picsum.photos/400/250?random=1",
      title: "Luxury Villa",
      location: "Jaipur, Rajasthan",
      price: "₹75,00,000",
    },
    {
      image: "https://picsum.photos/400/250?random=2",
      title: "Industrial Land",
      location: "Amer, Rajasthan",
      price: "₹3,00,00,000",
    },
    {
      image: "https://picsum.photos/400/250?random=3",
      title: "Premium Residential Plot",
      location: "Shahpura, Rajasthan",
      price: "₹90,00,000",
    },
  ];

  return (
    <section>
      <h2 style={{ textAlign: "center" }}>
        Featured Properties
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            image={property.image}
            title={property.title}
            location={property.location}
            price={property.price}
          />
        ))}
      </div>
    </section>
  );
}

export default PropertySection;