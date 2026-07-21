import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { getProperties } from "../api";
import "./styles/PropertySection.css";

function PropertySection() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties();
        setProperties(data.properties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section className="property-section" id="properties">
      <h2>Featured Properties</h2>

      <p className="property-subtitle">
        Explore verified properties available for Buy, Sell and Investment.
      </p>

      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            image={
              property.images?.length > 0
                ? property.images[0].url
                : "https://picsum.photos/400/250"
            }
            title={property.title}
            location={`${property.district}, ${property.state}`}
            price={`₹${property.expectedPrice.toLocaleString("en-IN")}`}
            type={property.listingType}
            verified={property.isVerified}
          />
        ))}
      </div>
    </section>
  );
}

export default PropertySection;