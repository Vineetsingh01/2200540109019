import React from 'react';

const Filter = ({ setFilters }) => {
  const handleChange = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          {/* Add more options */}
        </select>
      </label>
      <label>
        Company:
        <select name="company" onChange={handleChange}>
          <option value="">All</option>
          <option value="company1">Company 1</option>
          <option value="company2">Company 2</option>
          {/* Add more options */}
        </select>
      </label>
      <label>
        Rating:
        <input type="number" name="rating" min="1" max="5" onChange={handleChange} />
      </label>
      <label>
        Price Range:
        <input type="number" name="minPrice" placeholder="Min Price" onChange={handleChange} />
        <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleChange} />
      </label>
      <label>
        Availability:
        <select name="availability" onChange={handleChange}>
          <option value="">All</option>
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
