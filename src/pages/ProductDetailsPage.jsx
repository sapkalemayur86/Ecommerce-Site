import { useState } from "react";
import { useGetProductsFromId } from "../services/useProductServices";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductInCart } from "../store/cartSlice";

const ProductDetailsPage = () => {
  const dispatch =useDispatch();
  const { id } = useParams();
  const [product, loading] = useGetProductsFromId(id);
  const [quantity, setQuantity] = useState(1); // Initialize quantity state
  
  const handleAddtoCart = (product)=>{
    dispatch(addProductInCart({
      product:product,
      quantity:quantity
    }))

  }

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (loading) {
    return <p>Loading ....</p>;
  }

  return (
    <div className="product-detail-container">
      <img className="product-details-img" src={product.image} alt="" />
      <div className="details-section">
        <h3>{product.title}</h3>
        <h4>{product.description}</h4>

        <section className="price-quantity-section">
          <h2>{product.price}</h2>
          <div className="quantity-selector">
            <button onClick={handleDecrease}>-</button>
            <h1>{quantity}</h1>
            <button onClick={handleIncrease}>+</button>
          </div>
        </section>
        <button onClick={()=>handleAddtoCart(product)}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
