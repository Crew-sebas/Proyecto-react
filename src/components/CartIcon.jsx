import React from "react";
import { useNavigate } from "react-router-dom";

const CartIcon = ({ count, cart }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/carrito");
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-gradient-to-br from-red-500 to-red-700 text-white px-5 py-3 rounded-full shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 z-50"
      title="Ir al carrito"
    >
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span className="text-white animate-pulse">🛒</span>
        <span className="bg-white text-red-600 px-2 py-1 rounded-full text-sm font-bold">
          {count}
        </span>
      </div>
    </div>
  );
};

export default CartIcon;
