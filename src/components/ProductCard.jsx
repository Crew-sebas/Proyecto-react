import React from "react";

const ProductCard = ({ product, inCart, onAdd, onRemove }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition duration-300 flex flex-col justify-between h-full">
      <div className="w-full aspect-[4/3] overflow-hidden rounded mb-2 bg-gray-100 ">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="text-md mt-2">${product.price}</p>
      {inCart ? (
        <button
          onClick={() => onRemove(product)}
          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
        >
          Quitar
        </button>
      ) : (
        <button
          onClick={() => onAdd(product)}
          className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
        >
          Agregar
        </button>
      )}
    </div>
  );
};

export default ProductCard;
