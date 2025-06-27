import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onAdd, onRemove, cart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          inCart={cart.some((item) => item.id === product.id)}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default ProductList;
