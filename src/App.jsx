import { useState, useEffect } from 'react';
import { products } from './data/products';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({ category: '', minPrice: '', maxPrice: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let filtered = products;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Apply price filters
    if (filters.minPrice) {
      filtered = filtered.filter(product => product.price >= parseFloat(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(product => product.price <= parseFloat(filters.maxPrice));
    }

    setFilteredProducts(filtered);
  }, [filters, searchTerm]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <h1>Product Filter App</h1>
      <FilterBar onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
