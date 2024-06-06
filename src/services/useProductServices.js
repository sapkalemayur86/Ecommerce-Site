import { useState, useEffect } from "react";
import MyStoreApi from "../api/baseapi";

export function useGetAllProducts(limit = 40, sort = "asc") {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      setLoading(true);
      const products = await MyStoreApi.get(
        `/products?limit=${limit}&sort=${sort}`
      );
      setLoading(false);
      setProducts(products.data);
    }
    try {
      getAllProducts();
    } catch {
      setLoading(false);
    }
  }, [limit, sort]);

  return [products, loading];
}

export const useGetProductsFromId = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await MyStoreApi.get(`/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching product", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProduct();
    }, [id]); 
  
    return [product, loading];
  };
  
