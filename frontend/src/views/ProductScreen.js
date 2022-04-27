import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
import Rating from '../components/Rating'
import { listProductDetails,  } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  // const [product, setProduct] = useState({})
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(`/api/products/${match.params.id}`)
  //     setProduct(data);
  //   }
  //   fetchProduct()
  // }, [match])
  const dispatch = useDispatch()
  const productList = useSelector( state => state.productDetails )
  const { loading, error, product } = productList
  
  useEffect(() => {
    dispatch(listProductDetails(match.params.slug))
  }, [dispatch, match])
  
  const addToCartHandler = () => {
    history.push(`/carrito/${match.params.slug}?qty=${qty}`)
  }
  
  return (
    <>
      { loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (    
        <div className="mc-product">
          <div className="mcp__banner">PRODUCTOS</div>
          <div className="mcp__box">
            <div className="mcp__figure">
              <div className="mcp__thumbnails">
                <img src={product.image} className="mcp__thumbnails_item" alt="variants"  />
                <img src={product.image} className="mcp__thumbnails_item" alt="variants" />
                <img src={product.image} className="mcp__thumbnails_item" alt="variants" />                            
              </div>
              <div className="mcp__picture">
                <img src={product.image} alt="product_image" />
              </div>
            </div>
            <div className="mcp__container">
              <h3 className="mcp_container-title">{product.name}</h3>
              <p className="mcp_container-price">{`Q. ${product.price}`}</p>
              <div className="mcp-container-rating">
                <Rating rating={product.rating} numReviews={product.numReviews} />
              </div>
              <div className="mcp_container_box">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <select value={qty} onChange={(e) => setQty(e.target.value)} >
                  {[...Array(product.countInStock).keys()].map(
                    (x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    )
                  )}
                </select>
                <button className={`${product.countInStock === 0 ? "mcp_add_btn disabled" : 'mcp_add_btn'}`} type="button" disabled={product.countInStock === 0} onClick={ addToCartHandler } >
                  <i className="fas fa-shopping-basket"></i>
                  Agregar al carrito
                </button>                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductScreen
