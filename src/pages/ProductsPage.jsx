import { Link } from "react-router-dom";
import { useGetAllProducts } from "../services/useProductServices";

function truncateDescription(description, maxLength = 100) {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "...";
  }
  return description;
}

function ProductsPage() {
  const [products,loading]=useGetAllProducts();
  if(loading){
  return <p> Loading ...</p>
  }
  const listItems = products.map((product) => (
    <li key={product.id}>      
    <Link to={`/products/${product.id}`}>
    <div className="product-card">
        {
          <img
            className="product-img"
            src={product.image}
            alt={product.title}
          />
        }
        <h3 style={{ margin: "10px" }}>{product.title}</h3>
        <p style={{ color: "#656560", margin: "10px", fontSize: "14px" }}>
          {truncateDescription(product.description)}
        </p>
        <h3>{`${product.price} $`}</h3>
      </div>
    </Link>
    </li>
  ));
  return <ul className="product-list">{listItems}</ul>;
}
export default ProductsPage;
