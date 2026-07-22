import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EditProperty.css";

function EditProperty() {

  const { id } = useParams();


  const [formData, setFormData] = useState({

    title: "",
    description: "",

    guestName: "",
    guestPhone: "",

    listingType: "sell",
    propertyType: "residential",

    expectedPrice: "",
    area: "",
    areaUnit: "gaj",

    state: "",
    district: "",
    tehsil: "",
    village: "",
    pincode: "",
    address: "",

  });



  const [loading, setLoading] = useState(true);



  // ===============================
  // GET PROPERTY DATA
  // ===============================

  useEffect(() => {

    getProperty();

  }, []);



  const getProperty = async () => {

    try {


      const response = await fetch(
        `https://assembly-syndicate-server.onrender.com/api/properties/${id}`
      );


      const result = await response.json();


      console.log(result);



      if(result.success){


        setFormData(result.property);


      }


    } catch(error){

      console.log(error);

    }


    setLoading(false);

  };




  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };




  // ===============================
  // UPDATE PROPERTY
  // ===============================


  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{


      const response = await fetch(

        `https://assembly-syndicate-server.onrender.com/api/properties/${id}`,

        {

          method:"PUT",

          headers:{

            "Content-Type":"application/json",

          },

          body:JSON.stringify(formData),

        }

      );


      const result = await response.json();


      console.log(result);



      if(result.success){

        alert("Property Updated Successfully 🚀");

      }


    }catch(error){

      console.log(error);

      alert("Update Failed");

    }


  };




  if(loading){

    return <h2 className="loading">Loading...</h2>;

  }





  return (

    <div className="edit-property">


      <h1>✏️ Edit Property</h1>


      <form onSubmit={handleSubmit}>


        <input
          name="title"
          value={formData.title || ""}
          onChange={handleChange}
          placeholder="Property Title"
        />


        <textarea
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          placeholder="Description"
        />



        <input
          name="guestName"
          value={formData.guestName || ""}
          onChange={handleChange}
          placeholder="Owner Name"
        />


        <input
          name="guestPhone"
          value={formData.guestPhone || ""}
          onChange={handleChange}
          placeholder="Mobile Number"
        />



        <input
          name="expectedPrice"
          value={formData.expectedPrice || ""}
          onChange={handleChange}
          placeholder="Price"
        />



        <input
          name="area"
          value={formData.area || ""}
          onChange={handleChange}
          placeholder="Area"
        />



        <input
          name="state"
          value={formData.state || ""}
          onChange={handleChange}
          placeholder="State"
        />


        <input
          name="district"
          value={formData.district || ""}
          onChange={handleChange}
          placeholder="District"
        />


        <input
          name="tehsil"
          value={formData.tehsil || ""}
          onChange={handleChange}
          placeholder="Tehsil"
        />


        <input
          name="village"
          value={formData.village || ""}
          onChange={handleChange}
          placeholder="Village"
        />


        <input
          name="pincode"
          value={formData.pincode || ""}
          onChange={handleChange}
          placeholder="Pincode"
        />


        <input
          name="address"
          value={formData.address || ""}
          onChange={handleChange}
          placeholder="Address"
        />



        <button type="submit">
          Update Property
        </button>


      </form>


    </div>

  );

}


export default EditProperty;