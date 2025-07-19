import React, { useState, useMemo } from "react";
import ProductList from "../components/ProductList";
import CartIcon from "../components/CartIcon";
import { motion } from "framer-motion";
import fondo from "../assets/img/fond.jpg"; 

const allProducts = [
  { id: 1, name: "Celular Samsung", category: "Electrónica", price: 120000, image: "src/assets/img/samsung.jpg" },
  { id: 2, name: "Zapatillas Nike", category: "Ropa", price: 80000, image: "src/assets/img/zapasnike.jpg" },
  { id: 3, name: "Notebook HP", category: "Electrónica", price: 350000, image: "src/assets/img/notebook.jpg" },
  { id: 4, name: "Remera Adidas", category: "Ropa", price: 25000, image: "src/assets/img/remeraadidas.jpg" },
  { id: 5, name: "Heladera LG", category: "Electrodomésticos", price: 400000, image: "src/assets/img/heladera.jpg" },
  { id: 6, name: "Licuadora", category: "Electrodomésticos", price: 35000, image: "src/assets/img/licuadora.jpg" },
  { id: 7, name: "Auriculares Bluetooth", category: "Electrónica", price: 10600, image: "src/assets/img/auri.jpg" },
  { id: 8, name: "Smartwatch Deportivo", category: "Electrónica", price: 15000, image: "src/assets/img/smartwatch.jpg" },
  { id: 9, name: "Teclado Mecánico RGB", category: "Electrónica", price: 27000, image: "src/assets/img/teclado.jpg" },
  { id: 10, name: "Cámara Web HD", category: "Electrónica", price: 33000, image: "src/assets/img/camara.jpg" },
  { id: 11, name: "Mouse Gamer", category: "Electrónica", price: 46000, image: "src/assets/img/mouse.jpg" },
  { id: 12, name: "Silla Gamer", category: "Electrónica", price: 180000, image: "src/assets/img/silla-gamer.jpg" },
  { id: 13, name: "Soporte para Notebook", category: "Electrónica", price: 12800, image: "src/assets/img/soporte-laptop.jpg" },
];

const categories = ["Todas", "Electrónica", "Ropa", "Electrodomésticos"];

function Home({ cart, addToCart, removeFromCart }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [minPrice, setMinPrice] = useState(0);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchName = product.name.toLowerCase().includes(query.toLowerCase());
      const matchCategory = category === "Todas" || product.category === category;
      const matchPrice = product.price >= minPrice;
      return matchName && matchCategory && matchPrice;
    });
  }, [query, category, minPrice]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="backdrop-blur-sm bg-white/70 min-h-screen p-6">
        <motion.h1
          className="text-4xl font-extrabold mb-8 text-center text-purple-800 drop-shadow"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🛒 Bienvenido a Mi Tienda
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-10 bg-white p-6 rounded-2xl shadow-xl border border-purple-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Buscar productos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-300 focus:border-purple-500 p-3 rounded w-full transition"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 focus:border-purple-500 p-3 rounded w-full transition"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <div className="w-full">
            <label className="text-sm font-medium text-gray-600 mb-1 block">Precio mínimo: ${minPrice}</label>
            <input
              type="range"
              min="0"
              max="400000"
              step="10000"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full accent-purple-500"
            />
          </div>
        </motion.div>

        <ProductList
          products={filteredProducts}
          onAdd={addToCart}
          onRemove={removeFromCart}
          cart={cart}
        />

        <CartIcon count={cart.length} cart={cart} />
      </div>
    </div>
  );
}

export default Home;
