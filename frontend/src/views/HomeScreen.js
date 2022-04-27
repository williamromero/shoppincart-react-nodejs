import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
// import axios from 'axios'

const HomeScreen = (props) => {
  // const [products, setProducts] = useState([])
  
  // useEffect(() => {
    // const fetchProducts = async () => {
      //   const { data } = await axios.get(`/api/products`)
      //   setProducts(data);
      // }
      // fetchProducts()
      // }, [])
      
  const dispatch = useDispatch()
  const productList = useSelector( state => state.productList )
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])


  return (
    <div className="mc-products">
      <h1>NUESTROS PRODUCTOS</h1>
      
      <div className="mcp__container">
        { loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            products.map((prod, idx) => 
              <div className="mcp__container-item" key={idx}>
                <Product props={props} product={prod} key={idx} />
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default HomeScreen
