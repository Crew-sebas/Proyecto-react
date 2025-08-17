import React from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const ProductList = ({ products, onAdd, onRemove, cart }) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ProductCard
            product={product}
            inCart={cart.some((item) => item.id === product.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductList;
