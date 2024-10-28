/* eslint-disable react/prop-types */
import "./style.css";
const ProductList = ({
  title = "shirt",
  description = "test des",
  price = "10000",
  textButton='add to cart',
  handelAddToCard,
}) => {
  return (
    <div className="wrapperProductList">
      <h2>{title}</h2>
      <h6>{description}</h6>
      <p>{price}</p>
      <button onClick={handelAddToCard}>{textButton}</button>
    </div>
  );
};

export default ProductList;
