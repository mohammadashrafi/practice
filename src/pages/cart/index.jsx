// import ProductList from "../../components/productList";
// import { useStoreProducts } from "../../store";
import { useNavigate } from 'react-router-dom';
import './style.css'
import { useEffect } from 'react';
const Cart = () => {
  // const { removeFromCard } = useStoreProducts();
  const navigate =useNavigate()
  useEffect(() => {
    console.log(location.pathname);
    // Prevent going back to login page on popstate

      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function () {
        history.go(1);
      };
 

    // Clean up function
    return () => {
      window.onpopstate = null;
    };
  }, [location]);
  // const cart = useStoreProducts((state) => state.products);

  return (
    <div className="wrapperAllCart">
      <h1>cart</h1>
      <button onClick={()=>navigate('/') }>dashboard</button>
      {/* {cart.map((product) => (
        <ProductList
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          textButton="remove"
          handelAddToCard={() => removeFromCard(product.id)}
        />
      ))} */}
    </div>
  );
};

export default Cart;
