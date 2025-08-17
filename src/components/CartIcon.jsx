import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartIcon = ({ count }) => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (count > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500); // animación de 0.5s
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div
      onClick={() => navigate("/carrito")}
      className={`fixed bottom-6 right-6 z-50 bg-gradient-to-br from-red-500 to-red-700 text-white px-5 py-3 rounded-full shadow-xl cursor-pointer transition-all duration-300 ${
        animate ? "scale-110 shadow-2xl" : "hover:scale-105 hover:shadow-xl"
      }`}
      title="Ir al carrito"
    >
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span className="text-white animate-pulse">🛒</span>
        <span className="bg-white text-red-600 px-2 py-1 rounded-full text-sm font-bold min-w-[24px] text-center">
          {count}
        </span>
      </div>
    </div>
  );
};

export default CartIcon;
