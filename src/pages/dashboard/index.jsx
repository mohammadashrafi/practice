// import Header from "../../components/header"
// import Product from "../../components/product"
import {useNavigate} from 'react-router-dom'
const Dashboard = () => {
  const navigate =useNavigate()
  return (
    <div>
      {/* <Header/> */}
      {/* <Product/> */}

      <h1>dashboard</h1>
      <button onClick={()=>navigate('/cart') }>cart</button>
    </div>
  )
}

export default Dashboard
