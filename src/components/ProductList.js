import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => (
  <div>
    {products.map(product => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>Company: {product.company}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Discount: {product.discount}%</p>
        <p>Available: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
        <Link to={`/product/${product.id}`}>View Details</Link>
      </div>
    ))}
  </div>
);

export default ProductList;
