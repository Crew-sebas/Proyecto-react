import React, { useState, useMemo } from "react";
import ProductList from "./components/ProductList";
import CartIcon from "./components/CartIcon";



const allProducts = [
  { id: 1, 
    name: "Celular Samsung",
     category: "Electrónica", 
     price: 120000,
     image: "src/assets/img/samsung.jpg"
    },
  { id: 2, 
    name: "Zapatillas Nike", 
    category: "Ropa", 
    price: 80000, 
    image: "src/assets/img/zapasnike.jpg"
  },
  { 
    id: 3, 
    name: "Notebook HP", 
    category: "Electrónica", 
    price: 350000,
    image:"src/assets/img/notebook.jpg"
  },
  { 
    id: 4, 
    name: "Remera Adidas", 
    category: "Ropa", 
    price: 25000,
    image:"src/assets/img/remeraadidas.jpg"
   },
  { 
    id: 5, 
    name: "Heladera LG", 
    category: "Electrodomésticos", 
    price: 400000, 
    image:"src/assets/img/heladera.jpg" 
  },
  { 
    id: 6, 
    name: "Licuadora",
     category: "Electrodomésticos", 
     price: 35000, 
     image: "src/assets/img/licuadora.jpg"},
  {
    id: 7,
    name: "Auriculares Bluetooth",
    category: "Electrónica",
    description: "Auriculares inalámbricos con cancelación de ruido.",
    price: 10600,
    image: "src/assets/img/auri.jpg"
  },
  {
    id: 8,
    name: "Smartwatch Deportivo",
    category: "Electrónica",
    description: "Monitor de ritmo cardíaco, pasos y notificaciones.",
    price: 15000,
    image: "src/assets/img/smartwatch.jpg"
  },
  {
    id: 9,
    name: "Teclado Mecánico RGB",
    category: "Electrónica",
    description: "Switches azules y retroiluminación personalizable.",
    price: 27000,
    image: "src/assets/img/teclado.jpg"
  },
  {
    id: 10,
    name: "Cámara Web HD",
    category: "Electrónica",
    description: "Resolución 1080p ideal para videollamadas.",
    price: 33000,
    image: "src/assets/img/camara.jpg"
  },
  {
    id: 11,
    name: "Mouse Gamer",
    category:"Electrónica",
    description: "Alta precisión y botones programables.",
    price: 46000,
    image: "src/assets/img/mouse.jpg"
  },
  {
    id: 12,
    name: "Silla Gamer",
    category: "Electrónica",
    description: "Diseño cómodo y soporte lumbar.",
    price: 180000,
    image: "src/assets/img/silla-gamer.jpg"
  },
  {
    id: 13,
    name: "Soporte para Notebook",
    category:"Electrónica",
    description: "Ajustable y compatible con varios tamaños.",
    price: 12800,
    image: "src/assets/img/soporte-laptop.jpg"
  },
];

const categories = ["Todas", "Electrónica", "Ropa", "Electrodomésticos"];

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [minPrice, setMinPrice] = useState(0);
  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchName = product.name.toLowerCase().includes(query.toLowerCase());
      const matchCategory = category === "Todas" || product.category === category;
      const matchPrice = product.price >= minPrice;
      return matchName && matchCategory && matchPrice;
    });
  }, [query, category, minPrice]);


  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div className="p-4 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-500">🛒 Mi Tienda</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6 bg-white p-4 rounded shadow">
        {}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full md:w-1/3"
      />

        {}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded w-full md:w-1/3"
      >
        {categories.map((cat) => (
      <option key={cat} value={cat}>{cat}</option>))}
      </select>

        {}
      <div className="w-full md:w-1/3">
      <label className="text-sm block">Precio mínimo: ${minPrice}</label>
      <input
        type="range"
        min="0"
        max="400000"
        step="10000"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
        className="w-full"
      />
        </div>
    </div>


      <ProductList
        products={filteredProducts}
        onAdd={addToCart}
        onRemove={removeFromCart}
        cart={cart}
      />

      <CartIcon count={cart.length} />
    </div>
  );
}

export default App;
