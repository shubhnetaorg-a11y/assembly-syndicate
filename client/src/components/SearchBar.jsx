import "./styles/SearchBar.css";

function SearchBar() {
  return (
    <section className="search-bar">
      <h2>Find Your Dream Property</h2>

      <div className="search-box">
        <input type="text" placeholder="Location" />

        <select>
          <option>Property Type</option>
          <option>House</option>
          <option>Plot</option>
          <option>Flat</option>
          <option>Commercial</option>
        </select>

        <input type="number" placeholder="Budget" />

        <button>Search</button>
      </div>
    </section>
  );
}

export default SearchBar;