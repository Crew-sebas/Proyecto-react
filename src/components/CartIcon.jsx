import React from "react";

const CartIcon = ({ count }) => {
  return (
    <div className="fixed top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
      🛒 {count}
    </div>
  );
};

export default CartIcon;
