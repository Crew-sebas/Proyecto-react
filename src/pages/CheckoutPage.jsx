import React from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 text-center p-8">
      <h1 className="text-3xl font-bold text-green-600 mb-4">✅ ¡Compra realizada con éxito!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Gracias por tu compra. Pronto recibirás un correo de confirmación.
      </p>
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow-md transition"
      >
        Volver a la tienda
      </Link>
    </div>
  );
};

export default CheckoutPage;
