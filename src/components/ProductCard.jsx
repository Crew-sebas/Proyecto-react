export default function ProductCard({ product }) {
  return (
    <div className="border rounded-2xl shadow-md p-4 hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-blue-600 font-bold mt-2">{product.price}</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg">Comprar</button>
    </div>
  );
}
