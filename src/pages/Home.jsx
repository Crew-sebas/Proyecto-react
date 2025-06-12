import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Productos Destacados</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}
