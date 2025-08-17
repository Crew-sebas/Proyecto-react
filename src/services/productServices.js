export async function fetchProducts() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
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
}

export async function fetchProductById(id) {
  const baseProducts = await fetchProducts();
  const nuevos = JSON.parse(localStorage.getItem("productos")) || [];

  const allProducts = [...baseProducts, ...nuevos];

  return allProducts.find(product => String(product.id) === String(id)) || null;
}
