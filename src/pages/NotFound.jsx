import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="mb-4">La página que buscás no existe.</p>
      <Link to="/" className="text-blue-600 underline">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
