// import { mockData } from "../../mockApi/mock";
// import { useStoreProducts } from "../../store";
// import ProductList from "../productList";
import "./style.css";
const Product = () => {
  // const { addToCard } = useStoreProducts();

  return (
    <div className="wrapperAllProducts">
      {/* {mockData.map((product) => (
        <ProductList
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          handelAddToCard={() => {
          
           
              addToCard(product);
           
          }}
        />
      ))} */}
    </div>
  );
};

export default Product;
