import { useState } from "react";
import "./AddProperty.css";

function AddProperty() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    guestName: "",
    guestPhone: "",

    listingType: "sell",
    propertyType: "residential",
    expectedPrice: "",
    area: "",
    areaUnit: "sqft",

    state: "",
    district: "",
    tehsil: "",
    village: "",
    pincode: "",
    address: "",
  });


  const [images, setImages] = useState([]);



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleImageChange = (e) => {

    setImages([...e.target.files]);

  };




  const handleSubmit = async (e) => {

    e.preventDefault();


    const data = new FormData();


    Object.keys(formData).forEach((key)=>{

      data.append(key, formData[key]);

    });



    images.forEach((image)=>{

      data.append("images", image);

    });



    try {


      const response = await fetch(
  "https://assembly-syndicate-server.onrender.com/api/properties/add",
  {
    method:"POST",
    body:data,
  }
);



      const result = await response.json();



      console.log("Server Response:", result);



      if(result.success){

        alert("Property Added Successfully 🚀");



        setFormData({

          title:"",
          description:"",
          guestName:"",
          guestPhone:"",

          listingType:"sell",
          propertyType:"residential",
          expectedPrice:"",
          area:"",
          areaUnit:"sqft",

          state:"",
          district:"",
          tehsil:"",
          village:"",
          pincode:"",
          address:"",

        });



        setImages([]);


      }
      else{

        alert(result.message);

      }



    }
    catch(error){

      console.log(error);

      alert("Server Error");

    }


  };





  return (

    <div className="add-property">


      <h2>🏠 List Your Property FREE</h2>



      <form onSubmit={handleSubmit}>


        <h3>Property Information</h3>


        <div className="form-row">


          <div className="form-group">

            <label>Property Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Property Title"
              required
            />

          </div>



          <div className="form-group">

            <label>Listing Type</label>

            <select
              name="listingType"
              value={formData.listingType}
              onChange={handleChange}
            >

              <option value="sell">Sell</option>
              <option value="rent">Rent</option>

            </select>


          </div>


        </div>





        <div className="form-row">


          <div className="form-group">

            <label>Property Type</label>

            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
            >

              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land</option>

            </select>


          </div>




          <div className="form-group">

            <label>Expected Price</label>

            <input
              type="number"
              name="expectedPrice"
              value={formData.expectedPrice}
              onChange={handleChange}
              placeholder="₹ Price"
            />


          </div>


        </div>





        <div className="form-row">


          <div className="form-group">

            <label>Area</label>

            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Property Area"
            />


          </div>




          <div className="form-group">

            <label>Area Unit</label>


            <select
              name="areaUnit"
              value={formData.areaUnit}
              onChange={handleChange}
            >

              <option value="sqft">Sq Ft</option>
              <option value="bigha">Bigha</option>
              <option value="acre">Acre</option>


            </select>


          </div>


        </div>





        <div className="form-group">


          <label>Description</label>


          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Property Description"
          />


        </div>





        <h3>Location Details</h3>



        <div className="form-row three">


          <div className="form-group">

            <label>State</label>

            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
            />

          </div>




          <div className="form-group">

            <label>District</label>

            <input
              name="district"
              value={formData.district}
              onChange={handleChange}
            />

          </div>




          <div className="form-group">

            <label>Tehsil</label>

            <input
              name="tehsil"
              value={formData.tehsil}
              onChange={handleChange}
            />

          </div>


        </div>





        <div className="form-row three">


          <div className="form-group">

            <label>Village</label>

            <input
              name="village"
              value={formData.village}
              onChange={handleChange}
            />

          </div>




          <div className="form-group">

            <label>Pincode</label>

            <input
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />

          </div>




          <div className="form-group">

            <label>Address</label>

            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
            />

          </div>


        </div>






        <h3>Owner Details</h3>




        <div className="form-row">


          <div className="form-group">

            <label>Your Name</label>

            <input
              name="guestName"
              value={formData.guestName}
              onChange={handleChange}
              required
            />

          </div>




          <div className="form-group">

            <label>Mobile Number</label>

            <input
              name="guestPhone"
              value={formData.guestPhone}
              onChange={handleChange}
              required
            />

          </div>


        </div>







        <h3>Property Images</h3>




        <div className="upload-box">


          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />


          <p>
            {images.length} Images Selected
          </p>


        </div>






        <button
          type="submit"
          className="submit-btn"
        >

          Submit Property

        </button>





      </form>



    </div>

  );

}



export default AddProperty;