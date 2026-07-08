import PropertyCard from "./PropertyCard";

function PropertySection() {
  return (
    <section>
      <h2 style={{ textAlign: "center" }}>Featured Properties</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </section>
  );
}

export default PropertySection;