import { useState } from 'react';
import './FilterBar.css';

const FilterBar = ({ onFilterChange, onSearchChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange({ category, minPrice, maxPrice });
  };

  const handlePriceChange = () => {
    onFilterChange({ category: selectedCategory, minPrice, maxPrice });
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearchChange(term);
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Search:</label>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="filter-group">
        <label>Category:</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Footwear">Footwear</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Min Price:</label>
        <input
          type="number"
          placeholder="0"
          value={minPrice}
          onChange={(e) => {
            setMinPrice(e.target.value);
            handlePriceChange();
          }}
        />
      </div>
      <div className="filter-group">
        <label>Max Price:</label>
        <input
          type="number"
          placeholder="5000"
          value={maxPrice}
          onChange={(e) => {
            setMaxPrice(e.target.value);
            handlePriceChange();
          }}
        />
      </div>
    </div>
  );
};

export default FilterBar;