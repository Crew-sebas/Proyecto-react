import React, { useState } from "react";
import CartIcon from "../components/CartIcon";
import { motion } from "framer-motion";
import fondo from "../assets/img/fond.jpg";
import { FaSearch, FaFilter, FaMoneyBillWave, FaTshirt, FaHome, FaFutbol, FaGamepad, FaLaptop, } from "react-icons/fa";
import { Link } from "react-router-dom";
import { categorias } from "../constants/categorias";

const iconosCategorias = {
  Electrónica: <FaLaptop className="text-3xl text-purple-600 mb-2" />,
  Ropa: <FaTshirt className="text-3xl text-purple-600 mb-2" />,
  "Electrodomésticos": <FaHome className="text-3xl text-purple-600 mb-2" />,
  Juguetes: <FaGamepad className="text-3xl text-purple-600 mb-2" />,
  Hogar: <FaHome className="text-3xl text-purple-600 mb-2" />,
  Deportes: <FaFutbol className="text-3xl text-purple-600 mb-2" />,
};

function Home({ cart, addToCart, removeFromCart, products }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [minPrice, setMinPrice] = useState(0);

  const productosFiltrados = products.filter((product) => {
    const matchNombre = product.name.toLowerCase().includes(query.toLowerCase());
    const matchCategoria = category === "Todas" || product.category === category;
    const matchPrecio = product.price >= minPrice;
    return matchNombre && matchCategoria && matchPrecio;
  });

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${fondo})`, backgroundAttachment: "fixed" }}>
      <div className="backdrop-blur-md bg-white/60 min-h-screen p-0 md:p-8 flex flex-col items-center">
        <motion.h1 className="text-5xl font-black mb-10 mt-8 text-center text-purple-700 drop-shadow-lg tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          🛒 ICONIC MARKET
        </motion.h1>

        {/* Barra sticky de categorías */}
        <div className="w-full bg-white/90 sticky top-0 z-30 shadow-md border-b border-purple-100">
          <div className="max-w-5xl mx-auto flex overflow-x-auto gap-4 px-4 py-2 scrollbar-thin scrollbar-thumb-purple-200">
            {categorias.filter(cat => cat !== "Todas").map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`flex flex-col items-center px-3 py-1 rounded-lg transition 
                  ${category === cat ? "bg-purple-100 text-purple-700 font-bold" : "hover:bg-purple-50 text-gray-700"}`}
                style={{ minWidth: 80 }}
              >
                {iconosCategorias[cat] || <FaSearch className="text-xl mb-1" />}
                <span className="text-xs">{cat}</span>
              </button>
            ))}
            <button
              onClick={() => setCategory("Todas")}
              className={`flex flex-col items-center px-3 py-1 rounded-lg transition 
                ${category === "Todas" ? "bg-purple-100 text-purple-700 font-bold" : "hover:bg-purple-50 text-gray-700"}`}
              style={{ minWidth: 80 }}
            >
              <FaFilter className="text-xl mb-1" />
              <span className="text-xs">Todas</span>
            </button>
          </div>
        </div>

        {/* Banner promocional */}
        <div className="w-full max-w-5xl bg-gradient-to-r from-purple-500 to-pink-500 text-white py-8 px-6 rounded-2xl mb-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div>
            <h2 className="text-3xl font-bold mb-2">¡Rebajas de temporada!</h2>
            <p className="text-lg">Hasta 50% OFF en productos seleccionados</p>
          </div>
          <Link to="/" className="mt-4 md:mt-0 bg-white text-purple-700 font-bold px-6 py-2 rounded-lg shadow hover:bg-purple-100 transition">
            Ver Ofertas
          </Link>
        </div>

       

        {/* Beneficios destacados */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center bg-white/80 rounded-xl p-4 shadow">
            <FaMoneyBillWave className="text-3xl text-purple-600 mb-2" />
            <span className="font-bold">Pago seguro</span>
            <span className="text-sm text-gray-500 text-center">Tus datos protegidos</span>
          </div>
          <div className="flex flex-col items-center bg-white/80 rounded-xl p-4 shadow">
            <FaFilter className="text-3xl text-purple-600 mb-2" />
            <span className="font-bold">Devolución gratis</span>
            <span className="text-sm text-gray-500 text-center">Hasta 30 días</span>
          </div>
          <div className="flex flex-col items-center bg-white/80 rounded-xl p-4 shadow">
            <FaSearch className="text-3xl text-purple-600 mb-2" />
            <span className="font-bold">Envío rápido</span>
            <span className="text-sm text-gray-500 text-center">A todo el país</span>
          </div>
        </div>

        {/* Botón para crear producto */}
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-bold shadow transition mb-8"
        >
          <Link to="/crear-producto" className="flex items-center gap-2 text-base font-bold text-white">
            + Nuevo Producto
          </Link>
        </motion.button>

        {/* Filtros */}
        <div className="w-full max-w-5xl grid md:grid-cols-3 gap-6 mb-10 bg-white/40 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-purple-200">
          <div>
            <label className="font-bold flex gap-2 items-center text-gray-700 uppercase"><FaSearch /> Buscar Producto</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-purple-300 p-3 rounded-xl shadow"
              placeholder="Ej: Celular, Zapatillas..."
            />
          </div>
          <div>
            <label className="font-bold flex gap-2 items-center text-gray-700 uppercase"><FaFilter /> Categoría</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-purple-300 p-3 rounded-xl shadow"
            >
              {categorias.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-bold flex gap-2 items-center text-gray-700 uppercase">
              <FaMoneyBillWave /> Precio mínimo: <span className="ml-2 text-purple-800 font-mono">${minPrice.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min={0}
              max={400000}
              step={10000}
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full accent-purple-600"
            />
          </div>
        </div>

        {/* Productos */}
        <div className="w-full max-w-5xl grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((product) => (
              <div key={product.id} className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-5 flex flex-col items-center border border-purple-100">
                <Link to={`/producto/${product.id}`} className="w-full flex flex-col items-center group">
                  <img
                    src={product.image || "https://placehold.co/150x150"}
                    alt={product.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/150x150";
                    }}
                    className="w-32 h-32 object-cover rounded-xl mb-4"
                  />
                  <h2 className="text-xl font-bold text-purple-700 group-hover:underline text-center">{product.name}</h2>
                </Link>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-lg font-semibold text-purple-800 mb-3">${product.price.toLocaleString()}</p>
                <div className="flex gap-2">
                  <button onClick={() => addToCart(product)} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-bold">
                    Agregar
                  </button>
                  <button onClick={() => removeFromCart(product)} className="bg-gray-200 hover:bg-gray-300 text-purple-700 px-4 py-2 rounded-lg font-bold">
                    Quitar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500 text-xl mt-10">No se encontraron productos.</div>
          )}
        </div>

        <CartIcon count={cart.length} cart={cart} />
      </div>
    </div>
  );
}

export default Home;