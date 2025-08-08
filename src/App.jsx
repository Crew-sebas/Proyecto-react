import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import CreateProduct from "./pages/CreateProduct";

const initialProducts = [
  { id: 1, name: "Celular Samsung", category: "Electrónica", price: 120000, image: "/img/samsung.jpg" },
  { id: 2, name: "Zapatillas Nike", category: "Ropa", price: 80000, image: "/img/zapasnike.jpg" },
  { id: 3, name: "Notebook HP", category: "Electrónica", price: 350000, image: "/img/notebook.jpg" },
  { id: 4, name: "Remera Adidas", category: "Ropa", price: 25000, image: "/img/remeraadidas.jpg" },
  { id: 5, name: "Heladera LG", category: "Electrodomésticos", price: 400000, image: "/img/heladera.jpg" },
  { id: 6, name: "Licuadora", category: "Electrodomésticos", price: 35000, image: "/img/licuadora.jpg" },
  { id: 7, name: "Auriculares Bluetooth", category: "Electrónica", price: 10600, image: "/img/auri.jpg" },
  { id: 8, name: "Smartwatch Deportivo", category: "Electrónica", price: 15000, image: "/img/smartwatch.jpg" },
  { id: 9, name: "Teclado Mecánico RGB", category: "Electrónica", price: 27000, image: "/img/teclado.jpg" },
  { id: 10, name: "Cámara Web HD", category: "Electrónica", price: 33000, image: "/img/camara.jpg" },
  { id: 11, name: "Mouse Gamer", category: "Electrónica", price: 46000, image: "/img/mouse.jpg" },
  { id: 12, name: "Silla Gamer", category: "Electrónica", price: 180000, image: "/img/silla-gamer.jpg" },
  { id: 13, name: "Soporte para Notebook", category: "Electrónica", price: 12800, image: "/img/soporte-laptop.jpg" },
];



function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(() => {
    // Cargar productos desde localStorage o usar los iniciales
    // Si hay productos guardados, los parseamos, si no, usamos los iniciales
    const saved = localStorage.getItem("productos");
    return saved ? JSON.parse(saved) : initialProducts;
  });

  useEffect(() => {
    // Guardar productos en localStorage cada vez que cambian)
    localStorage.setItem("productos", JSON.stringify(products));
  }, [products]);


  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const addProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            products={products}
          />
        }
      />
      <Route 
        path="/carrito" 
        element={<CartPage 
        cart={cart} 
        setCart={setCart} />} 
        />
      <Route 
        path="/checkout" 
        element={<CheckoutPage />} 
        />
      <Route 
        path="*" 
        element={<NotFound />} 
        />
      <Route 
        path="/crear-producto" 
        element={<CreateProduct 
        addProduct={addProduct}/>} 
        />
      <Route 
        path="/producto/:id" 
        element={<ProductDetail 
        addToCart={addToCart} 
        cart={cart}  
        products={products}/>} 
        />
    </Routes>
    
  );
}

export default App;
