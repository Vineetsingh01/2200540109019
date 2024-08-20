import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.example.com/products', { params: filters })
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [filters]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>All Products</h1>
      <Filter setFilters={setFilters} />
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
