export function useCreateProduct() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createProduct = async (product) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
      const nuevos = [...productosGuardados, product];
      localStorage.setItem("productos", JSON.stringify(nuevos));
      await new Promise((res) => setTimeout(res, 500));
      setSuccess(true);
    } catch (e) {
      setError("Error al crear el producto");
    } finally {
      setLoading(false);
    }
  };

  return { createProduct, loading, error, success };
}
