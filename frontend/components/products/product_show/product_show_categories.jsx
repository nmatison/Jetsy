import React from 'react';

const ProductCategories = ({categories}) => {
  return(
  categories.map(cat => {
    return <h1>{cat.category_name}</h1>
  }))
};

export default ProductCategories;