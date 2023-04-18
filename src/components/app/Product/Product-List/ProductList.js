import React from "react";
import ProductCard from "../Product-Card/ProductCard";

const ProductList = ({ newItems, setNewItems }) => {

  return (
    <div className="product-list">
      {newItems.map((item, index) => (
        <ProductCard item={item} setNewItems={setNewItems} key={index}/>
      ))}
    </div>
  );
};

export default ProductList;
