import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white font-bold text-xl">
      🛒 Mi Tienda 
      <Link to="/crear-producto" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Crear Producto
      </Link>
    </nav>
  );
}
