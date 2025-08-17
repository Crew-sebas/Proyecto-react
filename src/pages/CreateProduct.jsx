import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categorias } from "../constants/categorias";


const CreateProduct = ({addProduct}) => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevos = JSON.parse(localStorage.getItem("productos")) || [];
    const nuevoProducto = {
      ...form,
      id: Date.now(), // ID único
      price: Number(form.price),
      image: form.image.trim() || "https://placehold.co/150x150"
    };
    addProduct(nuevoProducto);

    navigate("/"); // Redirige al inicio después de crear el producto
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-white">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4 border border-purple-200">
        <h1 className="text-3xl font-bold text-purple-700 text-center">Crear Nuevo Producto</h1>

        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className="w-full p-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Selecciona una categoría</option>
          {categorias
          .filter(cat => cat !== "Todas")
          .map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={form.price}
          onChange={handleChange}
          required
          className="w-full p-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={form.image}
          onChange={handleChange}
          required
          className="w-full p-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition"
        >
          Crear Producto
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
