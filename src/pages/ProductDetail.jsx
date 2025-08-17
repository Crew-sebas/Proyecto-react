import React from "react";
import { useParams, Link } from "react-router-dom";
import CartIcon from "../components/CartIcon";

function ProductDetail({ addToCart, cart, products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <CartIcon count={cart.length} cart={cart} />
        <span className="text-red-500 text-xl font-bold mb-4">Producto no encontrado.</span>
        <Link to="/" className="text-purple-600 underline">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-purple-50 to-white">
      <div className="fixed top-6 right-6 z-50">
        <CartIcon count={cart.length} cart={cart} />
      </div>
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-xl w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-cover mx-auto mb-6 rounded-xl shadow-lg border-4 border-purple-100"
        />
        <h1 className="text-3xl font-extrabold text-purple-700 mb-2 text-center">{product.name}</h1>
        <p className="text-base text-gray-500 mb-2 text-center">{product.category}</p>
        <p className="text-2xl font-semibold text-purple-800 mb-4 text-center">${product.price.toLocaleString()}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            onClick={() => addToCart(product)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-bold shadow transition"
          >
            Agregar al carrito
          </button>
          <Link
            to="/"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-bold shadow transition"
          >
            Volver a la tienda
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;