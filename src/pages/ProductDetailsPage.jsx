import { useGetProductsFromId } from "../services/useProductServices";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, loading] = useGetProductsFromId(id);
  console.log(product);
  if (loading) {
    return <p>Loading ....</p>;
  }
  return (
    <div className="product-detail-container">
      <img
        className="product-details-img"
        src={product.image}
        alt=""
      />
      <div className="details-section">
        <h3>{product.title}</h3>
        <h4>
         {product.description}
        </h4>
        <h2>{product.price}</h2>
        <button>quantity</button>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
