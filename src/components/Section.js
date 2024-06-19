import React from 'react';
import './Section.css';

const Section = () => {
  const handleSearch = () => {
    // Retrieve input values
    const keywords = document.getElementById('serviceType').value;
    const category = document.getElementById('category').value;
    const minPrice = document.getElementById('any').value;
    const duration = document.getElementById('duration').value;
    const date = document.getElementById('date').value;
    const maxPrice = document.getElementById('maxPrice').value;

    // Display data in alert
    const searchData = `Keywords: ${keywords}\nCategory: ${category}\nMin Price: ${minPrice}\nDuration: ${duration}\nDate: ${date}\nMax Price: ${maxPrice}`;
    alert(searchData);
  };

  return (
    <div className="section">
      <div className="section-content">
        <h2 className="section-text">TRAVEL</h2>
        <h2 className="section-text-2">WITH US</h2>
        <button className="section-button">Read More</button>
        <div className="form-container">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="serviceType">Keywords</label>
              <input type="text" id="serviceType" />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category">
                <option value="any">Any</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="any">Min Price</label>
              <input type="text" id="any" placeholder="00.0" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input type="text" id="duration" placeholder="Any" />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" />
            </div>
            <div className="form-group">
              <label htmlFor="maxPrice">Max Price</label>
              <input type="text" id="maxPrice" placeholder="00.0" />
            </div>
          </div>
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;

