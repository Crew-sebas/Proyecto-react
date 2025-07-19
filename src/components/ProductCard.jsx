import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product, inCart, onAdd, onRemove }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="border rounded-2xl shadow-xl p-4 bg-white transition-all duration-300 flex flex-col justify-between h-full hover:shadow-2xl"
    >
      <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-3 bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex-grow">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <p className="text-lg font-bold text-green-600">${product.price}</p>
      </div>

      {inCart ? (
        <button
          onClick={() => onRemove(product)}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md transition"
        >
          Quitar del carrito
        </button>
      ) : (
        <button
          onClick={() => onAdd(product)}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition"
        >
          Agregar al carrito
        </button>
      )}
    </motion.div>
  );
};

export default ProductCard;
