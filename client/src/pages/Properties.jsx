import { useEffect, useState } from "react";
import "./Properties.css";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assembly-syndicate-server.onrender.com/api/properties")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProperties(data.properties);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const getAreaUnit = (unit) => {
    if (!unit) return "Gaj";

    switch (unit.toLowerCase()) {
      case "gaj":
        return "Gaj";
      case "sqft":
        return "Sq Ft";
      case "sqyard":
        return "Sq Yard";
      case "bigha":
        return "Bigha";
      case "biswa":
        return "Biswa";
      case "acre":
        return "Acre";
      case "hectare":
        return "Hectare";
      case "sqm":
      case "squaremeter":
        return "Square Meter";
      default:
        return unit;
    }
  };

  if (loading) {
    return (
      <div className="properties-loading">
        <h2>Loading Properties...</h2>
      </div>
    );
  }

  return (
    <section className="properties-page">
      <div className="properties-container">

        <h1 className="page-title">
          Available Properties
        </h1>

        {properties.length === 0 ? (
          <div className="no-properties">
            <h2>No Property Found</h2>
          </div>
        ) : (
          <div className="property-grid">

            {properties.map((property) => {

              const imageUrl =
                property.images?.length > 0
                  ? property.images[0].url
                  : "/no-image.jpg";

              return (
                <div className="property-card" key={property._id}>

                  <img
                    className="property-image"
                    src={imageUrl}
                    alt={property.propertyType}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/no-image.jpg";
                    }}
                  />

                  <div className="property-content">

                    <span className="property-type">
                      {(property.listingType || "").toUpperCase()}
                    </span>

                    <h2>{property.propertyType}</h2>

                    <p className="price">
                      ₹ {Number(property.expectedPrice || 0).toLocaleString("en-IN")}
                    </p>

                    <p>
                      <strong>Area :</strong>{" "}
                      {property.area || "N/A"}{" "}
                      {getAreaUnit(property.areaUnit)}
                    </p>

                    <p>
                      <strong>Property ID :</strong>{" "}
                      {property.propertyId || "N/A"}
                    </p>

                    <p>
                      <strong>Location :</strong><br />

                      {[property.village, property.tehsil]
                        .filter(Boolean)
                        .join(", ")}

                      <br />

                      {[property.district, property.state]
                        .filter(Boolean)
                        .join(", ")}
                    </p>

                    <p>
                      <strong>Contact Person :</strong>{" "}
                      {property.guestName || "N/A"}
                    </p>

                    <p>
                      <strong>Mobile :</strong>{" "}
                      {property.guestPhone || "N/A"}
                    </p>

                    <button className="view-btn">
                      View Details
                    </button>

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>
    </section>
  );
}

export default Properties;