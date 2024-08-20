import React from 'react';
import ProductDetail from '../components/ProductDetail';

const ProductPage = ({ match }) => (
  <div>
    <ProductDetail match={match} />
  </div>
);

export default ProductPage;
