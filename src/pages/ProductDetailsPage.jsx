const ProductDetailsPage = () => {
  return <div className="product-detail-container">
    <img className="product-details-img" src="https://picsum.photos/200/300.jpg" alt="" />
    <div className="details-section">
      <h3>Magic Mouse</h3>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam  voluptas commodi minima. Molestias, cum!</h4>
      <h2>300$</h2>
      <button>quantity</button>
      <button>add to cart</button>
    </div>
  </div>;
};

export default ProductDetailsPage;
