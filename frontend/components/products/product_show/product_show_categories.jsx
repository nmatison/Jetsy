import React from 'react';

const ProductCategories = ({categories}) => {
  return <div className="product-categories">
      <ul className="categorie-list">
        <h1>Categories: </h1>

        {categories.map(cat => {
          return <li>{cat.category_name}</li>;
        })}
        
      </ul>
    </div>;
};

export default ProductCategories;