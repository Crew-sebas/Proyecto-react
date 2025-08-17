import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!success && cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate, success]);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    setSuccess(true);
    setCart([]);
    setTimeout(() => navigate("/"), 3000);
  };

  const handleRemove = (id) => {
    const confirm = window.confirm("¿Estás seguro de que querés eliminar este producto del carrito?");
    if (confirm) {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  if (success) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4 animate-bounce">
          ✅ ¡Compra realizada exitosamente!
        </h2>
        <p className="text-gray-600">Serás redirigido a la tienda en unos segundos...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">🛒 Tu Carrito</h1>

      <div className="grid gap-4 mb-8">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white rounded-xl shadow p-4 gap-4 hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-contain rounded border"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-500">{item.category}</p>
              <p className="text-lg font-bold text-green-700">${item.price}</p>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              🗑 Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">🧾 Resumen de compra</h2>
        <p className="text-lg mb-4">
          Total a pagar: <span className="font-bold text-green-700">${total}</span>
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded shadow transition"
          >
            ⬅️ Seguir comprando
          </button>
          <button
            onClick={handleCheckout}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded shadow transition"
          >
            ✅ Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
