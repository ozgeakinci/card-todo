import React from "react";
import ProductCard from "../Product-Card/ProductCard";

const ProductList = ({ newItems, setNewItems }) => {

  return (
    <div className="product-list">
      {newItems.map((item) => (
        <ProductCard item={item} setNewItems={setNewItems} />
      ))}
    </div>
  );
};

export default ProductList;
